"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
  const { language } = useLanguage()
  const t = translations[language].experience

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-1">
          {/* First repository - Ansible installer */}
          <Card className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Github className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-lg leading-relaxed mb-6">{t.description}</p>
                  <a
                    href="http://github.com/mpasternak/dspace-9-installer-ansible/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">github.com/mpasternak/dspace-9-installer-ansible</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-purple-500 transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Github className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <p className="text-lg leading-relaxed mb-6">{t.angularDescription}</p>
                  <a
                    href="https://github.com/mpasternak/dspace-angular-wsbnlu/tree/wsbnlu-9.1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-800 to-purple-900 text-white rounded-lg hover:from-purple-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">github.com/mpasternak/dspace-angular-wsbnlu</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
