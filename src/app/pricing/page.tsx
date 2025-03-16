import Image from "next/image"
import Link from "next/link"
import { DollarSign, Package, TruckIcon as TruckFast, MapPin } from "lucide-react"

export default function PricingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0033A0] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Pricing & Shipping Options</h1>
            <p className="text-lg md:text-xl mb-8">
              ShipLite provides transparent, affordable, and flexible shipping options for sending parcels from
              Australia to the Philippines.
            </p>
          </div>
        </div>
      </section>

      {/* Air Cargo Pricing Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-10">
              <DollarSign className="w-8 h-8 text-[#0033A0] mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">Air Cargo Pricing</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0033A0] text-white">
                    <th className="p-4 text-left">Weight</th>
                    <th className="p-4 text-left">Price (AUD)</th>
                    <th className="p-4 text-left">Price (USD)</th>
                    <th className="p-4 text-left">Price (PHP)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">Up to 5 kg</td>
                    <td className="p-4 font-semibold">$55</td>
                    <td className="p-4">$36</td>
                    <td className="p-4">₱2,035</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">Up to 10 kg</td>
                    <td className="p-4 font-semibold">$85</td>
                    <td className="p-4">$56</td>
                    <td className="p-4">₱3,145</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">Up to 15 kg</td>
                    <td className="p-4 font-semibold">$105</td>
                    <td className="p-4">$69</td>
                    <td className="p-4">₱3,885</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">Up to 20 kg</td>
                    <td className="p-4 font-semibold">$120</td>
                    <td className="p-4">$79</td>
                    <td className="p-4">₱4,440</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">Up to 30 kg</td>
                    <td className="p-4 font-semibold">$150</td>
                    <td className="p-4">$99</td>
                    <td className="p-4">₱5,550</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-4">Over 30 kg</td>
                    <td className="p-4 font-semibold">$5 per kg</td>
                    <td className="p-4">$3.30 per kg</td>
                    <td className="p-4">₱185 per kg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-right text-sm text-gray-500">
              <p>* Exchange rates as of March 16, 2025. Rates are subject to change.</p>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Important Notes:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Maximum weight per box: 35 kg (heavier items must be split into separate boxes)</li>
                <li>For parcels below 10 kg, we recommend using Australia Post boxes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Packaging */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-10">
              <Package className="w-8 h-8 text-[#0033A0] mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">Recommended Packaging</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">10-24 kg</h3>
                <p>Bunnings 52L Heavy Duty Moving Carton</p>
                <div className="mt-4 h-48 bg-gray-200 rounded-md flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="52L Moving Carton"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">25-29 kg</h3>
                <p>Bunnings 104L Heavy Duty Moving Carton</p>
                <div className="mt-4 h-48 bg-gray-200 rounded-md flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="104L Moving Carton"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">30-35 kg</h3>
                <p>Bunnings 150L Heavy Duty Moving Carton</p>
                <div className="mt-4 h-48 bg-gray-200 rounded-md flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="150L Moving Carton"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="mb-4">For parcels below 10 kg, we recommend using Australia Post boxes:</p>
              <Link
                href="https://auspost.com.au/sending/packaging-options/mailing-boxes"
                className="text-[#0033A0] font-medium hover:underline"
              >
                Australia Post Mailing Boxes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-10">
              <TruckFast className="w-8 h-8 text-[#0033A0] mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">Shipping Methods</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Australia Post */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden group h-64">
                <div className="p-4 bg-[#0033A0] text-white">
                  <h3 className="text-lg font-semibold text-center">Australia Post</h3>
                </div>
                <div className="relative h-[calc(100%-4rem)]">
                  {/* Default View */}
                  <div className="absolute inset-0 p-4 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                    <Image
                      src="/placeholder.svg?height=80&width=160"
                      alt="Australia Post Logo"
                      width={160}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  {/* Hover View */}
                  <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Print and attach the ShipLite Booking Form</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Drop off at any Australia Post location</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Track via Australia Post's system</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* ShipLite Pickup */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden group h-64">
                <div className="p-4 bg-[#0033A0] text-white">
                  <h3 className="text-lg font-semibold text-center">ShipLite Pickup</h3>
                </div>
                <div className="relative h-[calc(100%-4rem)]">
                  {/* Default View */}
                  <div className="absolute inset-0 p-4 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                    <Image
                      src="/placeholder.svg?height=80&width=160"
                      alt="ShipLite Pickup Logo"
                      width={160}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  {/* Hover View */}
                  <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white">
                    <p className="text-xs text-gray-500 mb-2">For Serviced Locations</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Check availability for direct pickup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Schedule a pickup online</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Receive tracking once collected</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Storefront Partners */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden group h-64">
                <div className="p-4 bg-[#0033A0] text-white">
                  <h3 className="text-lg font-semibold text-center">Storefront Partners</h3>
                </div>
                <div className="relative h-[calc(100%-4rem)]">
                  {/* Default View */}
                  <div className="absolute inset-0 p-4 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                    <Image
                      src="/placeholder.svg?height=80&width=160"
                      alt="Storefront Partner Logo"
                      width={160}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  {/* Hover View */}
                  <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Locate a ShipLite Partner near you</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Drop off parcel and get tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Some offer packaging assistance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Courier Network */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden group h-64">
                <div className="p-4 bg-[#0033A0] text-white">
                  <h3 className="text-lg font-semibold text-center">Courier Network</h3>
                </div>
                <div className="relative h-[calc(100%-4rem)]">
                  {/* Default View */}
                  <div className="absolute inset-0 p-4 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                    <Image
                      src="/placeholder.svg?height=80&width=160"
                      alt="Courier Network Logo"
                      width={160}
                      height={80}
                      className="object-contain"
                    />
                  </div>

                  {/* Hover View */}
                  <div className="absolute inset-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>
                          <strong>JME Transport</strong> – 0413 335 181
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>
                          <strong>TransDirect</strong> – Real-time quote
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-5 h-5 bg-[#0033A0] text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">
                          ✓
                        </span>
                        <span>Perfect for regional pickups</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison & CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-10">
              <MapPin className="w-8 h-8 text-[#0033A0] mr-3" />
              <h2 className="text-2xl md:text-3xl font-bold">Why Choose ShipLite?</h2>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm mb-10">
              <h3 className="text-xl font-semibold mb-6 text-center">Shipping Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 text-left border-b-2 border-gray-200">Service</th>
                      <th className="p-4 text-left border-b-2 border-gray-200 bg-[#e6eeff]">
                        <span className="text-[#0033A0] font-bold">ShipLite</span>
                      </th>
                      <th className="p-4 text-left border-b-2 border-gray-200">
                        <span className="font-medium">Traditional Balikbayan Box</span>
                      </th>
                      <th className="p-4 text-left border-b-2 border-gray-200">
                        <span className="font-medium">Express Courier</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-medium">5kg Package</td>
                      <td className="p-4 border-b border-gray-200 bg-[#e6eeff]">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-[#0033A0] rounded-full mr-2 flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                          <span className="text-[#0033A0] font-bold">$55</span>
                        </div>
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-600 text-xs">
                            !
                          </div>
                          <span>$70-90</span>
                        </div>
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-600 text-xs">
                            ✗
                          </div>
                          <span>$120-150</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-medium">Delivery Time</td>
                      <td className="p-4 border-b border-gray-200 bg-[#e6eeff]">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-[#0033A0] rounded-full mr-2 flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                          <span className="text-[#0033A0] font-bold">7-10 days</span>
                        </div>
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-600 text-xs">
                            ✗
                          </div>
                          <span>30-45 days</span>
                        </div>
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-600 text-xs">
                            ✓
                          </div>
                          <span>3-5 days</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-medium">Tracking</td>
                      <td className="p-4 border-b border-gray-200 bg-[#e6eeff]">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-[#0033A0] rounded-full mr-2 flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                          <span className="text-[#0033A0] font-bold">Real-time</span>
                        </div>
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-600 text-xs">
                            ✗
                          </div>
                          <span>Limited</span>
                        </div>
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-600 text-xs">
                            ✓
                          </div>
                          <span>Real-time</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-medium">Flexibility</td>
                      <td className="p-4 border-b border-gray-200 bg-[#e6eeff]">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-[#0033A0] rounded-full mr-2 flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                          <span className="text-[#0033A0] font-bold">Multiple options</span>
                        </div>
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-600 text-xs">
                            ✗
                          </div>
                          <span>Limited</span>
                        </div>
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-600 text-xs">
                            ✗
                          </div>
                          <span>Limited</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 border-b border-gray-200 font-medium">Value for Money</td>
                      <td className="p-4 border-b border-gray-200 bg-[#e6eeff]">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-[#0033A0] rounded-full mr-2 flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                          <span className="text-[#0033A0] font-bold">Excellent</span>
                        </div>
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-600 text-xs">
                            !
                          </div>
                          <span>Good</span>
                        </div>
                      </td>
                      <td className="p-4 border-b border-gray-200">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-600 text-xs">
                            ✗
                          </div>
                          <span>Poor</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Customer Support</td>
                      <td className="p-4 bg-[#e6eeff]">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-[#0033A0] rounded-full mr-2 flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                          <span className="text-[#0033A0] font-bold">24/7 Multi-channel</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-600 text-xs">
                            ✗
                          </div>
                          <span>Limited hours</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-600 text-xs">
                            !
                          </div>
                          <span>Business hours</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-sm text-gray-500 flex justify-end space-x-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-[#0033A0] rounded-full mr-1 flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                  <span>Best option</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-1 flex items-center justify-center text-gray-600 text-xs">
                    !
                  </div>
                  <span>Average</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-200 rounded-full mr-1 flex items-center justify-center text-gray-600 text-xs">
                    ✗
                  </div>
                  <span>Poor</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Ready to ship with confidence?</h3>
              <Link
                href="/book"
                className="inline-block bg-[#0033A0] hover:bg-[#002a80] text-white font-bold py-3 px-8 rounded-md transition-colors"
              >
                Book a Shipment Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

