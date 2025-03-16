"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

export default function TrackingForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [trackingNumber, setTrackingNumber] = useState(searchParams.get("tracking") || "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingNumber.trim()) {
      router.push(`/tracking?tracking=${encodeURIComponent(trackingNumber.trim())}`)
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Track Your Shipment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="tracking-number" className="sr-only">
            Enter your tracking number
          </label>
          <input
            id="tracking-number"
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter your ShipLite tracking number"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0033A0]"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-[#00843D] text-white rounded-md hover:bg-green-700 transition-colors flex items-center justify-center"
        >
          <Search className="w-5 h-5 mr-2" />
          Track Shipment
        </button>
      </form>
      <p className="mt-3 text-sm text-gray-500">
        Enter your ShipLite tracking number to get real-time updates on your shipment status.
      </p>
    </div>
  )
}

