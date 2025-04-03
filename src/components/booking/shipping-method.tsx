"use client"

import type { FormData } from "./booking-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { PackageIcon, Truck, Store, Clock } from "lucide-react"

interface ShippingMethodProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  onNext: () => void
  onPrevious: () => void
  shippingCost: number
}

export function ShippingMethod({ formData, updateFormData, onNext, onPrevious, shippingCost }: ShippingMethodProps) {
  // Calculate estimated delivery times based on shipping method
  const getDeliveryEstimate = (method: string) => {
    switch (method) {
      case "australia-post":
        return "3-5 business days"
      case "shiplite-pickup":
        return "2-3 business days"
      case "storefront-partner":
        return "4-7 business days"
      default:
        return "3-5 business days"
    }
  }

  // Calculate price adjustments based on shipping method
  const getPriceAdjustment = (method: string) => {
    switch (method) {
      case "australia-post":
        return 0
      case "shiplite-pickup":
        return 5 // $5 extra for pickup service
      case "storefront-partner":
        return -2 // $2 discount for partner dropoff
      default:
        return 0
    }
  }

  const getTotalPrice = (method: string) => {
    return (shippingCost + getPriceAdjustment(method)).toFixed(2)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 font-montserrat mb-4">Shipping Method</h2>
        <p className="text-gray-600 mb-6 font-poppins">Choose how you want your package to be shipped.</p>
      </div>

      <RadioGroup
        value={formData.shippingMethod}
        onValueChange={(value: "australia-post" | "shiplite-pickup" | "storefront-partner") =>
          updateFormData({ shippingMethod: value })
        }
        className="space-y-4"
      >
        <div>
          <Label
            htmlFor="australia-post"
            className={`block cursor-pointer ${formData.shippingMethod === "australia-post" ? "text-primary" : ""}`}
          >
            <Card
              className={`transition-all hover:border-primary ${
                formData.shippingMethod === "australia-post" ? "border-primary bg-primary/5" : ""
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <RadioGroupItem value="australia-post" id="australia-post" className="mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center">
                      <PackageIcon className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">Australia Post Drop-Off</span>
                    </div>
                    <div className="mt-2 pl-7">
                      <p className="text-gray-600">Drop off your package at any Australia Post location.</p>
                      <div className="flex items-center mt-2 text-sm">
                        <Clock className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-gray-500">Estimated delivery: {getDeliveryEstimate("australia-post")}</span>
                      </div>
                      <div className="mt-2 font-semibold">${getTotalPrice("australia-post")}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Label>
        </div>

        <div>
          <Label
            htmlFor="shiplite-pickup"
            className={`block cursor-pointer ${formData.shippingMethod === "shiplite-pickup" ? "text-primary" : ""}`}
          >
            <Card
              className={`transition-all hover:border-primary ${
                formData.shippingMethod === "shiplite-pickup" ? "border-primary bg-primary/5" : ""
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <RadioGroupItem value="shiplite-pickup" id="shiplite-pickup" className="mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">ShipLite Pickup</span>
                    </div>
                    <div className="mt-2 pl-7">
                      <p className="text-gray-600">We'll pick up your package from your location.</p>
                      <div className="flex items-center mt-2 text-sm">
                        <Clock className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-gray-500">
                          Estimated delivery: {getDeliveryEstimate("shiplite-pickup")}
                        </span>
                      </div>
                      <div className="mt-2 font-semibold">${getTotalPrice("shiplite-pickup")}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Label>
        </div>

        <div>
          <Label
            htmlFor="storefront-partner"
            className={`block cursor-pointer ${formData.shippingMethod === "storefront-partner" ? "text-primary" : ""}`}
          >
            <Card
              className={`transition-all hover:border-primary ${
                formData.shippingMethod === "storefront-partner" ? "border-primary bg-primary/5" : ""
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <RadioGroupItem value="storefront-partner" id="storefront-partner" className="mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Store className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">Storefront Partner</span>
                    </div>
                    <div className="mt-2 pl-7">
                      <p className="text-gray-600">Drop off at one of our partner locations for a discount.</p>
                      <div className="flex items-center mt-2 text-sm">
                        <Clock className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-gray-500">
                          Estimated delivery: {getDeliveryEstimate("storefront-partner")}
                        </span>
                      </div>
                      <div className="mt-2 font-semibold">${getTotalPrice("storefront-partner")}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Label>
        </div>
      </RadioGroup>

      <div className="pt-4 flex flex-col sm:flex-row gap-4">
        <Button variant="outline" onClick={onPrevious} className="w-full sm:w-auto order-2 sm:order-1">
          Back
        </Button>
        <Button onClick={onNext} className="w-full sm:w-auto order-1 sm:order-2">
          Continue to Payment
        </Button>
      </div>
    </div>
  )
}

