"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Sample popular FAQs
const popularFaqs = [
  "How do I track my shipment?",
  "What are the shipping rates to the Philippines?",
  "How long does shipping take?",
  "What items are prohibited for shipping?",
  "How do I book a shipment?",
]

// Sample FAQ data for search
const faqCategories = {
  shipping: [
    {
      question: "What are the shipping rates to the Philippines?",
      answer:
        "Our shipping rates start at $55 for packages up to 5kg. For packages up to 10kg, the rate is $85. For up to 15kg, it's $105. For up to 20kg, it's $120. For up to 30kg, it's $150. For packages over 30kg, we charge $5 per additional kg.",
    },
    {
      question: "How do I calculate the shipping cost for my package?",
      answer:
        "You can calculate your shipping cost based on the weight of your package. We recommend using our online calculator on the Pricing page, or you can contact our customer support for assistance.",
    },
    // Other shipping FAQs...
  ],
  tracking: [
    {
      question: "How do I track my shipment?",
      answer:
        "You can track your shipment by entering your tracking number on our website's tracking page. You'll also receive tracking updates via email, SMS, or WhatsApp if you've opted for notifications.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Air cargo typically takes 5-7 business days from pickup to delivery. Seasonal sea cargo can take 30-45 days. Actual delivery times may vary based on customs clearance and local delivery conditions in the Philippines.",
    },
    // Other tracking FAQs...
  ],
  // Other categories...
}

export default function FaqSearch() {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchResults, setSearchResults] = useState<{ question: string; answer: string }[]>([])
  const [showResults, setShowResults] = useState(false)

  // Filter suggestions based on query
  useEffect(() => {
    if (query.length > 1) {
      const filtered = popularFaqs.filter((faq) => faq.toLowerCase().includes(query.toLowerCase()))
      setSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [query])

  const handleSearch = () => {
    if (query.trim() === "") return

    // Filter all FAQs across categories
    const allFaqs = Object.values(faqCategories).flat()
    const results = allFaqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(query.toLowerCase()) ||
        faq.answer.toLowerCase().includes(query.toLowerCase()),
    )

    setSearchResults(results)
    setShowResults(true)
    setShowSuggestions(false)
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold font-montserrat text-[#0033A0] mb-4">
        Frequently Asked Questions
      </h2>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search for answers..."
          className="pl-10"
        />
      </div>
    </div>
  )
}

