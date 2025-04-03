"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"
import { en } from "@/translations/en"
import { tl } from "@/translations/tl"
import { ceb } from "@/translations/ceb"

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
}

const defaultContext: LanguageContextType = {
  language: "en",
  setLanguage: () => {},
  t: translations.en,
  isLoading: true,
}

const LanguageContext = createContext<LanguageContextType>(defaultContext)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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

  const value = {
    language,
    setLanguage,
    t: translations[language],
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
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
} 