"use client"

import { useSearchParams } from "next/navigation"
import { Package, Calendar, MapPin, Clock } from "lucide-react"

// This would be replaced with actual data fetching in a real implementation
const mockShipmentData = {
  trackingNumber: "SL1234567890AU",
  origin: "Sydney, Australia",
  destination: "Manila, Philippines",
  estimatedDelivery: "March 20, 2025",
  currentStatus: "In Transit",
  currentLocation: "Singapore Hub",
  lastUpdated: "March 16, 2025, 10:45 AM",
  service: "Air Cargo",
  weight: "5.2 kg",
  dimensions: "30 × 25 × 15 cm",
}

export default function TrackingInfo() {
  const searchParams = useSearchParams()
  const trackingNumber = searchParams.get("tracking") || mockShipmentData.trackingNumber

  // In a real implementation, you would fetch the shipment data based on the tracking number
  const shipmentData = mockShipmentData

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Shipment Details</h2>
          <p className="text-gray-500">Tracking Number: {trackingNumber}</p>
        </div>
        <div className="mt-2 md:mt-0">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              shipmentData.currentStatus === "Delivered"
                ? "bg-green-100 text-green-800"
                : shipmentData.currentStatus === "In Transit"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {shipmentData.currentStatus}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-[#0033A0] mt-1 mr-3" />
            <div>
              <h3 className="font-medium">Origin</h3>
              <p>{shipmentData.origin}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-[#0033A0] mt-1 mr-3" />
            <div>
              <h3 className="font-medium">Destination</h3>
              <p>{shipmentData.destination}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-start">
            <Calendar className="w-5 h-5 text-[#0033A0] mt-1 mr-3" />
            <div>
              <h3 className="font-medium">Estimated Delivery</h3>
              <p>{shipmentData.estimatedDelivery}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-start">
            <Clock className="w-5 h-5 text-[#0033A0] mt-1 mr-3" />
            <div>
              <h3 className="font-medium">Last Updated</h3>
              <p>{shipmentData.lastUpdated}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-start">
            <Package className="w-5 h-5 text-[#0033A0] mt-1 mr-3" />
            <div>
              <h3 className="font-medium">Service Type</h3>
              <p>{shipmentData.service}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex items-start">
            <Package className="w-5 h-5 text-[#0033A0] mt-1 mr-3" />
            <div>
              <h3 className="font-medium">Package Details</h3>
              <p>Weight: {shipmentData.weight}</p>
              <p>Dimensions: {shipmentData.dimensions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

