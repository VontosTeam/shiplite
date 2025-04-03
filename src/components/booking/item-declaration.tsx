"use client"

import { useState } from "react"
import type { FormData } from "./booking-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { PackageIcon, DollarSign, Scale } from "lucide-react"

interface ItemDeclarationProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  onNext: () => void
  onPrevious: () => void
  shippingCost: number
}

export function ItemDeclaration({ formData, updateFormData, onNext, onPrevious, shippingCost }: ItemDeclarationProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.itemDescription) {
      newErrors.itemDescription = "Item description is required"
    }

    if (!formData.itemWeight || formData.itemWeight <= 0) {
      newErrors.itemWeight = "Valid weight is required"
    }

    if (!formData.itemValue || formData.itemValue <= 0) {
      newErrors.itemValue = "Valid item value is required"
    }

    if (!formData.itemCategory) {
      newErrors.itemCategory = "Category is required"
    }

    if (formData.itemCategory === "other" && !formData.customCategory?.trim()) {
      newErrors.customCategory = "Please specify a custom category"
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
        <h2 className="text-xl font-bold text-gray-900 font-montserrat mb-4">Item Declaration</h2>
        <p className="text-gray-600 mb-6 font-poppins">Please provide details about the item you're shipping.</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="itemDescription">Item Description</Label>
          <Textarea
            id="itemDescription"
            value={formData.itemDescription}
            onChange={(e) => updateFormData({ itemDescription: e.target.value })}
            placeholder="Describe your item (e.g., clothing, electronics, documents)"
            className={errors.itemDescription ? "border-red-500" : ""}
            rows={3}
          />
          {errors.itemDescription && <p className="text-red-500 text-sm mt-1">{errors.itemDescription}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="itemWeight">Weight (kg)</Label>
            <div className="relative">
              <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input
                id="itemWeight"
                type="number"
                min="0.1"
                step="0.1"
                value={formData.itemWeight || ""}
                onChange={(e) => updateFormData({ itemWeight: Number.parseFloat(e.target.value) || 0 })}
                placeholder="Enter weight in kg"
                className={`pl-10 ${errors.itemWeight ? "border-red-500" : ""}`}
              />
            </div>
            {errors.itemWeight && <p className="text-red-500 text-sm mt-1">{errors.itemWeight}</p>}
          </div>

          <div>
            <Label htmlFor="itemValue">Declared Value ($)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <Input
                id="itemValue"
                type="number"
                min="1"
                step="1"
                value={formData.itemValue || ""}
                onChange={(e) => updateFormData({ itemValue: Number.parseFloat(e.target.value) || 0 })}
                placeholder="Enter value in AUD"
                className={`pl-10 ${errors.itemValue ? "border-red-500" : ""}`}
              />
            </div>
            {errors.itemValue && <p className="text-red-500 text-sm mt-1">{errors.itemValue}</p>}
          </div>
        </div>

        <div>
          <Label htmlFor="itemCategory">Item Category</Label>
          <Select value={formData.itemCategory} onValueChange={(value) => updateFormData({ itemCategory: value })}>
            <SelectTrigger className={errors.itemCategory ? "border-red-500" : ""}>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="clothing">Clothing</SelectItem>
              <SelectItem value="documents">Documents</SelectItem>
              <SelectItem value="fragile">Fragile Items</SelectItem>
              <SelectItem value="food">Food & Perishables</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.itemCategory && <p className="text-red-500 text-sm mt-1">{errors.itemCategory}</p>}
        </div>

        {formData.itemCategory === "other" && (
          <div>
            <Label htmlFor="customCategory">Specify Category</Label>
            <Input
              id="customCategory"
              value={formData.customCategory || ""}
              onChange={(e) => updateFormData({ customCategory: e.target.value })}
              placeholder="Enter custom category"
              className={errors.customCategory ? "border-red-500" : ""}
            />
            {errors.customCategory && <p className="text-red-500 text-sm mt-1">{errors.customCategory}</p>}
          </div>
        )}
      </div>

      {formData.itemWeight > 0 && formData.shipperAddress && formData.recipientAddress && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center">
              <PackageIcon className="h-5 w-5 text-primary mr-2" />
              <h3 className="font-medium text-primary">Estimated Shipping Cost</h3>
            </div>
            <p className="mt-2 text-gray-600">Based on your item's weight and shipping addresses:</p>
            <p className="mt-1 text-2xl font-bold text-primary">${shippingCost.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-1">Final cost may vary based on selected shipping method</p>
          </CardContent>
        </Card>
      )}

      <div className="pt-4 flex flex-col sm:flex-row gap-4">
        <Button variant="outline" onClick={onPrevious} className="w-full sm:w-auto order-2 sm:order-1">
          Back
        </Button>
        <Button onClick={handleNext} className="w-full sm:w-auto order-1 sm:order-2">
          Continue to Shipping Method
        </Button>
      </div>
    </div>
  )
}

