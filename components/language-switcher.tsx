"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "cs", name: "Čeština", flag: "🇨🇿" },
  { code: "sk", name: "Slovenčina", flag: "🇸🇰" },
  { code: "uk", name: "Українська", flag: "🇺🇦" },
  { code: "lv", name: "Latviešu", flag: "🇱🇻" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const currentLang = languages.find((lang) => lang.code === language) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleLanguageChange = (code: string) => {
    setLanguage(code)
    setIsOpen(false)
  }

  return (
    <div className="fixed top-4 right-4 z-50" ref={dropdownRef}>
      <Button
        variant="outline"
        size="sm"
        className="gap-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-gray-200 dark:border-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.name}</span>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-xl overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                lang.code === language ? "bg-gray-50 dark:bg-gray-800" : ""
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span className="text-sm text-gray-900 dark:text-gray-100">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
