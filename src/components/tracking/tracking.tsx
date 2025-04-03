"use client"

import type React from "react"

import { useState } from "react"
import { Search, AlertCircle } from "lucide-react"
import { TrackingTimeline } from "./tracking-timeline"
import { NotificationToggles } from "./notification-toggles"
import { EstimatedDelivery } from "./estimated-delivery"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isTracking, setIsTracking] = useState(false)
  const [error, setError] = useState("")
  const [shipmentData, setShipmentData] = useState<ShipmentData | null>(null)

  // Mock shipment data for demonstration
  const mockShipmentData: ShipmentData = {
    trackingNumber: "SL123456789",
    status: "in-transit",
    estimatedDelivery: "2025-03-25T14:30:00",
    currentLocation: "Manila, Philippines",
    timeline: [
      {
        id: 1,
        status: "Picked up from sender",
        location: "Sydney, Australia",
        timestamp: "2025-03-18T09:15:00",
        completed: true,
      },
      {
        id: 2,
        status: "In transit to ShipLite depot",
        location: "Sydney, Australia",
        timestamp: "2025-03-19T11:30:00",
        completed: true,
      },
      {
        id: 3,
        status: "Flight to Philippines",
        location: "Sydney International Airport",
        timestamp: "2025-03-20T23:45:00",
        completed: true,
      },
      {
        id: 4,
        status: "Clearing Philippine Customs",
        location: "Manila, Philippines",
        timestamp: "2025-03-22T08:20:00",
        completed: true,
      },
      {
        id: 5,
        status: "Out for delivery",
        location: "Manila, Philippines",
        timestamp: "2025-03-23T10:15:00",
        completed: true,
      },
      {
        id: 6,
        status: "Delivered",
        location: "Manila, Philippines",
        timestamp: "",
        completed: false,
      },
    ],
  }

  const handleTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number")
      return
    }

    // Validate tracking number format (example: SL followed by 9 digits)
    const trackingRegex = /^SL\d{9}$/
    if (!trackingRegex.test(trackingNumber)) {
      setError("Invalid tracking number format. Example: SL123456789")
      return
    }

    setIsTracking(true)

    // Simulate API call with setTimeout
    setTimeout(() => {
      if (trackingNumber === "SL123456789") {
        setShipmentData(mockShipmentData)
      } else {
        setError("Tracking number not found. Please check and try again.")
      }
      setIsTracking(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold font-montserrat text-primary mb-2">
            Track Your Shipment in Real-Time
          </h1>
          <p className="text-gray-600 font-poppins">
            Enter your tracking number to get the latest updates on your shipment
          </p>
        </div>

        <Card className="mb-8 border-primary/10">
          <CardContent className="pt-6">
            <form onSubmit={handleTrackingSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Ex: SL123456789"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
                  className="pl-10 h-12 font-poppins border-primary/20 focus:border-primary"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              {error && (
                <Alert variant="destructive" className="mt-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-[#00843D] hover:bg-[#00843D]/90 text-white font-montserrat"
                disabled={isTracking}
              >
                {isTracking ? "Tracking..." : "Track Now"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {shipmentData && (
          <div className="space-y-8 animate-fadeIn">
            <EstimatedDelivery estimatedDelivery={shipmentData.estimatedDelivery} />
            <NotificationToggles />
            <TrackingTimeline timeline={shipmentData.timeline} />
          </div>
        )}
      </div>
    </div>
  )
}

// Types
export interface ShipmentData {
  trackingNumber: string
  status: "pending" | "in-transit" | "delivered" | "exception"
  estimatedDelivery: string
  currentLocation: string
  timeline: TimelineEvent[]
}

export interface TimelineEvent {
  id: number
  status: string
  location: string
  timestamp: string
  completed: boolean
}

