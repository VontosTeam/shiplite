import { z } from "zod"
import type { BookingMethod } from "@/types/booking"

export const bookingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number must be at least 5 characters"),
  origin: z.string().min(1, "Origin is required"),
  destination: z.string().min(1, "Destination is required"),
  weight: z.number().positive("Weight must be a positive number"),
  method: z.enum(["Air", "Sea", "Land"] as const, {
    required_error: "Shipping method is required",
    invalid_type_error: "Invalid shipping method"
  })
})

export type BookingFormData = z.infer<typeof bookingSchema> 