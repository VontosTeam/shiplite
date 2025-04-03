"use client"

import { AlertTriangle, AlertCircle, Info } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const PROHIBITED_ITEMS = [
  {
    category: "Dangerous Goods",
    items: [
      "Explosives and fireworks",
      "Flammable liquids and gases",
      "Toxic substances",
      "Radioactive materials",
      "Corrosive substances",
    ],
  },
  {
    category: "Weapons and Ammunition",
    items: [
      "Firearms and parts",
      "Ammunition",
      "Combat knives",
      "Pepper spray",
      "Tasers and stun guns",
    ],
  },
  {
    category: "Illegal Substances",
    items: [
      "Illegal drugs and narcotics",
      "Drug paraphernalia",
      "Counterfeit items",
      "Stolen goods",
    ],
  },
]

const RESTRICTED_ITEMS = [
  {
    category: "Food Items",
    items: [
      "Fresh fruits and vegetables",
      "Meat products",
      "Dairy products",
      "Seeds and plants",
    ],
    note: "These items require special permits and may be subject to quarantine.",
  },
  {
    category: "Medications",
    items: [
      "Prescription medications",
      "Over-the-counter medicines",
      "Vitamins and supplements",
    ],
    note: "Must be accompanied by prescriptions and proper documentation.",
  },
  {
    category: "Electronics",
    items: [
      "Lithium batteries",
      "Electronic devices with batteries",
      "Power banks",
    ],
    note: "Must comply with airline safety regulations.",
  },
]

export default function ProhibitedItemsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#0033A0] mb-4 font-montserrat">
          Prohibited & Regulated Items
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Before shipping with ShipLite, please review our list of prohibited and regulated items to ensure your
          shipment complies with international shipping regulations.
        </p>
      </div>

      {/* Important Notice */}
      <Alert className="mb-8 border-[#FFCD00] bg-[#FFCD00]/10">
        <AlertTriangle className="h-5 w-5 text-[#FFCD00]" />
        <AlertTitle className="text-[#0033A0] font-montserrat">Important Notice</AlertTitle>
        <AlertDescription>
          Attempting to ship prohibited items may result in confiscation, fines, or legal action. When in doubt,
          please contact our customer service for clarification.
        </AlertDescription>
      </Alert>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Prohibited Items */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-montserrat text-[#0033A0]">
              <AlertCircle className="h-5 w-5" />
              Strictly Prohibited Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {PROHIBITED_ITEMS.map((category, index) => (
                <AccordionItem key={index} value={`prohibited-${index}`}>
                  <AccordionTrigger className="font-montserrat">{category.category}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="font-poppins text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Restricted Items */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-montserrat text-[#0033A0]">
              <Info className="h-5 w-5" />
              Restricted Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {RESTRICTED_ITEMS.map((category, index) => (
                <AccordionItem key={index} value={`restricted-${index}`}>
                  <AccordionTrigger className="font-montserrat">{category.category}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="font-poppins text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                      <li className="font-poppins text-sm text-[#0033A0] mt-4 list-none font-medium">
                        Note: {category.note}
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#0033A0] mb-6 font-montserrat">Additional Information</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Alert>
            <Info className="h-5 w-5" />
            <AlertTitle>Documentation Requirements</AlertTitle>
            <AlertDescription>
              Some items may require additional documentation, permits, or licenses. Please ensure you have all
              necessary paperwork before shipping.
            </AlertDescription>
          </Alert>
          <Alert>
            <Info className="h-5 w-5" />
            <AlertTitle>Customs Regulations</AlertTitle>
            <AlertDescription>
              Items may be subject to customs inspection and additional regulations in both origin and destination
              countries.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
} 