interface ErrorResponse {
  error: string
  code?: string
  details?: unknown
}

export function errorResponse(
  message: string,
  statusCode: number = 400,
  details?: unknown
): Response {
  const error: ErrorResponse = {
    error: message,
    details: details || undefined
  }

  return new Response(JSON.stringify(error), {
    status: statusCode,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number = 400,
    public details?: unknown
  ) {
    super(message)
    this.name = 'APIError'
  }
}

export function handleAPIError(error: unknown): Response {
  console.error(error)

  if (error instanceof APIError) {
    return errorResponse(error.message, error.statusCode, error.details)
  }

  if (error instanceof Error) {
    return errorResponse(error.message)
  }

  return errorResponse('An unexpected error occurred', 500)
} 