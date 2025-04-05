import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

export type Middleware<T = any> = (
  data: T,
  request: NextRequest & { __validated?: boolean }
) => Promise<Response | null>

export interface RouteHandlerConfig<T = any> {
  validation?: z.ZodSchema<T>
  middleware?: Middleware[]
  handler: (validatedData: T, request: NextRequest) => Promise<Response>
}

/**
 * Creates a route handler with validation and middleware support
 */
export function createRouteHandler<T = any>(config: RouteHandlerConfig<T>) {
  return async (request: NextRequest): Promise<Response> => {
    try {
      // Parse request data
      let data: unknown
      if (request.method === 'GET') {
        const url = new URL(request.url)
        data = Object.fromEntries(url.searchParams.entries())
      } else {
        data = await request.json().catch(() => ({}))
      }

      // Validate data if schema provided
      let validatedData = data as T
      if (config.validation) {
        validatedData = config.validation.parse(data)
        ;(request as any).__validated = true
      }

      // Run middleware chain
      if (config.middleware) {
        for (const middleware of config.middleware) {
          const result = await middleware(validatedData, request)
          if (result) return result
        }
      }

      // Run main handler
      return await config.handler(validatedData, request)
    } catch (error) {
      console.error('Route handler error:', error)

      if (error instanceof z.ZodError) {
        return NextResponse.json(
          { error: 'Validation error', details: error.errors },
          { status: 400 }
        )
      }

      if (error instanceof Error) {
        return NextResponse.json(
          { error: error.message },
          { status: 500 }
        )
      }

      return NextResponse.json(
        { error: 'Internal server error' },
        { status: 500 }
      )
    }
  }
}

// Helper to extract dynamic route parameters
function extractRouteParams(request: NextRequest): Record<string, string> {
  const matches = request.url.match(/\/api\/[^\/]+\/([^\/\?]+)/)
  if (!matches) return {}
  
  return {
    id: matches[1]
  }
} 