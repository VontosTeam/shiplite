"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Import the LanguageSwitcher component
import LanguageSwitcher from "./language-switcher"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Our Purpose", href: "/our-purpose" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Flights", href: "/flights" },
    { name: "Track", href: "/tracking" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img src="/shiplite-logo-red.png" alt="ShipLite Logo" width={100} height={100} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="font-poppins text-sm font-medium text-gray-700 transition-colors hover:text-[#0033A0]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button and Language Switcher */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher />
          <Link href="/booking">
            <Button className="bg-[#00843D] text-white hover:bg-[#006C32]">Book a Shipment</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <span className="text-xl font-bold text-[#0033A0]">ShipLite</span>
              </Link>
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-poppins text-lg font-medium text-gray-700 transition-colors hover:text-[#0033A0]"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <Link href="/booking" onClick={() => setIsOpen(false)}>
                <Button className="bg-[#00843D] text-white hover:bg-[#006C32]">Book a Shipment</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

