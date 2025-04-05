import { EmailMessage } from '@/types/email'

interface BookingConfirmationData {
  bookingId: string
  customerName: string
  origin: string
  destination: string
  trackingNumber: string
}

export function getBookingConfirmationTemplate(data: BookingConfirmationData): Omit<EmailMessage, 'to'> {
  return {
    subject: `Booking Confirmation #${data.bookingId}`,
    html: `
      <h1>Booking Confirmation</h1>
      <p>Dear ${data.customerName},</p>
      <p>Your shipment has been booked successfully!</p>
      
      <h2>Booking Details</h2>
      <ul>
        <li>Booking ID: ${data.bookingId}</li>
        <li>From: ${data.origin}</li>
        <li>To: ${data.destination}</li>
        <li>Tracking Number: ${data.trackingNumber}</li>
      </ul>
      
      <p>You can track your shipment at any time using your tracking number.</p>
      <p>Thank you for choosing ShipLite!</p>
    `,
    from: process.env.RESEND_FROM_EMAIL!,
    replyTo: process.env.RESEND_REPLY_TO
  }
}

export function getOTPEmailTemplate(data: {
  otp: string
  expiresIn: string
}): Partial<EmailMessage> {
  return {
    subject: 'Your ShipLite Verification Code',
    html: `
      <h1>Verification Code</h1>
      <p>Your verification code is: <strong>${data.otp}</strong></p>
      <p>This code will expire in ${data.expiresIn}.</p>
    `
  }
}

export function getShipmentUpdateTemplate(data: {
  bookingId: string
  customerName: string
  status: string
  location: string
  timestamp: string
}): Partial<EmailMessage> {
  return {
    subject: `Shipment Update - ${data.bookingId}`,
    html: `
      <h1>Shipment Status Update</h1>
      <p>Dear ${data.customerName},</p>
      <p>Your shipment has been updated:</p>
      <ul>
        <li>Status: ${data.status}</li>
        <li>Location: ${data.location}</li>
        <li>Time: ${data.timestamp}</li>
      </ul>
    `
  }
} 