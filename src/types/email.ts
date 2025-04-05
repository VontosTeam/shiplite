export interface EmailMessage {
  to: string
  subject: string
  html: string
  from?: string
  replyTo?: string
  attachments?: Array<{
    filename: string
    content: string
  }>
} 