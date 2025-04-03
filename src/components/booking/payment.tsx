"use client"

import type { FormData } from "./booking-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CreditCard, Landmark, CreditCardIcon } from "lucide-react"

interface PaymentProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  onNext: () => void
  onPrevious: () => void
}

export function Payment({ formData, updateFormData, onNext, onPrevious }: PaymentProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 font-montserrat mb-4">Payment Method</h2>
        <p className="text-gray-600 mb-6 font-poppins">Choose how you want to pay for your shipment.</p>
      </div>

      <RadioGroup
        value={formData.paymentMethod}
        onValueChange={(value: "credit-card" | "paypal" | "bank-transfer") => updateFormData({ paymentMethod: value })}
        className="space-y-4"
      >
        <div>
          <Card
            className={`cursor-pointer transition-all hover:border-primary ${formData.paymentMethod === "credit-card" ? "border-primary bg-primary/5" : ""}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <RadioGroupItem value="credit-card" id="credit-card" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="credit-card" className="flex items-center cursor-pointer">
                    <CreditCard className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </Label>
                  <div className="mt-2 pl-7">
                    <p className="text-gray-600">Pay securely with your credit or debit card.</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <CreditCardIcon className="h-6 w-6 text-gray-500" />
                      <CreditCardIcon className="h-6 w-6 text-gray-500" />
                      <CreditCardIcon className="h-6 w-6 text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card
            className={`cursor-pointer transition-all hover:border-primary ${formData.paymentMethod === "paypal" ? "border-primary bg-primary/5" : ""}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="paypal" className="flex items-center cursor-pointer">
                    <span className="font-medium">PayPal</span>
                  </Label>
                  <div className="mt-2 pl-7">
                    <p className="text-gray-600">Pay securely with your PayPal account.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card
            className={`cursor-pointer transition-all hover:border-primary ${formData.paymentMethod === "bank-transfer" ? "border-primary bg-primary/5" : ""}`}
          >
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <RadioGroupItem value="bank-transfer" id="bank-transfer" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="bank-transfer" className="flex items-center cursor-pointer">
                    <Landmark className="h-5 w-5 text-primary mr-2" />
                    <span className="font-medium">Bank Transfer</span>
                  </Label>
                  <div className="mt-2 pl-7">
                    <p className="text-gray-600">Pay via direct bank transfer.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </RadioGroup>

      <div className="pt-4 flex flex-col sm:flex-row gap-4">
        <Button variant="outline" onClick={onPrevious} className="w-full sm:w-auto order-2 sm:order-1">
          Back
        </Button>
        <Button onClick={onNext} className="w-full sm:w-auto order-1 sm:order-2">
          Continue to Summary
        </Button>
      </div>
    </div>
  )
}

