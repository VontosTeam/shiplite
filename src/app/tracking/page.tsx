import Link from "next/link"
import TrackingTimeline from "./components/tracking-timeline"
import TrackingForm from "./components/tracking-form"
import TrackingInfo from "./components/tracking-info"
import NotificationPreferences from "./components/notification-preferences"

export default function TrackingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Shipment Tracking</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Track your ShipLite package in real-time with our advanced tracking system. Get detailed updates at every
          stage of your shipment's journey.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-12 bg-white rounded-lg shadow-md p-6">
        <TrackingForm />
      </div>

      {/* This section would conditionally render based on if a tracking number is provided */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
        <TrackingInfo />
        <TrackingTimeline />
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <NotificationPreferences />
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Need Help With Your Shipment?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 bg-[#0033A0] text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center px-4 py-2 border border-[#0033A0] text-[#0033A0] rounded-md hover:bg-blue-50 transition-colors"
          >
            View FAQs
          </Link>
        </div>
      </div>
    </div>
  )
}

