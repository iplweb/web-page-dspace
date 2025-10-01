"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function detectBrowserLanguage(): string {
  if (typeof window === "undefined") return "en"

  const browserLang = navigator.language.toLowerCase()

  // Map browser language codes to our supported languages
  const langMap: Record<string, string> = {
    en: "en",
    pl: "pl",
    de: "de",
    fr: "fr",
    cs: "cs",
    sk: "sk",
    uk: "uk",
    lv: "lv",
    es: "es",
    pt: "pt",
  }

  // Check exact match first
  if (langMap[browserLang]) return langMap[browserLang]

  // Check language prefix (e.g., 'en-US' -> 'en')
  const langPrefix = browserLang.split("-")[0]
  if (langMap[langPrefix]) return langMap[langPrefix]

  return "en" // Default to English
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language")
    if (savedLang) {
      setLanguageState(savedLang)
    } else {
      const detectedLang = detectBrowserLanguage()
      setLanguageState(detectedLang)
    }
  }, [])

  const setLanguage = (lang: string) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
