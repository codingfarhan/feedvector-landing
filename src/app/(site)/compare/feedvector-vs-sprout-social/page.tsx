import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

const comparisonRows = [
  [
    "Best for",
    "Creators, founders, startups, lean teams, and small agencies",
    "Mid-market teams, enterprises, customer care teams, and social departments",
  ],
  [
    "Core focus",
    "AI-powered content creation, scheduling, automation, and analytics",
    "Social intelligence, publishing, engagement, customer care, and reporting",
  ],
  [
    "AI content",
    "AI assistant, viral templates, AI design, AI images, AI videos, and copilots",
    "Trellis AI, AI Assist, AI insights, reply enhancement, and social intelligence workflows",
  ],
  ["Templates", "Viral templates for LinkedIn", "Free templates and social resources outside the core publishing workflow"],
  [
    "Scheduling",
    "LinkedIn calendar planning, queues, and MCP scheduling",
    "Publishing, content planning, Sprout Queue, ViralPost send-time optimization, and multi-profile publishing",
  ],
  [
    "Analytics",
    "Cross-channel analytics connected to the publishing workflow",
    "Profile and post reports, Premium Analytics add-on, benchmarking, ROI charts, and shareable reports",
  ],
  ["Inbox and care", "Not the main focus", "Smart Inbox, customer care reports, sentiment, spike alerts, saved replies, and helpdesk integrations"],
  ["Listening", "Not the main focus", "Listening add-on with AI insights, sentiment tracking, spike alerts, and machine-learning filters"],
  ["Team access", "2 additional users on Essential and unlimited users on Growth", "Per-seat pricing with advanced team workflows on higher plans"],
  [
    "Pricing",
    "$179 Essential, $379 Growth, and Done-for-you from $1,499/month",
    "Essentials from $79/seat/month, Standard $199, Professional $299, Advanced $399, Enterprise custom",
  ],
  [
    "AI-agent workflow",
    "Dedicated FeedVector MCP for Claude, Cursor, and MCP clients",
    "No comparable public MCP scheduling workflow found on reviewed pages",
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
  ["Sprout Social", "Essentials", "$79/seat/month billed annually", "Up to 5 social profiles, optimal send times, and profile/post-level reporting"],
  [
    "Sprout Social",
    "Standard",
    "$199/seat/month billed annually",
    "5 social profiles, consolidated inbox, collaboration tools, brand monitoring, unlimited AI alt text, and review management",
  ],
  [
    "Sprout Social",
    "Professional",
    "$299/seat/month billed annually",
    "Unlimited social profiles, message tagging, competitor/tag/paid insights, and Enhance Post by AI Assist",
  ],
  [
    "Sprout Social",
    "Advanced",
    "$399/seat/month billed annually",
    "Enhance Reply by AI Assist, sentiment in Smart Inbox and Reviews, API, helpdesk integrations, productivity reports, and spike alerts",
  ],
]

const sections = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "positioning", label: "Positioning" },
  { id: "content-creation", label: "Content creation" },
  { id: "publishing", label: "Publishing" },
  { id: "analytics", label: "Analytics" },
  { id: "engagement", label: "Engagement" },
  { id: "automation", label: "Automation" },
  { id: "collaboration-pricing", label: "Teams and pricing" },
  { id: "decision", label: "Decision guide" },
  { id: "verdict", label: "Verdict" },
]

const feedVectorFits = [
  "You want to create posts faster with AI",
  "You publish heavily on LinkedIn",
  "You want viral templates built into the workflow",
  "You want AI design, image generation, and video generation",
  "You want simple LinkedIn scheduling",
  "You want team access without enterprise complexity",
  "You want MCP support for Claude, Cursor, and AI-agent workflows",
]

const sproutFits = [
  "You are a mid-market or enterprise team",
  "You need Smart Inbox and customer care workflows",
  "You need advanced reporting and stakeholder-ready analytics",
  "You need social listening and sentiment tracking",
  "You need influencer marketing or employee advocacy",
  "You need helpdesk integrations, API access, or enterprise support",
  "You have a dedicated social media team with budget",
]

const faqs = [
  {
    question: "Is FeedVector better than Sprout Social?",
    answer:
      "FeedVector is better if your priority is AI-native LinkedIn content creation, viral templates, simple scheduling, MCP workflows, team access, and affordable Growth tiers. Sprout Social is stronger if you need enterprise social intelligence, Smart Inbox, social listening, customer care, premium analytics, and per-seat governance.",
  },
  {
    question: "Who should choose FeedVector over Sprout Social?",
    answer:
      "Choose FeedVector if you are a creator, founder, startup, lean marketing team, or small agency that wants to publish more LinkedIn content faster without paying enterprise social media management prices.",
  },
  {
    question: "Who should choose Sprout Social over FeedVector?",
    answer:
      "Choose Sprout Social if you need Smart Inbox, social customer care, social listening, sentiment tracking, premium reporting, influencer marketing, employee advocacy, API access, helpdesk integrations, or enterprise team workflows.",
  },
]

export const metadata: Metadata = {
  title: "FeedVector vs Sprout Social: Which Tool Should You Choose?",
  description:
    "Compare FeedVector vs Sprout Social for AI LinkedIn content creation, scheduling, analytics, Smart Inbox, social listening, customer care, automation, team workflows, and pricing.",
  keywords: [
    "FeedVector vs Sprout Social",
    "Sprout Social alternative",
    "AI LinkedIn scheduler",
    "social media management",
    "social media customer care",
    "MCP LinkedIn scheduling",
  ],
  alternates: {
    canonical: "/compare/feedvector-vs-sprout-social",
  },
  openGraph: {
    title: "FeedVector vs Sprout Social: Which Tool Should You Choose?",
    description:
      "Compare FeedVector and Sprout Social for AI-first LinkedIn publishing, enterprise social intelligence, customer care, analytics, automation, and pricing.",
    url: "/compare/feedvector-vs-sprout-social",
    images: [
      {
        url: "/images/tab-image/schedule.png",
        width: 1200,
        height: 630,
        alt: "FeedVector scheduling preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FeedVector vs Sprout Social",
    description: "Compare FeedVector and Sprout Social for AI-first LinkedIn publishing and enterprise social media management.",
    images: ["/images/tab-image/schedule.png"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "FeedVector vs Sprout Social: Which Tool Should You Choose?",
      description:
        "A practical comparison of FeedVector and Sprout Social across AI content creation, scheduling, analytics, engagement, customer care, automation, collaboration, and pricing.",
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
      mainEntityOfPage: "https://feedvector.com/compare/feedvector-vs-sprout-social",
      image: "https://feedvector.com/images/tab-image/schedule.png",
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

export default function FeedVectorVsSproutSocialPage() {
  return (
    <>
      <Script id="json-ld-feedvector-vs-sprout-social" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-16 md:py-24">
        <div className="wrapper">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_270px]">
              <main className="space-y-16">
                <header className="space-y-6">
                  <div className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                    FeedVector vs Sprout Social
                  </div>
                  <div className="space-y-4">
                    <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-gray-800 dark:text-white/90 md:text-5xl">
                      FeedVector vs Sprout Social: Which is better?
                    </h1>
                    <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
                      FeedVector and Sprout Social both help teams publish content, but they sit in different categories. Sprout Social is an
                      enterprise-grade social intelligence platform for publishing, engagement, customer care, listening, reporting, and large-team
                      workflows. FeedVector is a simpler AI-first scheduler for fast content creation, viral templates, automation, MCP workflows, and
                      affordable collaboration.
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
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">AI-first publishing without enterprise complexity.</p>
                      </div>
                      <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                        Lean teams
                      </span>
                    </div>
                    <div className="mt-5 space-y-4">
                      <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                        FeedVector is the better fit when you want AI to help create, design, schedule, automate, and improve content without buying a
                        full customer care and social intelligence platform.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <MetricCard value="$179" label="Essential platform" />
                        <MetricCard value="$379" label="Guided Growth plan" />
                        <MetricCard value="AI" label="Templates, design, images, and videos" />
                        <MetricCard value="MCP" label="Claude and Cursor scheduling" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-white/10">
                      <div>
                        <p className="text-sm font-semibold text-gray-800 dark:text-white/90">Sprout Social workflow</p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Social intelligence, inbox, care, and reporting.</p>
                      </div>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">
                        Enterprise
                      </span>
                    </div>
                    <div className="mt-5 space-y-4">
                      <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                        Sprout Social is the better fit when you need mature social operations: Smart Inbox, customer care, listening, sentiment,
                        premium analytics, helpdesk integrations, and enterprise workflows.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <MetricCard value="$79+" label="Per-seat annual plans" />
                        <MetricCard value="Smart Inbox" label="Engagement and customer care" />
                        <MetricCard value="Listening" label="AI insights and sentiment add-on" />
                        <MetricCard value="Enterprise" label="SSO, support, API, and integrations" />
                      </div>
                    </div>
                  </div>
                </section>

                <section id="at-a-glance" className="scroll-mt-28 space-y-5">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white/90 md:text-3xl">At a glance</h2>
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                      Sprout Social is stronger for large companies with complex social operations. FeedVector is stronger for creators, startups,
                      lean teams, and small agencies that want to publish more content faster without enterprise pricing.
                    </p>
                  </div>
                  <ComparisonTable rows={comparisonRows} columns={["Feature", "FeedVector", "Sprout Social"]} />
                </section>

                <section id="positioning" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="1" title="Product positioning: AI publishing system vs social intelligence platform" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector presents itself as a LinkedIn content tool with AI. Its homepage focuses on creating and scheduling high-performing
                    posts, viral templates for LinkedIn, team collaboration, automation, and analytics from one workspace.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Sprout Social presents itself as an AI-powered social intelligence platform. Its public pages emphasize publishing, engagement,
                    Smart Inbox, social listening, sentiment, influencer marketing, employee advocacy, customer care, and enterprise reporting.
                  </p>
                  <div className="rounded-2xl border border-primary-100 bg-primary-50 p-5 dark:border-primary-500/20 dark:bg-primary-500/10">
                    <p className="text-base font-semibold text-gray-800 dark:text-white/90">Verdict</p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Sprout Social is much broader. FeedVector is more focused. That focus is an advantage for teams whose main job is creating
                      better posts and staying consistent.
                    </p>
                  </div>
                </section>

                <section id="content-creation" className="scroll-mt-28 space-y-6">
                  <ArticleHeading eyebrow="2" title="Content creation: FeedVector is more creator-first" />
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <ComparisonBlock
                      title="FeedVector"
                      body="FeedVector offers viral templates for LinkedIn, an AI content assistant, AI copilots, auto-complete, AI design tools, an advanced picture editor, AI image generation, and AI video generation."
                      verdict="Best fit if the primary goal is creating and scheduling more content faster."
                    />
                    <ComparisonBlock
                      title="Sprout Social"
                      body="Sprout Social uses AI across social intelligence, insights, engagement, listening, and workflow efficiency. AI Assist can support replies and publishing workflows, while Trellis focuses on turning social data into insight."
                      verdict="Best fit if AI is needed inside a broader enterprise social operations platform."
                    />
                  </div>
                  <ImageShowcase
                    src="/images/tab-image/viral-templates.png"
                    alt="FeedVector viral templates for LinkedIn"
                    title="FeedVector puts creation before operations"
                    description="Templates, AI assistance, and creative tools help users move from idea to scheduled post faster."
                  />
                </section>

                <section id="publishing" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="3" title="Scheduling and publishing" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector supports planning ahead, queueing posts, and keeping a consistent LinkedIn calendar. It positions scheduling as part of
                    a broader AI-assisted content workflow.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Sprout Social includes publishing and content planning, collaborative calendars, advanced scheduling, Sprout Queue, multi-profile
                    publishing, media publishing, image and video editing, and ViralPost send-time optimization.
                  </p>
                  <div className="rounded-2xl border border-primary-100 bg-primary-50 p-5 dark:border-primary-500/20 dark:bg-primary-500/10">
                    <p className="text-base font-semibold text-gray-800 dark:text-white/90">Verdict</p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Sprout is stronger for mature social teams that need structured publishing plus engagement and reporting. FeedVector is better
                      for lean teams that want simpler scheduling without the enterprise layer.
                    </p>
                  </div>
                  <ImageShowcase
                    src="/images/tab-image/schedule.png"
                    alt="FeedVector scheduling calendar"
                    title="FeedVector keeps scheduling tied to content output"
                    description="Plan, queue, and keep a consistent LinkedIn publishing calendar without enterprise overhead."
                  />
                </section>

                <section id="analytics" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="4" title="Analytics and reporting" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Sprout Social is clearly stronger on analytics depth. It includes profile and post-level reporting, and offers Premium Analytics
                    as an add-on with advanced filtering, ROI charts, benchmarking, and shareable stakeholder reports.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector offers analytics on Pro and positions analytics as a way to track performance and optimize publishing.
                  </p>
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <p className="text-base font-semibold text-gray-800 dark:text-white/90">Verdict</p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Sprout Social wins analytics and reporting. FeedVector is better for teams that need quick feedback on what content is working.
                    </p>
                  </div>
                  <ImageShowcase
                    src="/images/feature-showcase/analytics-opportunities.png"
                    alt="FeedVector analytics dashboard"
                    title="FeedVector analytics stay close to publishing"
                    description="Use performance data to understand what worked and improve the next batch of posts."
                    width={2367}
                    height={1186}
                  />
                </section>

                <section id="engagement" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="5" title="Engagement, inbox, and customer care" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    This is Sprout Social's strongest area. Sprout highlights Smart Inbox, conversation history, contact views, customer care reports,
                    sentiment in Smart Inbox and Reviews, message spike alerts, saved replies, helpdesk integrations, case management, and team
                    productivity reporting.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector focuses more on scheduling, AI content, templates, design, teamwork, auto-actions, and analytics. It is not primarily a
                    customer care or inbox platform.
                  </p>
                  <div className="rounded-2xl border border-primary-100 bg-primary-50 p-5 dark:border-primary-500/20 dark:bg-primary-500/10">
                    <p className="text-base font-semibold text-gray-800 dark:text-white/90">Verdict</p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Sprout wins if you need social support, inbox routing, and customer care operations. FeedVector is for publishing and growth.
                    </p>
                  </div>
                </section>

                <section id="automation" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="6" title="Automation and AI-agent workflows" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector has a strong modern differentiator: MCP. Users can connect Claude, Cursor, or any MCP-compatible client to FeedVector
                    and manage LinkedIn scheduling through natural language.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Sprout Social has strong automation around insights, inbox, customer care, listening, AI Assist, APIs, and helpdesk integrations
                    on higher plans. I did not find a comparable public MCP-style scheduling workflow on the reviewed Sprout pages.
                  </p>
                  <ImageShowcase
                    src="/images/tab-image/plugs.png"
                    alt="FeedVector automation and integrations"
                    title="FeedVector is built for AI-agent scheduling"
                    description="MCP, workflow Plugs, and integrations help AI tools become part of the publishing workflow."
                  />
                </section>

                <section id="collaboration-pricing" className="scroll-mt-28 space-y-6">
                  <ArticleHeading eyebrow="7" title="Team collaboration and pricing" />
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    FeedVector includes team collaboration, approvals, shared calendars, and guided onboarding. Essential supports 5 social media
                    channels and 2 additional users, while Growth adds unlimited profiles, unlimited users, a configured brand strategy, and monthly
                    review calls.
                  </p>
                  <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                    Sprout Social is built for teams too, but it is priced per seat. That pricing makes sense for companies that need social
                    intelligence, customer care, listening, and enterprise reporting, but it can get expensive quickly for lean teams.
                  </p>
                  <ImageShowcase
                    src="/images/tab-image/team.png"
                    alt="FeedVector team collaboration workspace"
                    title="FeedVector keeps collaboration affordable"
                    description="Unlimited team members on Pro means collaboration does not become expensive every time someone joins."
                  />
                  <ComparisonTable rows={pricingRows} columns={["Product", "Plan", "Public price", "Key limits and inclusions"]} />
                </section>

                <section id="decision" className="scroll-mt-28 space-y-5">
                  <ArticleHeading eyebrow="8" title="Who should choose which tool?" />
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <FeatureList title="Choose FeedVector if" items={feedVectorFits} />
                    <FeatureList title="Choose Sprout Social if" items={sproutFits} />
                  </div>
                </section>

                <section id="verdict" className="scroll-mt-28 space-y-6">
                  <ArticleHeading eyebrow="9" title="Final verdict" />
                  <div className="space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p>
                      Sprout Social is the stronger enterprise social media platform. It has deeper customer care, social listening, analytics,
                      reporting, influencer marketing, employee advocacy, integrations, and enterprise workflows.
                    </p>
                    <p>
                      FeedVector is the better choice for lean teams that want to create, schedule, automate, and improve content without enterprise
                      complexity.
                    </p>
                    <p>Sprout Social helps large teams manage social operations. FeedVector helps modern teams publish faster with AI.</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                    <p className="text-xl font-bold text-gray-800 dark:text-white/90">The practical answer</p>
                    <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Pick Sprout Social for enterprise social intelligence and customer care. Pick FeedVector if you want a simpler, cheaper,
                      AI-first publishing workflow built around getting more content out the door.
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
                      Pick FeedVector for AI-first output and affordability. Pick Sprout Social for enterprise social operations.
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
