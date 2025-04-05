import { z } from 'zod'
import { createRouteHandler } from '@/lib/api/route-handler'
import { prisma } from '@/lib/prisma'
import { requireAuth, getAuthUser, requireRole } from '@/lib/middleware/requireAuth'
import { rateLimit } from '@/lib/middleware/rateLimit'
import { resendService } from '@/lib/integrations/resend'
import { getBookingConfirmationTemplate } from '@/lib/email/templates'

// Booking creation schema
const createBookingSchema = z.object({
  origin: z.string().min(1, 'Origin is required'),
  destination: z.string().min(1, 'Destination is required'),
  weight: z.number().positive('Weight must be greater than 0'),
  method: z.enum(['Air', 'Sea', 'Land'], {
    errorMap: () => ({ message: 'Invalid shipping method' })
  }),
  items: z.array(z.object({
    description: z.string(),
    quantity: z.number().int().positive(),
    value: z.number().positive()
  })).min(1, 'At least one item is required')
})

type BookingData = z.infer<typeof createBookingSchema>

// GET /api/bookings - List user's bookings
export const GET = createRouteHandler({
  middleware: [
    requireAuth(),
    rateLimit({ max: 60 }) // More lenient for authenticated users
  ],
  handler: async (_, request) => {
    const user = getAuthUser(request)
    
    const bookings = await prisma.booking.findMany({
      where: {
        userId: user.id // Only show user's own bookings
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    })

    return Response.json({ data: bookings })
  }
})

// POST /api/bookings - Create a new booking
export const POST = createRouteHandler<BookingData>({
  middleware: [
    requireAuth(),
    rateLimit({ max: 30 })
  ],
  validation: createBookingSchema,
  handler: async (data, request) => {
    const user = getAuthUser(request)
    
    const booking = await prisma.booking.create({
      data: {
        ...data,
        status: 'Pending',
        userId: user.id
      },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    })

    // Send confirmation email
    if (booking.user?.email) {
      const emailTemplate = getBookingConfirmationTemplate({
        bookingId: booking.id,
        customerName: `${booking.user.firstName} ${booking.user.lastName}`,
        origin: booking.origin,
        destination: booking.destination,
        trackingNumber: booking.id
      })

      await resendService.sendEmail({
        to: booking.user.email,
        subject: emailTemplate.subject,
        html: emailTemplate.html,
        from: emailTemplate.from,
        replyTo: emailTemplate.replyTo
      })
    }

    return Response.json({ data: booking }, { status: 201 })
  }
})