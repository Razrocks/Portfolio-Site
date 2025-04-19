"use client"

import { useState, useEffect } from "react"

interface TypewriterOptions {
  text: string
  speed?: number
  delay?: number
}

export function useTypewriter({ text, speed = 50, delay = 0 }: TypewriterOptions) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDelaying, setIsDelaying] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Initial delay before starting to type
    if (isDelaying) {
      timeout = setTimeout(() => {
        setIsDelaying(false)
      }, delay)
      return () => clearTimeout(timeout)
    }

    // Start typing after delay
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, isDelaying, speed, text])

  return displayedText
}
