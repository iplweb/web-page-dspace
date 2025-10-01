"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Michał Pasternak. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a
              href="https://iplweb.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              iplweb.pl
            </a>
            <a
              href="https://github.com/mpasternak/dspace-9-installer-ansible"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              DSpace Installer
            </a>
            <a
              href="https://github.com/mpasternak/dspace-angular-wsbnlu/tree/wsbnlu-9.1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              DSpace Angular
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
