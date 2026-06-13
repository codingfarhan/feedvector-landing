import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore every FeedVector feature for LinkedIn content planning, AI writing, scheduling, analytics, automation, team workflows, and MCP publishing.",
  keywords: [
    "FeedVector features",
    "LinkedIn content planning",
    "LinkedIn analytics",
    "AI LinkedIn posts",
    "social media scheduling",
    "MCP social media scheduling",
  ],
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "FeedVector Features",
    description: "Explore every FeedVector feature for planning, creating, scheduling, automating, and analyzing LinkedIn content.",
    url: "/features",
    images: [{ url: "/images/tab-image/dashboard.png", width: 1200, height: 630, alt: "FeedVector dashboard" }],
  },
}

const featurePillars = [
  {
    eyebrow: "Plan",
    title: "Turn content strategy into a weekly plan",
    body: "Start from a focused dashboard that shows the current week, next week's queue, content pillars, repurposing actions, and items that need attention.",
    lightImage: "/images/tab-image/dashboard.png",
    darkImage: "/images/tab-image/dashboard-dark.png",
    features: ["Growth dashboard", "Weekly suggested posts", "Next-week generation", "Repurpose content", "Input reminders"],
  },
  {
    eyebrow: "Create",
    title: "Create LinkedIn posts faster with AI",
    body: "Use templates and an AI assistant to move from raw ideas to polished posts, then create supporting visuals without leaving the workflow.",
    lightImage: "/images/tab-image/viral-templates.png",
    darkImage: "/images/tab-image/viral-templates-dark.png",
    features: ["Viral templates", "AI content assistant", "Post rewriting", "AI image generation", "Design tools"],
  },
  {
    eyebrow: "Publish",
    title: "Schedule and manage content without context switching",
    body: "Plan posts on a calendar, manage media, collaborate with your team, and publish consistently across connected social channels.",
    lightImage: "/images/tab-image/schedule.png",
    darkImage: "/images/tab-image/schedule-dark.png",
    features: ["Post scheduling", "Content calendar", "Media library", "Team workspace", "Approvals"],
  },
  {
    eyebrow: "Optimize",
    title: "Use analytics to decide what to post next",
    body: "Learn which formats, topics, hooks, lengths, and posting times perform best so every new post starts with evidence.",
    lightImage: "/images/tab-image/analytics.png",
    darkImage: "/images/tab-image/analytics-dark.png",
    features: ["Performance overview", "Top posts", "Optimization opportunities", "Audience engagement", "Reaction breakdown"],
  },
  {
    eyebrow: "Automate",
    title: "Connect workflows, APIs, and AI clients",
    body: "Trigger repeat actions with integrations, automate publishing workflows, and schedule from AI clients through FeedVector MCP.",
    lightImage: "/images/tab-image/plugs.png",
    darkImage: "/images/tab-image/plugs-dark.png",
    features: ["Auto actions", "API workflows", "n8n / Make / Zapier", "MCP server"],
  },
]

const featureDirectory = [
  {
    title: "Planning",
    features: [
      "Dashboard for weekly content direction",
      "Content calendar",
      "Suggested posts for the current week",
      "Next-week draft generation",
      "Core narrative and content pillars",
      "Needs-your-input reminders",
    ],
  },
  {
    title: "Creation",
    features: [
      "AI content assistant",
      "LinkedIn post generation",
      "Post rewriting and polishing",
      "Viral post templates",
      "AI image generation",
      "Canva-like design tools",
      "Brand templates",
    ],
  },
  {
    title: "Repurposing",
    features: [
      "Turn website pages into posts",
      "Refresh past LinkedIn posts",
      "Create posts from LinkedIn profile context",
      "Repurpose proven content",
      "Draft variations from existing ideas",
    ],
  },
  {
    title: "Publishing",
    features: [
      "LinkedIn scheduling",
      "Multi-channel social account support",
      "Media library",
      "Asset management",
      "UTM and link tracking",
      "Consistent publishing cadence",
    ],
  },
  {
    title: "Analytics",
    features: [
      "Average engagement",
      "Best format analysis",
      "Best posting time analysis",
      "Recommended topic",
      "Top-performing content table",
      "Optimization opportunities",
      "Audience engagement metrics",
      "Reaction breakdown",
    ],
  },
  {
    title: "Automation and teams",
    features: [
      "Automation rules",
      "API integrations",
      "n8n, Make, and Zapier workflows",
      "FeedVector MCP server",
      "Team collaboration",
      "Approvals and workspace workflows",
      "Email support for paid users",
    ],
  },
]

const quickFeatures = [
  "Dashboard",
  "Calendar",
  "Scheduling",
  "Analytics",
  "AI assistant",
  "Templates",
  "Repurposing",
  "AI images",
  "Design tools",
  "Media library",
  "Teamwork",
  "Automation",
  "MCP server",
  "Approvals",
]

function ProductImage({ lightImage, darkImage, alt, priority = false }: { lightImage: string; darkImage: string; alt: string; priority?: boolean }) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-gray-200 bg-white shadow-theme-sm dark:border-white/10 dark:bg-white/5">
      <Image
        src={lightImage}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 1040px, 100vw"
        className="block object-cover object-top dark:hidden"
        priority={priority}
      />
      <Image
        src={darkImage}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 1040px, 100vw"
        className="hidden object-cover object-top dark:block"
        priority={priority}
      />
    </div>
  )
}

export default function FeaturesPage() {
  return (
    <main className="bg-white dark:bg-dark-primary">
      <section className="px-5 py-16 sm:px-7 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-5 inline-flex rounded-full bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-600 dark:text-primary-400">
            Post great content without AI slop
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-800 dark:text-white/90 md:text-6xl">
            All the features you need to build your Personal brand
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400 md:text-lg">
            Plan content, create better LinkedIn posts with AI, schedule consistently, automate repeat work, and use analytics to improve the next
            post.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://app.feedvector.com"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary-500 px-6 text-sm font-medium text-white transition-colors hover:bg-primary-600"
            >
              Start for free
            </Link>
            <Link
              href="/pricing"
              className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 px-6 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-white/10 dark:text-white/90 dark:hover:bg-white/5"
            >
              See pricing
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <ProductImage
            lightImage="/images/tab-image/dashboard.png"
            darkImage="/images/tab-image/dashboard-dark.png"
            alt="FeedVector dashboard"
            priority
          />
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50 py-10 dark:border-white/10 dark:bg-white/[0.03]">
        <div className="wrapper">
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2">
            {quickFeatures.map((feature) => (
              <span
                key={feature}
                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="wrapper space-y-16">
          {featurePillars.map((pillar, index) => (
            <div key={pillar.title} className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary-600 dark:text-primary-400">{pillar.eyebrow}</p>
                <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white/90 md:text-4xl">{pillar.title}</h2>
                <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">{pillar.body}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {pillar.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <ProductImage lightImage={pillar.lightImage} darkImage={pillar.darkImage} alt={pillar.title} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-14 dark:bg-white/[0.03] md:py-24">
        <div className="wrapper">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white/90 md:text-title-lg">Complete feature list</h2>
            <p className="mt-3 text-base leading-7 text-gray-500 dark:text-gray-400">
              A practical inventory of the workflows FeedVector supports today.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featureDirectory.map((group) => (
              <article key={group.title} className="rounded-lg border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-dark-primary">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="wrapper">
          <div className="mx-auto max-w-4xl rounded-lg border border-gray-200 bg-gray-50 p-8 text-center dark:border-white/10 dark:bg-white/5 md:p-10">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white/90">Ready to try the full workflow?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
              Use FeedVector to plan, create, schedule, automate, and analyze your LinkedIn content from one workspace.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="https://app.feedvector.com"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary-500 px-6 text-sm font-medium text-white transition-colors hover:bg-primary-600"
              >
                Open FeedVector
              </Link>
              <Link
                href="/mcp"
                className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 px-6 text-sm font-medium text-gray-700 transition-colors hover:bg-white dark:border-white/10 dark:text-white/90 dark:hover:bg-white/5"
              >
                Explore MCP
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
