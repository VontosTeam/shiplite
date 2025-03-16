"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Package, Clock, DollarSign, MapPin, ArrowRight, Search } from "lucide-react"
import QuoteCalculator from "../components/quote-calculator"
import TestimonialCarousel from "../components/testimonial-carousel"
import FaqAccordion from "../components/faq-accordion"
import LanguageToggle from "../components/language-toggle"
import TrackingForm from "../components/tracking-form"
import FlightSchedule from "../components/flight-schedule"
import Logo from "../components/logo"
import { PhilippineCulturalElement } from "../components/cultural-elements"
import { ShippingRoutes } from "../components/shipping-routes"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"

export default function LandingPage() {
  const { t } = useLanguage()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = [
    { src: "/hero-image-1.jpg", alt: "Australia to Philippines shipping service" },
    { src: "/hero-image-2.jpg", alt: "International cargo shipping" },
    { src: "/hero-image-3.jpg", alt: "Premium shipping solutions" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 10000) // Change image every 10 seconds

    return () => clearInterval(timer)
  }, [])

  const benefits = [
    {
      icon: <DollarSign className="h-10 w-10 text-philippine-blue" />,
      title: t("why.rates"),
      description: t("why.ratesDesc"),
    },
    {
      icon: <Clock className="h-10 w-10 text-philippine-blue" />,
      title: t("why.speed"),
      description: t("why.speedDesc"),
    },
    {
      icon: <MapPin className="h-10 w-10 text-philippine-blue" />,
      title: t("why.locations"),
      description: t("why.locationsDesc"),
    },
    {
      icon: <Search className="h-10 w-10 text-philippine-blue" />,
      title: t("why.tracking"),
      description: t("why.trackingDesc"),
    },
    {
      icon: <Package className="h-10 w-10 text-philippine-blue" />,
      title: t("why.service"),
      description: t("why.serviceDesc"),
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-philippine-blue" />,
      title: t("why.charity"),
      description: t("why.charityDesc"),
    },
  ]

  const steps = [
    {
      step: "1",
      title: t("how.step1"),
      description: t("how.step1Desc"),
    },
    {
      step: "2",
      title: t("how.step2"),
      description: t("how.step2Desc"),
    },
    {
      step: "3",
      title: t("how.step3"),
      description: t("how.step3Desc"),
    },
    {
      step: "4",
      title: t("how.step4"),
      description: t("how.step4Desc"),
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Logo />
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="#" className="font-poppins text-gray-600 hover:text-australian-green whitespace-nowrap">
                {t("nav.purpose")}
              </Link>
              <Link href="#" className="font-poppins text-gray-600 hover:text-australian-green whitespace-nowrap">
                {t("nav.howItWorks")}
              </Link>
              <Link href="#" className="font-poppins text-gray-600 hover:text-australian-green whitespace-nowrap">
                {t("nav.pricing")}
              </Link>
              <Link href="#" className="font-poppins text-gray-600 hover:text-australian-green whitespace-nowrap">
                {t("nav.contact")}
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <Button size="sm" className="hidden md:inline-flex cta-button whitespace-nowrap">
                {t("cta.bookNow")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-philippine-blue to-philippine-blue/80 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/hero-banner.jpg"
            alt="Shipping background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold mb-4 leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-xl mb-4 font-montserrat font-bold text-australian-gold">
                {t("hero.subtitle")}
              </p>
              <p className="text-lg mb-8 font-poppins">
                {t("hero.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="primary-button whitespace-nowrap">
                  {t("cta.bookShipment")}
                </Button>
                <Button size="lg" variant="outline" className="outline-button whitespace-nowrap">
                  {t("cta.learnMore")}
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center relative z-10">
              <div className="relative w-full max-w-md h-[500px] bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={heroImages[currentImageIndex].src}
                    alt={heroImages[currentImageIndex].alt}
                    fill
                    className="object-cover rounded-lg transition-opacity duration-500"
                    priority
                  />
                </div>
                {/* Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto -mt-16 relative z-20">
            <Card className="shadow-xl">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{t("tracking.title")}</h2>
                    <TrackingForm />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">{t("quote.title")}</h2>
                    <QuoteCalculator />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Selling Points */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center text-3xl font-bold mb-12">{t("why.title")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 min-h-[2.5rem] flex items-center">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Element */}
      <PhilippineCulturalElement />

      {/* Flight Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center text-3xl font-bold mb-8">{t("schedule.title")}</h2>
          <FlightSchedule />
          <div className="text-center mt-8">
            <Button size="lg" className="primary-button whitespace-nowrap">
              {t("cta.bookShipment")}
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center text-3xl font-bold mb-12">{t("how.title")}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-philippine-blue text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 min-h-[2.5rem] flex items-center">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute transform translate-x-[150%]">
                    <ArrowRight className="h-8 w-8 text-philippine-blue/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="secondary-button whitespace-nowrap">
              {t("cta.learnMore")}
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Shipping Routes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center text-3xl font-bold mb-8">{t("routes.title")}</h2>
          <ShippingRoutes />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center text-3xl font-bold mb-8">{t("testimonials.title")}</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center text-3xl font-bold mb-8">{t("faq.title")}</h2>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-philippine-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-6">{t("cta.readyToShip")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-poppins">
            {t("cta.joinCustomers")}
          </p>
          <Button size="lg" className="primary-button whitespace-nowrap">
            {t("cta.bookShipment")}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Logo variant="light" className="mb-4" />
              <p className="text-gray-400 font-poppins">
                {t("footer.tagline")}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {t("footer.home")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {t("nav.purpose")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {t("nav.howItWorks")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {t("nav.pricing")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {t("footer.airCargo")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {t("footer.tracking")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {t("footer.locations")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {t("footer.prohibited")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ShipLite. {t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

