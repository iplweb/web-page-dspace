"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"
import { smoothScrollTo } from "@/lib/scroll-utils"

export function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    smoothScrollTo("contact")
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/10 to-background py-20 sm:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 flex items-center gap-4 sm:gap-6 animate-fade-in-scale">
            <Image
              src="/images/design-mode/ipl_only_ipl_logo_ifirma_male.png"
              alt="iplweb Logo"
              width={180}
              height={72}
              className="h-16 sm:h-20 w-auto"
            />
            <span className="text-4xl sm:text-5xl font-bold text-red-500 animate-pulse">❤️</span>
            <Image src="/dspace-logo.png" alt="DSpace Logo" width={180} height={180} className="h-16 sm:h-20 w-auto" />
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-balance sm:text-7xl mb-6 animate-slide-up stagger-1 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mb-8 leading-relaxed animate-slide-up stagger-2">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-3">
            <button
              onClick={handleContactClick}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              {t.hero.cta}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="https://calendly.com/mpasternak/dspace/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-4 text-base font-semibold text-white hover:from-blue-600 hover:to-blue-700 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 animate-pulse-subtle"
            >
              {t.hero.scheduleMeeting}
              <Calendar className="h-5 w-5 transition-transform group-hover:scale-110 group-hover:rotate-12" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
