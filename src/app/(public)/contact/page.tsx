import { ClientContactForm } from "@/lib/utils/client-wrappers"
import ContactInfo from "@/components/contact/contact-info"
import LocationMap from "@/components/contact/location-map"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | ShipLite",
  description: "Get in touch with ShipLite customer support for assistance with your shipping needs.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#0033A0] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="font-montserrat text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
            Get in Touch with ShipLite
          </h1>
          <p className="font-poppins text-lg md:text-xl max-w-2xl animate-slide-up">
            We're here to help with all your shipping needs. Reach out to our customer support team for assistance.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ContactInfo />

          {/* Contact Form */}
          <div className="w-full max-w-2xl mx-auto">
            <ClientContactForm />
          </div>
        </div>

        {/* Store & Office Locations */}
        <div className="mt-16">
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-6 text-[#0033A0]">
            Store & Office Locations
          </h2>
          <p className="font-poppins mb-8">
            Visit our ShipLite offices and drop-off points across Australia and the Philippines.
          </p>
          <LocationMap />
        </div>
      </div>
    </div>
  )
}

