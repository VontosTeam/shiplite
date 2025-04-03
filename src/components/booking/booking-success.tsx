"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Home, FileText } from "lucide-react"
import Link from "next/link"

interface BookingSuccessProps {
  bookingReference: string
  onReset: () => void
}

export function BookingSuccess({ bookingReference, onReset }: BookingSuccessProps) {
  return (
    <div className="space-y-6 py-8">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="rounded-full bg-green-100 p-3 mb-4">
          <CheckCircle2 className="h-12 w-12 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 font-montserrat mb-2">Booking Successful!</h2>
        <p className="text-gray-600 max-w-md font-poppins">
          Your shipment has been booked successfully. We've sent a confirmation email with all the details.
        </p>
      </div>

      <Card className="border-green-100">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Booking Reference:</span>
              <span className="font-bold text-primary">{bookingReference}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Status:</span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Confirmed</span>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Please keep your booking reference for tracking and customer support purposes.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link href="/" className="w-full sm:w-auto">
          <Button variant="outline" className="w-full" onClick={onReset}>
            <Home className="mr-2 h-4 w-4" />
            Return to Home
          </Button>
        </Link>
        <Button className="w-full sm:w-auto">
          <FileText className="mr-2 h-4 w-4" />
          View Booking Details
        </Button>
      </div>
    </div>
  )
}

