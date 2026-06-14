import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

const comparisonRows = [
  ["Best for", "Creators, founders, startups, lean teams, and small agencies", "Social media managers, agencies, and multi-brand teams"],
  [
    "Core focus",
    "AI-powered content creation, scheduling, automation, and analytics",
    "Planning, analytics, reporting, inbox, ads, and multi-brand management",
  ],
  [
    "Scheduling",
    "LinkedIn calendar planning, queues, and MCP scheduling",
    "Planner, calendar, best times, automated content lists, and multi-network scheduling",
  ],
  [
    "AI content",
    "AI assistant, viral templates, AI design, AI images, AI videos, and copilots",
    "AI social media assistant for ideas and writing help",
  ],
  ["Templates", "Viral templates for LinkedIn", "Content planning tools and recurring post templates"],
  [
    "Analytics",
    "Cross-channel analytics connected to the publishing workflow",
    "Strong analytics, competitor tracking, automated reports, and Looker Studio",
  ],
  ["Inbox and ads", "Not the core focus", "Unified inbox plus Google, Facebook, and TikTok Ads dashboards"],
  ["MCP", "FeedVector MCP for Claude, Cursor, and compatible AI clients", "Metricool MCP and API access listed on Advanced"],
  ["Pricing", "Simple Free and $29/month Pro plans", "Free, Starter from $20/month annually, Advanced from $53/month annually"],
  ["Team access", "Unlimited team members on Pro", "Team and client management starts on Advanced"],
]

const pricingRows = [
  ["FeedVector", "Free", "$0", "2 channels, 20 posts/month, AI copilots, picture editor, 2 AI images/month, 1 AI video/month"],
  [
    "FeedVector",
    "Pro",
    "$29/month",
    "50 channels, unlimited posts, analytics, workflow Plugs, integrations, unlimited team members, 35 AI images/month, 20 AI videos/month",
  ],
  ["Metricool", "Free", "$0", "1 brand, limited scheduling, 30 days of analytics, and a narrower social-network set than paid plans"],
  [
    "Metricool",
    "Starter",
    "From $20/month billed annually",
    "More brands, unlimited publishing, LinkedIn connection, reporting tools, PDF/PPT reports, link-in-bio, analytics history, and integrations",
  ],
  [
    "Metricool",
    "Advanced",
    "From $53/month billed annually",
    "Team and client management, roles, approvals, full X analytics, custom reports, Looker Studio, API access, Zapier, Make, and MCP",
  ],
]

const sections = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "positioning", label: "Positioning" },
  { id: "content-creation", label: "Content creation" },
  { id: "planning", label: "Planning" },
  { id: "analytics", label: "Analytics" },
  { id: "automation", label: "Automation" },
  { id: "collaboration-pricing", label: "Teams and pricing" },
  { id: "decision", label: "Decision guide" },
  { id: "verdict", label: "Verdict" },
]

const feedVectorFits = [
  "You want to create posts faster with AI",
  "You publish heavily on LinkedIn",
  "You want viral templates built into the product",
  "You want AI design, image generation, and video generation",
  "You want simple scheduling without a heavy dashboard",
  "You want unlimited team members on one paid plan",
  "You want automation and MCP-style AI workflows",
]

const metricoolFits = [
  "You manage multiple brands or clients",
  "You need stronger reporting and exports",
  "You care about competitor tracking",
  "You need inbox management",
  "You manage ads across Google, Facebook, or TikTok",
  "You need Looker Studio, API access, or client workflows",
  "You want a mature social media operations platform",
]

const faqs = [
  {
    question: "Is FeedVector better than Metricool?",
    answer:
      "FeedVector is better if your priority is AI-native content creation, viral templates, simple scheduling, automation, MCP workflows, and simple pricing. Metricool is stronger if you need reporting depth, competitor tracking, inbox, ads, and multi-brand operations.",
  },
  {
    question: "Who should choose FeedVector over Metricool?",
    answer:
      "Choose FeedVector if you are a creator, founder, startup, or lean team that wants to produce more LinkedIn content, publish consistently, and automate repetitive work without a heavier operations dashboard.",
  },
  {
    question: "Who should choose Metricool over FeedVector?",
    answer:
      "Choose Metricool if you manage many brands or clients and need deeper analytics, automated reports, competitor analysis, inbox workflows, ads dashboards, Looker Studio, or agency-style team controls.",
  },
]

export const metadata: Metadata = {
  title: "FeedVector vs Metricool: Which Tool Should You Choose?",
  description:
    "Compare FeedVector vs Metricool for AI content creation, scheduling, analytics, reporting, automation, inbox, ads, team workflows, and pricing.",
  keywords: [
    "FeedVector vs Metricool",
    "Metricool alternative",
    "AI LinkedIn scheduler",
    "social media analytics tool",
    "social media management",
    "MCP LinkedIn scheduling",
  ],
  alternates: {
    canonical: "/compare/feedvector-vs-metricool",
  },
  openGraph: {
    title: "FeedVector vs Metricool: Which Tool Should You Choose?",
    description: "Compare FeedVector and Metricool for AI-first LinkedIn publishing, planning, reporting, automation, inbox, ads, and pricing.",
    url: "/compare/feedvector-vs-metricool",
    images: [{ url: "/images/feature-showcase/analytics-opportunities.png", width: 1200, height: 601, alt: "FeedVector analytics preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FeedVector vs Metricool",
    description: "Compare FeedVector and Metricool for AI-first LinkedIn publishing and social media operations.",
    images: ["/images/feature-showcase/analytics-opportunities.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "FeedVector vs Metricool: Which Tool Should You Choose?",
      description:
        "A practical comparison of FeedVector and Metricool across AI content creation, planning, scheduling, analytics, reporting, automation, collaboration, and pricing.",
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
      mainEntityOfPage: "https://feedvector.com/compare/feedvector-vs-metricool",
      image: "https://feedvector.com/images/feature-showcase/analytics-opportunities.png",
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

export default function FeedVectorVsMetricoolPage() {
  return (
    <>
      <Script id="json-ld-feedvector-vs-metricool" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-16 md:py-24">
        <div className="wrapper">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_270px]">
              <main className="space-y-16">
                <header className="space-y-6">
                  <div className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                    FeedVector vs Metricool
                  </div>
                  <div className="space-y-4">
                    <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-gray-800 dark:text-white/90 md:text-5xl">
                      FeedVector vs Metricool: Which one should you go for?
                    </h1>
                    <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
                      FeedVector and Metricool both help teams plan, publish, and analyze content. Metricool is a mature operations platform
                      with analytics, reports, inbox, ads, competitor tracking, and multi-brand workflows. FeedVector is an AI-first publishing system
                      built around content creation, viral templates, automation, AI design, and simpler pricing.
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
                      href="/pricing"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-gray-200 bg-white px-6 text-sm font-medium text-gray-700 transition-colors hover:border-primary-200 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:text-primary-400"
                    >
                      See pricing
                    </Link>
                  </div>
                </header>

                <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
                      <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-white/90">FeedVector workflow</p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">AI-first creation and publishing.</p>
                      </div>
                      <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                        AI-native
                      </span>
                    </div>
                    <div className="mt-5 space-y-4">
                      <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                        FeedVector is the better fit when your main goal is to produce more high-performing content, schedule it consistently, and
                        automate repetitive publishing work without a heavy operations dashboard.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <MetricCard value="$29" label="Simple Pro plan" />
                        <MetricCard value="Unlimited" label="Posts and teammates" />
                        <MetricCard value="AI" label="Templates, design, images, and videos" />
                        <MetricCard value="MCP" label="Claude and Cursor scheduling" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
                      <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-white/90">Metricool workflow</p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Planning, reporting, inbox, ads, and brands.</p>
                      </div>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">
                        Operations
                      </span>
                    </div>
                    <div className="mt-5 space-y-4">
                      <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                        Metricool is the better fit when you need a broader control center for multiple brands, client reports, competitor tracking,
                        inbox management, ads dashboards, and agency-style workflows.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <MetricCard value="Brands" label="Multi-brand management" />
                        <MetricCard value="Reports" label="PDF, PPT, and Looker Studio" />
                        <MetricCard value="Inbox" label="Messages and comments" />
                        <MetricCard value="Ads" label="Google, Facebook, and TikTok" />
                      </div>
                    </div>
                  </div>
                </section>

                <section id="at-a-glance" className="scroll-mt-28 space-y-5">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white/90 md:text-3xl">At a glance</h2>
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                      Metricool is stronger when the job is reporting, competitors, ads, inbox, and multi-brand control. FeedVector is stronger when
                      the job is creating better content faster and keeping publishing consistent with less complexity.
                    </p>
                  </div>
                  <ComparisonTable rows={comparisonRows} columns={["Feature", "FeedVector", "Metricool"]} />
                </section>

                <section id="positioning" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="1" title="Product positioning: content engine vs social media control center" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector positions itself as a LinkedIn content tool with AI. Its workflow focuses on creating high-performing
                    posts, using viral templates, collaborating with a team, automating repeat work, and tracking analytics from one place.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Metricool positions itself more like a social media operations dashboard. It highlights planning, analytics, reporting, inbox,
                    SmartLinks, campaigns, ads, competitors, integrations, and team workflows in one tab.
                  </p>
                  <div className="rounded-2xl border border-primary-100 bg-primary-50 p-5 dark:border-primary-500/20 dark:bg-primary-500/10">
                    <p className="text-base font-semibold text-gray-800 dark:text-white/90">Verdict</p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Metricool is broader. FeedVector is more focused. If the main problem is creating better posts faster, FeedVector is the cleaner
                      daily publishing tool.
                    </p>
                  </div>
                </section>

                <section id="content-creation" className="scroll-mt-28 space-y-6">
                  <ArticleHeading eyebrow="2" title="Content creation: FeedVector has the stronger AI-first workflow" />
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <ComparisonBlock
                      title="FeedVector"
                      body="FeedVector combines viral templates for LinkedIn, AI content assistance, AI copilots, auto-complete, AI design tools, an advanced picture editor, AI image generation, and AI video generation."
                      verdict="Best fit if content speed, creative generation, and AI-native publishing are the main priorities."
                    />
                    <ComparisonBlock
                      title="Metricool"
                      body="Metricool includes an AI social media assistant that can help spark ideas and reduce writer's block, but its broader product strength is analytics, reporting, inbox, ads, and multi-brand management."
                      verdict="Best fit if AI writing help is useful, but operations and reporting depth matter more."
                    />
                  </div>
                  <ImageShowcase
                    src="/images/tab-image/viral-templates.png"
                    alt="FeedVector viral templates for LinkedIn"
                    title="FeedVector puts content creation at the center"
                    description="Templates, AI assistance, and creative tools help teams move from idea to scheduled post faster."
                  />
                </section>

                <section id="planning" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="3" title="Scheduling and planning" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector supports planning ahead, queueing posts, and managing LinkedIn content from a single
                    calendar. It is designed to keep publishing consistent without forcing users into a large operations dashboard.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Metricool is mature here too. Its planner supports drag-and-drop scheduling, post previews, best-time recommendations,
                    multi-network scheduling, and automated content lists.
                  </p>
                  <div className="rounded-2xl border border-primary-100 bg-primary-50 p-5 dark:border-primary-500/20 dark:bg-primary-500/10">
                    <p className="text-base font-semibold text-gray-800 dark:text-white/90">Verdict</p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Metricool has the deeper planning system. FeedVector has the simpler AI-first publishing workflow.
                    </p>
                  </div>
                  <ImageShowcase
                    src="/images/tab-image/schedule.png"
                    alt="FeedVector scheduling calendar"
                    title="FeedVector keeps scheduling direct"
                    description="Plan, queue, and maintain a consistent LinkedIn publishing calendar from one workflow."
                  />
                </section>

                <section id="analytics" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="4" title="Analytics and reporting" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    This is where Metricool is strongest. It offers analytics, competitor tracking, automated reports, campaign dashboards, Looker
                    Studio connection, PDF/PPT reports, unlimited analytics history on paid plans, and custom report templates on Advanced.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector offers analytics and insights on Pro. It is better
                    suited to teams that want to understand what content is working and improve the next week of publishing.
                  </p>
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <p className="text-base font-semibold text-gray-800 dark:text-white/90">Verdict</p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Metricool wins for agency-style analytics and reporting. FeedVector keeps analytics closer to the content creation and
                      scheduling workflow.
                    </p>
                  </div>
                  <ImageShowcase
                    src="/images/feature-showcase/analytics-opportunities.png"
                    alt="FeedVector analytics dashboard"
                    title="FeedVector analytics are built for content improvement"
                    description="Track performance, learn what works, and feed that insight back into the next post."
                    width={2367}
                    height={1186}
                  />
                </section>

                <section id="automation" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="5" title="Automation and AI-agent workflows" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector supports auto-actions, workflow Plugs, third-party integrations, and an MCP server that lets users connect Claude,
                    Cursor, or any MCP-compatible client to schedule posts using natural language.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Metricool also lists MCP and API access on Advanced, alongside integrations for Zapier and Make. The difference is emphasis:
                    Metricool ties MCP into a broader operations stack, while FeedVector makes AI-agent scheduling central to the publishing story.
                  </p>
                  <ImageShowcase
                    src="/images/tab-image/plugs.png"
                    alt="FeedVector automation and integrations"
                    title="FeedVector is built for agent-friendly scheduling"
                    description="MCP, workflow Plugs, and integrations help AI clients participate in the publishing process."
                  />
                </section>

                <section id="collaboration-pricing" className="scroll-mt-28 space-y-6">
                  <ArticleHeading eyebrow="6" title="Collaboration and pricing" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector includes teamwork, approvals, task delegation, shared calendars, and unlimited team members on Pro. That is a clean
                    advantage for small teams that do not want seat-based pricing friction.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Metricool supports team and client management, role management, and post approvals on Advanced. That is stronger for formal agency
                    and client workflows, but it also means team controls live in a higher tier.
                  </p>
                  <ImageShowcase
                    src="/images/tab-image/team.png"
                    alt="FeedVector team collaboration workspace"
                    title="FeedVector keeps collaboration simple"
                    description="Approvals, shared calendars, and unlimited teammates on Pro help lean teams collaborate without seat math."
                  />
                  <ComparisonTable rows={pricingRows} columns={["Product", "Plan", "Public price", "Key limits and inclusions"]} />
                </section>

                <section id="decision" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="7" title="Who should choose which tool?" />
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <FeatureList title="Choose FeedVector if" items={feedVectorFits} />
                    <FeatureList title="Choose Metricool if" items={metricoolFits} />
                  </div>
                </section>

                <section id="verdict" className="scroll-mt-28 space-y-6">
                  <ArticleHeading eyebrow="8" title="Final verdict" />
                  <div className="space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p>
                      Metricool is the stronger all-around social media management platform if your priority is analytics, reporting, competitor
                      tracking, inbox, ads, and multi-brand operations.
                    </p>
                    <p>
                      FeedVector is the better choice if your goal is to create and publish better content faster. It gives lean teams AI content
                      creation, viral templates, simple scheduling, automation, MCP workflows, and simpler pricing.
                    </p>
                    <p>
                      Metricool helps social media managers control everything. FeedVector helps modern teams produce more, publish faster, and
                      automate the boring parts.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                    <p className="text-xl font-bold text-gray-800 dark:text-white/90">The practical answer</p>
                    <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Pick Metricool for reporting-heavy social operations. Pick FeedVector if your priority is an AI-native content and scheduling
                      system for faster output.
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
                      Pick FeedVector for AI-native content output. Pick Metricool for reporting-heavy social operations.
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
              <tr key={`${row[0]}-${row[1]}`}>
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
