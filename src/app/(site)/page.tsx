import BenefitsGrid from "@/components/sections/benefits-grid"
import TestimonialsSection from "@/components/sections/client-testimonial"
import FaqAccordion from "@/components/sections/faq-accordion"
import HeroSection from "@/components/sections/hero-section"
import ToolsTab from "@/components/sections/tools-tab"
import { CoreFeatures } from "@/components/sections/core-features"
import PricingSection from "@/components/sections/pricing"
import AudienceSection from "@/components/sections/audience-section"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Social Media Scheduling with AI",
  description:
    "Plan, create, and schedule posts across channels with FeedVector. Choose from hundreds of viral templates for X and LinkedIn, automate workflows, collaborate, and track performance with AI.",
  keywords: [
    "social media scheduling",
    "AI social media",
    "social media scheduler",
    "content calendar",
    "post scheduling",
    "viral templates",
    "X templates",
    "LinkedIn templates",
    "feed vector",
    "feedvector",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Social Media Scheduling with AI",
    description:
      "Plan, create, and schedule posts across channels with FeedVector. Choose from hundreds of viral templates for X and LinkedIn, automate workflows, collaborate, and track performance with AI.",
    url: "/",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "FeedVector",
      alternateName: "Feed Vector",
      url: "https://feedvector.com",
      logo: "https://feedvector.com/images/logo-black.svg",
    },
    {
      "@type": "WebSite",
      name: "FeedVector",
      url: "https://feedvector.com",
    },
  ],
}

export default async function Home() {
  return (
    <>
      <Script id="json-ld-feedvector" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <CoreFeatures />
      <AudienceSection />
      <ToolsTab />
      <BenefitsGrid />
      <TestimonialsSection />
      <PricingSection />
      <FaqAccordion />
    </>
  )
}
