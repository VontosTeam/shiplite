"use client"

import { CheckCircle, Clock, Truck, Package, AlertCircle, MapPin } from "lucide-react"

// This would be replaced with actual data fetching in a real implementation
const mockTrackingEvents = [
  {
    id: 1,
    status: "Delivered",
    location: "Manila, Philippines",
    timestamp: "March 20, 2025, 2:30 PM",
    description: "Package delivered to recipient",
    completed: false,
  },
  {
    id: 2,
    status: "Out for Delivery",
    location: "Manila, Philippines",
    timestamp: "March 20, 2025, 9:15 AM",
    description: "Package is out for delivery",
    completed: false,
  },
  {
    id: 3,
    status: "Arrived at Delivery Team",
    location: "Manila, Philippines",
    timestamp: "March 19, 2025, 6:45 PM",
    description: "Package has arrived at the delivery team in Manila",
    completed: false,
  },
  {
    id: 4,
    status: "Arrived at Distribution Depot",
    location: "Manila, Philippines",
    timestamp: "March 19, 2025, 10:30 AM",
    description: "Package has arrived at the distribution depot in Manila",
    completed: false,
  },
  {
    id: 5,
    status: "Arrived at PH Customs",
    location: "Manila, Philippines",
    timestamp: "March 18, 2025, 3:20 PM",
    description: "Package has cleared customs",
    completed: false,
  },
  {
    id: 6,
    status: "In Transit",
    location: "Singapore Hub",
    timestamp: "March 17, 2025, 8:45 AM",
    description: "Package is in transit to the Philippines",
    completed: true,
  },
  {
    id: 7,
    status: "Departed Origin",
    location: "Sydney, Australia",
    timestamp: "March 16, 2025, 6:30 PM",
    description: "Package has departed from origin",
    completed: true,
  },
  {
    id: 8,
    status: "Processing at Origin",
    location: "Sydney, Australia",
    timestamp: "March 16, 2025, 11:15 AM",
    description: "Package is being processed at origin facility",
    completed: true,
  },
  {
    id: 9,
    status: "Shipment Created",
    location: "Sydney, Australia",
    timestamp: "March 15, 2025, 2:45 PM",
    description: "Shipping label created",
    completed: true,
  },
]

export default function TrackingTimeline() {
  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="w-6 h-6 text-green-500" />
    }

    switch (status) {
      case "Delivered":
        return <CheckCircle className="w-6 h-6 text-gray-400" />
      case "Out for Delivery":
        return <Truck className="w-6 h-6 text-gray-400" />
      case "In Transit":
        return <Truck className="w-6 h-6 text-gray-400" />
      case "Processing at Origin":
        return <Package className="w-6 h-6 text-gray-400" />
      case "Shipment Created":
        return <Clock className="w-6 h-6 text-gray-400" />
      case "Failed Delivery":
        return <AlertCircle className="w-6 h-6 text-gray-400" />
      default:
        return <MapPin className="w-6 h-6 text-gray-400" />
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Shipment Timeline</h2>

      <div className="relative">
        {mockTrackingEvents.map((event, index) => (
          <div key={event.id} className="mb-8 flex">
            <div className="flex flex-col items-center mr-4">
              <div>{getStatusIcon(event.status, event.completed)}</div>
              {index < mockTrackingEvents.length - 1 && (
                <div className={`w-0.5 h-full ${event.completed ? "bg-green-500" : "bg-gray-300"}`} />
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                <h3 className="font-medium text-lg">{event.status}</h3>
                <time className="text-sm text-gray-500">{event.timestamp}</time>
              </div>
              <p className="text-gray-600 mb-1">{event.description}</p>
              <p className="text-sm text-gray-500">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

