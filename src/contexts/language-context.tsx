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
    "footer.rights": "All rights reserved",

    // Our Purpose Page
    "purpose.title": "Our Purpose",
    "purpose.subtitle": "Making sending gifts and essentials to your loved ones in the Philippines simple, efficient, and stress-free.",
    "purpose.atShiplite.title": "At ShipLite",
    "purpose.atShiplite.description": "Our purpose is to make sending gifts and essentials to your loved ones in the Philippines simple, efficient, and stress-free. We understand Filipino culture, where spontaneity often means sending packages at short notice. That's why our air cargo service is designed to deliver swiftly and reliably, ensuring your thoughtful gifts arrive exactly when they're needed most.",
    "purpose.airCargo.title": "Why Choose Air Cargo?",
    "purpose.airCargo.description": "Air cargo is faster, more reliable, and more accessible than traditional Balikbayan box shipping. It aligns perfectly with the fast-paced lives of Filipinos, accommodating last-minute yet meaningful gestures.",
    "purpose.airCargo.feature1": "Faster delivery times - days instead of months",
    "purpose.airCargo.feature2": "More reliable tracking and delivery confirmation",
    "purpose.airCargo.feature3": "Enhanced security and handling for your valuable items",
    "purpose.comparison.title": "Air Cargo vs. Sea Cargo",
    "purpose.comparison.subtitle": "See why our customers choose air shipping",
    "purpose.comparison.delivery.title": "Delivery Time",
    "purpose.comparison.delivery.air": "3-7 days",
    "purpose.comparison.delivery.sea": "45-60 days",
    "purpose.comparison.tracking.title": "Tracking & Updates",
    "purpose.comparison.tracking.air": "Real-time",
    "purpose.comparison.tracking.air.desc": "With SMS & app updates",
    "purpose.comparison.tracking.sea": "Limited",
    "purpose.comparison.tracking.sea.desc": "Often delayed or unavailable",
    "purpose.comparison.perfect.title": "Perfect For",
    "purpose.comparison.perfect.air": "Urgent Needs",
    "purpose.comparison.perfect.air.desc": "Time-sensitive gifts & essentials",
    "purpose.comparison.perfect.sea": "Bulk Items",
    "purpose.comparison.perfect.sea.desc": "Non-urgent large shipments",
    "purpose.commitment.title": "Our Commitment",
    "purpose.commitment.transparency.title": "Transparency",
    "purpose.commitment.transparency.desc": "No hidden fees, clear pricing, and upfront timelines.",
    "purpose.commitment.security.title": "Security",
    "purpose.commitment.security.desc": "Every parcel is handled with care and tracked every step of the way.",
    "purpose.commitment.affordability.title": "Affordability",
    "purpose.commitment.affordability.desc": "Cost-effective rates without compromising speed and reliability.",
    "purpose.commitment.tagline": "With ShipLite, you can send love across distances with confidence and ease.",
    "purpose.cta.title": "Ready to Send Your Package?",
    "purpose.cta.description": "Experience the ShipLite difference today. Fast, secure, and affordable shipping from Australia to the Philippines."
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
    "footer.rights": "Lahat ng karapatan ay nakalaan",

    // Our Purpose Page
    "purpose.title": "Aming Layunin",
    "purpose.subtitle": "Ginagawang simple, mabisa, at walang alalahanin ang pagpapadala ng mga regalo at mahahalagang bagay sa inyong mga mahal sa buhay sa Pilipinas.",
    "purpose.atShiplite.title": "Sa ShipLite",
    "purpose.atShiplite.description": "Ang aming layunin ay gawing simple, mabisa, at walang alalahanin ang pagpapadala ng mga regalo at mahahalagang bagay sa inyong mga mahal sa buhay sa Pilipinas. Nauunawaan namin ang kulturang Pilipino, kung saan ang biglaang pagpapadala ay karaniwan. Kaya ang aming serbisyong air cargo ay dinisenyo upang maghatid ng mabilis at maaasahan.",
    "purpose.airCargo.title": "Bakit Air Cargo?",
    "purpose.airCargo.description": "Ang air cargo ay mas mabilis, mas maaasahan, at mas madaling gamitin kumpara sa tradisyonal na Balikbayan box. Ito ay angkop sa mabilis na pamumuhay ng mga Pilipino.",
    "purpose.airCargo.feature1": "Mas mabilis na delivery - araw lang hindi buwan",
    "purpose.airCargo.feature2": "Mas maaasahang tracking at kumpirmasyon",
    "purpose.airCargo.feature3": "Pinahusay na seguridad para sa inyong mga mahalaga",
    "purpose.comparison.title": "Air Cargo vs. Sea Cargo",
    "purpose.comparison.subtitle": "Alamin kung bakit pinipili ng aming mga customer ang air shipping",
    "purpose.comparison.delivery.title": "Tagal ng Delivery",
    "purpose.comparison.delivery.air": "3-7 araw",
    "purpose.comparison.delivery.sea": "45-60 araw",
    "purpose.comparison.tracking.title": "Tracking at Updates",
    "purpose.comparison.tracking.air": "Real-time",
    "purpose.comparison.tracking.air.desc": "May SMS at app updates",
    "purpose.comparison.tracking.sea": "Limitado",
    "purpose.comparison.tracking.sea.desc": "Madalas na delayed o hindi available",
    "purpose.comparison.perfect.title": "Angkop Para Sa",
    "purpose.comparison.perfect.air": "Mga Urgent",
    "purpose.comparison.perfect.air.desc": "Time-sensitive na mga regalo",
    "purpose.comparison.perfect.sea": "Malalaking Bagay",
    "purpose.comparison.perfect.sea.desc": "Hindi urgent na mga padala",
    "purpose.commitment.title": "Aming Pangako",
    "purpose.commitment.transparency.title": "Transparency",
    "purpose.commitment.transparency.desc": "Walang hidden fees, malinaw na presyo at timeline.",
    "purpose.commitment.security.title": "Seguridad",
    "purpose.commitment.security.desc": "Bawat padala ay inaalagaan at sinusubaybayan.",
    "purpose.commitment.affordability.title": "Abot-kaya",
    "purpose.commitment.affordability.desc": "Sulit na presyo nang hindi kinokompromiso ang bilis at kalidad.",
    "purpose.commitment.tagline": "Sa ShipLite, makakapagpadala ka ng pagmamahal nang may tiwala at ginhawa.",
    "purpose.cta.title": "Handa na bang Magpadala?",
    "purpose.cta.description": "Subukan ang ShipLite ngayon. Mabilis, ligtas, at abot-kayang pagpapadala mula Australia papuntang Pilipinas."
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
    "footer.rights": "Tanang katungod gitagana",

    // Our Purpose Page
    "purpose.title": "Among Tumong",
    "purpose.subtitle": "Paghimo og simple, epektibo, ug walay kabalaka nga pagpadala og mga regalo ug importante nga butang sa imong mga minahal sa Pilipinas.",
    "purpose.atShiplite.title": "Sa ShipLite",
    "purpose.atShiplite.description": "Among tumong mao ang paghimo og simple, epektibo, ug walay kabalaka nga pagpadala og mga regalo ug importante nga butang sa imong mga minahal sa Pilipinas. Among nasabtan ang kulturang Pilipino, diin ang kalit nga pagpadala sagad mahitabo. Mao nga among air cargo service gidesinyo aron maghatod og paspas ug kasaligan.",
    "purpose.airCargo.title": "Nganong Air Cargo?",
    "purpose.airCargo.description": "Ang air cargo mas paspas, mas kasaligan, ug mas sayon gamiton kompara sa tradisyonal nga Balikbayan box. Kini angayan sa paspas nga kinabuhi sa mga Pilipino.",
    "purpose.airCargo.feature1": "Mas paspas nga delivery - adlaw lang dili bulan",
    "purpose.airCargo.feature2": "Mas kasaligan nga tracking ug kumpirmasyon",
    "purpose.airCargo.feature3": "Gipaayo nga seguridad para sa imong mga importante",
    "purpose.comparison.title": "Air Cargo vs. Sea Cargo",
    "purpose.comparison.subtitle": "Tan-awa nganong gipili sa among mga customer ang air shipping",
    "purpose.comparison.delivery.title": "Kadugayon sa Delivery",
    "purpose.comparison.delivery.air": "3-7 ka adlaw",
    "purpose.comparison.delivery.sea": "45-60 ka adlaw",
    "purpose.comparison.tracking.title": "Tracking ug Updates",
    "purpose.comparison.tracking.air": "Real-time",
    "purpose.comparison.tracking.air.desc": "May SMS ug app updates",
    "purpose.comparison.tracking.sea": "Limitado",
    "purpose.comparison.tracking.sea.desc": "Kasagaran delayed o wala",
    "purpose.comparison.perfect.title": "Angayan Para Sa",
    "purpose.comparison.perfect.air": "Mga Urgent",
    "purpose.comparison.perfect.air.desc": "Time-sensitive nga mga regalo",
    "purpose.comparison.perfect.sea": "Dagkong Butang",
    "purpose.comparison.perfect.sea.desc": "Dili urgent nga mga padala",
    "purpose.commitment.title": "Among Saad",
    "purpose.commitment.transparency.title": "Transparency",
    "purpose.commitment.transparency.desc": "Walay hidden fees, klaro nga presyo ug timeline.",
    "purpose.commitment.security.title": "Seguridad",
    "purpose.commitment.security.desc": "Matag padala giatiman ug gisubay.",
    "purpose.commitment.affordability.title": "Barato",
    "purpose.commitment.affordability.desc": "Sulit nga presyo nga wala gikompromiso ang katulin ug kalidad.",
    "purpose.commitment.tagline": "Sa ShipLite, makapadala ka og gugma nga may pagsalig ug kasayon.",
    "purpose.cta.title": "Andam na ba Mopadala?",
    "purpose.cta.description": "Sulayi ang ShipLite karon. Paspas, luwas, ug barato nga pagpadala gikan sa Australia padulong sa Pilipinas."
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