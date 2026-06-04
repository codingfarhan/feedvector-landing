"use client"

import { useEffect, useState } from "react"

const words = ["followers", "clients", "leads"]

export function AnimatedHeadlineWord() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState(words[0])
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayText(words[0])
      return
    }

    const currentWord = words[wordIndex]

    if (!isDeleting && displayText === currentWord) {
      const pause = window.setTimeout(() => setIsDeleting(true), 1300)
      return () => window.clearTimeout(pause)
    }

    if (isDeleting && displayText === "") {
      const nextWord = window.setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((index) => (index + 1) % words.length)
      }, 250)

      return () => window.clearTimeout(nextWord)
    }

    const type = window.setTimeout(
      () => {
        setDisplayText((text) =>
          isDeleting
            ? currentWord.slice(0, Math.max(text.length - 1, 0))
            : currentWord.slice(0, text.length + 1),
        )
      },
      isDeleting ? 45 : 85,
    )

    return () => window.clearTimeout(type)
  }, [displayText, isDeleting, wordIndex])

  return (
    <span className="inline-flex min-w-[4.7em] justify-start text-primary-600 dark:text-primary-400">
      <span>{displayText || "\u00a0"}</span>
      <span className="ml-1 inline-block h-[1em] w-0.5 translate-y-[0.12em] bg-primary-500" aria-hidden="true" />
    </span>
  )
}
