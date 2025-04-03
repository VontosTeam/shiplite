"use client"

import { useState } from "react"
import { ProgressBar } from "./progress-bar"
import { ShipperDetails } from "./shipper-details"
import { RecipientDetails } from "./recipient-details"
import { ItemDeclaration } from "./item-declaration"
import { Payment } from "./payment"
import { Summary } from "./summary"
import { ShippingMethod } from "./shipping-method"
import { BookingSuccess } from "./booking-success"
import { useToast } from "@/hooks/use-toast"

export type FormData = {
  // Shipper details
  shipperName: string
  shipperEmail: string
  shipperPhone: string
  shipperAddress: string

  // Recipient details
  recipientName: string
  recipientEmail: string
  recipientPhone: string
  recipientAddress: string

  // Item details
  itemDescription: string
  itemWeight: number
  itemValue: number
  itemCategory: string
  customCategory?: string

  // Shipping method
  shippingMethod: "australia-post" | "shiplite-pickup" | "storefront-partner"

  // Payment
  paymentMethod: "credit-card" | "paypal" | "bank-transfer"

  // Terms
  termsAgreed: boolean
}

const initialFormData: FormData = {
  shipperName: "",
  shipperEmail: "",
  shipperPhone: "+61 ", // Default to Australia country code
  shipperAddress: "",
  recipientName: "",
  recipientEmail: "",
  recipientPhone: "+61 ", // Default to Australia country code
  recipientAddress: "",
  itemDescription: "",
  itemWeight: 0,
  itemValue: 0,
  itemCategory: "",
  shippingMethod: "australia-post",
  paymentMethod: "credit-card",
  termsAgreed: false,
}

// Generate a random booking reference
const generateBookingReference = () => {
  const prefix = "SL"
  const randomDigits = Math.floor(Math.random() * 10000000)
    .toString()
    .padStart(7, "0")
  return `${prefix}${randomDigits}`
}

export function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [shippingCost, setShippingCost] = useState(0)
  const [otpVerified, setOtpVerified] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [bookingReference, setBookingReference] = useState("")
  const { toast } = useToast()

  // Update the totalSteps variable to match our new flow
  const totalSteps = 6

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const updateFormData = (data: Partial<FormData>) => {
    setFormData({ ...formData, ...data })

    // Calculate shipping cost when weight or addresses change
    if (data.itemWeight || data.shipperAddress || data.recipientAddress) {
      calculateShippingCost(
        data.itemWeight || formData.itemWeight,
        data.shipperAddress || formData.shipperAddress,
        data.recipientAddress || formData.recipientAddress,
      )
    }
  }

  const calculateShippingCost = (weight: number, origin: string, destination: string) => {
    // Simple calculation for demo purposes
    // In a real app, this would call an API
    if (!weight || !origin || !destination) return

    const baseRate = 10
    const weightRate = weight * 2

    // Simulate distance factor
    const distanceFactor = Math.random() * 5 + 1

    const cost = baseRate + weightRate + distanceFactor
    setShippingCost(Number.parseFloat(cost.toFixed(2)))
  }

  const verifyOTP = (otp: string) => {
    // Simulate OTP verification
    // In a real app, this would call an API
    if (otp === "123456") {
      setOtpVerified(true)
      return true
    }
    return false
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // Simulate API call with a delay
    setTimeout(() => {
      // Generate a booking reference
      const reference = generateBookingReference()
      setBookingReference(reference)

      // Log form data (in a real app, this would be sent to an API)
      console.log("Form submitted:", formData)

      // Show success state
      setIsSuccess(true)
      setIsSubmitting(false)

      // Show toast notification
      toast({
        title: "Booking Confirmed!",
        description: `Your booking reference is ${reference}`,
        variant: "default",
      })
    }, 1500)
  }

  const handleReset = () => {
    // Reset the form to initial state
    setFormData(initialFormData)
    setCurrentStep(1)
    setShippingCost(0)
    setOtpVerified(false)
    setIsSuccess(false)
    setBookingReference("")
  }

  // If booking is successful, show success message
  if (isSuccess) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <BookingSuccess bookingReference={bookingReference} onReset={handleReset} />
      </div>
    )
  }

  // Otherwise show the booking form
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

      <div className="p-6">
        {currentStep === 1 && (
          <ShipperDetails formData={formData} updateFormData={updateFormData} onNext={handleNext} />
        )}

        {currentStep === 2 && (
          <RecipientDetails
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}

        {currentStep === 3 && (
          <ItemDeclaration
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
            shippingCost={shippingCost}
          />
        )}

        {currentStep === 4 && (
          <ShippingMethod
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
            shippingCost={shippingCost}
          />
        )}

        {currentStep === 5 && (
          <Payment
            formData={formData}
            updateFormData={updateFormData}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}

        {currentStep === 6 && (
          <Summary
            formData={formData}
            updateFormData={updateFormData}
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
            shippingCost={shippingCost}
            verifyOTP={verifyOTP}
            otpVerified={otpVerified}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </div>
  )
}

