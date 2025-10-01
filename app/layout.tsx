import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import Script from "next/script"

import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { Analytics } from "@vercel/analytics/react"

// Initialize fonts
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://dspace.iplweb.pl"),
  title: {
    default: "DSpace Services - Professional Consulting & Development | Michal Pasternak",
    template: "%s | DSpace Services",
  },
  description:
    "Expert DSpace consulting and development services by Michal Pasternak. Specializing in DSpace upgrades, translations, customization, plugins, and server optimization. 15+ years of experience with DSpace repositories.",
  keywords: [
    "DSpace",
    "DSpace consulting",
    "DSpace development",
    "DSpace upgrade",
    "DSpace customization",
    "DSpace plugins",
    "digital repository",
    "institutional repository",
    "DSpace 7",
    "DSpace 8",
    "DSpace translation",
    "repository migration",
    "Michal Pasternak",
  ],
  authors: [{ name: "Michal Pasternak" }],
  creator: "Michal Pasternak",
  publisher: "IPL Web",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pl_PL", "de_DE", "fr_FR", "es_ES"],
    url: "https://dspace.iplweb.pl",
    siteName: "DSpace Services",
    title: "DSpace Services - Professional Consulting & Development",
    description:
      "Expert DSpace consulting and development services. Upgrades, translations, customization, plugins, and server optimization by Michal Pasternak.",
    images: [
      {
        url: "/dspace-logo-blue-yellow-digital-repository.jpg",
        width: 1200,
        height: 630,
        alt: "DSpace Services - Professional Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DSpace Services - Professional Consulting & Development",
    description:
      "Expert DSpace consulting and development services. Upgrades, translations, customization, plugins, and server optimization.",
    images: ["/dspace-logo-blue-yellow-digital-repository.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://dspace.iplweb.pl",
    languages: {
      en: "https://dspace.iplweb.pl",
      pl: "https://dspace.iplweb.pl",
      de: "https://dspace.iplweb.pl",
      fr: "https://dspace.iplweb.pl",
      es: "https://dspace.iplweb.pl",
    },
  },
  verification: {
    google: "your-google-verification-code", // User should replace with actual code
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "DSpace Services",
              description: "Expert DSpace consulting and development services",
              url: "https://dspace.iplweb.pl",
              logo: "https://dspace.iplweb.pl/dspace-logo.png",
              image: "https://dspace.iplweb.pl/dspace-logo-blue-yellow-digital-repository.jpg",
              founder: {
                "@type": "Person",
                name: "Michal Pasternak",
                jobTitle: "DSpace Consultant & Developer",
                url: "https://dspace.iplweb.pl",
                sameAs: ["https://github.com/mpasternak", "https://iplweb.pl"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "PL",
              },
              areaServed: "Worldwide",
              serviceType: [
                "DSpace Consulting",
                "DSpace Development",
                "Repository Migration",
                "Custom Plugin Development",
                "DSpace Training",
              ],
              knowsAbout: ["DSpace", "Digital Repositories", "Institutional Repositories", "Open Source Software"],
            }),
          }}
        />
      </head>
      <body>
        <Script
          defer
          data-domain="dspace.iplweb.pl"
          src="https://plausible.io/js/script.hash.outbound-links.js"
          strategy="afterInteractive"
        />
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>{children}</LanguageProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
