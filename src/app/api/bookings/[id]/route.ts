import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { createRouteHandler } from '@/lib/api/route-handler'
import { successResponse, errorResponse } from '@/lib/api/response'
import type { Booking, ShipmentStatus } from '@/types/booking'

// Validation schema
const paramsSchema = z.object({
  id: z.string().min(1, 'Booking ID is required')
})

type ParamsSchema = z.infer<typeof paramsSchema>

// Handler implementation
export const GET = createRouteHandler<ParamsSchema, Booking>({
  validation: paramsSchema,
  handler: async (data) => {
    const booking = await prisma.booking.findUnique({
      where: { id: data.id },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true
          }
        },
        updates: true
      }
    })

    if (!booking) {
      return errorResponse('Booking not found', 404)
    }

    // Clean and format the response
    const response = {
      id: booking.id,
      origin: booking.origin,
      destination: booking.destination,
      weight: booking.weight,
      method: booking.method,
      status: booking.status,
      createdAt: booking.createdAt.toISOString(),
      user: booking.user,
      updates: booking.updates?.map((update: ShipmentStatus) => ({
        id: update.id,
        status: update.status,
        location: update.location,
        timestamp: update.timestamp.toISOString()
      }))
    }

    return successResponse(response)
  }
}) 