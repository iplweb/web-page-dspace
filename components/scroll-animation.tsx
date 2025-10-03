"use client"

import { useEffect, useRef, ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale" | "blur"
  delay?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-in",
  delay = 0
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("in-view")
            }, delay)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const animationClass = {
    "fade-in": "scroll-animate",
    "slide-up": "scroll-animate",
    "slide-left": "scroll-animate",
    "slide-right": "scroll-animate",
    "scale": "scroll-scale",
    "blur": "scroll-blur"
  }[animation]

  return (
    <div ref={ref} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}