import { z } from 'zod'

export const PaymentIntentSchema = z.object({
  amount: z.number().positive(),
  currency: z.string().default('AUD'),
  description: z.string().optional(),
  metadata: z.record(z.string()).optional()
})

export type PaymentIntent = z.infer<typeof PaymentIntentSchema>

class StripeService {
  private static instance: StripeService
  private initialized = false

  private constructor() {}

  static getInstance(): StripeService {
    if (!StripeService.instance) {
      StripeService.instance = new StripeService()
    }
    return StripeService.instance
  }

  async init() {
    if (this.initialized) return

    // TODO: Initialize Stripe with API key
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    this.initialized = true
  }

  async createPaymentIntent(data: PaymentIntent) {
    // TODO: Implement payment intent creation
    throw new Error('Not implemented')
  }

  async confirmPayment(paymentIntentId: string) {
    // TODO: Implement payment confirmation
    throw new Error('Not implemented')
  }

  async refundPayment(paymentIntentId: string, amount?: number) {
    // TODO: Implement refund logic
    throw new Error('Not implemented')
  }
}

export const stripeService = StripeService.getInstance() 