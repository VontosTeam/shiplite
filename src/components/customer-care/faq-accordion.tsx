"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQ_ITEMS = [
  {
    question: "How long does shipping take to the Philippines?",
    answer:
      "Shipping typically takes 7-10 business days from the time we receive your package. This may vary depending on customs clearance and local delivery conditions.",
  },
  {
    question: "What are your shipping rates?",
    answer:
      "Our shipping rates start from $55 for packages up to 5kg. We offer competitive rates based on weight categories. You can find detailed pricing information on our pricing page.",
  },
  {
    question: "How can I track my package?",
    answer:
      "You can track your package using the tracking number provided in your shipping confirmation email. Simply enter the number on our tracking page or contact our customer support team.",
  },
  {
    question: "What items are prohibited from shipping?",
    answer:
      "Prohibited items include dangerous goods, illegal substances, weapons, and certain food items. Please visit our prohibited items page for a complete list.",
  },
  {
    question: "Do you offer door-to-door delivery?",
    answer:
      "Yes, we offer door-to-door delivery services throughout the Philippines. Our local partners ensure your package reaches its final destination safely.",
  },
  {
    question: "What happens if my package is delayed?",
    answer:
      "If your package is delayed, we'll keep you updated via email. You can also contact our customer support team for real-time updates and assistance.",
  },
]

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {FAQ_ITEMS.map((item, index) => (
        <AccordionItem key={index} value={`faq-${index}`}>
          <AccordionTrigger className="text-left font-montserrat">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="font-poppins text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

