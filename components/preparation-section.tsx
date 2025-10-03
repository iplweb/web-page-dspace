"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { CheckCircle2 } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function PreparationSection() {
  const { language } = useLanguage()
  const t = translations[language].preparation

  return (
    <section id="preparation" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in stagger-1">{t.subtitle}</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="scale" delay={200}>
          <div className="bg-card rounded-lg shadow-lg p-8 border border-border hover:shadow-2xl transition-all duration-500 hover-lift">
            <div className="space-y-4">
              {t.questions.map((question, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted hover:scale-[1.02] transition-all duration-300 animate-fade-in-scale"
                  style={{ animationDelay: `${index * 100 + 300}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5 hover:animate-bounce" />
                  <p className="text-foreground">{question}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800 animate-slide-in-bottom stagger-6">
              <p className="text-sm text-blue-900 dark:text-blue-100 font-medium">{t.note}</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
