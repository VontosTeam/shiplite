import Image from "next/image"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function OurPurposePage() {
  return (
    <div className="flex min-h-screen flex-col">

      {/* Hero Section */}
      <section className="bg-[#0033A0] py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Purpose</h1>
            <p className="text-xl text-white/90">
              Making it simple, efficient, and stress-free to send gifts and essentials to your loved ones in the
              Philippines.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="prose max-w-4xl mx-auto">
            <p className="text-lg">
              At ShipLite, our purpose is to make sending gifts and essentials to your loved ones in the Philippines
              simple, efficient, and stress-free. We understand Filipino culture, where spontaneity often means sending
              packages at short notice. That's why our air cargo service is designed to deliver swiftly and reliably,
              ensuring your thoughtful gifts arrive exactly when they're needed most.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#0033A0]">Why Choose Air Cargo?</h2>
            <p>
              Air cargo is faster, more reliable, and more accessible than traditional Balikbayan box shipping. It
              aligns perfectly with the fast-paced lives of Filipinos, accommodating last-minute yet meaningful
              gestures.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#0033A0]">Our Commitment</h2>
            <p>We are committed to:</p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#00843D] mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Transparency</strong> – No hidden fees, clear pricing, and upfront timelines.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#00843D] mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Security</strong> – Every parcel is handled with care and tracked every step of the way.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-[#00843D] mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Affordability</strong> – Cost-effective rates without compromising speed and reliability.
                </span>
              </li>
            </ul>
            <p className="mt-4">With ShipLite, you can send love across distances with confidence and ease.</p>
          </div>
        </div>
      </section>

      {/* Visual Comparison Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0033A0]">Why Air Cargo Makes Sense</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#0033A0]">Air Cargo</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00843D] mr-2 mt-1 flex-shrink-0" />
                    <span>Delivery in 3-5 days</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00843D] mr-2 mt-1 flex-shrink-0" />
                    <span>Real-time tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00843D] mr-2 mt-1 flex-shrink-0" />
                    <span>Multiple drop-off options</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00843D] mr-2 mt-1 flex-shrink-0" />
                    <span>Perfect for time-sensitive items</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-[#00843D] mr-2 mt-1 flex-shrink-0" />
                    <span>Ideal for emergency needs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-600">Traditional Sea Cargo</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-7 ml-0.5">•</span>
                    <span>Delivery in 45-60 days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-7 ml-0.5">•</span>
                    <span>Limited tracking capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-7 ml-0.5">•</span>
                    <span>Fewer drop-off locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-7 ml-0.5">•</span>
                    <span>Better for non-urgent bulk items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-7 ml-0.5">•</span>
                    <span>Requires advance planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recommended Visuals Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0033A0]">The ShipLite Experience</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video relative mb-4 bg-gray-100 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Filipino family receiving a package"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Family Connections</h3>
                <p className="text-gray-600">
                  Experience the joy of connecting families through timely deliveries of gifts and essentials.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video relative mb-4 bg-gray-100 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Air cargo vs sea cargo comparison"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Speed & Efficiency</h3>
                <p className="text-gray-600">
                  Air cargo delivers your packages significantly faster than traditional sea shipping methods.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-video relative mb-4 bg-gray-100 rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Shipping process visualization"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Seamless Process</h3>
                <p className="text-gray-600">
                  From packing to delivery confirmation, we make every step simple and transparent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0033A0]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Experience the ShipLite Difference?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Send your packages with confidence, knowing they'll arrive quickly, safely, and affordably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FFCD00] text-[#0033A0] hover:bg-[#FFCD00]/90">
              Book a Shipment Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn How It Works
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

