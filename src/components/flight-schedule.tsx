"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Plane, Calendar } from "lucide-react"

// Sample flight schedule data
const flightSchedules = [
  {
    id: 1,
    date: "March 15, 2025",
    cutoffDate: "March 13, 2025",
    cutoffTime: "12:00 PM",
    status: "open", // open, near, closed
    flightNumber: "SL1234",
  },
  {
    id: 2,
    date: "March 18, 2025",
    cutoffDate: "March 16, 2025",
    cutoffTime: "12:00 PM",
    status: "near", // open, near, closed
    flightNumber: "SL1235",
  },
  {
    id: 3,
    date: "March 22, 2025",
    cutoffDate: "March 20, 2025",
    cutoffTime: "12:00 PM",
    status: "open", // open, near, closed
    flightNumber: "SL1236",
  },
  {
    id: 4,
    date: "March 25, 2025",
    cutoffDate: "March 23, 2025",
    cutoffTime: "12:00 PM",
    status: "open", // open, near, closed
    flightNumber: "SL1237",
  },
  {
    id: 5,
    date: "March 29, 2025",
    cutoffDate: "March 27, 2025",
    cutoffTime: "12:00 PM",
    status: "open", // open, near, closed
    flightNumber: "SL1238",
  },
  {
    id: 6,
    date: "April 2, 2025",
    cutoffDate: "March 31, 2025",
    cutoffTime: "12:00 PM",
    status: "open", // open, near, closed
    flightNumber: "SL1239",
  },
]

export default function FlightSchedule() {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(flightSchedules.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentFlights = flightSchedules.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-australian-green/20 text-australian-green"
      case "near":
        return "bg-australian-gold/20 text-australian-gold/90"
      case "closed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "open":
        return "Open for Booking"
      case "near":
        return "Near Cut-off"
      case "closed":
        return "Closed for Booking"
      default:
        return "Unknown Status"
    }
  }

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevPage}
          disabled={currentPage === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-10">
          {currentFlights.map((flight) => (
            <Card key={flight.id} className="border shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center mb-4">
                    <Plane className="h-6 w-6 text-philippine-blue mr-2" />
                    <span className="font-montserrat font-semibold">{flight.flightNumber}</span>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-montserrat font-bold mb-1">Flight Date</h3>
                    <p className="text-gray-700">{flight.date}</p>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-montserrat font-bold mb-1">Cut-off Deadline</h3>
                    <div className="flex items-center justify-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                      <p className="text-gray-700">
                        {flight.cutoffDate} at {flight.cutoffTime}
                      </p>
                    </div>
                  </div>

                  <div className={`px-3 py-1 rounded-full text-sm font-medium mb-4 ${getStatusColor(flight.status)}`}>
                    {getStatusText(flight.status)}
                  </div>

                  <Button className="w-full primary-button" disabled={flight.status === "closed"}>
                    Book This Flight
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`w-8 h-8 p-0 mx-1 ${currentPage === index ? "bg-philippine-blue text-white" : "text-gray-600"}`}
            onClick={() => setCurrentPage(index)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}

