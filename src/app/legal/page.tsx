import type { Metadata } from "next"
import LegalAgreements from "./legal-agreements"

export const metadata: Metadata = {
  title: "Legal Notices & Agreements | ShipLite",
  description: "ShipLite terms of service, privacy policy, and legal agreements for shipping services.",
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <LegalAgreements />
    </div>
  )
}

