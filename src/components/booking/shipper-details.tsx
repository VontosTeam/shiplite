"use client"

import { useState } from "react"
import type { FormData } from "./booking-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AddressAutocomplete } from "./address-autocomplete"
// Import the PhoneInput component
import { PhoneInput } from "./phone-input"

interface ShipperDetailsProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  onNext: () => void
}

export function ShipperDetails({ formData, updateFormData, onNext }: ShipperDetailsProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.shipperName) {
      newErrors.shipperName = "Name is required"
    }

    if (!formData.shipperEmail) {
      newErrors.shipperEmail = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.shipperEmail)) {
      newErrors.shipperEmail = "Email is invalid"
    }

    if (!formData.shipperPhone) {
      newErrors.shipperPhone = "Phone number is required"
    } else if (!formData.shipperPhone.includes("+")) {
      newErrors.shipperPhone = "Please select a country code"
    }

    if (!formData.shipperAddress) {
      newErrors.shipperAddress = "Address is required"
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
        <h2 className="text-xl font-bold text-gray-900 font-montserrat mb-4">Shipper Details</h2>
        <p className="text-gray-600 mb-6 font-poppins">Please provide your contact information and pickup address.</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="shipperName">Full Name</Label>
          <Input
            id="shipperName"
            value={formData.shipperName}
            onChange={(e) => updateFormData({ shipperName: e.target.value })}
            placeholder="Enter your full name"
            className={errors.shipperName ? "border-red-500" : ""}
          />
          {errors.shipperName && <p className="text-red-500 text-sm mt-1">{errors.shipperName}</p>}
        </div>

        <div>
          <Label htmlFor="shipperEmail">Email Address</Label>
          <Input
            id="shipperEmail"
            type="email"
            value={formData.shipperEmail}
            onChange={(e) => updateFormData({ shipperEmail: e.target.value })}
            placeholder="Enter your email address"
            className={errors.shipperEmail ? "border-red-500" : ""}
          />
          {errors.shipperEmail && <p className="text-red-500 text-sm mt-1">{errors.shipperEmail}</p>}
        </div>

        <PhoneInput
          id="shipperPhone"
          label="Phone Number"
          value={formData.shipperPhone}
          onChange={(value) => updateFormData({ shipperPhone: value })}
          placeholder="Enter your phone number"
          error={errors.shipperPhone}
        />

        <div>
          <Label htmlFor="shipperAddress">Pickup Address</Label>
          <AddressAutocomplete
            id="shipperAddress"
            value={formData.shipperAddress}
            onChange={(value) => updateFormData({ shipperAddress: value })}
            placeholder="Enter your address"
            error={errors.shipperAddress}
          />
        </div>
      </div>

      <div className="pt-4">
        <Button onClick={handleNext} className="w-full md:w-auto">
          Continue to Recipient Details
        </Button>
      </div>
    </div>
  )
}

