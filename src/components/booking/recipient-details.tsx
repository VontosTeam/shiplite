"use client"

import { useState } from "react"
import type { FormData } from "./booking-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AddressAutocomplete } from "./address-autocomplete"
// Import the PhoneInput component
import { PhoneInput } from "./phone-input"

interface RecipientDetailsProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  onNext: () => void
  onPrevious: () => void
}

export function RecipientDetails({ formData, updateFormData, onNext, onPrevious }: RecipientDetailsProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.recipientName) {
      newErrors.recipientName = "Name is required"
    }

    if (!formData.recipientEmail) {
      newErrors.recipientEmail = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.recipientEmail)) {
      newErrors.recipientEmail = "Email is invalid"
    }

    if (!formData.recipientPhone) {
      newErrors.recipientPhone = "Phone number is required"
    } else if (!formData.recipientPhone.includes("+")) {
      newErrors.recipientPhone = "Please select a country code"
    }

    if (!formData.recipientAddress) {
      newErrors.recipientAddress = "Address is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validate()) {
      onNext()
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 font-montserrat mb-4">Recipient Details</h2>
        <p className="text-gray-600 mb-6 font-poppins">
          Please provide the recipient's contact information and delivery address.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="recipientName">Full Name</Label>
          <Input
            id="recipientName"
            value={formData.recipientName}
            onChange={(e) => updateFormData({ recipientName: e.target.value })}
            placeholder="Enter recipient's full name"
            className={errors.recipientName ? "border-red-500" : ""}
          />
          {errors.recipientName && <p className="text-red-500 text-sm mt-1">{errors.recipientName}</p>}
        </div>

        <div>
          <Label htmlFor="recipientEmail">Email Address</Label>
          <Input
            id="recipientEmail"
            type="email"
            value={formData.recipientEmail}
            onChange={(e) => updateFormData({ recipientEmail: e.target.value })}
            placeholder="Enter recipient's email address"
            className={errors.recipientEmail ? "border-red-500" : ""}
          />
          {errors.recipientEmail && <p className="text-red-500 text-sm mt-1">{errors.recipientEmail}</p>}
        </div>

        <PhoneInput
          id="recipientPhone"
          label="Phone Number"
          value={formData.recipientPhone}
          onChange={(value) => updateFormData({ recipientPhone: value })}
          placeholder="Enter recipient's phone number"
          error={errors.recipientPhone}
        />

        <div>
          <Label htmlFor="recipientAddress">Delivery Address</Label>
          <AddressAutocomplete
            id="recipientAddress"
            value={formData.recipientAddress}
            onChange={(value) => updateFormData({ recipientAddress: value })}
            placeholder="Enter recipient's address"
            error={errors.recipientAddress}
          />
        </div>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row gap-4">
        <Button variant="outline" onClick={onPrevious} className="w-full sm:w-auto order-2 sm:order-1">
          Back
        </Button>
        <Button onClick={handleNext} className="w-full sm:w-auto order-1 sm:order-2">
          Continue to Item Declaration
        </Button>
      </div>
    </div>
  )
}

