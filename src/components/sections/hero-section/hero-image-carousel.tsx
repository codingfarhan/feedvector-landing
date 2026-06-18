"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const slides = [
  {
    light: "/images/tab-image/dashboard.png",
    dark: "/images/tab-image/dashboard-dark.png",
    alt: "FeedVector dashboard for planning LinkedIn content",
  },
  {
    light: "/images/tab-image/engage-posts.png",
    dark: "/images/tab-image/engage-posts-dark.png",
    alt: "FeedVector daily LinkedIn posts to comment on",
    imageClassName: "object-contain",
  },
  {
    light: "/images/tab-image/schedule.png",
    dark: "/images/tab-image/schedule-dark.png",
    alt: "FeedVector scheduling calendar",
  },
  {
    light: "/images/tab-image/viral-templates.png",
    dark: "/images/tab-image/viral-templates-dark.png",
    alt: "FeedVector viral post templates",
  },
  {
    light: "/images/feature-showcase/analytics-opportunities.png",
    dark: "/images/feature-showcase/analytics-opportunities-dark.png",
    alt: "FeedVector analytics dashboard",
    imageClassName: "object-contain",
  },
  {
    light: "/images/tab-image/ai-assistant.png",
    dark: "/images/tab-image/ai-assistant-dark.png",
    alt: "FeedVector AI assistant",
  },
  {
    light: "/images/tab-image/content-calendar.png",
    dark: "/images/tab-image/content-calendar-dark.png",
    alt: "FeedVector content calendar",
  },
]

export function HeroImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length)
    }, 3500)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="relative aspect-[966/552] overflow-hidden rounded-2xl bg-white/40 dark:bg-white/5">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex

        return (
          <div
            key={slide.light}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.light}
              alt={isActive ? slide.alt : ""}
              fill
              sizes="(min-width: 1024px) 966px, 100vw"
              className={`${slide.imageClassName ?? "object-cover"} block dark:hidden`}
              priority={index === 0}
            />
            <Image
              src={slide.dark}
              alt={isActive ? slide.alt : ""}
              fill
              sizes="(min-width: 1024px) 966px, 100vw"
              className={`${slide.imageClassName ?? "object-cover"} hidden dark:block`}
              priority={index === 0}
            />
          </div>
        )
      })}
    </div>
  )
}
