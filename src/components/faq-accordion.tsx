"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does shipping take from Australia to the Philippines?",
    answer:
      "Standard shipping typically takes 5-10 business days, while our express service can deliver in 3-5 business days. Actual delivery times may vary based on customs clearance and the specific destination in the Philippines.",
  },
  {
    question: "What items are prohibited from shipping?",
    answer:
      "Prohibited items include dangerous goods, flammable materials, illegal substances, firearms, certain food items, and currency. Please contact our customer service for a complete list of restricted items or if you have questions about specific items.",
  },
  {
    question: "Do I need to handle customs paperwork?",
    answer:
      "No, ShipLite handles all customs documentation and clearance procedures for you. We'll guide you through providing the necessary information, and our team will take care of the rest to ensure smooth processing.",
  },
  {
    question: "How can I track my shipment?",
    answer:
      "Once your shipment is processed, you'll receive a tracking number via email. You can use this number on our website or mobile app to track your package in real-time throughout its journey from Australia to the Philippines.",
  },
  {
    question: "What happens if my package is lost or damaged?",
    answer:
      "All ShipLite shipments include basic insurance coverage. If your package is lost or damaged, please contact our customer service within 7 days of the expected delivery date. We offer compensation based on our shipping terms and conditions.",
  },
  {
    question: "Do you offer pickup services across all of Australia?",
    answer:
      "Yes, we offer pickup services in all major Australian cities and most suburban and regional areas. You can check if your location is covered during the booking process or by contacting our customer service team.",
  },
]

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

