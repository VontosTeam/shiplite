"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, Bomb, Cigarette, Flame, Battery, Pizza, Check, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ProhibitedItemsPage() {
  const [acknowledged, setAcknowledged] = useState(false)

  const prohibitedItems = [
    {
      icon: <Bomb className="h-10 w-10 text-red-500" />,
      title: "Explosives & Firearms",
      description: "Includes ammunition, fireworks, and weapons of any kind.",
    },
    {
      icon: <Cigarette className="h-10 w-10 text-red-500" />,
      title: "Illegal Drugs & Narcotics",
      description: "All illegal substances and non-prescribed medications.",
    },
    {
      icon: <Flame className="h-10 w-10 text-red-500" />,
      title: "Flammable Liquids & Gases",
      description: "Includes aerosols, lighter fluid, and compressed gases.",
    },
    {
      icon: <Pizza className="h-10 w-10 text-red-500" />,
      title: "Perishable Food Items",
      description: "Fresh food that can spoil during transit.",
    },
    {
      icon: <Battery className="h-10 w-10 text-red-500" />,
      title: "Lithium Batteries",
      description: "When not properly packed according to regulations.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-red-500" />,
      title: "Counterfeit Goods",
      description: "Fake branded items and intellectual property violations.",
    },
  ]

  const restrictedItems = [
    {
      title: "Electronics",
      condition: "Must meet battery guidelines and be properly packaged",
      details:
        "Electronic devices containing batteries must be turned off and packaged to prevent accidental activation. Lithium-ion batteries must be installed in the device and cannot exceed 100Wh. Spare batteries must be in carry-on baggage only.",
    },
    {
      title: "Medications & Medical Devices",
      condition: "Prescription medications require proper documentation",
      details:
        "Prescription medications must be in original packaging with visible prescription labels. A copy of the prescription or doctor's note may be required. Over-the-counter medications are generally allowed in reasonable quantities for personal use.",
    },
    {
      title: "Cosmetics & Toiletries",
      condition: "Liquid restrictions apply",
      details:
        "Liquids, aerosols, gels, creams, and pastes must be in containers of 100ml or less. These containers must be placed in a clear, resealable plastic bag. Total quantity should not exceed 1 liter.",
    },
    {
      title: "Sporting Equipment",
      condition: "Size and weight restrictions apply",
      details:
        "Sports equipment must comply with size and weight restrictions. Items with sharp edges or points must be properly sheathed and packaged. Golf clubs, baseball bats, and similar items may require special handling.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat text-[#0033A0] mb-4">
          Know What You Can & Cannot Ship
        </h1>
        <p className="text-lg text-gray-600 font-poppins max-w-3xl mx-auto">
          Ensure your package complies with international shipping laws. Review our prohibited and regulated items
          before booking your shipment.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="mb-10 border-[#0033A0]/20">
          <CardHeader className="bg-[#0033A0] text-white rounded-t-lg">
            <CardTitle className="font-montserrat text-2xl flex items-center">
              <AlertTriangle className="mr-2 h-6 w-6" /> Prohibited Items
            </CardTitle>
            <CardDescription className="text-white/80 font-poppins">
              The following items are strictly prohibited and cannot be shipped under any circumstances
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prohibitedItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex flex-col items-center text-center p-4 bg-red-50 rounded-lg border border-red-100"
                >
                  <div className="mb-3 p-3 bg-white rounded-full shadow-sm">{item.icon}</div>
                  <h3 className="font-montserrat font-semibold text-lg mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-poppins">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card className="mb-10 border-[#FFCD00]/30">
          <CardHeader className="bg-[#FFCD00] text-[#0033A0] rounded-t-lg">
            <CardTitle className="font-montserrat text-2xl flex items-center">
              <AlertTriangle className="mr-2 h-6 w-6" /> Restricted Items
            </CardTitle>
            <CardDescription className="text-[#0033A0]/80 font-poppins">
              These items can be shipped only if they meet specific conditions and requirements
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              {restrictedItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#0033A0]/10">
                  <AccordionTrigger className="font-montserrat text-lg text-[#0033A0] hover:text-[#0033A0]/80 py-4">
                    <div className="flex items-start text-left">
                      <div className="mr-3 mt-1 bg-[#FFCD00] rounded-full p-1">
                        <ChevronRight className="h-4 w-4 text-[#0033A0]" />
                      </div>
                      <div>
                        <div className="font-semibold">{item.title}</div>
                        <div className="text-sm font-poppins text-gray-600 mt-1">{item.condition}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="font-poppins text-gray-700 pl-10 pr-4">{item.details}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Card className="mb-10 border-gray-200 bg-gray-50">
          <CardHeader>
            <CardTitle className="font-montserrat text-xl text-[#0033A0]">Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-poppins text-gray-700 space-y-4">
              <p>
                <span className="font-semibold">IATA Regulations:</span> All shipments must comply with International
                Air Transport Association (IATA) regulations for air cargo.
              </p>
              <p>
                <span className="font-semibold">Philippine Customs:</span> Items entering the Philippines must comply
                with Bureau of Customs (BOC) regulations. For official BOC guidelines, visit{" "}
                <a href="https://customs.gov.ph" className="text-[#0033A0] underline">
                  https://customs.gov.ph
                </a>
              </p>
              <p>
                <span className="font-semibold">Balikbayan Box Regulations:</span> ShipLite follows Philippine
                Balikbayan Box regulations, which include a declared value limit of PHP 150,000 for tax-free shipments.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
      >
        <div className="flex items-start space-x-3 mb-6">
          <Checkbox
            id="agreement"
            checked={acknowledged}
            onCheckedChange={(checked) => setAcknowledged(checked === true)}
            className={cn("h-5 w-5 mt-1", acknowledged ? "border-[#0033A0] bg-[#0033A0]" : "border-gray-300")}
          />
          <div>
            <label htmlFor="agreement" className="font-poppins text-gray-700 cursor-pointer">
              I acknowledge that I have read and understood the shipping restrictions. I confirm that my shipment does
              not contain any prohibited items, and any restricted items comply with the specified conditions.
            </label>
            <p className="text-sm text-gray-500 mt-2 font-poppins">
              By checking this box, I accept full responsibility for the contents of my shipment and understand that any
              violation may result in confiscation, penalties, or legal action.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            disabled={!acknowledged}
            className="bg-[#0033A0] hover:bg-[#0033A0]/90 text-white font-montserrat py-6 px-8 rounded-md text-lg transition-all duration-300 flex items-center"
          >
            <Check className="mr-2 h-5 w-5" /> Proceed to Booking
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

