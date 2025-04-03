"use client"

import { useState } from "react"
import type { FormData } from "./booking-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { PackageIcon, MapPin, User, CreditCard, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface SummaryProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  onPrevious: () => void
  onSubmit: () => void
  shippingCost: number
  verifyOTP: (otp: string) => boolean
  otpVerified: boolean
  isSubmitting?: boolean
}

export function Summary({
  formData,
  updateFormData,
  onPrevious,
  onSubmit,
  shippingCost,
  verifyOTP,
  otpVerified,
  isSubmitting = false,
}: SummaryProps) {
  const [otp, setOtp] = useState("")
  const [otpError, setOtpError] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [termsError, setTermsError] = useState("")
  const { toast } = useToast()

  const handleSendOTP = () => {
    // In a real app, this would send an OTP to the user's phone
    setOtpSent(true)
    toast({
      title: "OTP Sent",
      description: "A verification code has been sent to your phone. For demo purposes, use code: 123456",
    })
  }

  const handleVerifyOTP = () => {
    if (verifyOTP(otp)) {
      setOtpError("")
      toast({
        title: "Phone Verified",
        description: "Your phone number has been successfully verified.",
        variant: "default",
      })
    } else {
      setOtpError("Invalid OTP. Please try again.")
      toast({
        title: "Verification Failed",
        description: "Invalid OTP. For demo purposes, use code: 123456",
        variant: "destructive",
      })
    }
  }

  const handleSubmit = () => {
    if (!formData.termsAgreed) {
      setTermsError("You must agree to the terms and conditions")
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive",
      })
      return
    }

    if (!otpVerified) {
      setOtpError("Please verify your phone number to continue")
      toast({
        title: "Verification Required",
        description: "Please verify your phone number to proceed.",
        variant: "destructive",
      })
      return
    }

    onSubmit()
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

  const getTotalPrice = () => {
    return (shippingCost + getPriceAdjustment(formData.shippingMethod)).toFixed(2)
  }

  const getShippingMethodLabel = () => {
    switch (formData.shippingMethod) {
      case "australia-post":
        return "Australia Post Drop-Off"
      case "shiplite-pickup":
        return "ShipLite Pickup"
      case "storefront-partner":
        return "Storefront Partner"
      default:
        return "Standard Shipping"
    }
  }

  const getPaymentMethodLabel = () => {
    switch (formData.paymentMethod) {
      case "credit-card":
        return "Credit/Debit Card"
      case "paypal":
        return "PayPal"
      case "bank-transfer":
        return "Bank Transfer"
      default:
        return "Credit Card"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 font-montserrat mb-4">Booking Summary</h2>
        <p className="text-gray-600 mb-6 font-poppins">Please review your booking details before confirming.</p>
      </div>

      <div className="space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-3">
              <User className="h-5 w-5 text-primary mr-2" />
              <h3 className="font-medium">Shipper Details</h3>
            </div>
            <div className="pl-7 space-y-1 text-gray-600">
              <p>{formData.shipperName}</p>
              <p>{formData.shipperEmail}</p>
              <p>{formData.shipperPhone}</p>
              <p className="flex items-start">
                <MapPin className="h-4 w-4 text-gray-500 mr-1 mt-1 shrink-0" />
                <span>{formData.shipperAddress}</span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-3">
              <User className="h-5 w-5 text-primary mr-2" />
              <h3 className="font-medium">Recipient Details</h3>
            </div>
            <div className="pl-7 space-y-1 text-gray-600">
              <p>{formData.recipientName}</p>
              <p>{formData.recipientEmail}</p>
              <p>{formData.recipientPhone}</p>
              <p className="flex items-start">
                <MapPin className="h-4 w-4 text-gray-500 mr-1 mt-1 shrink-0" />
                <span>{formData.recipientAddress}</span>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-3">
              <PackageIcon className="h-5 w-5 text-primary mr-2" />
              <h3 className="font-medium">Item Details</h3>
            </div>
            <div className="pl-7 space-y-1 text-gray-600">
              <p>
                <span className="font-medium">Description:</span> {formData.itemDescription}
              </p>
              <p>
                <span className="font-medium">Weight:</span> {formData.itemWeight} kg
              </p>
              <p>
                <span className="font-medium">Declared Value:</span> ${formData.itemValue}
              </p>
              <p>
                <span className="font-medium">Category:</span> {formData.itemCategory === "other" ? formData.customCategory : formData.itemCategory}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-3">
              <CreditCard className="h-5 w-5 text-primary mr-2" />
              <h3 className="font-medium">Shipping & Payment</h3>
            </div>
            <div className="pl-7 space-y-1 text-gray-600">
              <p>
                <span className="font-medium">Shipping Method:</span> {getShippingMethodLabel()}
              </p>
              <p>
                <span className="font-medium">Payment Method:</span> {getPaymentMethodLabel()}
              </p>

              <Separator className="my-3" />

              <div className="flex justify-between font-medium">
                <span>Base Shipping Cost:</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>

              {getPriceAdjustment(formData.shippingMethod) !== 0 && (
                <div className="flex justify-between">
                  <span>{getPriceAdjustment(formData.shippingMethod) > 0 ? "Additional Fee:" : "Discount:"}</span>
                  <span>
                    {getPriceAdjustment(formData.shippingMethod) > 0 ? "+" : ""}
                    {getPriceAdjustment(formData.shippingMethod).toFixed(2)}
                  </span>
                </div>
              )}

              <Separator className="my-3" />

              <div className="flex justify-between text-lg font-bold text-primary">
                <span>Total:</span>
                <span>${getTotalPrice()}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center mb-3">
              <h3 className="font-medium">Verify Phone Number</h3>
            </div>

            {!otpVerified ? (
              <div className="space-y-3">
                {!otpSent ? (
                  <Button onClick={handleSendOTP} variant="outline" size="sm">
                    Send OTP to {formData.shipperPhone}
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      We've sent a verification code to {formData.shipperPhone}. Please enter it below.
                    </p>
                    <div className="flex space-x-2">
                      <Input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        className="max-w-[200px]"
                      />
                      <Button onClick={handleVerifyOTP} size="sm">
                        Verify
                      </Button>
                    </div>
                    {otpError && (
                      <p className="text-red-500 text-sm flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {otpError}
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      Didn't receive the code?{" "}
                      <Button variant="link" className="p-0 h-auto" onClick={handleSendOTP}>
                        Resend
                      </Button>
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center text-green-600">
                <CheckCircle2 className="h-5 w-5 mr-2" />
                <span>Phone number verified</span>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={formData.termsAgreed}
            onCheckedChange={(checked) => {
              updateFormData({ termsAgreed: checked as boolean })
              if (checked) setTermsError("")
            }}
          />
          <div className="space-y-1">
            <Label htmlFor="terms" className="text-sm font-normal">
              I agree to the{" "}
              <Link href="#" className="text-primary hover:underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </Label>
            {termsError && <p className="text-red-500 text-xs">{termsError}</p>}
          </div>
        </div>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          onClick={onPrevious}
          className="w-full sm:w-auto order-2 sm:order-1"
          disabled={isSubmitting}
        >
          Back
        </Button>
        <Button onClick={handleSubmit} className="w-full sm:w-auto order-1 sm:order-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Confirm & Proceed"
          )}
        </Button>
      </div>
    </div>
  )
}

