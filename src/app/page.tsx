"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, MapPin, Package, Shield, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CountdownTimer from "@/components/countdown-timer"
import { useLanguage } from "@/contexts/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero-banner.jpg"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 container mx-auto grid gap-8 px-4 py-12 md:grid-cols-2 md:py-24">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="font-montserrat text-3xl font-bold leading-tight text-white md:text-5xl">
                {t.hero.title}
              </h1>
              <p className="font-poppins text-lg text-gray-200">{t.hero.subtitle}</p>
              <div className="flex flex-col items-start gap-4 sm:flex-row">
                <Link href="/booking">
                  <Button className="bg-[#00843D] text-white hover:bg-[#006C32] inline-flex w-auto">
                    {t.hero.bookNow}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/tracking">
                  <Button className="bg-[#FFCD00] text-[#0033A0] hover:bg-[#FFD633] border-none inline-flex w-auto font-medium">
                    {t.hero.trackNow}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/hero-image-1.jpg"
                alt="Filipino family receiving a package"
                width={400}
                height={300}
                className="rounded-lg shadow-xl max-w-[400px] h-auto"
                priority
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </section>

        {/* Key Selling Points */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-montserrat text-3xl font-bold text-[#0033A0]">
              {t.features.title}
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
              <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-[#0033A0]/10 p-3">
                    <Package className="h-6 w-6 text-[#0033A0]" />
                  </div>
                  <h3 className="mb-2 font-montserrat font-semibold">{t.features.affordable.title}</h3>
                  <p className="text-sm text-gray-600">{t.features.affordable.description}</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-[#0033A0]/10 p-3">
                    <Truck className="h-6 w-6 text-[#0033A0]" />
                  </div>
                  <h3 className="mb-2 font-montserrat font-semibold">{t.features.faster.title}</h3>
                  <p className="text-sm text-gray-600">{t.features.faster.description}</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-[#0033A0]/10 p-3">
                    <MapPin className="h-6 w-6 text-[#0033A0]" />
                  </div>
                  <h3 className="mb-2 font-montserrat font-semibold">{t.features.locations.title}</h3>
                  <p className="text-sm text-gray-600">{t.features.locations.description}</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-[#0033A0]/10 p-3">
                    <Shield className="h-6 w-6 text-[#0033A0]" />
                  </div>
                  <h3 className="mb-2 font-montserrat font-semibold">{t.features.tracking.title}</h3>
                  <p className="text-sm text-gray-600">{t.features.tracking.description}</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-[#0033A0]/10 p-3">
                    <Star className="h-6 w-6 text-[#0033A0]" />
                  </div>
                  <h3 className="mb-2 font-montserrat font-semibold">{t.features.charity.title}</h3>
                  <p className="text-sm text-gray-600">{t.features.charity.description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tracking Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow-xl">
              <h2 className="mb-6 text-center font-montserrat text-2xl font-bold text-[#0033A0]">
                {t.tracking.title}
              </h2>
              <p className="mb-6 text-center text-gray-600">
                {t.tracking.description}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Input type="text" placeholder={t.tracking.placeholder} className="flex-1 border-gray-300" />
                <Link href="/tracking">
                  <Button className="bg-[#00843D] text-white hover:bg-[#006C32] inline-flex w-auto">{t.tracking.trackNow}</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Flight Departures & Cut-off Dates */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-center font-montserrat text-3xl font-bold text-[#0033A0]">
              {t.flights.title}
            </h2>
            <p className="mb-12 text-center text-gray-600">
              {t.flights.description}
            </p>

            <div className="mx-auto max-w-4xl">
              <Tabs defaultValue="week1" className="w-full">
                <TabsList className="mb-8 grid w-full grid-cols-2">
                  <TabsTrigger value="week1">{t.flights.thisWeek}</TabsTrigger>
                  <TabsTrigger value="week2">{t.flights.nextWeek}</TabsTrigger>
                </TabsList>
                <TabsContent value="week1">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="border-2 border-[#0033A0]/10">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-[#0033A0]" />
                            <div>
                              <p className="font-montserrat font-semibold">March 22, 2025</p>
                              <p className="text-sm text-gray-500">{t.flights.departure}</p>
                            </div>
                          </div>
                          <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                            {t.flights.openBooking}
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">{t.flights.cutoff}:</span> March 20, 2025 (12:00 PM)
                          </p>
                          <div className="mt-2">
                            <p className="text-sm font-medium">{t.flights.nextFlight}:</p>
                            <CountdownTimer targetDate="2025-03-22T00:00:00" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-[#0033A0]/10">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-[#0033A0]" />
                            <div>
                              <p className="font-montserrat font-semibold">March 25, 2025</p>
                              <p className="text-sm text-gray-500">{t.flights.departure}</p>
                            </div>
                          </div>
                          <div className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                            {t.flights.nearCutoff}
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">{t.flights.cutoff}:</span> March 23, 2025 (12:00 PM)
                          </p>
                          <div className="mt-2">
                            <p className="text-sm font-medium">{t.flights.nextFlight}:</p>
                            <CountdownTimer targetDate="2025-03-25T00:00:00" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="week2">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="border-2 border-[#0033A0]/10">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-[#0033A0]" />
                            <div>
                              <p className="font-montserrat font-semibold">March 29, 2025</p>
                              <p className="text-sm text-gray-500">{t.flights.departure}</p>
                            </div>
                          </div>
                          <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                            {t.flights.openBooking}
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">{t.flights.cutoff}:</span> March 27, 2025 (12:00 PM)
                          </p>
                          <div className="mt-2">
                            <p className="text-sm font-medium">{t.flights.nextFlight}:</p>
                            <CountdownTimer targetDate="2025-03-29T00:00:00" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-[#0033A0]/10">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Calendar className="h-5 w-5 text-[#0033A0]" />
                            <div>
                              <p className="font-montserrat font-semibold">April 1, 2025</p>
                              <p className="text-sm text-gray-500">{t.flights.departure}</p>
                            </div>
                          </div>
                          <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                            {t.flights.openBooking}
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm text-gray-600">
                            <span className="font-semibold">{t.flights.cutoff}:</span> March 30, 2025 (12:00 PM)
                          </p>
                          <div className="mt-2">
                            <p className="text-sm font-medium">{t.flights.nextFlight}:</p>
                            <CountdownTimer targetDate="2025-04-01T00:00:00" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
              <div className="mt-8 text-center">
                <Link href="/booking">
                  <Button className="bg-[#00843D] text-white hover:bg-[#006C32] inline-flex w-auto">
                    {t.hero.bookNow}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center font-montserrat text-3xl font-bold text-[#0033A0]">
              {t.testimonials.title}
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Customer"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold">Maria Santos</p>
                      <p className="text-sm text-gray-500">Sydney, Australia</p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FFCD00] text-[#FFCD00]" />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    "I was amazed at how quickly my package arrived in Manila. The tracking updates kept me informed
                    every step of the way. Will definitely use ShipLite again!"
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Customer"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold">Juan Reyes</p>
                      <p className="text-sm text-gray-500">Melbourne, Australia</p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 4 ? "fill-[#FFCD00] text-[#FFCD00]" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    "The convenience of multiple drop-off locations made sending a package to my family in Cebu so easy.
                    The rates are affordable and the service is reliable."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadosfw-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src="/placeholder.svg?height=48&width=48"
                        alt="Customer"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-montserrat font-semibold">Elena Cruz</p>
                      <p className="text-sm text-gray-500">Brisbane, Australia</p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FFCD00] text-[#FFCD00]" />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    "I needed to send emergency supplies to my hometown after a typhoon, and ShipLite's special discount
                    for relief goods was a blessing. Fast delivery when it mattered most."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0033A0] py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 font-montserrat text-3xl font-bold">{t.cta.title}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-gray-200">
              {t.cta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/booking">
                <Button className="bg-[#00843D] text-white hover:bg-[#006C32] inline-flex w-auto">
                  {t.cta.bookNow}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/learn">
                <Button className="bg-[#FFCD00] text-[#0033A0] hover:bg-[#FFD633] border-none inline-flex w-auto font-medium">
                  {t.cta.learnMore}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

