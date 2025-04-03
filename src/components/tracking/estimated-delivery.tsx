import { format, parseISO } from "date-fns"
import { Truck, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface EstimatedDeliveryProps {
  estimatedDelivery: string
}

export function EstimatedDelivery({ estimatedDelivery }: EstimatedDeliveryProps) {
  const deliveryDate = parseISO(estimatedDelivery)
  const formattedDate = format(deliveryDate, "EEEE, MMMM d, yyyy")
  const formattedTime = format(deliveryDate, "h:mm a")

  return (
    <Card className="border-primary/10 bg-gradient-to-r from-[#0033A0]/5 to-[#FFCD00]/5">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0033A0]">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-montserrat text-primary">Estimated Delivery</h2>
              <p className="text-sm text-gray-600 font-poppins">Your package is on its way</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-primary/10 shadow-sm">
            <Calendar className="h-5 w-5 text-[#00843D]" />
            <div>
              <p className="font-medium text-gray-900 font-poppins">{formattedDate}</p>
              <p className="text-sm text-gray-600">{formattedTime}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

