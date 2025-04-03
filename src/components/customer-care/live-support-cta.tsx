"use client"

import { MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function LiveSupportCta() {
  return (
    <Card className="mt-8 bg-[#0033A0]/5 border-none">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0033A0]/10">
              <MessageCircle className="h-6 w-6 text-[#0033A0]" />
            </div>
            <div>
              <h3 className="font-montserrat text-lg font-semibold">Still need help?</h3>
              <p className="text-sm text-muted-foreground">
                Our support team is available 24/7 to assist you
              </p>
            </div>
          </div>
          <Button className="bg-[#0033A0] text-white hover:bg-[#0033A0]/90">
            Start Live Chat
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

