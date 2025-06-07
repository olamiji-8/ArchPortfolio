// hooks/useScrollAnimation.js
import { useState, useEffect } from 'react'

export const useScrollAnimation = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false)
  const [element, setElement] = useState(null)

  useEffect(() => {
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(element) // Only trigger once
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [element, threshold])

  return [setElement, isInView]
}

// Alternative hook for continuous scroll effects
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return scrollProgress
}

// Hook for parallax effects
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const updateOffset = () => {
      setOffset(window.pageYOffset * speed)
    }

    window.addEventListener('scroll', updateOffset)
    return () => window.removeEventListener('scroll', updateOffset)
  }, [speed])

  return offset
}