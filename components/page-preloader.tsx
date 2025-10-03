"use client"

import { usePreloader } from "@/lib/preloader-context"
import Image from "next/image"

export function PagePreloader() {
  const { isLoading, showPreloader } = usePreloader()

  if (!showPreloader) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-300 ${!isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="flex flex-col items-center space-y-8">
        {/* Logos */}
        <div className="flex items-center gap-6">
          <Image
            src="/images/design-mode/ipl_only_ipl_logo_ifirma_male.png"
            alt="iplweb Logo"
            width={120}
            height={48}
            className="h-12 w-auto animate-pulse-subtle"
          />
          <span className="text-3xl font-bold text-red-500 animate-pulse">❤️</span>
          <Image
            src="/dspace-logo.png"
            alt="DSpace Logo"
            width={120}
            height={120}
            className="h-12 w-auto animate-pulse-subtle"
          />
        </div>

        {/* Throbber */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>

        {/* Loading text */}
        <div className="text-center space-y-2">
          <p className="text-muted-foreground animate-pulse-subtle">
            Loading DSpace Services...
          </p>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </div>
  )
}