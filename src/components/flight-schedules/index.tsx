"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, Plane, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import dynamic from "next/dynamic"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

const CountdownTimer = dynamic(() => import("@/components/countdown-timer"), {
  ssr: false,
  loading: () => <Skeleton className="h-6 w-32" />
})

// Sample data - in a real app, this would come from an API
const flightData = {
  week1: [
    {
      id: 1,
      date: "March 22, 2025",
      status: "open",
      route: "Sydney → Manila",
      departure: "10:00 AM",
      cutOffDate: "March 20, 2025",
      cutOffTime: "12:00 PM",
      targetDate: "2025-03-22T00:00:00",
    },
    {
      id: 2,
      date: "March 25, 2025",
      status: "near-cutoff",
      route: "Sydney → Manila",
      departure: "10:00 AM",
      cutOffDate: "March 23, 2025",
      cutOffTime: "12:00 PM",
      targetDate: "2025-03-25T00:00:00",
    },
  ],
  week2: [
    {
      id: 3,
      date: "March 29, 2025",
      status: "open",
      route: "Sydney → Manila",
      departure: "10:00 AM",
      cutOffDate: "March 27, 2025",
      cutOffTime: "12:00 PM",
      targetDate: "2025-03-29T00:00:00",
    },
    {
      id: 4,
      date: "April 1, 2025",
      status: "open",
      route: "Sydney → Manila",
      departure: "10:00 AM",
      cutOffDate: "March 30, 2025",
      cutOffTime: "12:00 PM",
      targetDate: "2025-04-01T00:00:00",
    },
  ],
}

export default function FlightSchedules() {
  const [selectedWeek, setSelectedWeek] = useState("week1")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [schedules, setSchedules] = useState<typeof flightData | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (componentRef.current) {
      observer.observe(componentRef.current)
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const fetchSchedules = async () => {
      if (!isVisible) return

      try {
        setIsLoading(true)
        setError(null)
        // Simulate API call with artificial delay
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setSchedules(flightData)
      } catch (err) {
        setError("Failed to load flight schedules. Please try again later.")
        console.error("Error loading schedules:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSchedules()
  }, [isVisible])

  const FlightCard = ({ flight }: { flight: typeof flightData.week1[0] }) => (
    <Card className="border-2 border-[#0033A0]/10">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-[#0033A0]" />
            <div>
              <p className="font-montserrat font-semibold">{flight.date}</p>
              <p className="text-sm text-gray-500">Flight Departure</p>
            </div>
          </div>
          <div
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              flight.status === "open"
                ? "bg-green-100 text-green-800"
                : flight.status === "near-cutoff"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {flight.status === "open"
              ? "Open for booking"
              : flight.status === "near-cutoff"
              ? "Near cut-off"
              : "Closed"}
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Plane className="h-4 w-4" />
            <span>{flight.route}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="h-4 w-4" />
            <span>Departure: {flight.departure}</span>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Cut-off date:</span> {flight.cutOffDate} ({flight.cutOffTime})
            </p>
            <div className="mt-2">
              <p className="text-sm font-medium">Next flight in:</p>
              <CountdownTimer targetDate={flight.targetDate} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const LoadingSkeleton = () => (
    <div className="grid gap-6 md:grid-cols-2">
      {[1, 2].map((i) => (
        <Card key={i} className="border-2 border-[#0033A0]/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Skeleton className="h-5 w-5" />
                <div>
                  <Skeleton className="h-5 w-32 mb-1" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-32" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-32" />
              </div>
              <div className="pt-4 border-t">
                <Skeleton className="h-4 w-48 mb-2" />
                <div className="mt-2">
                  <Skeleton className="h-4 w-24 mb-1" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-12" ref={componentRef}>
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#0033A0] mb-4 font-montserrat">Flight Schedules</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Plan your shipments with our upcoming flight schedules and cut-off dates. Book early to secure your spot.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="week1" className="w-full" onValueChange={setSelectedWeek}>
          <TabsList className="mb-8 grid w-full grid-cols-2">
            <TabsTrigger value="week1">This Week</TabsTrigger>
            <TabsTrigger value="week2">Next Week</TabsTrigger>
          </TabsList>

          {error ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : (
            <>
              <TabsContent value="week1">
                {isLoading ? (
                  <LoadingSkeleton />
                ) : (
                  <div className="grid gap-6 md:grid-cols-2">
                    {schedules?.week1.map((flight) => (
                      <FlightCard key={flight.id} flight={flight} />
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="week2">
                {isLoading ? (
                  <LoadingSkeleton />
                ) : (
                  <div className="grid gap-6 md:grid-cols-2">
                    {schedules?.week2.map((flight) => (
                      <FlightCard key={flight.id} flight={flight} />
                    ))}
                  </div>
                )}
              </TabsContent>
            </>
          )}
        </Tabs>

        <div className="mt-8 text-center">
          <Link href="/booking">
            <Button className="bg-[#00843D] text-white hover:bg-[#006C32] inline-flex w-auto">
              Book a Shipment Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
} 