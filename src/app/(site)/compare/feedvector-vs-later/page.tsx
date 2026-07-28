import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

const comparisonRows = [
  ["Product focus", "AI-first publishing workspace", "Social media management plus influencer and creator workflows"],
  [
    "AI posture",
    "AI assistant, copilots, auto-complete, AI design, images, videos, and MCP workflows",
    "AI Ideas and Caption Writer powered by monthly AI credits",
  ],
  ["Templates", "Hundreds of viral templates for LinkedIn", "Idea generation, captions, hashtags, and media workflows"],
  [
    "Publishing",
    "Cross-posting, queue publishing, calendar planning, auto-actions, and MCP scheduling",
    "Multi-profile scheduling, visual planner, auto publish, and best-time tools",
  ],
  [
    "Collaboration",
    "Team users, approvals, guided onboarding, and done-for-you support options",
    "Approvals, access groups, external feedback, custom roles, and permissions",
  ],
  [
    "Analytics",
    "Unified cross-channel analytics tied to the publishing workflow",
    "Detailed plan-based analytics, reports, and longer lookback windows on higher tiers",
  ],
  [
    "Pricing",
    "$179 Essential, $379 Growth, and Done-for-you from $1,499/month",
    "Starter, Growth, and Scale plans with users, social sets, and AI credit limits",
  ],
]

const pricingRows = [
  [
    "FeedVector",
    "Essential",
    "$179/month",
    "5 social media channels, 2 additional team users, self-service software, onboarding call, all features, 100 AI images/month, 35 AI videos/month",
  ],
  [
    "FeedVector",
    "Growth",
    "$379/month",
    "Unlimited social media channels and users, configured brand strategy, guided onboarding, monthly review call, 200 AI images/month, 50 AI videos/month",
  ],
  [
    "FeedVector",
    "Done-for-you",
    "Starts at $1,499/month",
    "Founder and company-page strategy, content planning, writing, editing, scheduling, monthly reporting, and ongoing performance reviews",
  ],
  ["Later", "Starter", "$18.75/month billed yearly", "1 social set, 1 user, 30 posts/profile/month, 5 AI credits/month, analytics up to 3 months"],
  [
    "Later",
    "Growth",
    "$37.50/month billed yearly",
    "2 social sets, 2 users, 180 posts/profile/month, 50 AI credits/month, approvals, social inbox, UGC collection",
  ],
  [
    "Later",
    "Scale",
    "$82.50/month billed yearly",
    "6 social sets, 4 users, unlimited posts, 100 AI credits/month, custom analytics, benchmarking, analytics up to 2 years",
  ],
]

const sections = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "positioning", label: "Positioning" },
  { id: "ai-creation", label: "AI creation" },
  { id: "publishing", label: "Publishing" },
  { id: "collaboration", label: "Collaboration" },
  { id: "analytics-pricing", label: "Analytics and pricing" },
  { id: "decision", label: "Decision guide" },
  { id: "verdict", label: "Verdict" },
]

const feedVectorFits = [
  "You want AI to help create, refine, design, and schedule posts",
  "You publish heavily on LinkedIn and want viral templates",
  "You want AI images, AI videos, and workflow automation in one plan",
  "You want to schedule through AI clients like Claude or Cursor using MCP",
  "You want a guided LinkedIn growth system or done-for-you support",
]

const laterFits = [
  "You need detailed platform-by-platform scheduling documentation",
  "You manage visual planning, Link in Bio, UGC, and social inbox workflows",
  "You need access groups, external approvals, custom roles, and permissions",
  "You want more explicit public documentation for analytics and reporting tiers",
  "You are running a broader social operations or agency workflow",
]

const faqs = [
  {
    question: "Is FeedVector better than Later?",
    answer:
      "FeedVector is better if your priority is AI-native LinkedIn content production, automation, MCP scheduling, and simple team pricing. Later is stronger if you need a more operational social media management stack with visual planning, UGC, Link in Bio, access groups, and detailed analytics tiers.",
  },
  {
    question: "Who should choose FeedVector over Later?",
    answer:
      "Choose FeedVector if you want to publish more content with fewer people, use viral templates for LinkedIn, generate images or videos with AI, and connect AI clients to your publishing workflow.",
  },
  {
    question: "Who should choose Later over FeedVector?",
    answer:
      "Choose Later if you need structured social operations, platform-specific scheduling documentation, UGC collection, Link in Bio, social inbox workflows, external approvals, and granular access controls.",
  },
]

export const metadata: Metadata = {
  title: "FeedVector vs Later: Which Tool Should You Choose?",
  description: "Compare FeedVector vs Later for AI LinkedIn content creation, scheduling, collaboration, analytics, automation, and pricing.",
  keywords: [
    "FeedVector vs Later",
    "Later alternative",
    "AI LinkedIn scheduler",
    "social media management",
    "social media automation",
    "MCP LinkedIn scheduling",
  ],
  alternates: {
    canonical: "/compare/feedvector-vs-later",
  },
  openGraph: {
    title: "FeedVector vs Later: Which Tool Should You Choose?",
    description: "Compare FeedVector and Later for AI-native publishing, visual planning, collaboration, analytics, and pricing.",
    url: "/compare/feedvector-vs-later",
    images: [
      {
        url: "/images/tab-image/viral-templates.png",
        width: 1200,
        height: 630,
        alt: "FeedVector viral templates preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FeedVector vs Later",
    description: "Compare FeedVector and Later for AI-first LinkedIn publishing and social media operations.",
    images: ["/images/tab-image/viral-templates.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "FeedVector vs Later: Which Tool Should You Choose?",
      description:
        "A practical comparison of FeedVector and Later across AI content creation, scheduling, collaboration, analytics, automation, and pricing.",
      author: {
        "@type": "Organization",
        name: "FeedVector",
      },
      publisher: {
        "@type": "Organization",
        name: "FeedVector",
        logo: {
          "@type": "ImageObject",
          url: "https://feedvector.com/images/logo-black.svg",
        },
      },
      mainEntityOfPage: "https://feedvector.com/compare/feedvector-vs-later",
      image: "https://feedvector.com/images/tab-image/viral-templates.png",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
}

export default function FeedVectorVsLaterPage() {
  return (
    <>
      <Script id="json-ld-feedvector-vs-later" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-16 md:py-24">
        <div className="wrapper">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_270px]">
              <main className="space-y-16">
                <header className="space-y-6">
                  <div className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                    FeedVector vs Later
                  </div>
                  <div className="space-y-4">
                    <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-gray-800 dark:text-white/90 md:text-5xl">
                      FeedVector vs Later: AI publishing engine or social operations stack?
                    </h1>
                    <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
                      FeedVector and Later both help teams plan, schedule, collaborate, and analyze content. The difference is the workflow
                      philosophy: FeedVector is built around AI-native LinkedIn publishing, while Later is a broader social media management platform
                      with visual planning, UGC, Link in Bio, approvals, and reporting.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="https://app.feedvector.com"
                      className="inline-flex h-11 items-center justify-center rounded-full bg-primary-500 px-6 text-sm font-medium text-white transition-colors hover:bg-primary-600"
                    >
                      Try FeedVector
                    </Link>
                    <Link
                      href="https://calendly.com/syedfarhanahmad0/30min"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-gray-200 bg-white px-6 text-sm font-medium text-gray-700 transition-colors hover:border-primary-200 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:text-primary-400"
                    >
                      Book a call
                    </Link>
                  </div>
                </header>

                <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
                      <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-white/90">FeedVector workflow</p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">AI native scheduling thats simple.</p>
                      </div>
                      <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600 dark:bg-primary-500/10 dark:text-primary-400 whitespace-nowrap">
                        AI-first
                      </span>
                    </div>
                    <div className="mt-5 space-y-4">
                      <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                        FeedVector is built for teams that want templates, AI writing, AI visuals, scheduling, automation, and team collaboration in
                        one simpler workflow.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <MetricCard value="$179" label="Essential execution platform" />
                        <MetricCard value="$379" label="Guided Growth plan" />
                        <MetricCard value="AI" label="Images, videos, design, and copilots" />
                        <MetricCard value="MCP" label="Claude and Cursor scheduling" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
                      <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-white/90">Later workflow</p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Visual social operations and governance.</p>
                      </div>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">
                        Operations
                      </span>
                    </div>
                    <div className="mt-5 space-y-4">
                      <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                        Later is the better fit when you need visual planning, UGC workflows, Link in Bio, social inbox, stakeholder approvals, access
                        controls, and detailed social operations.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <MetricCard value="Visual" label="Planner and calendar workflows" />
                        <MetricCard value="UGC" label="Collect and manage assets" />
                        <MetricCard value="Approvals" label="Internal and external review" />
                        <MetricCard value="Reports" label="Plan-based analytics depth" />
                      </div>
                    </div>
                  </div>
                </section>

                <section id="at-a-glance" className="scroll-mt-28 space-y-5">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white/90 md:text-3xl">At a glance</h2>
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                      If the buying question is "Which tool gives us the most leverage for AI-assisted publishing?", FeedVector is the stronger fit.
                      If the question is "Which tool gives us more explicit social operations controls?", Later is stronger on public documentation.
                    </p>
                  </div>
                  <ComparisonTable rows={comparisonRows} columns={["Attribute", "FeedVector", "Later"]} />
                </section>

                <section id="positioning" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="1" title="Positioning and workflow" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector is focused on one core problem: helping teams create and schedule high-performing LinkedIn posts with AI. Its workflow
                    starts earlier in the creation process with viral templates, AI copilots, AI design, and AI media generation, then carries that
                    work into scheduling, auto-actions, MCP, and analytics.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Later is broader. Its social product sits alongside influencer marketing, creator monetization, Link in Bio, UGC collection,
                    access controls, social inbox, visual planning, and reporting. That broader footprint is useful for teams that run social as an
                    operations function, not just a content production workflow.
                  </p>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <WorkflowCard
                      title="FeedVector workflow"
                      items={[
                        "Idea input",
                        "Viral templates and AI copilot",
                        "AI design, images, and videos",
                        "LinkedIn calendar and scheduling",
                        "Auto-actions and MCP scheduling",
                        "Unified analytics",
                      ]}
                    />
                    <WorkflowCard
                      title="Later workflow"
                      items={[
                        "Idea input",
                        "AI Ideas and Caption Writer",
                        "UGC, media edits, and Canva workflow",
                        "Visual planner and multi-profile scheduling",
                        "Approvals, access groups, and social inbox",
                        "Link in Bio and reporting",
                      ]}
                    />
                  </div>
                </section>

                <section id="ai-creation" className="scroll-mt-28 space-y-6">
                  <ArticleHeading eyebrow="2" title="AI and content creation" />
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <ComparisonBlock
                      title="FeedVector"
                      body="FeedVector has the clearer AI-native creation stack: viral templates for LinkedIn, AI content assistance, AI copilots, AI auto-complete, Design with AI, a picture editor, AI image generation, and AI video allowances."
                      verdict="Best fit if the job is to create more content faster, with AI embedded across writing, creative, and publishing."
                    />
                    <ComparisonBlock
                      title="Later"
                      body="Later's AI layer is useful but narrower. Its public pricing describes AI credits for Ideas and Caption Writer, while the product also emphasizes UGC collection, hashtags, media management, and content operations."
                      verdict="Best fit if the job is to source, organize, approve, and optimize assets across a social team."
                    />
                  </div>
                  <ImageShowcase
                    src="/images/tab-image/ai-image.png"
                    alt="FeedVector AI image generation preview"
                    title="FeedVector goes deeper on AI-native creation"
                    description="The creation workflow includes writing help, templates, design, AI images, and AI videos."
                  />
                </section>

                <section id="publishing" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="3" title="Scheduling and publishing" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector supports LinkedIn scheduling from a single calendar, queue-style publishing, auto-actions, integrations, and MCP
                    scheduling from AI clients. That makes it a strong option for teams that already use AI assistants and want natural-language
                    scheduling to become part of their daily workflow.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Later is more explicit on platform and post-type support. Its current public docs list Instagram, Facebook, Pinterest, TikTok,
                    LinkedIn, Threads, YouTube Shorts, and Snapchat, with detailed limitations and supported post formats. Later also documents auto
                    publish, multi-profile scheduling, Visual Planner, saved captions, draft posts, and best-time tools.
                  </p>
                  <div className="rounded-2xl border border-primary-100 bg-primary-50 p-5 dark:border-primary-500/20 dark:bg-primary-500/10">
                    <p className="text-base font-semibold text-gray-800 dark:text-white/90">Verdict</p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Later wins on publicly documented platform-by-platform publishing detail. FeedVector wins on automation, AI-client scheduling,
                      and turning publishing into a more agentic workflow.
                    </p>
                  </div>
                  <ImageShowcase
                    src="/images/tab-image/schedule.png"
                    alt="FeedVector scheduling calendar"
                    title="FeedVector keeps publishing simple and repeatable"
                    description="Use one scheduling workflow for planning, queues, and consistent LinkedIn publishing."
                  />
                </section>

                <section id="collaboration" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="4" title="Collaboration and teams" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector includes approvals, guided onboarding, and team collaboration. Essential supports 5 social media channels and 2
                    additional users, while Growth adds unlimited profiles, unlimited users, a configured brand strategy, and monthly review calls.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Later is stronger on public detail for governance. Its Growth and Scale tiers include collaboration and approvals, social inbox,
                    UGC collection, custom roles and permissions, and access groups. For agencies and multi-brand workflows, that detail can matter.
                  </p>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <FeatureList title="Choose FeedVector for" items={feedVectorFits} />
                    <FeatureList title="Choose Later for" items={laterFits} />
                  </div>
                  <ImageShowcase
                    src="/images/tab-image/team.png"
                    alt="FeedVector team collaboration workspace"
                    title="Team collaboration stays close to the publishing workflow"
                    description="FeedVector brings shared calendars, approvals, and team movement into the same content system."
                  />
                </section>

                <section id="analytics-pricing" className="scroll-mt-28 space-y-6">
                  <ArticleHeading eyebrow="5" title="Analytics, integrations, and pricing" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Later is more explicit about analytics depth on public pages. It documents plan-based lookback windows, shareable reports, custom
                    analytics on Scale, competitive benchmarking, and social listening powered future insights on higher tiers.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector's public positioning is lighter on report-format detail, but stronger for AI-native teams: third-party integrations,
                    Plugs for complex workflows, and a documented MCP server with API-key or Bearer authentication for AI clients.
                  </p>
                  <ComparisonTable rows={pricingRows} columns={["Product", "Plan", "Public price", "Key limits and inclusions"]} />
                  <ImageShowcase
                    src="/images/feature-showcase/analytics-opportunities.png"
                    alt="FeedVector analytics dashboard"
                    title="Analytics connected to creation and scheduling"
                    description="FeedVector keeps performance data near the workflow that creates and publishes the next post."
                    width={2367}
                    height={1186}
                  />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    The economic takeaway is simple: FeedVector separates solo users, core creators, teams, and agencies into clear tiers. Later's
                    costs rise as you need more social sets, users, AI credits, analytics depth, and governance.
                  </p>
                </section>

                <section id="decision" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="6" title="Ideal fit and decision criteria" />
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <DecisionCard
                      title="FeedVector is the better fit if"
                      items={[
                        "Your core problem is shipping more content with fewer people",
                        "You want AI drafting, templates, visuals, and videos",
                        "You want automation beyond standard scheduling",
                        "You want AI-agent connectivity through MCP",
                        "You want clear team and growth tiers",
                      ]}
                    />
                    <DecisionCard
                      title="Later is the better fit if"
                      items={[
                        "You run a structured social operations program",
                        "You need visual planning, UGC, Link in Bio, or social inbox",
                        "You need explicit access controls and external approvals",
                        "You want more detailed public analytics documentation",
                        "You manage multiple brands or agency workflows",
                      ]}
                    />
                  </div>
                </section>

                <section id="verdict" className="scroll-mt-28 space-y-6">
                  <ArticleHeading eyebrow="7" title="Final verdict" />
                  <div className="space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p>
                      FeedVector is the better choice if your primary goal is to build an AI-native publishing system rather than a broader social
                      operations stack. It leads with viral templates, AI copilots, AI design, image and video generation, workflow automation, and
                      MCP-based scheduling.
                    </p>
                    <p>
                      Later is stronger where governance, platform-by-platform documentation, UGC operations, social inbox, Link in Bio, and reporting
                      sophistication matter most.
                    </p>
                    <p>
                      On the narrower question of which platform gives you more leverage for AI-assisted content production and publishing per dollar,
                      FeedVector comes out ahead.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                    <p className="text-xl font-bold text-gray-800 dark:text-white/90">The practical answer</p>
                    <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Pick Later for visual social operations and governance. Pick FeedVector for AI-first content production, automation, MCP
                      scheduling, and simple team pricing.
                    </p>
                    <Link
                      href="https://app.feedvector.com"
                      className="mt-5 inline-flex h-11 items-center justify-center rounded-full bg-primary-500 px-6 text-sm font-medium text-white transition-colors hover:bg-primary-600"
                    >
                      Start with FeedVector
                    </Link>
                  </div>
                </section>

                <section className="space-y-5">
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white/90 md:text-3xl">FAQs</h2>
                  <div className="space-y-3">
                    {faqs.map((faq) => (
                      <div key={faq.question} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                        <h3 className="text-base font-bold text-gray-800 dark:text-white/90">{faq.question}</h3>
                        <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </main>

              <aside className="hidden lg:block">
                <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-gray-800 dark:text-white/90">On this page</p>
                  <nav className="mt-4 space-y-2.5 text-sm">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        className="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                        href={`#${section.id}`}
                      >
                        {section.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-5 border-t border-gray-200 pt-4 dark:border-white/10">
                    <p className="text-sm font-semibold text-gray-800 dark:text-white/90">Short summary</p>
                    <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      Pick FeedVector for AI-native creation and automation. Pick Later for visual social operations and governance.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ArticleHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-bold text-primary-600 dark:text-primary-400">{eyebrow}</p>
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white/90 md:text-3xl">{title}</h2>
    </div>
  )
}

function ComparisonBlock({ title, body, verdict }: { title: string; body: string; verdict: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">{title}</h3>
      <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">{body}</p>
      <p className="mt-4 rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-600 dark:bg-white/5 dark:text-gray-300">{verdict}</p>
    </div>
  )
}

function ComparisonTable({ rows, columns }: { rows: string[][]; columns: string[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-gray-50 text-gray-700 dark:bg-white/5 dark:text-gray-200">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-5 py-4 font-semibold">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-white/10">
            {rows.map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell, index) => (
                  <td
                    key={`${row[0]}-${index}`}
                    className={index === 0 ? "px-5 py-4 font-medium text-gray-800 dark:text-white/90" : "px-5 py-4 text-gray-600 dark:text-gray-300"}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function FeatureList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base text-gray-600 dark:text-gray-300">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function WorkflowCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">{title}</h3>
      <ol className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 text-base text-gray-600 dark:text-gray-300">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-600 dark:bg-white/10 dark:text-gray-300">
              {index + 1}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function DecisionCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white/90">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="text-base leading-7 text-gray-600 dark:text-gray-300">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-gray-50 p-4 dark:bg-white/5">
      <p className="text-lg font-bold text-gray-800 dark:text-white/90">{value}</p>
      <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">{label}</p>
    </div>
  )
}

function ImageShowcase({
  src,
  alt,
  title,
  description,
  width = 936,
  height = 535,
}: {
  src: string
  alt: string
  title: string
  description: string
  width?: number
  height?: number
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5">
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" />
      <div className="border-t border-gray-200 p-5 dark:border-white/10">
        <p className="text-base font-semibold text-gray-800 dark:text-white/90">{title}</p>
        <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  )
}
