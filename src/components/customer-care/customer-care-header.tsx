"use client"

import { HelpCircle } from "lucide-react"

export default function CustomerCareHeader() {
  return (
    <div className="bg-[#0033A0] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex items-center justify-center mb-6">
          <div className="rounded-full bg-white/10 p-4">
            <HelpCircle className="h-8 w-8" />
          </div>
        </div>
        <h1 className="font-montserrat text-3xl md:text-5xl font-bold text-center mb-4">
          How Can We Help You?
        </h1>
        <p className="font-poppins text-lg md:text-xl text-center max-w-2xl mx-auto text-white/80">
          Find answers to common questions or get in touch with our customer support team.
        </p>
      </div>
    </div>
  )
}

