"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Award, Briefcase, Code } from "lucide-react"
import Image from "next/image"
import { ScrollAnimation } from "./scroll-animation"

export function AboutSection() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent animate-gradient-shift">
              {t.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in stagger-1">{t.subtitle}</p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation animation="scale" delay={100}>
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-border to-muted-foreground/20 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative group-hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    src="/profile-photo.png"
                    alt="Profile photo"
                    width={400}
                    height={400}
                    className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <div className="space-y-6">
            <ScrollAnimation animation="fade-in" delay={200}>
              <p className="text-lg text-muted-foreground leading-relaxed animate-slide-in-right">{t.description}</p>
            </ScrollAnimation>

            <div className="space-y-4 pt-4">
              <ScrollAnimation animation="slide-right" delay={300}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:animate-wiggle">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t.itExperience}</h3>
                    <p className="text-muted-foreground">{t.itYears}</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-right" delay={400}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-blue-500/50 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:animate-wiggle">
                    <Award className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t.repositoryExperience}</h3>
                    <p className="text-muted-foreground">{t.repositoryYears}</p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="slide-right" delay={500}>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-green-500/50 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="p-2 rounded-lg bg-green-500/10 group-hover:animate-wiggle">
                    <Code className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t.dspaceExperience}</h3>
                    <p className="text-muted-foreground">{t.dspaceYears}</p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
