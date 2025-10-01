"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Award, Briefcase, Code } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative">
                <Image
                  src="/profile-photo.png"
                  alt="Profile photo"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl brightness-110"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">{t.description}</p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.itExperience}</h3>
                  <p className="text-muted-foreground">{t.itYears}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-colors">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Award className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.repositoryExperience}</h3>
                  <p className="text-muted-foreground">{t.repositoryYears}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-green-500/50 transition-colors">
                <div className="p-2 rounded-lg bg-green-500/10">
                  <Code className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t.dspaceExperience}</h3>
                  <p className="text-muted-foreground">{t.dspaceYears}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
