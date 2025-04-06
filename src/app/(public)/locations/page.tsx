import type { Metadata } from "next"
import StoreLocator from "@/components/store-locator"

export const metadata: Metadata = {
  title: "Store Partners & Drop-Off Locations | ShipLite",
  description: "Find ShipLite drop-off locations near you for convenient package shipping to the Philippines.",
}

export default function StoreLocationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <StoreLocator />
    </main>
  )
}

