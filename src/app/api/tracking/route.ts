import { z } from 'zod'
import { createRouteHandler } from '@/lib/api/route-handler'
import { prisma } from '@/lib/prisma'
import { quadxService } from '@/lib/integrations/quadx'
import { rateLimit } from '@/lib/middleware/rateLimit'

const trackingSchema = z.object({
  trackingNumber: z.string().min(1, 'Tracking number is required')
})

// GET /api/tracking/:trackingNumber
export const GET = createRouteHandler({
  middleware: [
    rateLimit({ max: 30, windowMs: 60 * 1000 }) // 30 requests per minute for tracking
  ],
  validation: trackingSchema,
  handler: async ({ trackingNumber }) => {
    // Get tracking info from database
    const shipment = await prisma.booking.findUnique({
      where: { id: trackingNumber },
      include: {
        trackingEvents: {
          orderBy: { timestamp: 'desc' }
        }
      }
    })

    if (!shipment) {
      return Response.json({ error: 'Shipment not found' }, { status: 404 })
    }

    // Get real-time tracking from QuadX
    const quadxStatus = await quadxService.getShipmentStatus(trackingNumber)

    return Response.json({
      data: {
        shipment,
        currentStatus: quadxStatus
      }
    })
  }
}) 