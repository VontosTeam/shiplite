"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Common country codes
const countryCodes = [
  { code: "+61", country: "Australia" },
  { code: "+63", country: "Philippines" },
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" }
]

interface PhoneInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  placeholder?: string
}

export function PhoneInput({ id, label, value, onChange, error, placeholder = "Enter phone number" }: PhoneInputProps) {
  const [open, setOpen] = useState(false)

  // Parse the current value to extract country code and number
  const parsePhoneValue = () => {
    // Default to Australia if no value or no country code detected
    if (!value) return { countryCode: "+61", number: "" }

    // Check if the value starts with a plus sign
    if (value.startsWith("+")) {
      // Find the country code that matches the start of the value
      const matchedCountry = countryCodes.find((country) => value.startsWith(country.code))

      if (matchedCountry) {
        return {
          countryCode: matchedCountry.code,
          number: value.substring(matchedCountry.code.length).trim(),
        }
      }
    }

    // Default to Australia if no match found
    return { countryCode: "+61", number: value }
  }

  const { countryCode, number } = parsePhoneValue()

  const handleCountryCodeChange = (code: string) => {
    onChange(`${code} ${number}`)
    setOpen(false)
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(`${countryCode} ${e.target.value}`)
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="flex">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[110px] justify-between rounded-r-none border-r-0"
            >
              {countryCode}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search country code..." />
              <CommandEmpty>No country code found.</CommandEmpty>
              <CommandGroup>
                <CommandList className="max-h-[200px] overflow-y-auto">
                  {countryCodes.map((country) => (
                    <CommandItem
                      key={country.code}
                      value={country.code}
                      onSelect={() => handleCountryCodeChange(country.code)}
                    >
                      <Check
                        className={cn("mr-2 h-4 w-4", countryCode === country.code ? "opacity-100" : "opacity-0")}
                      />
                      {country.code} {country.country}
                    </CommandItem>
                  ))}
                </CommandList>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <Input
          id={id}
          value={number}
          onChange={handleNumberChange}
          placeholder={placeholder}
          className={cn("rounded-l-none flex-1", error ? "border-red-500" : "")}
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  )
}

