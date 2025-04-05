export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
  bookings?: Booking[]
  createdAt: Date
}

export interface Booking {
  id: string
  user?: User | null
  userId?: string | null
  origin: string
  destination: string
  weight: number
  method: string
  status: string
  createdAt: Date
  updates?: ShipmentStatus[]
}

export interface ShipmentStatus {
  id: string
  booking: Booking
  bookingId: string
  status: string
  location: string
  timestamp: Date
}

export type BookingMethod = "Air" | "Sea" | "Land"
export type BookingStatus = "Pending" | "Confirmed" | "In Transit" | "Delivered" | "Cancelled" 