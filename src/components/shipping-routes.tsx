"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type RouteProps = {
  from: string
  to: string
}

export function ShippingRoutes() {
  const routes: RouteProps[] = [
    { from: "Sydney", to: "Manila" },
    { from: "Melbourne", to: "Cebu" },
    { from: "Brisbane", to: "Davao" },
    { from: "Perth", to: "Quezon City" },
    { from: "Adelaide", to: "Iloilo" },
    { from: "Gold Coast", to: "Bacolod" },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {routes.map((route, index) => (
        <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow card-hover h-full">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div className="relative flex items-center min-h-[48px]">
              <div className="flex items-center flex-1 min-w-0">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                  <Image
                    src="/flag-australia.png"
                    alt="Australia flag"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span className="font-medium text-lg ml-2 truncate">{route.from}</span>
              </div>
              
              <div className="flex-shrink-0 mx-2">
                <ArrowRight className="h-5 w-5 text-philippine-blue" />
              </div>
              
              <div className="flex items-center flex-1 min-w-0">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                  <Image
                    src="/flag-philippines.png"
                    alt="Philippines flag"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span className="font-medium text-lg ml-2 truncate">{route.to}</span>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link 
                href="#" 
                className="inline-flex items-center justify-center w-full py-2 px-4 text-philippine-blue hover:text-philippine-blue/80 font-medium border border-philippine-blue/20 rounded-md hover:bg-philippine-blue/5 transition-colors"
              >
                View Rates
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

