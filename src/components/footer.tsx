import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <img src="/shiplite-logo-red.png" alt="ShipLite Logo" width={100} height={100} />
            </Link>
            <p className="text-gray-400">The smart way to send gifts & essentials to the Philippines.</p>
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
            <h3 className="mb-4 font-montserrat text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-purpose" className="text-gray-400 transition-colors hover:text-white">
                  Our Purpose
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 transition-colors hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 transition-colors hover:text-white">
                  Pricing & Shipping Options
                </Link>
              </li>
              <li>
                <Link href="/tracking" className="text-gray-400 transition-colors hover:text-white">
                  Track Your Shipment
                </Link>
              </li>
              <li>
                <Link href="/flights" className="text-gray-400 transition-colors hover:text-white">
                  Flight Schedules
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-montserrat text-lg font-semibold">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/locations" className="text-gray-400 transition-colors hover:text-white">
                  Store Partners & Drop-Off
                </Link>
              </li>
              <li>
                <Link href="/customer-care" className="text-gray-400 transition-colors hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/prohibited-items" className="text-gray-400 transition-colors hover:text-white">
                  Prohibited & Regulated Items
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-400 transition-colors hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-400 transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-montserrat text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-[#FFCD00]" />
                <span className="text-gray-400">123 Shipping Lane, Sydney, NSW 2000, Australia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-[#FFCD00]" />
                <span className="text-gray-400">+61 2 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#FFCD00]" />
                <span className="text-gray-400">support@shiplite.com.au</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ShipLite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

