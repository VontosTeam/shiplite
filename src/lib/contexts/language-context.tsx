"use client"

import React from "react"
import { en } from "@/lib/translations/en"
import { tl } from "@/lib/translations/tl"
import { ceb } from "@/lib/translations/ceb"

type Language = "en" | "tl" | "ceb"

type Translations = typeof en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  isLoading: boolean
}

const translations = {
  en,
  tl,
  ceb,
} as const

const defaultContext: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: en,
  isLoading: true,
}

const LanguageContext = React.createContext<LanguageContextType>(defaultContext)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState<Language>("en")
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    // Simulate translations loading
    setIsLoading(true)
    try {
      // In a real app, you might load translations dynamically here
      setIsLoading(false)
    } catch (error) {
      console.error("Failed to load translations:", error)
      setIsLoading(false)
    }
  }, [language])

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: language === "en" ? en : language === "tl" ? tl : ceb,
    isLoading,
  }

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
} 