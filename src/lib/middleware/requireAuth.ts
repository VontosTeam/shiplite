import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { Middleware } from '../api/route-handler'

export interface AuthenticatedRequest extends NextRequest {
  user: {
    id: string
    email: string
    role: string
  }
}

/**
 * Middleware to require authentication for API routes
 * Supports both NextAuth session and API key authentication
 */
export function requireAuth<T>(): Middleware<T> {
  return async (data: T, req: NextRequest) => {
    // Try NextAuth session first
    const token = await getToken({ req })
    if (token?.sub) {
      ;(req as AuthenticatedRequest).user = {
        id: token.sub,
        email: token.email as string,
        role: token.role as string
      }
      return null // Continue to next handler
    }

    // Fallback to API key auth
    const apiKey = req.headers.get('x-api-key')
    if (apiKey && apiKey === process.env.API_KEY) {
      // For API key auth, we'll need to fetch the associated service account
      // TODO: Implement service account lookup
      ;(req as AuthenticatedRequest).user = {
        id: 'service-account',
        email: 'service@shiplite.com',
        role: 'SERVICE'
      }
      return null // Continue to next handler
    }

    // No valid auth found
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }
}

/**
 * Helper to extract the authenticated user from the request
 * Throws if request is not authenticated
 */
export function getAuthUser(req: NextRequest): AuthenticatedRequest['user'] {
  const authReq = req as AuthenticatedRequest
  if (!authReq.user) {
    throw new Error('Request is not authenticated')
  }
  return authReq.user
}

/**
 * Role-based authorization middleware
 */
export function requireRole<T>(roles: string[]): Middleware<T> {
  return async (data: T, req: NextRequest) => {
    const user = getAuthUser(req)
    if (!roles.includes(user.role)) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      )
    }
    return null // Continue to next handler
  }
} 