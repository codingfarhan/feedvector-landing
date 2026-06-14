import FaqAccordion from "@/components/sections/faq-accordion"
import type { Metadata } from "next"
import PricingSection from "@/components/sections/pricing"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start FeedVector with a 7-day trial, then choose a paid plan for LinkedIn content planning, AI drafting, scheduling, analytics, and automation.",
  keywords: ["LinkedIn content pricing", "LinkedIn scheduling", "AI LinkedIn content", "pricing", "plans"],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing",
    description:
      "Start FeedVector with a 7-day trial, then choose a paid plan for LinkedIn content planning, scheduling, analytics, and automation.",
    url: "/pricing",
  },
}

export default async function PricingPage() {
  return (
    <>
      <PricingSection />
      <FaqAccordion />
    </>
  )
}
