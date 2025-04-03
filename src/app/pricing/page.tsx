"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Truck, Store, Package, ArrowRight, Info, Heart, AlertCircle } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function PricingPage() {
  const [selectedMethod, setSelectedMethod] = useState("australia-post")
  const [discountType, setDiscountType] = useState("charity")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleDiscountSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="font-montserrat text-3xl font-bold tracking-tight text-[#0033A0] md:text-4xl lg:text-5xl">
          Transparent & Affordable Pricing
        </h1>
        <p className="mt-4 font-poppins text-lg text-muted-foreground">
          Send your packages to the Philippines with clear pricing and multiple shipping options
        </p>
      </div>

      {/* Pricing Table Section */}
      <div className="mb-16 mx-auto max-w-2xl">
        <h2 className="mb-6 font-montserrat text-2xl font-bold text-[#0033A0] md:text-3xl">
          Shipping Cost Per Weight Category
        </h2>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="w-[180px] font-montserrat text-base">Weight</TableHead>
                  <TableHead className="w-[180px] font-montserrat text-base">Price (AUD)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-poppins font-medium">Up to 5kg</TableCell>
                  <TableCell className="font-poppins text-[#0033A0] font-semibold">$55</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-poppins font-medium">Up to 10kg</TableCell>
                  <TableCell className="font-poppins text-[#0033A0] font-semibold">$85</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-poppins font-medium">Up to 15kg</TableCell>
                  <TableCell className="font-poppins text-[#0033A0] font-semibold">$105</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-poppins font-medium">Up to 20kg</TableCell>
                  <TableCell className="font-poppins text-[#0033A0] font-semibold">$120</TableCell>
                </TableRow>
                <TableRow className="hover:bg-muted/50">
                  <TableCell className="font-poppins font-medium">30kg+</TableCell>
                  <TableCell className="font-poppins text-[#0033A0] font-semibold">$5 per kg</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 rounded-lg bg-muted/30 p-4">
            <p className="flex items-start gap-2 font-poppins text-sm text-muted-foreground">
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0" />
              <span>
                Maximum weight per box: 35 kg. Heavier items must be split into separate boxes. For parcels below 10 kg,
                we recommend using Australia Post boxes.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Shipping Methods Section */}
      <div className="mb-16">
        <h2 className="mb-6 font-montserrat text-2xl font-bold text-[#0033A0] md:text-3xl">
          Choose Your Shipping Method
        </h2>
        <Tabs defaultValue="australia-post" onValueChange={setSelectedMethod} className="w-full">
          <TabsList className="mb-8 grid w-full grid-cols-3 md:grid-cols-3">
            <TabsTrigger value="australia-post" className="font-poppins text-xs md:text-sm">
              Australia Post
            </TabsTrigger>
            <TabsTrigger value="pickup-service" className="font-poppins text-xs md:text-sm">
              ShipLite Pickup
            </TabsTrigger>
            <TabsTrigger value="storefront" className="font-poppins text-xs md:text-sm">
              Storefront Partner
            </TabsTrigger>
          </TabsList>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            <TabsContent value="australia-post" className="col-span-2 mt-0">
              <Card>
                <CardHeader className="bg-[#0033A0]/5 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-montserrat text-xl text-[#0033A0]">Australia Post Drop-Off</CardTitle>
                    <Badge className="bg-[#FFCD00] text-[#0033A0] hover:bg-[#FFCD00]/80">Most Popular</Badge>
                  </div>
                  <CardDescription className="font-poppins">
                    Drop off your package at any Australia Post location
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 text-green-500" />
                      <div>
                        <h4 className="font-poppins font-medium">Convenient Nationwide Access</h4>
                        <p className="font-poppins text-sm text-muted-foreground">
                          Drop off at any Australia Post location across the country
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 text-green-500" />
                      <div>
                        <h4 className="font-poppins font-medium">Simple Process</h4>
                        <p className="font-poppins text-sm text-muted-foreground">
                          Print and attach the ShipLite Booking Shipping Order Form to your parcel
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 text-green-500" />
                      <div>
                        <h4 className="font-poppins font-medium">Reliable Tracking</h4>
                        <p className="font-poppins text-sm text-muted-foreground">
                          Track your package using Australia Post's tracking system until it reaches ShipLite
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start border-t bg-muted/20 px-6 py-4">
                  <div className="mb-2 flex w-full items-center justify-between">
                    <div>
                      <p className="font-poppins text-sm font-medium">Estimated Delivery Time</p>
                      <p className="font-poppins text-lg font-bold text-[#0033A0]">7-10 business days</p>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-5 w-5 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-[300px]">
                          <p>Delivery time starts from when your package reaches our depot</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="pickup-service" className="col-span-2 mt-0">
              <Card>
                <CardHeader className="bg-[#0033A0]/5 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-montserrat text-xl text-[#0033A0]">ShipLite Pickup Service</CardTitle>
                    <Badge className="bg-[#00843D] text-white hover:bg-[#00843D]/80">Most Convenient</Badge>
                  </div>
                  <CardDescription className="font-poppins">
                    We'll pick up your package directly from your location
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 text-green-500" />
                      <div>
                        <h4 className="font-poppins font-medium">Door-to-Door Service</h4>
                        <p className="font-poppins text-sm text-muted-foreground">
                          Schedule a pickup from your home or workplace
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 text-green-500" />
                      <div>
                        <h4 className="font-poppins font-medium">Flexible Scheduling</h4>
                        <p className="font-poppins text-sm text-muted-foreground">
                          Choose a pickup time that works for you
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 text-green-500" />
                      <div>
                        <h4 className="font-poppins font-medium">Real-Time Tracking</h4>
                        <p className="font-poppins text-sm text-muted-foreground">
                          Track your driver in real-time and receive instant confirmation
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start border-t bg-muted/20 px-6 py-4">
                  <div className="mb-2 flex w-full items-center justify-between">
                    <div>
                      <p className="font-poppins text-sm font-medium">Estimated Delivery Time</p>
                      <p className="font-poppins text-lg font-bold text-[#0033A0]">7-10 business days</p>
                    </div>
                    <p className="font-poppins text-sm text-muted-foreground">+$10 pickup fee</p>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="storefront" className="col-span-2 mt-0">
              <Card>
                <CardHeader className="bg-[#0033A0]/5 pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-montserrat text-xl text-[#0033A0]">
                      Storefront Partner Drop-Off
                    </CardTitle>
                    <Badge className="bg-[#0033A0] text-white hover:bg-[#0033A0]/80">Community Support</Badge>
                  </div>
                  <CardDescription className="font-poppins">Drop off at one of our partner locations</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 text-green-500" />
                      <div>
                        <h4 className="font-poppins font-medium">Local Community Partners</h4>
                        <p className="font-poppins text-sm text-muted-foreground">
                          Support Filipino-owned businesses in your area
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 text-green-500" />
                      <div>
                        <h4 className="font-poppins font-medium">Packaging Assistance</h4>
                        <p className="font-poppins text-sm text-muted-foreground">
                          Some partners offer packaging help and additional services
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 text-green-500" />
                      <div>
                        <h4 className="font-poppins font-medium">Immediate Tracking</h4>
                        <p className="font-poppins text-sm text-muted-foreground">
                          Receive a tracking number immediately upon drop-off
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start border-t bg-muted/20 px-6 py-4">
                  <div className="mb-2 flex w-full items-center justify-between">
                    <div>
                      <p className="font-poppins text-sm font-medium">Estimated Delivery Time</p>
                      <p className="font-poppins text-lg font-bold text-[#0033A0]">7-10 business days</p>
                    </div>
                    <Button variant="link" className="p-0 text-[#0033A0]">
                      Find locations
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            <div className="mt-6 lg:mt-0">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="font-montserrat text-xl">Shipping Method Details</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedMethod === "australia-post" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0033A0]/10">
                          <Package className="h-5 w-5 text-[#0033A0]" />
                        </div>
                        <div>
                          <h4 className="font-poppins font-medium">Package Requirements</h4>
                          <p className="font-poppins text-sm text-muted-foreground">
                            Use Australia Post mailing boxes or any sturdy packaging
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0033A0]/10">
                          <Truck className="h-5 w-5 text-[#0033A0]" />
                        </div>
                        <div>
                          <h4 className="font-poppins font-medium">Shipping Process</h4>
                          <p className="font-poppins text-sm text-muted-foreground">
                            Print form, attach to parcel, drop off at any Australia Post location
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {selectedMethod === "pickup-service" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0033A0]/10">
                          <Package className="h-5 w-5 text-[#0033A0]" />
                        </div>
                        <div>
                          <h4 className="font-poppins font-medium">Package Requirements</h4>
                          <p className="font-poppins text-sm text-muted-foreground">
                            Use recommended cartons for safe shipping
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0033A0]/10">
                          <Truck className="h-5 w-5 text-[#0033A0]" />
                        </div>
                        <div>
                          <h4 className="font-poppins font-medium">Shipping Process</h4>
                          <p className="font-poppins text-sm text-muted-foreground">
                            Schedule pickup online, our driver will collect your package
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {selectedMethod === "storefront" && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0033A0]/10">
                          <Store className="h-5 w-5 text-[#0033A0]" />
                        </div>
                        <div>
                          <h4 className="font-poppins font-medium">Partner Locations</h4>
                          <p className="font-poppins text-sm text-muted-foreground">
                            Filipino grocery stores, remittance centers, and community shops
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0033A0]/10">
                          <Package className="h-5 w-5 text-[#0033A0]" />
                        </div>
                        <div>
                          <h4 className="font-poppins font-medium">Additional Services</h4>
                          <p className="font-poppins text-sm text-muted-foreground">
                            Many partners offer packaging materials and assistance
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <Button 
                    className="w-full bg-[#0033A0] text-white hover:bg-[#0033A0]/90"
                    onClick={() => {
                      window.location.href = `/booking?method=${selectedMethod}`;
                    }}
                  >
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </Tabs>
      </div>

      {/* Discounts & Special Offers Section */}
      <div className="rounded-xl border bg-gradient-to-r from-[#0033A0]/10 to-[#FFCD00]/10 p-8 shadow-sm">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div>
            <h2 className="font-montserrat text-2xl font-bold text-[#0033A0] md:text-3xl">
              Exclusive Discounts for Charities & Emergency Shipments
            </h2>
            <p className="mt-4 font-poppins text-muted-foreground">
              We offer special rates for charitable organizations and emergency relief shipments to the Philippines. Our
              commitment to supporting the Filipino community extends to those in need during critical times.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="mt-6 bg-[#FFCD00] text-[#0033A0] hover:bg-[#FFCD00]/90">See if you qualify</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                {!isSuccess ? (
                  <>
                    <DialogHeader>
                      <DialogTitle className="font-montserrat text-xl text-[#0033A0]">
                        Check Your Eligibility
                      </DialogTitle>
                      <DialogDescription className="font-poppins">
                        Please provide details about your organization or emergency shipment to check if you qualify for
                        special discounts.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleDiscountSubmit} className="mt-4 space-y-5">
                      <div className="space-y-3">
                        <h3 className="font-montserrat font-medium">What type of discount are you applying for?</h3>
                        <RadioGroup
                          defaultValue="charity"
                          value={discountType}
                          onValueChange={setDiscountType}
                          className="flex flex-col space-y-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="charity" id="charity" />
                            <Label htmlFor="charity" className="flex items-center gap-2 font-poppins">
                              <Heart className="h-4 w-4 text-[#0033A0]" />
                              Charitable Organization
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="emergency" id="emergency" />
                            <Label htmlFor="emergency" className="flex items-center gap-2 font-poppins">
                              <AlertCircle className="h-4 w-4 text-[#0033A0]" />
                              Emergency Relief Shipment
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {discountType === "charity" && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="org-name" className="font-poppins">
                              Organization Name
                            </Label>
                            <Input id="org-name" placeholder="Enter your organization name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="org-number" className="font-poppins">
                              Charity Registration Number
                            </Label>
                            <Input id="org-number" placeholder="e.g. CH12345" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="org-website" className="font-poppins">
                              Organization Website (Optional)
                            </Label>
                            <Input id="org-website" placeholder="https://www.example.org" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="org-purpose" className="font-poppins">
                              Purpose of Shipment
                            </Label>
                            <Textarea
                              id="org-purpose"
                              placeholder="Briefly describe the purpose of your shipment and how it will benefit the community"
                              className="min-h-[80px]"
                              required
                            />
                          </div>
                        </div>
                      )}

                      {discountType === "emergency" && (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="contact-name" className="font-poppins">
                              Contact Name
                            </Label>
                            <Input id="contact-name" placeholder="Enter your full name" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="emergency-type" className="font-poppins">
                              Type of Emergency
                            </Label>
                            <Input
                              id="emergency-type"
                              placeholder="e.g. Natural disaster, medical emergency"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="emergency-details" className="font-poppins">
                              Emergency Details
                            </Label>
                            <Textarea
                              id="emergency-details"
                              placeholder="Please provide details about the emergency situation"
                              className="min-h-[80px]"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="urgency" className="font-poppins">
                              Urgency Level
                            </Label>
                            <RadioGroup defaultValue="high" className="flex space-x-4">
                              <div className="flex items-center space-x-1">
                                <RadioGroupItem value="high" id="high" />
                                <Label htmlFor="high" className="font-poppins text-sm">
                                  High
                                </Label>
                              </div>
                              <div className="flex items-center space-x-1">
                                <RadioGroupItem value="medium" id="medium" />
                                <Label htmlFor="medium" className="font-poppins text-sm">
                                  Medium
                                </Label>
                              </div>
                              <div className="flex items-center space-x-1">
                                <RadioGroupItem value="low" id="low" />
                                <Label htmlFor="low" className="font-poppins text-sm">
                                  Low
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-poppins">
                          Email Address
                        </Label>
                        <Input id="email" type="email" placeholder="Enter your email address" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-poppins">
                          Phone Number
                        </Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                      </div>

                      <DialogFooter className="mt-6">
                        <Button
                          type="submit"
                          className="w-full bg-[#0033A0] text-white hover:bg-[#0033A0]/90"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Application"}
                        </Button>
                      </DialogFooter>
                    </form>
                  </>
                ) : (
                  <div className="py-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0033A0]/10">
                      <Check className="h-8 w-8 text-[#0033A0]" />
                    </div>
                    <DialogTitle className="font-montserrat text-xl text-[#0033A0]">Application Received</DialogTitle>
                    <DialogDescription className="mt-2 font-poppins">
                      Thank you for your application. Our team will review your details and contact you within 1-2
                      business days regarding your eligibility for special discounts.
                    </DialogDescription>
                    <Button
                      className="mt-6 bg-[#0033A0] text-white hover:bg-[#0033A0]/90"
                      onClick={() => {
                        setIsSuccess(false)
                        setDiscountType("charity")
                      }}
                    >
                      Close
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
          <div className="hidden md:block">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#0033A0]/5 p-6">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FFCD00]/20"></div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#0033A0]/20"></div>
              <div className="relative z-10 flex h-full flex-col items-center justify-center">
                <div className="mb-4 rounded-full bg-[#FFCD00]/20 p-4">
                  <div className="rounded-full bg-[#FFCD00] p-3">
                    <Package className="h-8 w-8 text-[#0033A0]" />
                  </div>
                </div>
                <h3 className="text-center font-montserrat text-xl font-bold text-[#0033A0]">Supporting Communities</h3>
                <p className="mt-2 text-center font-poppins text-sm">Up to 30% discount for qualified organizations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

