"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "./scroll-animation"

export function ExperienceSection() {
  const { language } = useLanguage()
  const t = translations[language].experience

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">
              {t.title}
            </h2>
          </div>
        </ScrollAnimation>

        <div className="grid gap-6 md:grid-cols-1">
          {/* First repository - Ansible installer */}
          <ScrollAnimation animation="slide-left" delay={100}>
            <Card className="border-2 hover:border-blue-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover-lift group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Github className="w-8 h-8 text-blue-600 group-hover:animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed mb-6 group-hover:text-foreground/90 transition-colors">{t.description}</p>
                    <a
                      href="http://github.com/mpasternak/dspace-9-installer-ansible/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 group/btn"
                    >
                      <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                      <span className="font-medium">github.com/mpasternak/dspace-9-installer-ansible</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation animation="slide-right" delay={200}>
            <Card className="border-2 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover-lift group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Github className="w-8 h-8 text-purple-600 group-hover:animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed mb-6 group-hover:text-foreground/90 transition-colors">{t.angularDescription}</p>
                    <a
                      href="https://github.com/mpasternak/dspace-angular-wsbnlu/tree/wsbnlu-9.1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-800 to-purple-900 text-white rounded-lg hover:from-purple-900 hover:to-black transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105 group/btn"
                    >
                      <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                      <span className="font-medium">github.com/mpasternak/dspace-angular-wsbnlu</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
