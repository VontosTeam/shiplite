import Image from "next/image"
import { ArrowRight, Box, CheckCircle, MapPin, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HowItWorks() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary md:text-5xl">How It Works</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          ShipLite makes sending packages to the Philippines simple, efficient, and stress-free with our easy 4-step
          process.
        </p>
      </div>

      {/* Step 1: Pack Your Items */}
      <div className="mb-24">
        <div className="mb-8 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
            1
          </div>
        </div>
        <h2 className="mb-6 text-center text-3xl font-bold">Pack Your Items</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-lg">
              Pack your items securely using readily available boxes from Bunnings, Officeworks, Australia Post, or
              other alternatives. Proper packaging ensures your items arrive safely.
            </p>
            <div className="mb-6 rounded-lg bg-muted p-6">
              <h3 className="mb-4 text-xl font-semibold">Packaging Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Use sturdy boxes that can withstand handling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Wrap fragile items individually with bubble wrap</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Fill empty spaces with packing material</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>Seal boxes securely with packing tape</span>
                </li>
              </ul>
            </div>
            <Button variant="outline" className="w-fit">
              View Packaging Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full max-w-md overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Properly packed box with items"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Book Online */}
      <div className="mb-24">
        <div className="mb-8 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
            2
          </div>
        </div>
        <h2 className="mb-6 text-center text-3xl font-bold">Book Online</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1 flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-md overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="ShipLite booking form on mobile and desktop"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <p className="mb-4 text-lg">
              Complete our easy-to-use booking form designed with a mobile-first approach. Our one-question-per-screen
              format makes booking quick and simple.
            </p>
            <div className="mb-6 space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">Simple Step-by-Step Process</h3>
                <p>
                  Our multi-step form reduces cognitive load and guides you through each part of the booking process.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">Auto-Fill & History</h3>
                <p>Returning customers benefit from address auto-fill and past shipment history for faster booking.</p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">Print Shipping Form</h3>
                <p>Download and print your shipping form for drop-off purposes after completing your booking.</p>
              </div>
            </div>
            <Button className="w-fit">
              Book a Shipment Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Step 3: Drop Off or Courier Pickup */}
      <div className="mb-24">
        <div className="mb-8 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
            3
          </div>
        </div>
        <h2 className="mb-6 text-center text-3xl font-bold">Drop Off or Courier Pickup</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-lg">
              Choose the most convenient way to send your package. Drop off at partner storefronts, send via Australia
              Post, or schedule a courier pickup in select areas.
            </p>
            <div className="mb-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-primary/10 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Partner Drop-off</h3>
                <p>Visit one of our partner storefronts for heavy shipments and get assistance with your package.</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  <Box className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Australia Post</h3>
                <p>Send your package via Australia Post to our ShipLite depot for processing.</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  <Truck className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Courier Pickup</h3>
                <p>Schedule a convenient pickup from your home or office in select service areas.</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                  <Truck className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">Courier Network</h3>
                <p>Use our trusted courier partners for regional or inter-state pickups.</p>
              </div>
            </div>
            <Button variant="outline" className="w-fit">
              Find Drop-off Locations
              <MapPin className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full max-w-md overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=700&width=600"
                alt="Map showing drop-off locations"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 4: Tracking & Delivery */}
      <div className="mb-16">
        <div className="mb-8 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
            4
          </div>
        </div>
        <h2 className="mb-6 text-center text-3xl font-bold">Tracking & Delivery</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1 flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-md overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Shipment tracking interface on mobile"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <p className="mb-4 text-lg">
              Receive real-time shipment updates via WhatsApp, Viber, SMS, and email. Our graphical shipment tracker
              visually represents your parcel's journey.
            </p>
            <div className="mb-6 space-y-4">
              <div className="flex items-start space-x-3 rounded-lg border p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Processing in Australia</h3>
                  <p className="text-sm text-muted-foreground">Your package is received and processed at our depot</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 rounded-lg border p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">In Transit to Philippines</h3>
                  <p className="text-sm text-muted-foreground">Your package is on its way via air cargo</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 rounded-lg border p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Customs Clearance</h3>
                  <p className="text-sm text-muted-foreground">Your package clears Philippine customs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 rounded-lg border p-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold">Out for Delivery</h3>
                  <p className="text-sm text-muted-foreground">Your package is on its way to the recipient</p>
                </div>
              </div>
            </div>
            <Button className="w-fit">
              Track Your Shipment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-xl bg-primary p-8 text-center text-white md:p-12">
        <h2 className="mb-4 text-3xl font-bold">Ready to Ship?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg">
          Experience the ShipLite difference today. Fast, secure, and affordable shipping from Australia to the
          Philippines.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="secondary" size="lg">
            Book a Shipment
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" size="lg">
            Get a Quote
          </Button>
        </div>
      </div>
    </div>
  )
}

