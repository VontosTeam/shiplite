"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Import the LanguageSwitcher component
import LanguageSwitcher from "./language-switcher"
import { useLanguage } from "@/lib/contexts/language-context"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const navLinks = [
    { name: t.nav.ourPurpose, href: "/our-purpose" },
    { name: t.nav.howItWorks, href: "/how-it-works" },
    { name: t.nav.pricing, href: "/pricing" },
    { name: t.nav.flights, href: "/flights" },
    { name: t.nav.track, href: "/tracking" },
    { name: t.nav.contact, href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos/shiplite-logo-red.webp"
              alt="ShipLite Logo"
              width={100}
              height={40}
              priority
            />
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
            <Button className="bg-[#00843D] text-white hover:bg-[#006C32]">{t.common.bookShipment}</Button>
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
                <Image
                  src="/images/logos/shiplite-logo-red.webp"
                  alt="ShipLite Logo"
                  width={100}
                  height={40}
                  priority
                />
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
                <Button className="bg-[#00843D] text-white hover:bg-[#006C32]">{t.common.bookShipment}</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

