"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function LegalAgreements() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="space-y-6">
        {/* Introduction Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0033A0] font-montserrat mb-4">
            ShipLite Terms & Legal Agreements
          </h1>
          <p className="text-gray-600 text-lg font-poppins">
            By using our services, you agree to the terms outlined below.
          </p>
        </div>

        {/* Terms & Conditions */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#0033A0] font-montserrat mb-4">Terms & Conditions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="shipping-responsibility">
              <AccordionTrigger className="text-lg font-medium font-poppins">Shipping Responsibility</AccordionTrigger>
              <AccordionContent className="text-gray-700 font-poppins">
                <p className="mb-2">
                  The shipper is responsible for ensuring correct packaging, labelling, and declarations.
                </p>
                <p className="mb-2">Any misdeclaration may result in delays, additional charges, or legal penalties.</p>
                <p>ShipLite is not liable for customs delays or regulatory interventions.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="payment-fees">
              <AccordionTrigger className="text-lg font-medium font-poppins">Payment & Fees</AccordionTrigger>
              <AccordionContent className="text-gray-700 font-poppins">
                <p className="mb-2">Shipping fees must be paid before shipment processing.</p>
                <p className="mb-2">
                  Additional charges may apply due to weight discrepancies, regulatory fees, or return shipments.
                </p>
                <p>All payments are processed securely through our payment partners.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="liability-limitations">
              <AccordionTrigger className="text-lg font-medium font-poppins">Liability & Limitations</AccordionTrigger>
              <AccordionContent className="text-gray-700 font-poppins">
                <p className="mb-2">
                  ShipLite's liability is limited to the declared value of goods, subject to terms outlined in insurance
                  policies.
                </p>
                <p className="mb-2">
                  Force Majeure Clause: ShipLite is not responsible for delays due to natural disasters, pandemics, acts
                  of war, government actions, carrier disruptions, internet service failures, or any events beyond
                  operational control.
                </p>
                <p>
                  In cases of severe delays caused by carrier issues, extreme weather, customs processing, or unforeseen
                  disruptions, ShipLite will notify the customer of expected resolution timelines.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="website-security">
              <AccordionTrigger className="text-lg font-medium font-poppins">
                Website Use & Data Security
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 font-poppins">
                <p className="mb-2">
                  Customers agree to use the ShipLite website for legal and authorised purposes only.
                </p>
                <p className="mb-2">
                  ShipLite is not responsible for website downtime due to internet disruptions, cyberattacks,
                  maintenance, or force majeure events.
                </p>
                <p>Users must not engage in hacking, data scraping, or any activity that disrupts site operations.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Privacy Policy */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#0033A0] font-montserrat mb-4">Privacy Policy</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="data-use">
              <AccordionTrigger className="text-lg font-medium font-poppins">How We Use Your Data</AccordionTrigger>
              <AccordionContent className="text-gray-700 font-poppins">
                <p className="mb-2">
                  ShipLite collects personal data (e.g., name, contact info, shipment details) for shipping purposes
                  only.
                </p>
                <p className="mb-2">Data is protected under Australia's Privacy Act 1988.</p>
                <p>ShipLite will not sell or share customer data with third parties for profit.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="security-compliance">
              <AccordionTrigger className="text-lg font-medium font-poppins">Security & Compliance</AccordionTrigger>
              <AccordionContent className="text-gray-700 font-poppins">
                <p className="mb-2">
                  ShipLite will ensure customer data privacy and security, utilising industry-standard encryption and
                  protection provided by its cloud server provider.
                </p>
                <p className="mb-2">Customer data will be stored in locations permitted by Australian authorities.</p>
                <p>We comply with all relevant data protection regulations in Australia and the Philippines.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customer-rights">
              <AccordionTrigger className="text-lg font-medium font-poppins">
                Customer Rights & Data Deletion
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 font-poppins">
                <p className="mb-2">
                  Customers can request data deletion or modification by contacting ShipLite's Data Protection Officer
                  (DPO).
                </p>
                <p className="mb-2">You have the right to access your personal data that we hold.</p>
                <p>
                  For full privacy details, refer to the Australian Privacy Principles at{" "}
                  <a href="https://www.oaic.gov.au" className="text-[#0033A0] underline">
                    https://www.oaic.gov.au
                  </a>
                  .
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Informational Notice */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-gray-700 font-poppins mb-6">
            <p>
              These terms and conditions are provided for your reference. You will be asked to accept these terms during
              the booking process.
            </p>
          </div>
          <Button
            onClick={() => window.history.back()}
            className="w-full md:w-auto bg-[#0033A0] hover:bg-[#002580] text-white font-poppins"
          >
            Return to Previous Page
          </Button>
        </div>
      </div>
    </div>
  )
}

