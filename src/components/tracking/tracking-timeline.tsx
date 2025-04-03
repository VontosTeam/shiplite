import { format, parseISO } from "date-fns"
import { CheckCircle2, Circle } from "lucide-react"
import type { TimelineEvent } from "./tracking"
import { Card, CardContent } from "@/components/ui/card"

interface TrackingTimelineProps {
  timeline: TimelineEvent[]
}

export function TrackingTimeline({ timeline }: TrackingTimelineProps) {
  return (
    <Card className="border-primary/10">
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold font-montserrat text-primary mb-6">Shipment Status</h2>

        <div className="space-y-6">
          {timeline.map((event, index) => (
            <div key={event.id} className="relative">
              {/* Timeline connector line */}
              {index < timeline.length - 1 && (
                <div
                  className={`absolute left-3.5 top-6 w-0.5 h-[calc(100%+1.5rem)] 
                    ${event.completed ? "bg-[#00843D]" : "bg-gray-200"}`}
                />
              )}

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {event.completed ? (
                    <CheckCircle2 className="h-7 w-7 text-[#00843D] animate-scaleIn" />
                  ) : (
                    <Circle className="h-7 w-7 text-gray-300" />
                  )}
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                    <h3 className={`font-semibold font-poppins ${event.completed ? "text-gray-900" : "text-gray-400"}`}>
                      {event.status}
                    </h3>

                    {event.timestamp && (
                      <span className={`text-sm ${event.completed ? "text-gray-600" : "text-gray-400"}`}>
                        {format(parseISO(event.timestamp), "MMM d, yyyy • h:mm a")}
                      </span>
                    )}
                  </div>

                  {event.location && (
                    <p className={`text-sm mt-1 ${event.completed ? "text-gray-600" : "text-gray-400"}`}>
                      {event.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

