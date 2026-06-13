import FaqAccordion from "@/components/sections/faq-accordion"
import FeatureShowcase from "@/components/sections/feature-showcase"
import HeroSection from "@/components/sections/hero-section"
import ToolsTab from "@/components/sections/tools-tab"
import PricingSection from "@/components/sections/pricing"
import AudienceSection from "@/components/sections/audience-section"
import McpCallout from "@/components/sections/mcp-callout"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Grow on LinkedIn with high-performing content",
  description:
    "Plan, create, and schedule LinkedIn posts with FeedVector. Choose from hundreds of viral templates, automate your workflow, collaborate, and track performance with AI.",
  keywords: [
    "LinkedIn growth",
    "LinkedIn content tool",
    "LinkedIn post scheduler",
    "content calendar",
    "post scheduling",
    "viral templates",
    "LinkedIn templates",
    "feed vector",
    "feedvector",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grow on LinkedIn with high-performing content",
    description:
      "Plan, create, and schedule LinkedIn posts with FeedVector. Choose from hundreds of viral templates, automate your workflow, collaborate, and track performance with AI.",
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
      alternateName: ["Feed Vector", "feed vector"],
      url: "https://feedvector.com",
    },
  ],
}

export default async function Home() {
  return (
    <>
      <Script id="json-ld-feedvector" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <FeatureShowcase />
      <ToolsTab />
      {/* <CoreFeatures /> */}
      <AudienceSection />
      <McpCallout />
      {/* <BenefitsGrid /> */}
      {/* <TestimonialsSection /> */}
      <PricingSection />
      <FaqAccordion />
    </>
  )
}
