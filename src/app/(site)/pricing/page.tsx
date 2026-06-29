import FaqAccordion from "@/components/sections/faq-accordion"
import type { Metadata } from "next"
import PricingSection from "@/components/sections/pricing"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose a FeedVector plan for LinkedIn content planning, AI drafting, scheduling, analytics, team access, multi-account workflows, and client reporting.",
  keywords: ["LinkedIn content pricing", "LinkedIn scheduling", "AI LinkedIn content", "pricing", "plans"],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing",
    description:
      "Choose a FeedVector plan for LinkedIn content planning, scheduling, analytics, team access, multi-account workflows, and client reporting.",
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
