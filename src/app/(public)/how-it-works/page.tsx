import Image from "next/image"
import { MapPin, Plane, Truck, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">

      {/* Hero Section */}
      <section className="bg-[#0033A0] py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-white/90">
              Sending packages to the Philippines has never been easier. Follow our simple 4-step process.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-12 md:gap-16">
              {/* Step 1: Pack Your Items */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center justify-center rounded-full bg-[#0033A0]/10 p-2 mb-4">
                    <span className="rounded-full bg-[#0033A0] p-2 text-white font-bold">1</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0033A0]">Pack Your Items</h2>
                  <p className="text-gray-600 mb-6">
                    Pack your items securely using readily available boxes from Bunnings, Officeworks, Australia Post,
                    or other alternatives.
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="packaging-tips">
                      <AccordionTrigger className="text-[#0033A0] font-medium">Packaging Tips</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Use sturdy boxes that can withstand handling</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Wrap fragile items individually with bubble wrap</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Fill empty spaces with packing material to prevent movement</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Seal boxes securely with packing tape on all seams</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Label boxes clearly with "FRAGILE" if applicable</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="recommended-boxes">
                      <AccordionTrigger className="text-[#0033A0] font-medium">Recommended Boxes</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>10-24 kg: Bunnings 52L Heavy Duty Moving Carton</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>25-29 kg: Bunnings 104L Heavy Duty Moving Carton</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>30-35 kg: Bunnings 150L Heavy Duty Moving Carton</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>For parcels below 10 kg: Australia Post mailing boxes</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="weight-limits">
                      <AccordionTrigger className="text-[#0033A0] font-medium">Weight Limits</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600 mb-2">Maximum weight per box: 35 kg</p>
                        <p className="text-gray-600">
                          Heavier items must be split into separate boxes to ensure safe handling and compliance with
                          shipping regulations.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Packing items properly"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Book Online */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2">
                  <div className="inline-flex items-center justify-center rounded-full bg-[#0033A0]/10 p-2 mb-4">
                    <span className="rounded-full bg-[#0033A0] p-2 text-white font-bold">2</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0033A0]">Book Online</h2>
                  <p className="text-gray-600 mb-6">
                    Complete our easy-to-use booking form with a one-question-per-screen format, auto-predictive fields,
                    and stored shipping history for repeat users.
                  </p>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="booking-features">
                      <AccordionTrigger className="text-[#0033A0] font-medium">Booking Features</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Multi-step form with progress indicator</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Address auto-fill for Australian addresses</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Philippine address verification</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Real-time shipping cost estimator</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Save & continue feature for incomplete forms</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="required-information">
                      <AccordionTrigger className="text-[#0033A0] font-medium">Required Information</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Shipper's name, mobile number, and address</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Recipient's name, address, and contact details</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Packing list with item categories and quantities</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Total declared value of items</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Agreement to prohibited items policy</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="mobile-friendly">
                      <AccordionTrigger className="text-[#0033A0] font-medium">Mobile-Friendly Design</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          Our booking form is designed with a mobile-first approach, ensuring a smooth experience
                          whether you're using a smartphone, tablet, or desktop computer. You can easily book shipments
                          on the go!
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="mt-6">
                    <Button className="bg-[#00843D] hover:bg-[#00843D]/90">Start Booking Now</Button>
                  </div>
                </div>

                <div className="order-1 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Online booking form"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Drop Off or Courier Pickup */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-flex items-center justify-center rounded-full bg-[#0033A0]/10 p-2 mb-4">
                    <span className="rounded-full bg-[#0033A0] p-2 text-white font-bold">3</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0033A0]">Drop Off or Courier Pickup</h2>
                  <p className="text-gray-600 mb-6">
                    Choose from multiple options to get your package to us. Drop off at partner storefronts for heavy
                    shipments, send via Australia Post, or use our courier pickup service in select areas.
                  </p>

                  <Tabs defaultValue="drop-off" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="drop-off">Drop Off</TabsTrigger>
                      <TabsTrigger value="australia-post">Australia Post</TabsTrigger>
                      <TabsTrigger value="courier">Courier Pickup</TabsTrigger>
                    </TabsList>

                    <TabsContent value="drop-off" className="pt-4">
                      <p className="text-gray-600 mb-4">
                        Locate a ShipLite Storefront Partner near you and drop off your parcel. Some partners offer
                        packaging assistance and additional services.
                      </p>
                      <ul className="space-y-2 text-gray-600 mb-4">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Convenient for heavy packages</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Get a tracking number immediately</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Pay in person at drop-off</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="text-[#0033A0] border-[#0033A0]">
                        Find Drop-Off Locations
                      </Button>
                    </TabsContent>

                    <TabsContent value="australia-post" className="pt-4">
                      <p className="text-gray-600 mb-4">
                        Print and attach the ShipLite Booking Shipping Order Form to your parcel, then drop it off at
                        any Australia Post location.
                      </p>
                      <ul className="space-y-2 text-gray-600 mb-4">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Ideal for smaller packages under 10kg</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Use Australia Post's tracking system</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Pay online once ShipLite receives your package</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="text-[#0033A0] border-[#0033A0]">
                        Print Shipping Form
                      </Button>
                    </TabsContent>

                    <TabsContent value="courier" className="pt-4">
                      <p className="text-gray-600 mb-4">
                        For serviced locations, we offer direct pickup from your home or workplace. We also partner with
                        trusted courier services for regional or inter-state pickups.
                      </p>
                      <ul className="space-y-2 text-gray-600 mb-4">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Most convenient option - no need to leave home</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Schedule pickup at your preferred time</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Pay upon pickup or online after weight confirmation</span>
                        </li>
                      </ul>
                      <Button variant="outline" className="text-[#0033A0] border-[#0033A0]">
                        Check Pickup Availability
                      </Button>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Drop off locations map"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Tracking & Delivery */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2">
                  <div className="inline-flex items-center justify-center rounded-full bg-[#0033A0]/10 p-2 mb-4">
                    <span className="rounded-full bg-[#0033A0] p-2 text-white font-bold">4</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0033A0]">Tracking & Delivery</h2>
                  <p className="text-gray-600 mb-6">
                    Receive real-time shipment updates via WhatsApp, Viber, SMS, and email. Our graphical shipment
                    status tracker visually represents your parcel's journey.
                  </p>

                  <Card className="border-none shadow-md mb-6">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-3 text-[#0033A0]">Shipment Journey</h3>
                      <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                        <div className="relative flex items-start mb-6">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00843D] text-white z-10">
                            <Check className="h-4 w-4" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium">Parcel Picked Up</h4>
                            <p className="text-sm text-gray-500">Your package has been collected</p>
                          </div>
                        </div>

                        <div className="relative flex items-start mb-6">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00843D] text-white z-10">
                            <Check className="h-4 w-4" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium">In Transit (Australia to PH)</h4>
                            <p className="text-sm text-gray-500">Your package is on its way</p>
                          </div>
                        </div>

                        <div className="relative flex items-start mb-6">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0033A0] text-white z-10">
                            <Plane className="h-4 w-4" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium">Arrived at PH Customs</h4>
                            <p className="text-sm text-gray-500">Currently being processed</p>
                          </div>
                        </div>

                        <div className="relative flex items-start mb-6">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-500 z-10">
                            <MapPin className="h-4 w-4" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-gray-500">Arrived at Distribution Depot</h4>
                            <p className="text-sm text-gray-500">Pending</p>
                          </div>
                        </div>

                        <div className="relative flex items-start">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-500 z-10">
                            <Truck className="h-4 w-4" />
                          </div>
                          <div className="ml-4">
                            <h4 className="font-medium text-gray-500">Delivered</h4>
                            <p className="text-sm text-gray-500">Pending</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="notification-options">
                      <AccordionTrigger className="text-[#0033A0] font-medium">Notification Options</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600 mb-2">Stay updated with your shipment through multiple channels:</p>
                        <ul className="space-y-2 text-gray-600">
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>WhatsApp notifications</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Viber updates</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>SMS alerts</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Email notifications</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="delivery-confirmation">
                      <AccordionTrigger className="text-[#0033A0] font-medium">Delivery Confirmation</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-gray-600">
                          Once your package is delivered, the recipient can confirm receipt by replying to an SMS
                          notification. This provides you with peace of mind that your shipment has safely reached its
                          destination.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <div className="mt-6">
                    <Button className="bg-[#00843D] hover:bg-[#00843D]/90">Track Your Shipment</Button>
                  </div>
                </div>

                <div className="order-1 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-square">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Shipment tracking interface"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0033A0]">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the maximum weight per box?</AccordionTrigger>
                <AccordionContent>
                  The maximum weight per box is 35 kg. Heavier items must be split into separate boxes to ensure safe
                  handling and compliance with shipping regulations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                <AccordionContent>
                  Air cargo shipping with ShipLite typically takes 3-5 days from pickup/drop-off to delivery in the
                  Philippines, depending on customs processing and the recipient's location.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>What items are prohibited?</AccordionTrigger>
                <AccordionContent>
                  Prohibited items include explosives, fireworks, flammable liquids and gases, corrosive materials,
                  radioactive substances, toxic chemicals, biological hazards, live animals, perishables (unless
                  authorized), improperly packed lithium batteries, counterfeit goods, cash, and valuable jewelry. For a
                  complete list, please visit our Prohibited & Regulated Items page.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How do I track my shipment?</AccordionTrigger>
                <AccordionContent>
                  You can track your shipment by entering your tracking number on our website or through the
                  notifications sent via WhatsApp, Viber, SMS, or email. Our tracking system provides real-time updates
                  on your package's journey.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>What if my package is delayed?</AccordionTrigger>
                <AccordionContent>
                  In case of delays, you'll receive notifications with updated delivery estimates. If there are
                  significant delays, our Customer Care Team will proactively contact you to provide information and
                  assistance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0033A0]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Send Your Package?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Experience our simple, efficient, and reliable shipping process today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FFCD00] text-[#0033A0] hover:bg-[#FFCD00]/90">
              Book a Shipment Now
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

