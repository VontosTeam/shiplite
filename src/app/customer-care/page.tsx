import type { Metadata } from "next"
import CustomerCareHeader from "@/components/customer-care/customer-care-header"
import ContactOptions from "@/components/customer-care/contact-options"
import FaqSearch from "@/components/customer-care/faq-search"
import FaqAccordion from "@/components/customer-care/faq-accordion"
import LiveSupportCta from "@/components/customer-care/live-support-cta"

export const metadata: Metadata = {
  title: "Customer Care & FAQs | ShipLite",
  description: "Get instant support and find answers to common questions about ShipLite services.",
}

export default function CustomerCarePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <CustomerCareHeader />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Contact options */}
          <div className="lg:col-span-1">
            <ContactOptions />
          </div>

          {/* Right column - FAQ search and accordions */}
          <div className="lg:col-span-2">
            <FaqSearch />
            <FaqAccordion />
            <LiveSupportCta />
          </div>
        </div>
      </div>
    </main>
  )
}

