import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

const comparisonRows = [
  ["Best for", "Creators, founders, startups, lean teams, and agencies", "Large teams, enterprises, and social media departments"],
  [
    "Core focus",
    "AI-powered content creation, scheduling, automation, and analytics",
    "Full social media management, intelligence, inbox, listening, and reporting",
  ],
  [
    "AI creation",
    "AI assistant, viral templates, AI design, AI images, AI videos, and copilots",
    "OwlyGPT, AI captions, ideas, image generation, hashtag suggestions, Canva, and Adobe Express",
  ],
  [
    "Scheduling",
    "Cross-posting, queues, calendar planning, and MCP scheduling",
    "Cross-network scheduling, social calendar, recommended times, and bulk scheduling",
  ],
  [
    "Automation",
    "Auto-actions, workflow Plugs, integrations, and MCP for AI clients",
    "DM automations, routing, tagging, saved replies, and enterprise workflows",
  ],
  [
    "Analytics",
    "Cross-channel analytics connected to the publishing workflow",
    "Advanced reports, benchmarking, ROI reporting, exports, and scheduled reports",
  ],
  ["Team model", "Unlimited team members on Pro", "User seats and governance controls depend on plan"],
  ["Pricing style", "Simple Free and $29/month Pro plans", "Per-user Standard and Advanced plans, plus custom Enterprise pricing"],
]

const pricingRows = [
  ["FeedVector", "Free", "$0", "2 channels, 20 posts/month, AI copilots, picture editor, 2 AI images/month, 1 AI video/month"],
  [
    "FeedVector",
    "Pro",
    "$29/month",
    "50 channels, unlimited posts, analytics, workflow Plugs, integrations, unlimited team members, 35 AI images/month, 20 AI videos/month",
  ],
  [
    "Hootsuite",
    "Standard",
    "Per user/month, billed annually",
    "Up to 10 social accounts, unlimited scheduling, AI assistant, inbox, DM automations, 7-day mention search, 5 competitor benchmarks",
  ],
  [
    "Hootsuite",
    "Advanced",
    "Per user/month, billed annually",
    "Unlimited social accounts, customizable analytics, saved replies, bulk scheduling up to 350 posts, routing, exports, 20 competitor benchmarks",
  ],
  [
    "Hootsuite",
    "Enterprise",
    "Custom",
    "Custom plan, more users, SSO, Talkwalker-powered listening, Advanced Analytics, Advanced Inbox, chatbot, Salesforce and compliance integrations",
  ],
]

const sections = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "positioning", label: "Positioning" },
  { id: "content-creation", label: "Content creation" },
  { id: "publishing", label: "Publishing" },
  { id: "automation", label: "Automation" },
  { id: "analytics", label: "Analytics" },
  { id: "collaboration-pricing", label: "Teams and pricing" },
  { id: "decision", label: "Decision guide" },
  { id: "verdict", label: "Verdict" },
]

const feedVectorFits = [
  "You want a simpler LinkedIn content tool",
  "You care about AI-assisted content creation",
  "You publish heavily on LinkedIn",
  "You want viral templates built into the workflow",
  "You want AI design, image generation, and video generation",
  "You want team collaboration without paying per teammate",
  "You want automation through AI clients like Claude or Cursor",
]

const hootsuiteFits = [
  "You are a large company or enterprise team",
  "You need social listening and brand monitoring",
  "You need advanced inbox management",
  "You need competitive benchmarking",
  "You need deep reporting, exports, and ROI analytics",
  "You have complex approval, compliance, or department workflows",
  "You need a larger integration and governance ecosystem",
]

const faqs = [
  {
    question: "Is FeedVector better than Hootsuite?",
    answer:
      "FeedVector is better if you want a simpler AI-native publishing system with clear pricing, viral templates, AI media generation, MCP scheduling, and unlimited team members on Pro. Hootsuite is stronger if you need enterprise governance, listening, inbox operations, benchmarking, and deeper reporting.",
  },
  {
    question: "Who should choose FeedVector over Hootsuite?",
    answer:
      "Choose FeedVector if you are a creator, founder, startup, agency, or lean team that wants to create, schedule, automate, and analyze LinkedIn content without enterprise complexity.",
  },
  {
    question: "Who should choose Hootsuite over FeedVector?",
    answer:
      "Choose Hootsuite if you need large-team controls, social listening, brand monitoring, advanced inbox routing, competitive benchmarking, advanced report exports, ROI analytics, or compliance integrations.",
  },
]

export const metadata: Metadata = {
  title: "FeedVector vs Hootsuite: Which Tool Should You Choose?",
  description:
    "Compare FeedVector vs Hootsuite for AI LinkedIn content creation, scheduling, automation, analytics, team collaboration, social listening, and pricing.",
  keywords: [
    "FeedVector vs Hootsuite",
    "Hootsuite alternative",
    "AI LinkedIn scheduler",
    "social media management",
    "social media automation",
    "LinkedIn scheduling tool",
  ],
  alternates: {
    canonical: "/compare/feedvector-vs-hootsuite",
  },
  openGraph: {
    title: "FeedVector vs Hootsuite: Which Tool Should You Choose?",
    description: "Compare FeedVector and Hootsuite for AI-first publishing, enterprise social management, automation, analytics, and pricing.",
    url: "/compare/feedvector-vs-hootsuite",
    images: [{ url: "/images/tab-image/plugs.png", width: 1200, height: 630, alt: "FeedVector automation preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FeedVector vs Hootsuite",
    description: "Compare FeedVector and Hootsuite for AI-first LinkedIn publishing and enterprise social media management.",
    images: ["/images/tab-image/plugs.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "FeedVector vs Hootsuite: Which Tool Should You Choose?",
      description:
        "A practical comparison of FeedVector and Hootsuite across AI content creation, scheduling, automation, analytics, collaboration, social listening, and pricing.",
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
      mainEntityOfPage: "https://feedvector.com/compare/feedvector-vs-hootsuite",
      image: "https://feedvector.com/images/tab-image/plugs.png",
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

export default function FeedVectorVsHootsuitePage() {
  return (
    <>
      <Script id="json-ld-feedvector-vs-hootsuite" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-16 md:py-24">
        <div className="wrapper">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_270px]">
              <main className="space-y-16">
                <header className="space-y-6">
                  <div className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                    FeedVector vs Hootsuite
                  </div>
                  <div className="space-y-4">
                    <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-gray-800 dark:text-white/90 md:text-5xl">
                      FeedVector vs Hootsuite: Which one to choose?
                    </h1>
                    <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
                      FeedVector and Hootsuite both help teams publish content, but they are built for different buyers. Hootsuite is a large
                      enterprise-grade platform for social management, inbox workflows, reporting, listening, and governance. FeedVector is an
                      AI-first LinkedIn content tool for creators, startups, agencies, and lean teams that want to create and publish faster.
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
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Lean AI publishing without enterprise overhead.</p>
                      </div>
                      <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600 dark:bg-primary-500/10 dark:text-primary-400 whitespace-nowrap">
                        Lean teams
                      </span>
                    </div>
                    <div className="mt-5 space-y-4">
                      <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                        FeedVector is the better fit when you need content creation, templates, scheduling, automation, and team collaboration without
                        buying a full enterprise social intelligence features.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <MetricCard value="$29" label="Flat Pro plan with every feature you'll ever need" />
                        <MetricCard value="Unlimited" label="Team members on Pro" />
                        <MetricCard value="AI" label="Templates, design, images, and videos" />
                        <MetricCard value="MCP" label="Natural-language scheduling" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
                      <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-white/90">Hootsuite workflow</p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Enterprise social management and governance.</p>
                      </div>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">
                        Enterprise
                      </span>
                    </div>
                    <div className="mt-5 space-y-4">
                      <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                        Hootsuite is the better fit when you need a broader social operations platform with publishing, inbox workflows, listening,
                        benchmarking, reporting, governance, and enterprise controls.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <MetricCard value="10+" label="Social accounts on Standard" />
                        <MetricCard value="350" label="Bulk scheduled posts on Advanced" />
                        <MetricCard value="Listening" label="Brand monitoring and mentions" />
                        <MetricCard value="Enterprise" label="SSO, compliance, and advanced controls" />
                      </div>
                    </div>
                  </div>
                </section>

                <section id="at-a-glance" className="scroll-mt-28 space-y-5">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white/90 md:text-3xl">At a glance</h2>
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                      Hootsuite is broader and deeper for enterprise social operations. FeedVector is more focused, easier to reason about, and better
                      suited to teams that mainly need AI-assisted content creation, scheduling, automation, and straightforward analytics.
                    </p>
                  </div>
                  <ComparisonTable rows={comparisonRows} columns={["Feature", "FeedVector", "Hootsuite"]} />
                </section>

                <section id="positioning" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="1" title="AI publishing system vs enterprise platform" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector positions itself around a tight workflow: create better LinkedIn posts with AI, use viral templates, schedule
                    consistently, collaborate with a team, automate repetitive work, and track what performs.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Hootsuite is much broader. Its public product surface includes social media management, social intelligence, brand monitoring,
                    social listening, ROI tracking, engagement inbox, employee advocacy, market research, and enterprise controls.
                  </p>
                  <div className="rounded-2xl border border-primary-100 bg-primary-50 p-5 dark:border-primary-500/20 dark:bg-primary-500/10">
                    <p className="text-base font-semibold text-gray-800 dark:text-white/90">Verdict</p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Hootsuite is broader. FeedVector is more focused. That focus is an advantage for small teams that do not need a full enterprise
                      social intelligence platform.
                    </p>
                  </div>
                </section>

                <section id="content-creation" className="scroll-mt-28 space-y-6">
                  <ArticleHeading eyebrow="2" title="Content creation: FeedVector is more template-first and creator-friendly" />
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <ComparisonBlock
                      title="FeedVector"
                      body="FeedVector is built around practical content speed: hundreds of viral templates for LinkedIn, AI content assistance, AI copilots, auto-complete, AI design tools, a picture editor, and AI image and video generation allowances."
                      verdict="Best fit if the core job is producing better posts faster without assembling a large content operation."
                    />
                    <ComparisonBlock
                      title="Hootsuite"
                      body="Hootsuite has strong AI features too, including OwlyGPT, AI content ideas, caption enhancements, hashtag suggestions, image generation, and Canva or Adobe Express templates."
                      verdict="Best fit if you want AI inside a larger enterprise social management suite."
                    />
                  </div>
                  <ImageShowcase
                    src="/images/tab-image/viral-templates.png"
                    alt="FeedVector viral templates for LinkedIn"
                    title="FeedVector makes content creation the center of the workflow"
                    description="Templates, AI assistance, and creative tools are built into the publishing process."
                  />
                </section>

                <section id="publishing" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="3" title="Scheduling and publishing" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector covers the core LinkedIn publishing workflow: planning ahead, calendar scheduling, queues,
                    shared calendars, and repeat-work automation.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Hootsuite is very mature here. Its public plan pages describe unlimited scheduled posts, cross-network scheduling, a social
                    content calendar, recommended times to publish, calendar exporting, link tracking, and bulk scheduling up to 350 posts at once on
                    higher plans.
                  </p>
                  <div className="rounded-2xl border border-primary-100 bg-primary-50 p-5 dark:border-primary-500/20 dark:bg-primary-500/10">
                    <p className="text-base font-semibold text-gray-800 dark:text-white/90">Verdict</p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Hootsuite has the more mature publishing feature set. FeedVector covers the everyday scheduling use case with less enterprise
                      overhead.
                    </p>
                  </div>
                  <ImageShowcase
                    src="/images/tab-image/schedule.png"
                    alt="FeedVector scheduling calendar"
                    title="FeedVector covers the everyday publishing workflow"
                    description="Plan, queue, and keep a consistent LinkedIn content calendar without enterprise publishing overhead."
                  />
                </section>

                <section id="automation" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="4" title="Automation: AI-agent workflows vs social operations workflows" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector's strongest automation differentiator is MCP. You can connect Claude, Cursor, or another MCP-compatible client to
                    FeedVector and schedule, draft, or publish posts through natural language. That is useful for teams already moving work into AI
                    assistants.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Hootsuite's automation is stronger for traditional social operations: DM automations, saved replies, automated responses, message
                    assignment, routing, tagging, team inbox workflows, and enterprise customer care.
                  </p>
                  <ImageShowcase
                    src="/images/tab-image/plugs.png"
                    alt="FeedVector automation and integrations"
                    title="FeedVector is designed for AI-native workflow automation"
                    description="Auto-actions, workflow Plugs, integrations, and MCP turn scheduling into an agent-friendly workflow."
                  />
                </section>

                <section id="analytics" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="5" title="Analytics and reporting" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Hootsuite is clearly stronger if reporting depth is the main priority. Its plan page lists customizable reports, hundreds of
                    metrics, post performance reports, multiple network reporting, industry benchmarking, competitive benchmarking, best-time charts,
                    report exports, scheduled reports, ROI reporting, and more.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector offers publishing analytics on Pro, but its public site gives less
                    detail about exports, benchmarking, ROI reports, and advanced report customization.
                  </p>
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <p className="text-base font-semibold text-gray-800 dark:text-white/90">Verdict</p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Pick Hootsuite for enterprise analytics depth. Pick FeedVector if you mainly need to understand what is working and keep
                      improving your content system.
                    </p>
                  </div>
                  <ImageShowcase
                    src="/images/feature-showcase/analytics-opportunities.png"
                    alt="FeedVector analytics dashboard"
                    title="Track performance without leaving the publishing workflow"
                    description="FeedVector analytics are designed for teams that want to learn what works and improve future posts."
                    width={2367}
                    height={1186}
                  />
                </section>

                <section id="collaboration-pricing" className="scroll-mt-28 space-y-6">
                  <ArticleHeading eyebrow="6" title="Collaboration and pricing" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector includes approvals, task delegation, shared calendars, and unlimited team members on Pro. That is a major value
                    advantage for small teams because every extra teammate does not change the bill.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Hootsuite has more advanced team governance: user seats, departmental organization, internal comments, approval workflows, message
                    assignment, team productivity reporting, Enterprise SSO, and compliance integrations. The tradeoff is cost and complexity.
                  </p>
                  <ImageShowcase
                    src="/images/tab-image/team.png"
                    alt="FeedVector team collaboration workspace"
                    title="FeedVector keeps collaboration lightweight"
                    description="Shared calendars, approvals, and team workflows help lean teams collaborate without per-seat complexity."
                  />
                  <ComparisonTable rows={pricingRows} columns={["Product", "Plan", "Public pricing style", "Key limits and inclusions"]} />
                </section>

                <section id="decision" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="7" title="Who should choose which tool?" />
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <FeatureList title="Choose FeedVector if" items={feedVectorFits} />
                    <FeatureList title="Choose Hootsuite if" items={hootsuiteFits} />
                  </div>
                </section>

                <section id="verdict" className="scroll-mt-28 space-y-6">
                  <ArticleHeading eyebrow="8" title="Final verdict" />
                  <div className="space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p>
                      Hootsuite is the stronger enterprise platform. It has deeper analytics, social listening, inbox management, benchmarking,
                      integrations, governance, and compliance options.
                    </p>
                    <p>
                      But that does not make it the better choice for everyone. For creators, startups, agencies, and small teams, FeedVector is the
                      better practical choice because it gives you AI content creation, viral templates, simple scheduling, automation,
                      MCP support, team collaboration, and clear pricing.
                    </p>
                    <p>
                      Hootsuite helps big teams manage social media at scale. FeedVector helps lean teams create, publish, automate, and grow faster
                      without paying for enterprise complexity.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                    <p className="text-xl font-bold text-gray-800 dark:text-white/90">The practical answer</p>
                    <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Pick Hootsuite for enterprise social operations. Pick FeedVector if you want a simpler, cheaper, AI-native publishing system
                      built for speed.
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
                      Pick FeedVector for AI-native publishing and clear pricing. Pick Hootsuite for enterprise social operations.
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
