import { NextRequest, NextResponse } from 'next/server'
import { createRouteHandler } from '../api/route-handler'

interface RateLimitOptions {
  windowMs?: number // Time window in milliseconds
  max?: number // Max requests per window
  message?: string // Error message
}

// In-memory store for rate limiting
// TODO: Replace with Redis in production
class RateLimitStore {
  private store = new Map<string, { count: number; resetTime: number }>()

  constructor(private windowMs: number) {
    // Cleanup expired entries every minute
    setInterval(() => this.cleanup(), 60000)
  }

  private cleanup() {
    const now = Date.now()
    for (const [key, value] of this.store.entries()) {
      if (value.resetTime <= now) {
        this.store.delete(key)
      }
    }
  }

  increment(key: string): { count: number; resetTime: number } {
    const now = Date.now()
    const record = this.store.get(key)

    if (!record || record.resetTime <= now) {
      const newRecord = {
        count: 1,
        resetTime: now + this.windowMs
      }
      this.store.set(key, newRecord)
      return newRecord
    }

    record.count++
    return record
  }
}

const defaultOptions: Required<RateLimitOptions> = {
  windowMs: 60 * 1000, // 1 minute
  max: 30, // 30 requests per minute
  message: 'Too many requests, please try again later'
}

// Create a singleton store instance
const store = new RateLimitStore(defaultOptions.windowMs)

/**
 * Rate limiting middleware
 * Uses IP-based limiting by default, with in-memory storage
 * TODO: Add Redis support for production
 */
export function rateLimit(options: RateLimitOptions = {}) {
  const opts = { ...defaultOptions, ...options }

  return createRouteHandler({
    handler: async (data, req) => {
      const key = req.ip || req.headers.get('x-forwarded-for') || 'unknown'
      const result = store.increment(key)

      if (result.count > opts.max) {
        const timeRemaining = Math.ceil((result.resetTime - Date.now()) / 1000)
        return NextResponse.json(
          {
            error: opts.message,
            timeRemaining: `${timeRemaining} seconds`
          },
          {
            status: 429,
            headers: {
              'Retry-After': timeRemaining.toString(),
              'X-RateLimit-Limit': opts.max.toString(),
              'X-RateLimit-Remaining': '0',
              'X-RateLimit-Reset': result.resetTime.toString()
            }
          }
        )
      }

      // Add rate limit headers
      const headers = new Headers()
      headers.set('X-RateLimit-Limit', opts.max.toString())
      headers.set('X-RateLimit-Remaining', (opts.max - result.count).toString())
      headers.set('X-RateLimit-Reset', result.resetTime.toString())

      return null // Continue to next handler
    }
  })
} 