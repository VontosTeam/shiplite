"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Clock, Lock, Plane, Ship, Bell, BellOff, Package } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

export default function OurPurposePage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0033A0] to-[#0055D4] py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  {t("purpose.title")}
                </h1>
                <p className="text-white/90 md:text-xl">
                  {t("purpose.subtitle")}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-[#00843D] hover:bg-[#00843D]/90 text-white">
                  <Link href="/book-now">{t("cta.bookShipment")}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-white text-[#0033A0] hover:bg-white/90 border-white"
                >
                  <Link href="/how-it-works">{t("cta.learnMore")}</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Filipino family receiving a package"
                width={500}
                height={400}
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6 mx-auto space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-[#0033A0] md:text-3xl">
              {t("purpose.atShiplite.title")}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t("purpose.atShiplite.description")}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-[#0033A0] md:text-3xl">
              {t("purpose.airCargo.title")}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  {t("purpose.airCargo.description")}
                </p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-[#00843D] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{t("purpose.airCargo.feature1")}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#00843D] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{t("purpose.airCargo.feature2")}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Lock className="h-5 w-5 text-[#00843D] mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{t("purpose.airCargo.feature3")}</p>
                  </div>
                </div>
              </div>

              {/* Improved comparison section */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="bg-[#0033A0] text-white p-4 text-center">
                  <h3 className="text-xl font-semibold">{t("purpose.comparison.title")}</h3>
                  <p className="text-sm text-white/80 mt-1">{t("purpose.comparison.subtitle")}</p>
                </div>

                <div className="bg-white p-6">
                  <div className="space-y-6">
                    {/* Delivery Time Comparison */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-[#0033A0]">{t("purpose.comparison.delivery.title")}</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#0033A0]/10 p-4 rounded-lg text-center">
                          <div className="flex justify-center mb-2">
                            <Plane className="h-6 w-6 text-[#0033A0]" />
                          </div>
                          <p className="font-bold text-lg text-[#0033A0]">{t("purpose.comparison.delivery.air")}</p>
                          <p className="text-sm text-gray-600">Air Cargo</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                          <div className="flex justify-center mb-2">
                            <Ship className="h-6 w-6 text-gray-600" />
                          </div>
                          <p className="font-bold text-lg text-gray-600">{t("purpose.comparison.delivery.sea")}</p>
                          <p className="text-sm text-gray-500">Sea Cargo</p>
                        </div>
                      </div>
                    </div>

                    {/* Tracking Comparison */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-[#0033A0]">{t("purpose.comparison.tracking.title")}</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#0033A0]/10 p-4 rounded-lg text-center">
                          <div className="flex justify-center mb-2">
                            <Bell className="h-6 w-6 text-[#0033A0]" />
                          </div>
                          <p className="font-bold text-[#0033A0]">{t("purpose.comparison.tracking.air")}</p>
                          <p className="text-sm text-gray-600">{t("purpose.comparison.tracking.air.desc")}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                          <div className="flex justify-center mb-2">
                            <BellOff className="h-6 w-6 text-gray-600" />
                          </div>
                          <p className="font-bold text-gray-600">{t("purpose.comparison.tracking.sea")}</p>
                          <p className="text-sm text-gray-500">{t("purpose.comparison.tracking.sea.desc")}</p>
                        </div>
                      </div>
                    </div>

                    {/* Perfect For Comparison */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-[#0033A0]">{t("purpose.comparison.perfect.title")}</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#0033A0]/10 p-4 rounded-lg text-center">
                          <div className="flex justify-center mb-2">
                            <Clock className="h-6 w-6 text-[#0033A0]" />
                          </div>
                          <p className="font-bold text-[#0033A0]">{t("purpose.comparison.perfect.air")}</p>
                          <p className="text-sm text-gray-600">{t("purpose.comparison.perfect.air.desc")}</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                          <div className="flex justify-center mb-2">
                            <Package className="h-6 w-6 text-gray-600" />
                          </div>
                          <p className="font-bold text-gray-600">{t("purpose.comparison.perfect.sea")}</p>
                          <p className="text-sm text-gray-500">{t("purpose.comparison.perfect.sea.desc")}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-[#0033A0] md:text-3xl">
              {t("purpose.commitment.title")}
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <div className="mx-auto bg-[#0033A0]/10 p-3 rounded-full w-fit">
                      <CheckCircle className="h-6 w-6 text-[#0033A0]" />
                    </div>
                    <h3 className="font-semibold text-lg">{t("purpose.commitment.transparency.title")}</h3>
                    <p className="text-gray-600 text-sm">{t("purpose.commitment.transparency.desc")}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <div className="mx-auto bg-[#0033A0]/10 p-3 rounded-full w-fit">
                      <Lock className="h-6 w-6 text-[#0033A0]" />
                    </div>
                    <h3 className="font-semibold text-lg">{t("purpose.commitment.security.title")}</h3>
                    <p className="text-gray-600 text-sm">{t("purpose.commitment.security.desc")}</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <div className="mx-auto bg-[#0033A0]/10 p-3 rounded-full w-fit">
                      <CheckCircle className="h-6 w-6 text-[#0033A0]" />
                    </div>
                    <h3 className="font-semibold text-lg">{t("purpose.commitment.affordability.title")}</h3>
                    <p className="text-gray-600 text-sm">{t("purpose.commitment.affordability.desc")}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-gray-700 italic mt-6">
              {t("purpose.commitment.tagline")}
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#0033A0] md:text-3xl mb-4">
            {t("purpose.cta.title")}
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            {t("purpose.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#00843D] hover:bg-[#00843D]/90 text-white">
              <Link href="/book-now">{t("cta.bookShipment")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-[#0033A0] text-[#0033A0]">
              <Link href="/contact">{t("nav.contact")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

