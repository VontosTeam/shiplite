import { z } from 'zod'

export const SMSMessageSchema = z.object({
  to: z.string(),
  body: z.string(),
  from: z.string().optional()
})

export type SMSMessage = z.infer<typeof SMSMessageSchema>

class TwilioService {
  private static instance: TwilioService
  private initialized = false

  private constructor() {}

  static getInstance(): TwilioService {
    if (!TwilioService.instance) {
      TwilioService.instance = new TwilioService()
    }
    return TwilioService.instance
  }

  async init() {
    if (this.initialized) return

    // TODO: Initialize Twilio client
    // const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)
    this.initialized = true
  }

  async sendSMS(message: SMSMessage) {
    // TODO: Implement SMS sending
    throw new Error('Not implemented')
  }

  async sendOTP(phoneNumber: string) {
    // TODO: Implement OTP sending
    throw new Error('Not implemented')
  }

  async verifyOTP(phoneNumber: string, code: string) {
    // TODO: Implement OTP verification
    throw new Error('Not implemented')
  }
}

export const twilioService = TwilioService.getInstance() 