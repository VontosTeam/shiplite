"use client"

import { Phone, Mail, MessageCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const CONTACT_OPTIONS = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Talk to our customer service team",
    action: "Call Now",
    info: [
      "Australia: +61 2 8123 4567",
      "Philippines: +63 2 8123 4567",
      "Mon-Fri: 9AM-5PM AEST",
    ],
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    action: "Send Email",
    info: ["support@shiplite.com.au", "Response within 24 hours"],
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    action: "Start Chat",
    info: ["Available 24/7", "Typical response time: 5 mins"],
  },
]

export default function ContactOptions() {
  return (
    <div className="space-y-4">
      {CONTACT_OPTIONS.map((option, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-montserrat">
              <option.icon className="h-5 w-5 text-[#0033A0]" />
              {option.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
            <div className="space-y-2 mb-4">
              {option.info.map((item, i) => (
                <p key={i} className="text-sm">
                  {item}
                </p>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full border-[#0033A0] text-[#0033A0] hover:bg-[#0033A0] hover:text-white"
            >
              {option.action}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

