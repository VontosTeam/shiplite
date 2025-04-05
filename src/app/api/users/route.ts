import { z } from 'zod'
import { createRouteHandler } from '@/lib/api/route-handler'
import { prisma } from '@/lib/prisma'
import { requireAuth, getAuthUser } from '@/lib/middleware/requireAuth'
import { rateLimit } from '@/lib/middleware/rateLimit'
import { twilioService } from '@/lib/integrations/twilio'

const createUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z.string().min(1, 'Phone number is required'),
  role: z.enum(['USER', 'ADMIN', 'SUPPORT']).default('USER')
})

// GET /api/users
export const GET = createRouteHandler({
  middleware: [
    requireAuth(),
    rateLimit({ max: 60 }) // More lenient for authenticated users
  ],
  handler: async (_, request) => {
    const user = getAuthUser(request)
    
    // Only ADMIN users can list all users
    if (user.role !== 'ADMIN') {
      return Response.json({ error: 'Forbidden' }, { status: 403 })
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        createdAt: true
      }
    })

    return Response.json({ data: users })
  }
})

// POST /api/users
export const POST = createRouteHandler({
  middleware: [
    rateLimit({ max: 10, windowMs: 60 * 1000 }) // Strict limit for user creation
  ],
  validation: createUserSchema,
  handler: async (data) => {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email }
    })

    if (existingUser) {
      return Response.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }

    // Create user
    const user = await prisma.user.create({
      data: {
        ...data,
        verificationToken: Math.random().toString(36).substring(2, 15)
      }
    })

    // Send verification SMS
    await twilioService.sendOTP(data.phone)

    return Response.json({ data: user }, { status: 201 })
  }
}) 