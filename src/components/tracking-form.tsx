"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function TrackingForm() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber) return

    setIsLoading(true)
    // Simulate tracking lookup
    setTimeout(() => {
      setIsLoading(false)
      // Here you would redirect to tracking page or show results
      window.location.href = `/tracking?number=${trackingNumber}`
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <Input
          type="text"
          placeholder="Enter your tracking number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          className="w-full"
        />
        <Button type="submit" className="w-full secondary-button" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Tracking...
            </span>
          ) : (
            <span className="flex items-center">
              <Search className="mr-2 h-4 w-4" />
              Track Shipment
            </span>
          )}
        </Button>
      </div>
      <p className="text-xs text-gray-500">
        Enter your ShipLite tracking number to get real-time updates on your shipment.
      </p>
    </form>
  )
}

