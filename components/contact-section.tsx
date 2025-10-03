"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Mail, Phone, Globe, Calendar, ArrowRight } from "lucide-react"
import { useEffect } from "react"

export function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleCalendlyClick = (e: React.MouseEvent) => {
    e.preventDefault()
    // Open Calendly inline embed
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/mpasternak/dspace/'
      })
    } else {
      // Fallback: open in new tab
      window.open('https://calendly.com/mpasternak/dspace/', '_blank')
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              {t.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground text-balance leading-relaxed">{t.contact.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-card rounded-2xl border border-border p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Michał Pasternak</h3>
                  <p className="text-muted-foreground">DSpace Specialist</p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-1 text-sm text-muted-foreground">{t.contact.email}</p>
                    <a href="mailto:michal.dtz@gmail.com" className="text-primary hover:underline font-medium">
                      michal.dtz@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-1 text-sm text-muted-foreground">{t.contact.phone}</p>
                    <a href="tel:+48793668733" className="text-primary hover:underline font-medium">
                      +48 793 66 87 33
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium mb-1 text-sm text-muted-foreground">{t.contact.languages}</p>
                    <p className="font-medium">{t.contact.languagesList}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20 p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{t.contact.bookMeeting}</h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{t.contact.bookMeetingDescription}</p>
              <a
                href="https://calendly.com/mpasternak/dspace/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 w-full"
              >
                {t.contact.scheduleConsultation}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
