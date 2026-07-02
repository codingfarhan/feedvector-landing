import FaqAccordion from "@/components/sections/faq-accordion";
import type { Metadata } from "next";
import PricingSection from "@/components/sections/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Choose a FeedVector plan for LinkedIn execution, guided growth, or done-for-you content support with planning, approvals, analytics, engagement discovery, and AI media.",
  keywords: [
    "LinkedIn content pricing",
    "LinkedIn scheduling",
    "AI LinkedIn content",
    "pricing",
    "plans",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing",
    description:
      "Choose a FeedVector plan for LinkedIn execution, guided growth, or done-for-you content support with planning, approvals, analytics, engagement discovery, and AI media.",
    url: "/pricing",
  },
};

export default async function PricingPage() {
  return (
    <>
      <PricingSection />
      <FaqAccordion />
    </>
  );
}
