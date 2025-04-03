"use client"

import { useState } from "react"
import { MessageSquare, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function NotificationToggles() {
  const [notifications, setNotifications] = useState({
    whatsapp: true,
    viber: false,
    sms: true,
  })

  const handleToggle = (channel: keyof typeof notifications) => {
    setNotifications((prev) => ({
      ...prev,
      [channel]: !prev[channel],
    }))
  }

  return (
    <Card className="border-primary/10">
      <CardContent className="pt-6">
        <h2 className="text-xl font-bold font-montserrat text-primary mb-4">Shipment Notifications</h2>
        <p className="text-sm text-gray-600 mb-6 font-poppins">
          Choose how you want to receive updates about your shipment
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
                <MessageSquare className="h-5 w-5 text-green-600" />
              </div>
              <Label htmlFor="whatsapp" className="font-medium font-poppins">
                WhatsApp
              </Label>
            </div>
            <Switch
              id="whatsapp"
              checked={notifications.whatsapp}
              onCheckedChange={() => handleToggle("whatsapp")}
              className="data-[state=checked]:bg-[#00843D]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100">
                <MessageSquare className="h-5 w-5 text-purple-600" />
              </div>
              <Label htmlFor="viber" className="font-medium font-poppins">
                Viber
              </Label>
            </div>
            <Switch
              id="viber"
              checked={notifications.viber}
              onCheckedChange={() => handleToggle("viber")}
              className="data-[state=checked]:bg-[#00843D]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <Label htmlFor="sms" className="font-medium font-poppins">
                SMS
              </Label>
            </div>
            <Switch
              id="sms"
              checked={notifications.sms}
              onCheckedChange={() => handleToggle("sms")}
              className="data-[state=checked]:bg-[#00843D]"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

