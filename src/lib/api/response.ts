import { NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { Prisma } from '@prisma/client'

export type ApiResponse<T> = {
  data?: T
  error?: {
    message: string
    code?: string
    details?: unknown
  }
}

export function successResponse<T>(data: T, status: number = 200) {
  return NextResponse.json<ApiResponse<T>>(
    { data },
    { status }
  )
}

export function errorResponse(
  message: string,
  status: number = 400,
  details?: unknown
) {
  return NextResponse.json<ApiResponse<never>>(
    {
      error: {
        message,
        details
      }
    },
    { status }
  )
}

export function handleApiError(error: unknown) {
  console.error('API Error:', error)

  // Handle Zod validation errors
  if (error instanceof ZodError) {
    return errorResponse('Validation error', 400, error.errors)
  }

  // Handle Prisma errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        return errorResponse('Unique constraint violation', 409)
      case 'P2025':
        return errorResponse('Record not found', 404)
      default:
        return errorResponse('Database error', 500)
    }
  }

  if (error instanceof Error) {
    return errorResponse(error.message)
  }

  return errorResponse('An unexpected error occurred', 500)
} 