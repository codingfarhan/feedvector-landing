import FaqAccordion from "@/components/sections/faq-accordion"
import type { Metadata } from "next"
import PricingSection from "@/components/sections/pricing"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple pricing for FeedVector, the AI social media scheduling platform. Compare plans and pick the right fit for your team.",
  keywords: ["social media scheduling", "AI social media", "pricing", "plans", "social media management"],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing",
    description:
      "Simple pricing for FeedVector, the AI social media scheduling platform. Compare plans and pick the right fit for your team.",
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
