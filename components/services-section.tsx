"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { ArrowUpCircle, Languages, Palette, Puzzle, Server, Wrench } from "lucide-react"

export function ServicesSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      icon: ArrowUpCircle,
      title: t.services.upgrade.title,
      description: t.services.upgrade.description,
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600",
    },
    {
      icon: Languages,
      title: t.services.translation.title,
      description: t.services.translation.description,
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600",
    },
    {
      icon: Palette,
      title: t.services.customization.title,
      description: t.services.customization.description,
      color: "from-orange-500/10 to-red-500/10",
      iconColor: "text-orange-600",
    },
    {
      icon: Puzzle,
      title: t.services.plugins.title,
      description: t.services.plugins.description,
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600",
    },
    {
      icon: Server,
      title: t.services.optimization.title,
      description: t.services.optimization.description,
      color: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-600",
    },
    {
      icon: Wrench,
      title: t.services.more.title,
      description: t.services.more.description,
      color: "from-amber-500/10 to-yellow-500/10",
      iconColor: "text-amber-600",
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            {t.services.title}
          </h2>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex flex-col p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-border group-hover:scale-110 transition-transform duration-300">
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
