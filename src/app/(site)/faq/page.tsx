import type { Metadata } from "next"
import FaqAccordion from "@/components/sections/faq-accordion"

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about FeedVector, an AI social media scheduling platform for planning, publishing, and analytics.",
  keywords: ["social media scheduling", "AI social media", "faq", "support"],
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ",
    description:
      "Answers to common questions about FeedVector, an AI social media scheduling platform for planning, publishing, and analytics.",
    url: "/faq",
  },
}

export default function FaqPage() {
  return <FaqAccordion />
}
