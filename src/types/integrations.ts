import { z } from 'zod'

// Common response type for all integrations
export interface IntegrationResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
    details?: unknown
  }
}

// Stripe types
export interface StripeConfig {
  apiKey: string
  webhookSecret: string
  currency: string
}

// Twilio types
export interface TwilioConfig {
  accountSid: string
  authToken: string
  fromNumber: string
  verifyServiceId: string
}

// Resend types
export interface ResendConfig {
  apiKey: string
  fromEmail: string
  replyTo?: string
}

// QuadX types
export interface QuadXConfig {
  apiKey: string
  merchantId: string
  environment: 'sandbox' | 'production'
}

// Integration status
export interface IntegrationStatus {
  name: string
  isInitialized: boolean
  isHealthy: boolean
  lastCheck: Date
  error?: string
}

// Integration events
export enum IntegrationEvent {
  INITIALIZED = 'INITIALIZED',
  ERROR = 'ERROR',
  HEALTH_CHECK = 'HEALTH_CHECK'
}

// Integration event payload
export interface IntegrationEventPayload {
  integration: string
  event: IntegrationEvent
  timestamp: Date
  data?: unknown
} 