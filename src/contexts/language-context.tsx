"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = {
  name: string
  code: string
  flag: string
}

type Translations = {
  [key: string]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    // Navigation
    "nav.purpose": "Our Purpose",
    "nav.howItWorks": "How It Works",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.title": "The Smart Way to Send Gifts & Essentials to the Philippines",
    "hero.subtitle": "ShipFast, ShipSafe, ShipLite",
    "hero.description": "Send packages to your loved ones with ShipLite's affordable and secure shipping service. Door-to-door delivery you can trust.",
    
    // CTAs
    "cta.bookNow": "Book Now",
    "cta.bookShipment": "Book a Shipment",
    "cta.learnMore": "Learn More",
    "cta.readyToShip": "Ready to Ship with ShipLite?",
    "cta.joinCustomers": "Join thousands of satisfied customers who trust ShipLite for their shipping needs.",
    
    // Tracking Section
    "tracking.title": "Track Your Shipment",
    "tracking.placeholder": "Enter tracking number",
    "tracking.button": "Track",
    "quote.title": "Get a Quick Quote",
    
    // Why Choose Section
    "why.title": "Why Choose ShipLite?",
    "why.rates": "Affordable Air Cargo",
    "why.ratesDesc": "Save up to 30% with our competitive rates",
    "why.speed": "Fast Delivery",
    "why.speedDesc": "Express delivery in 3-5 business days",
    "why.locations": "Multiple Locations",
    "why.locationsDesc": "Convenient drop-off points across Australia",
    "why.tracking": "Real-time Tracking",
    "why.trackingDesc": "Track your package every step of the way",
    "why.service": "Door-to-Door",
    "why.serviceDesc": "Direct delivery to any Philippine address",
    "why.charity": "Charity Discounts",
    "why.charityDesc": "Special rates for charity shipments",
    
    // Cultural Section
    "cultural.title": "Connecting You to Home",
    "cultural.description": "We understand the importance of staying connected with your loved ones in the Philippines. ShipLite helps you share a piece of Australia with your family back home.",
    "cultural.balikbayan": "Balikbayan Boxes",
    "cultural.padala": "Padala Services",
    "cultural.pasalubong": "Pasalubong Delivery",
    
    // How It Works
    "how.title": "How It Works",
    "how.step1": "Pack Items",
    "how.step1Desc": "Use boxes from local stores",
    "how.step2": "Book Online",
    "how.step2Desc": "Fill the booking form",
    "how.step3": "Drop Off",
    "how.step3Desc": "Use partner locations",
    "how.step4": "Track & Receive",
    "how.step4Desc": "Monitor delivery status",
    
    // Routes
    "routes.title": "Popular Routes",
    "routes.viewRates": "View Rates",
    
    // Schedule
    "schedule.title": "Flight Schedule",
    "schedule.dates": "Departures & Cut-off Dates",
    
    // Testimonials
    "testimonials.title": "Customer Reviews",
    
    // FAQ
    "faq.title": "FAQs",
    
    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.home": "Home",
    "footer.airCargo": "Air Cargo",
    "footer.tracking": "Tracking",
    "footer.locations": "Drop-off Locations",
    "footer.prohibited": "Prohibited Items",
    "footer.tagline": "Your trusted shipping partner",
    "footer.rights": "All rights reserved"
  },
  tl: {
    // Navigation
    "nav.purpose": "Layunin",
    "nav.howItWorks": "Proseso",
    "nav.pricing": "Presyo",
    "nav.contact": "Kontak",
    
    // Hero Section
    "hero.title": "Matalinong Pagpapadala sa Pilipinas",
    "hero.subtitle": "Mabilis, Ligtas, ShipLite",
    "hero.description": "Magpadala ng mga pakete sa iyong mga mahal sa buhay. Maaasahan at abot-kayang serbisyo hanggang sa inyong tahanan.",
    
    // CTAs
    "cta.bookNow": "Book Na",
    "cta.bookShipment": "Magpadala",
    "cta.learnMore": "Karagdagan",
    "cta.readyToShip": "Handa na bang Magpadala?",
    "cta.joinCustomers": "Sumali sa libu-libong kuntentong customers na nagtitiwala sa ShipLite.",
    
    // Tracking Section
    "tracking.title": "Track ang Padala",
    "tracking.placeholder": "Tracking number",
    "tracking.button": "Track",
    "quote.title": "Kunin ang Quote",
    
    // Why Choose Section
    "why.title": "Bakit ShipLite?",
    "why.rates": "Abot-kayang Presyo",
    "why.ratesDesc": "Hanggang 30% mas mura",
    "why.speed": "Mabilis Dumating",
    "why.speedDesc": "3-5 araw na delivery",
    "why.locations": "Maraming Lokasyon",
    "why.locationsDesc": "Madaling drop-off points",
    "why.tracking": "Real-time Track",
    "why.trackingDesc": "Sundan ang iyong padala",
    "why.service": "Door-to-Door",
    "why.serviceDesc": "Hatid sa tahanan",
    "why.charity": "Diskwento",
    "why.charityDesc": "Para sa mga donasyon",
    
    // Cultural Section
    "cultural.title": "Umuuwi Sa Pamilya",
    "cultural.description": "Nauunawaan namin ang kahalagahan ng pananatiling konektado sa inyong mga mahal sa buhay sa Pilipinas. Tumutulong ang ShipLite na makapagpadala ng mga regalo mula sa Australia.",
    "cultural.balikbayan": "Balikbayan Box",
    "cultural.padala": "Serbisyong Padala",
    "cultural.pasalubong": "Pagpapadala ng Pasalubong",
    
    // How It Works
    "how.title": "Paano Ito",
    "how.step1": "Mag-empake",
    "how.step1Desc": "Gumamit ng kahon",
    "how.step2": "Mag-book",
    "how.step2Desc": "Punan ang form",
    "how.step3": "I-drop Off",
    "how.step3Desc": "Sa mga partner",
    "how.step4": "Track",
    "how.step4Desc": "Sundan ang padala",
    
    // Routes
    "routes.title": "Mga Ruta",
    "routes.viewRates": "Tingnan",
    
    // Schedule
    "schedule.title": "Iskedyul",
    "schedule.dates": "Mga Oras ng Lipad",
    
    // Testimonials
    "testimonials.title": "Mga Review",
    
    // FAQ
    "faq.title": "FAQ",
    
    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.services": "Serbisyo",
    "footer.home": "Home",
    "footer.airCargo": "Air Cargo",
    "footer.tracking": "Tracking",
    "footer.locations": "Mga Lokasyon",
    "footer.prohibited": "Bawal na Items",
    "footer.tagline": "Kasama mo sa pagpapadala",
    "footer.rights": "Lahat ng karapatan ay nakalaan"
  },
  ceb: {
    // Navigation
    "nav.purpose": "Tumong",
    "nav.howItWorks": "Proseso",
    "nav.pricing": "Presyo",
    "nav.contact": "Kontak",
    
    // Hero Section
    "hero.title": "Maayong Pagpadala sa Pilipinas",
    "hero.subtitle": "Paspas, Luwas, ShipLite",
    "hero.description": "Ipadala ang imong mga pakete sa imong mga minahal. Kasaligan ug barato nga serbisyo hangtod sa inyong balay.",
    
    // CTAs
    "cta.bookNow": "Book Na",
    "cta.bookShipment": "Magpadala",
    "cta.learnMore": "Dugang Pa",
    "cta.readyToShip": "Andam na ba Magpadala?",
    "cta.joinCustomers": "Apil sa liboan ka kontentong customers nga nagsalig sa ShipLite.",
    
    // Tracking Section
    "tracking.title": "Track ang Padala",
    "tracking.placeholder": "Tracking number",
    "tracking.button": "Track",
    "quote.title": "Kuha og Quote",
    
    // Why Choose Section
    "why.title": "Ngano ShipLite?",
    "why.rates": "Barato nga Presyo",
    "why.ratesDesc": "Hangtod 30% mas barato",
    "why.speed": "Paspas Moabot",
    "why.speedDesc": "3-5 ka adlaw delivery",
    "why.locations": "Daghang Lugar",
    "why.locationsDesc": "Sayon nga drop-off",
    "why.tracking": "Real-time Track",
    "why.trackingDesc": "Sunda ang padala",
    "why.service": "Door-to-Door",
    "why.serviceDesc": "Hatod sa balay",
    "why.charity": "Diskwento",
    "why.charityDesc": "Para sa donasyon",
    
    // Cultural Section
    "cultural.title": "Nagdugtong sa Panimalay",
    "cultural.description": "Among nasabtan ang importansya sa pagpabilin nga konektado sa imong mga minahal sa Pilipinas. Ang ShipLite motabang nimo sa pagpadala og mga regalo gikan sa Australia.",
    "cultural.balikbayan": "Balikbayan Box",
    "cultural.padala": "Serbisyo sa Padala",
    "cultural.pasalubong": "Pagpadala og Pasalubong",
    
    // How It Works
    "how.title": "Unsaon Kini",
    "how.step1": "Pag-empake",
    "how.step1Desc": "Gamit og kahon",
    "how.step2": "Pag-book",
    "how.step2Desc": "Sulati ang form",
    "how.step3": "I-drop Off",
    "how.step3Desc": "Sa mga partner",
    "how.step4": "Track",
    "how.step4Desc": "Sunda ang padala",
    
    // Routes
    "routes.title": "Mga Ruta",
    "routes.viewRates": "Tan-awa",
    
    // Schedule
    "schedule.title": "Iskedyul",
    "schedule.dates": "Oras sa Paglupad",
    
    // Testimonials
    "testimonials.title": "Mga Review",
    
    // FAQ
    "faq.title": "FAQ",
    
    // Footer
    "footer.quickLinks": "Quick Links",
    "footer.services": "Serbisyo",
    "footer.home": "Home",
    "footer.airCargo": "Air Cargo",
    "footer.tracking": "Tracking",
    "footer.locations": "Mga Lugar",
    "footer.prohibited": "Ginadili nga Items",
    "footer.tagline": "Kauban nimo sa pagpadala",
    "footer.rights": "Tanang katungod gitagana"
  }
}

type LanguageContextType = {
  currentLanguage: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const languages: Language[] = [
  { name: "English", code: "en", flag: "🇬🇧" },
  { name: "Tagalog", code: "tl", flag: "🇵🇭" },
  { name: "Bisaya", code: "ceb", flag: "🇵🇭" },
]

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      const language = languages.find(lang => lang.code === savedLanguage)
      if (language) {
        setCurrentLanguage(language)
      }
    }
  }, [])

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language)
    localStorage.setItem("language", language.code)
  }

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations.en[key] || key
  }

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export { languages } 