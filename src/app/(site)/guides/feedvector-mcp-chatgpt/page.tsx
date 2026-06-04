import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { CopyBlock } from "@/components/ui/copy-block"

const imageBase = "/images/guides/feedvector-mcp-chatgpt"

const setupSteps = [
  {
    id: "open-profile-menu",
    title: "Open ChatGPT and click your profile",
    description:
      "Go to the ChatGPT website and click your profile in the lower-left corner of the sidebar.",
    image: "step-1-go-to-chatgpt-website-and-click-on-profile-at-bottom.png",
    width: 2880,
    height: 1631,
    alt: "ChatGPT website with the profile area highlighted in the lower-left corner",
  },
  {
    id: "open-settings",
    title: "Open Settings",
    description:
      "In the profile menu, click Settings to open your ChatGPT account settings.",
    image: "step-2-click-on-settings-option.png",
    width: 2880,
    height: 1633,
    alt: "ChatGPT profile menu with the Settings option highlighted",
  },
  {
    id: "apps-advanced-settings",
    title: "Go to Apps advanced settings",
    description:
      "In Settings, click Apps, then open Advanced settings. This is where ChatGPT lets you enable Developer Mode for custom MCP apps.",
    image: "step-3-click-on-apps-and-go-to-advanced-settings.png",
    width: 2880,
    height: 1626,
    alt: "ChatGPT settings with Apps and Advanced settings highlighted",
  },
  {
    id: "enable-developer-mode",
    title: "Enable Developer Mode",
    description:
      "Turn on Developer Mode. ChatGPT marks this as elevated risk because custom MCP servers are not reviewed by OpenAI.",
    image: "step-4-enable-developer-mode.png",
    width: 2880,
    height: 1628,
    alt: "ChatGPT Apps advanced settings with Developer Mode enabled",
  },
  {
    id: "copy-url",
    title: "Copy your FeedVector MCP URL",
    description:
      "In FeedVector, open Settings, choose Public API, then reveal and copy the MCP URL. The URL includes your API key, so keep it private.",
    image: "step-5-copy-the-mcp-url-from-feedvector-app.png",
    width: 2879,
    height: 1625,
    alt: "FeedVector settings page with Public API and the MCP reveal button highlighted",
  },
  {
    id: "create-app",
    title: "Click Create app",
    description:
      "Return to ChatGPT Apps advanced settings and click Create app at the top.",
    image: "step-6-click-on-the-create-app-button-at-the-top.png",
    width: 2880,
    height: 1629,
    alt: "ChatGPT Apps advanced settings with the Create app button highlighted",
  },
  {
    id: "fill-app",
    title: "Fill in app details and use No Auth",
    description:
      "Give the app a name and description, paste the FeedVector MCP URL as the Server URL, select No Auth, acknowledge the custom MCP server risk, then click Create.",
    image: "step-7-fill-in-required-information-and-paste-mcp-url-and-select-no-auth-as-authentication-option.png",
    width: 2880,
    height: 1627,
    alt: "ChatGPT New App form with name, Server URL, No Auth, risk checkbox, and Create highlighted",
  },
  {
    id: "connect-app",
    title: "Connect the app to ChatGPT",
    description:
      "After creating the app, click Connect so ChatGPT can use the FeedVector MCP tools in your chats.",
    image: "step-8-click-on-connect-button.png",
    width: 2880,
    height: 1632,
    alt: "ChatGPT app connection screen with the Connect button highlighted",
  },
  {
    id: "connected-account",
    title: "Make sure FeedVector has a connected channel",
    description:
      "In FeedVector, connect at least one social media account. ChatGPT can only list accounts and schedule posts for channels available in your FeedVector workspace.",
    image: "step-9-make-sure-you-have-connected-at-least-one-social-media-account-on-feedvector.png",
    width: 2879,
    height: 1628,
    alt: "FeedVector calendar with a connected channel highlighted",
  },
  {
    id: "verify",
    title: "Ask ChatGPT to list connected accounts",
    description:
      "Ask ChatGPT how many social media accounts are connected. If the MCP app is working, ChatGPT will call FeedVector and return your connected channels.",
    image: "step-10-confirm-by-asking-chatgpt-for-connected-social-media-accounts.png",
    width: 2880,
    height: 1634,
    alt: "ChatGPT chat showing connected FeedVector social media accounts",
  },
]

const sections = [
  { id: "before-you-start", label: "Before you start" },
  { id: "setup", label: "Setup steps" },
  { id: "test", label: "Test it" },
  { id: "troubleshooting", label: "Troubleshooting" },
]

const faqs = [
  {
    question: "Which authentication option should I choose in ChatGPT?",
    answer: "Choose No Auth when you paste the FeedVector MCP URL that already includes your API key.",
  },
  {
    question: "Where do I get the FeedVector MCP URL?",
    answer: "Sign in to FeedVector, open Settings, choose Public API, then reveal and copy the MCP URL shown in the MCP section.",
  },
  {
    question: "How do I confirm the ChatGPT MCP app is working?",
    answer:
      "Ask ChatGPT to list or count your connected social media accounts. ChatGPT should call FeedVector and return the accounts connected in your workspace.",
  },
]

export const metadata: Metadata = {
  title: "Set Up FeedVector MCP in ChatGPT",
  description:
    "Step-by-step guide to connect FeedVector MCP to the ChatGPT website using Apps Developer Mode and a custom MCP app.",
  keywords: [
    "FeedVector MCP ChatGPT",
    "ChatGPT MCP setup",
    "ChatGPT custom MCP app",
    "FeedVector social media scheduling",
    "ChatGPT Developer Mode",
  ],
  alternates: {
    canonical: "/guides/feedvector-mcp-chatgpt",
  },
  openGraph: {
    title: "Set Up FeedVector MCP in ChatGPT",
    description:
      "Connect FeedVector to ChatGPT and schedule social media posts through MCP tools.",
    url: "/guides/feedvector-mcp-chatgpt",
    images: [
      {
        url: `${imageBase}/step-10-confirm-by-asking-chatgpt-for-connected-social-media-accounts.png`,
        width: 1200,
        height: 681,
        alt: "ChatGPT showing connected FeedVector social media accounts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Set Up FeedVector MCP in ChatGPT",
    description: "Connect FeedVector MCP to the ChatGPT website using a custom MCP app.",
    images: [`${imageBase}/step-10-confirm-by-asking-chatgpt-for-connected-social-media-accounts.png`],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "How to set up FeedVector MCP in ChatGPT",
      description: "Connect the FeedVector MCP server to the ChatGPT website using Apps Developer Mode.",
      totalTime: "PT5M",
      tool: [
        {
          "@type": "HowToTool",
          name: "ChatGPT website",
        },
        {
          "@type": "HowToTool",
          name: "FeedVector account",
        },
      ],
      step: setupSteps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.description,
        image: `https://feedvector.com${imageBase}/${step.image}`,
      })),
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

export default function FeedVectorMcpChatGptGuidePage() {
  return (
    <>
      <Script
        id="json-ld-feedvector-mcp-chatgpt"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="py-16 md:py-24">
        <div className="wrapper">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_270px]">
              <main className="space-y-16">
                <header className="space-y-6">
                  <div className="inline-flex rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                    MCP setup guide
                  </div>
                  <div className="space-y-4">
                    <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-gray-800 dark:text-white/90 md:text-5xl">
                      Set up FeedVector MCP with ChatGPT
                    </h1>
                    <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
                      Connect FeedVector to ChatGPT on the web so you can ask ChatGPT to list connected social accounts, inspect channel details, and
                      schedule posts through FeedVector.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="https://chatgpt.com"
                      className="inline-flex h-11 items-center justify-center rounded-full bg-primary-500 px-6 text-sm font-medium text-white transition-colors hover:bg-primary-600"
                    >
                      Open ChatGPT
                    </Link>
                    <Link
                      href="https://app.feedvector.com"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-gray-200 bg-white px-6 text-sm font-medium text-gray-700 transition-colors hover:border-primary-200 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:text-primary-400"
                    >
                      Open FeedVector
                    </Link>
                    <Link
                      href="/mcp"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-gray-200 bg-white px-6 text-sm font-medium text-gray-700 transition-colors hover:border-primary-200 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:text-primary-400"
                    >
                      Read MCP docs
                    </Link>
                  </div>
                </header>

                <section id="before-you-start" className="scroll-mt-28 space-y-5">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white/90 md:text-3xl">Before you start</h2>
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                      FeedVector exposes an MCP server over HTTP. In ChatGPT, you connect it as a custom app through Apps Developer Mode. Because the
                      FeedVector API key is embedded in the MCP URL, choose No Auth in ChatGPT.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Requirement title="1. FeedVector account" text="Create an account at app.feedvector.com." />
                    <Requirement title="2. Connected channel" text="Connect at least one social media account in FeedVector." />
                    <Requirement title="3. ChatGPT access" text="Use a ChatGPT account with Apps Developer Mode available." />
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm font-semibold text-gray-800 dark:text-white/90">MCP endpoint format</p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      FeedVector can authenticate through the API key embedded in your MCP URL:
                    </p>
                    <CopyBlock variant="inline" value="https://app.feedvector.com/api/mcp/your-api-key" className="mt-3" />
                    <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                      Use the exact URL copied from FeedVector. Do not share it publicly because it includes access to your FeedVector workspace.
                    </p>
                  </div>
                </section>

                <section id="setup" className="scroll-mt-28 space-y-8">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white/90 md:text-3xl">Setup steps</h2>
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                      Follow these steps in ChatGPT and FeedVector. The screenshots below guide you through the setup flow.
                    </p>
                  </div>

                  <div className="space-y-10">
                    {setupSteps.map((step, index) => (
                      <GuideStep key={step.id} step={step} number={index + 1} />
                    ))}
                  </div>
                </section>

                <section id="test" className="scroll-mt-28 space-y-5">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white/90 md:text-3xl">Test the connection</h2>
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                      Once the app is connected, ask ChatGPT a direct question that requires FeedVector data.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm font-semibold text-gray-800 dark:text-white/90">Try this prompt</p>
                    <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4 text-base text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                      How many social media accounts are currently connected?
                    </div>
                    <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                      If the connection works, ChatGPT should call the FeedVector tools and return the channels connected in your workspace.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm font-semibold text-gray-800 dark:text-white/90">Schedule posts through ChatGPT</p>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      You can ask ChatGPT to schedule posts for any connected social media account, such as LinkedIn, X, Facebook, Instagram, or any
                      other channel connected in FeedVector.
                    </p>
                    <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4 text-base text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                      Please schedule this on my LinkedIn page for tomorrow at 10 AM: "New update from our team."
                    </div>
                    <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">ChatGPT may ask for confirmation before taking action.</p>
                  </div>
                </section>

                <section id="troubleshooting" className="scroll-mt-28 space-y-5">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white/90 md:text-3xl">Troubleshooting</h2>
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                      Most setup issues come from Developer Mode not being available, an incomplete FeedVector account setup, or an old MCP URL.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <TroubleshootingItem
                      title="You do not see Developer Mode"
                      text="Make sure you are using the ChatGPT website and that Apps Developer Mode is available for your ChatGPT account or workspace."
                    />
                    <TroubleshootingItem
                      title="ChatGPT cannot connect the app"
                      text="Confirm the Server URL is the exact FeedVector MCP URL copied from Settings > Public API, and choose No Auth when the API key is embedded in the URL."
                    />
                    <TroubleshootingItem
                      title="ChatGPT cannot find connected accounts"
                      text="Open FeedVector and confirm at least one social media account is connected. If you just added a channel, try the ChatGPT prompt again."
                    />
                    <TroubleshootingItem
                      title="ChatGPT shows a 403 error"
                      text="A 403 error means your FeedVector free trial has expired. Purchase a paid FeedVector plan to continue using the MCP server."
                    />
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
                    <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                      Using Codex instead?{" "}
                      <Link className="font-medium text-primary-600 hover:underline dark:text-primary-400" href="/guides/feedvector-mcp-codex-desktop">
                        Open the Codex guide
                      </Link>
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

function GuideStep({ step, number }: { step: (typeof setupSteps)[number]; number: number }) {
  return (
    <article className="scroll-mt-28 space-y-4" id={step.id}>
      <div className="flex gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-500 text-sm font-bold text-white">{number}</div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-gray-800 dark:text-white/90">{step.title}</h3>
          <p className="text-base leading-7 text-gray-600 dark:text-gray-300">{step.description}</p>
        </div>
      </div>
      <figure className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5">
        <Image
          src={`${imageBase}/${step.image}`}
          alt={step.alt}
          width={step.width}
          height={step.height}
          sizes="(min-width: 1024px) 820px, 100vw"
          className="h-auto w-full"
          priority={number === 1}
        />
      </figure>
    </article>
  )
}

function Requirement({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
      <p className="text-sm font-semibold text-gray-800 dark:text-white/90">{title}</p>
      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  )
}

function TroubleshootingItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
      <p className="text-base font-semibold text-gray-800 dark:text-white/90">{title}</p>
      <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  )
}
