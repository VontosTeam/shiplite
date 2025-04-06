"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/shiplite-logo-white.webp"
                alt="ShipLite Logo"
                width={100}
                height={40}
                priority
              />
            </Link>
            <p className="text-gray-400">{t.footer.tagline}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-montserrat text-lg font-semibold">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-purpose" className="text-gray-400 transition-colors hover:text-white">
                  {t.nav.ourPurpose}
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 transition-colors hover:text-white">
                  {t.nav.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 transition-colors hover:text-white">
                  {t.nav.pricing}
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="text-gray-400 transition-colors hover:text-white">
                  {t.nav.track}
                </Link>
              </li>
              <li>
                <Link href="/flights" className="text-gray-400 transition-colors hover:text-white">
                  {t.nav.flights}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-montserrat text-lg font-semibold">{t.footer.information}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/locations" className="text-gray-400 transition-colors hover:text-white">
                  {t.footer.storeLocations}
                </Link>
              </li>
              <li>
                <Link href="/customer-care" className="text-gray-400 transition-colors hover:text-white">
                  {t.footer.faqs}
                </Link>
              </li>
              <li>
                <Link href="/prohibited-items" className="text-gray-400 transition-colors hover:text-white">
                  {t.footer.prohibitedItems}
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-400 transition-colors hover:text-white">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-400 transition-colors hover:text-white">
                  {t.footer.privacy}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-montserrat text-lg font-semibold">{t.footer.contactUs}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#FFCD00]" />
                <span className="text-gray-400">{t.footer.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#FFCD00]" />
                <span className="text-gray-400">{t.footer.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#FFCD00]" />
                <span className="text-gray-400">{t.footer.email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ShipLite. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

