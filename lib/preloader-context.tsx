"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type PreloaderContextType = {
  isLoading: boolean
  isLanguageLoaded: boolean
  isAssetsLoaded: boolean
  setLanguageLoaded: () => void
  setAssetsLoaded: () => void
  hidePreloader: () => void
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined)

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false)
  const [isAssetsLoaded, setIsAssetsLoaded] = useState(false)
  const [showPreloader, setShowPreloader] = useState(true)

  const isLoading = !isLanguageLoaded || !isAssetsLoaded

  useEffect(() => {
    // Check if assets are loaded
    if (document.readyState === 'complete') {
      setIsAssetsLoaded(true)
    } else {
      const handleLoad = () => {
        setIsAssetsLoaded(true)
      }
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  // Hide preloader with a small delay for smooth transition
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowPreloader(false)
      }, 300) // Small delay for smooth fade out
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  const setLanguageLoaded = () => {
    setIsLanguageLoaded(true)
  }

  const setAssetsLoaded = () => {
    setIsAssetsLoaded(true)
  }

  const hidePreloader = () => {
    setShowPreloader(false)
  }

  return (
    <PreloaderContext.Provider
      value={{
        isLoading,
        isLanguageLoaded,
        isAssetsLoaded,
        setLanguageLoaded,
        setAssetsLoaded,
        hidePreloader,
      }}
    >
      {children}
    </PreloaderContext.Provider>
  )
}

export function usePreloader() {
  const context = useContext(PreloaderContext)
  if (context === undefined) {
    throw new Error("usePreloader must be used within a PreloaderProvider")
  }
  return context
}