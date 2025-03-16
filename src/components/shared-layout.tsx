"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "./logo"
import LanguageToggle from "./language-toggle"
import { useLanguage } from "@/contexts/language-context"

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Logo />
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/our-purpose" className="font-poppins text-gray-600 hover:text-australian-green whitespace-nowrap">
                {t("nav.purpose")}
              </Link>
              <Link href="/how-it-works" className="font-poppins text-gray-600 hover:text-australian-green whitespace-nowrap">
                {t("nav.howItWorks")}
              </Link>
              <Link href="/pricing" className="font-poppins text-gray-600 hover:text-australian-green whitespace-nowrap">
                {t("nav.pricing")}
              </Link>
              <Link href="#" className="font-poppins text-gray-600 hover:text-australian-green whitespace-nowrap">
                {t("nav.contact")}
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <Link href="/pricing">
                <Button size="sm" className="hidden md:inline-flex cta-button whitespace-nowrap">
                  {t("cta.bookNow")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Logo variant="light" className="mb-4" />
              <p className="text-gray-400 font-poppins">
                {t("footer.tagline")}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    {t("footer.home")}
                  </Link>
                </li>
                <li>
                  <Link href="/our-purpose" className="text-gray-400 hover:text-white">
                    {t("nav.purpose")}
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="text-gray-400 hover:text-white">
                    {t("nav.howItWorks")}
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white">
                    {t("nav.pricing")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {t("footer.airCargo")}
                  </Link>
                </li>
                <li>
                  <Link href="/tracking" className="text-gray-400 hover:text-white">
                    {t("footer.tracking")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {t("footer.locations")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    {t("footer.prohibited")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ShipLite. {t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 