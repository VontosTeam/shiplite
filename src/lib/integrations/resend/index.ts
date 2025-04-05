import { z } from 'zod'

export const EmailMessageSchema = z.object({
  to: z.string().email(),
  subject: z.string(),
  html: z.string(),
  from: z.string().optional(),
  replyTo: z.string().email().optional(),
  attachments: z.array(z.object({
    filename: z.string(),
    content: z.string()
  })).optional()
})

export type EmailMessage = z.infer<typeof EmailMessageSchema>

class ResendService {
  private static instance: ResendService
  private initialized = false

  private constructor() {}

  static getInstance(): ResendService {
    if (!ResendService.instance) {
      ResendService.instance = new ResendService()
    }
    return ResendService.instance
  }

  async init() {
    if (this.initialized) return

    // TODO: Initialize Resend client
    // const resend = new Resend(process.env.RESEND_API_KEY)
    this.initialized = true
  }

  async sendEmail(message: EmailMessage) {
    // TODO: Implement email sending
    throw new Error('Not implemented')
  }

  async sendTemplate(templateId: string, data: Record<string, unknown>, to: string) {
    // TODO: Implement template-based email sending
    throw new Error('Not implemented')
  }

  async getEmailStatus(emailId: string) {
    // TODO: Implement email status checking
    throw new Error('Not implemented')
  }
}

export const resendService = ResendService.getInstance() 