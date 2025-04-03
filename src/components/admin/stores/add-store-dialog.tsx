"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export function AddStoreDialog() {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setOpen(false)
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-philippine-blue hover:bg-philippine-blue/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Store
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Store Partner</DialogTitle>
            <DialogDescription>Enter the details for the new store partner or drop-off location.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Store Name</Label>
              <Input id="name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Store Type</Label>
              <Select required>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="drop-off-point">Drop-off Point</SelectItem>
                  <SelectItem value="partner-store">Partner Store</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="openingHours">Opening Hours</Label>
              <Input id="openingHours" placeholder="e.g., Mon-Fri: 9am-5pm, Sat: 10am-2pm" required />
            </div>

            <div className="space-y-2">
              <Label>Services Offered</Label>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="package-dropoff" defaultChecked />
                  <Label htmlFor="package-dropoff" className="font-normal">
                    Package Drop-off
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="packaging-assistance" />
                  <Label htmlFor="packaging-assistance" className="font-normal">
                    Packaging Assistance
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="remittance" />
                  <Label htmlFor="remittance" className="font-normal">
                    Remittance
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="customer-support" />
                  <Label htmlFor="customer-support" className="font-normal">
                    Customer Support
                  </Label>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" placeholder="Any additional information about the store" />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-philippine-blue hover:bg-philippine-blue/90" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Store className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Store className="mr-2 h-4 w-4" />
                  Create Store
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

