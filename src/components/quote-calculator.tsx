"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function QuoteCalculator() {
  const [weight, setWeight] = useState(5)
  const [packageType, setPackageType] = useState("parcel")
  const [fromCity, setFromCity] = useState("sydney")
  const [toCity, setToCity] = useState("manila")
  const [quote, setQuote] = useState<number | null>(null)
  const [boxSuggestion, setBoxSuggestion] = useState<string>("")
  const [isOverweight, setIsOverweight] = useState(false)

  const calculateShippingCost = (weight: number): number => {
    if (weight <= 5) return 55
    if (weight <= 10) return 85
    if (weight <= 15) return 105
    if (weight <= 20) return 120
    if (weight <= 30) return 150
    // Over 30kg: base price for 30kg + $5 per extra kg
    return 150 + (weight - 30) * 5
  }

  const getBoxSuggestion = (weight: number): string => {
    if (weight < 10) return "Australia Post boxes recommended"
    if (weight <= 24) return "Bunnings 52L Heavy Duty Moving Carton"
    if (weight <= 29) return "Bunnings 104L Heavy Duty Moving Carton"
    return "Bunnings 150L Heavy Duty Moving Carton"
  }

  useEffect(() => {
    // Check weight and update states
    const overweight = weight > 35
    setIsOverweight(overweight)
    setBoxSuggestion(getBoxSuggestion(weight))
    
    if (!overweight) {
      const cost = calculateShippingCost(weight)
      setQuote(cost)
    } else {
      setQuote(null)
    }
  }, [weight])

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="from">From (Australia)</Label>
          <Select value={fromCity} onValueChange={setFromCity}>
            <SelectTrigger id="from">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sydney">Sydney</SelectItem>
              <SelectItem value="melbourne">Melbourne</SelectItem>
              <SelectItem value="brisbane">Brisbane</SelectItem>
              <SelectItem value="perth">Perth</SelectItem>
              <SelectItem value="adelaide">Adelaide</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="to">To (Philippines)</Label>
          <Select value={toCity} onValueChange={setToCity}>
            <SelectTrigger id="to">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="manila">Manila</SelectItem>
              <SelectItem value="cebu">Cebu</SelectItem>
              <SelectItem value="davao">Davao</SelectItem>
              <SelectItem value="quezon">Quezon City</SelectItem>
              <SelectItem value="iloilo">Iloilo</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="package-type">Package Type</Label>
        <Select value={packageType} onValueChange={setPackageType}>
          <SelectTrigger id="package-type">
            <SelectValue placeholder="Select package type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="document">Document</SelectItem>
            <SelectItem value="parcel">Parcel</SelectItem>
            <SelectItem value="box">Box</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="weight">Weight (kg): {weight}</Label>
        </div>
        <Slider
          id="weight"
          min={0.5}
          max={35}
          step={0.5}
          value={[weight]}
          onValueChange={(value) => setWeight(value[0])}
        />
      </div>

      {isOverweight && (
        <Alert variant="destructive" className="bg-red-50 text-red-700 border-red-200">
          <InfoIcon className="h-4 w-4" />
          <AlertDescription>
            Please split the package into multiple boxes. Maximum weight per box is 35 kg.
          </AlertDescription>
        </Alert>
      )}

      <Button 
        onClick={() => {}} 
        className="w-full" 
        disabled={isOverweight}
      >
        Calculate Shipping Cost
      </Button>

      {quote !== null && (
        <div className="mt-4 p-4 bg-blue-50 rounded-md">
          <div className="text-center">
            <p className="text-sm text-blue-600">Estimated Shipping Cost</p>
            <p className="text-2xl font-bold text-blue-700">${quote} AUD</p>
            <p className="text-xs text-blue-600">Delivery time: 3-7 business days</p>
          </div>
          <div className="mt-3 pt-3 border-t border-blue-100">
            <p className="text-sm text-blue-600">
              <span className="font-semibold">Recommended Box Size:</span><br />
              {boxSuggestion}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

