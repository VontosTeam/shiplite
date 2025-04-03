"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { MapPin, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AddressAutocompleteProps {
  id: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: string
}

// Mock address suggestions for demo purposes
// In a real app, this would come from Google Maps API
const mockAddressSuggestions = [
  "123 Main St, Sydney NSW 2000, Australia",
  "456 George St, Sydney NSW 2000, Australia",
  "789 Pitt St, Sydney NSW 2000, Australia",
  "321 Elizabeth St, Melbourne VIC 3000, Australia",
  "654 Collins St, Melbourne VIC 3000, Australia",
  "987 Bourke St, Melbourne VIC 3000, Australia",
  "147 Queen St, Brisbane QLD 4000, Australia",
  "258 Adelaide St, Brisbane QLD 4000, Australia",
  "369 Edward St, Brisbane QLD 4000, Australia",
]

export function AddressAutocomplete({
  id,
  value,
  onChange,
  placeholder = "Enter address",
  error,
}: AddressAutocompleteProps) {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const [suggestions, setSuggestions] = useState<string[]>(mockAddressSuggestions)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    onChange(newValue) // Update parent component with the new value

    // Always show suggestions, but filter them based on input
    if (newValue.length > 0) {
      const filtered = mockAddressSuggestions.filter((address) =>
        address.toLowerCase().includes(newValue.toLowerCase()),
      )
      setSuggestions(filtered.length > 0 ? filtered : mockAddressSuggestions)
    } else {
      // If input is empty, show all suggestions
      setSuggestions(mockAddressSuggestions)
    }

    // Always keep the popover open when typing
    setOpen(true)
  }

  const handleSelectAddress = (address: string) => {
    setInputValue(address)
    onChange(address)
    setOpen(false)
  }

  const clearInput = () => {
    setInputValue("")
    onChange("")
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="relative">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              ref={inputRef}
              id={id}
              value={inputValue}
              onChange={handleInputChange}
              placeholder={placeholder}
              className={`pl-10 pr-10 ${error ? "border-red-500" : ""}`}
              onFocus={() => setOpen(true)}
            />
            {inputValue && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-0"
                onClick={clearInput}
              >
                <X className="h-4 w-4 text-gray-500" />
                <span className="sr-only">Clear</span>
              </Button>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 w-[calc(100vw-2rem)] sm:w-[450px]"
          align="start"
          sideOffset={5}
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          <Command>
            <CommandInput
              placeholder="Search address..."
              value={inputValue}
              onValueChange={(value) => {
                setInputValue(value)
                onChange(value) // Update parent component with the new value
                const filtered = mockAddressSuggestions.filter((address) =>
                  address.toLowerCase().includes(value.toLowerCase()),
                )
                setSuggestions(filtered.length > 0 ? filtered : mockAddressSuggestions)
              }}
            />
            <CommandList className="max-h-[200px] overflow-y-auto">
              <CommandEmpty>
                <div className="p-2 text-center">
                  <p>No addresses found</p>
                  <p className="text-sm text-gray-500">Try a different search term or select from the list below</p>
                </div>
                <CommandGroup heading="Suggestions">
                  {mockAddressSuggestions.slice(0, 3).map((address) => (
                    <CommandItem
                      key={address}
                      value={address}
                      onSelect={() => handleSelectAddress(address)}
                      className="flex items-center"
                    >
                      <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                      <span>{address}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandEmpty>
              <CommandGroup>
                {suggestions.map((address) => (
                  <CommandItem
                    key={address}
                    value={address}
                    onSelect={() => handleSelectAddress(address)}
                    className="flex items-center"
                  >
                    <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                    <span>{address}</span>
                    {address === inputValue && <Check className="ml-auto h-4 w-4 text-green-500" />}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}

