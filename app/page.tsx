import { LanguageSwitcher } from "@/components/language-switcher"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { AboutSection } from "@/components/about-section"
import { PreparationSection } from "@/components/preparation-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

// Added metadata for better SEO
export const metadata = {
  title: "DSpace Services - Professional Consulting & Development",
  description:
    "Expert DSpace consulting and development services by Michal Pasternak. Specializing in DSpace upgrades, translations, customization, plugins, and server optimization.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <LanguageSwitcher />
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <AboutSection />
      <PreparationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
