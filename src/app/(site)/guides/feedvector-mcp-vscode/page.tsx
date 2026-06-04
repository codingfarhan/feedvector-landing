import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { CopyBlock } from "@/components/ui/copy-block"

const imageBase = "/images/guides/feedvector-mcp-vscode"

const setupSteps = [
  {
    id: "open-codex",
    title: "Open the Codex extension in VS Code",
    description:
      "In VS Code, open the Codex extension from the activity bar. This is where you manage Codex tasks and access Codex extension settings.",
    image: "step-1-click-on-codex-extension-in-vs-code.png",
    width: 2880,
    height: 1800,
    alt: "VS Code with the Codex extension icon highlighted in the activity bar",
  },
  {
    id: "open-settings",
    title: "Open Codex settings",
    description: "Click the settings icon in the Codex panel, then choose Codex settings from the menu.",
    image: "step-2-click-on-settings-and-click-codex-settings.png",
    width: 2880,
    height: 1800,
    alt: "Codex extension settings menu with Codex settings highlighted",
  },
  {
    id: "mcp-servers",
    title: "Go to MCP servers",
    description: "In Codex Settings, select MCP servers. Codex uses MCP servers to connect external tools and data sources to the agent.",
    image: "step-3-click-on-mcp-servers.png",
    width: 2880,
    height: 1800,
    alt: "Codex Settings page with the MCP servers item highlighted",
  },
  {
    id: "add-server",
    title: "Add a server",
    description: "Click Add server to create a custom MCP connection for FeedVector.",
    image: "step-4-click-on-add-server.png",
    width: 2880,
    height: 1800,
    alt: "Codex MCP servers page with the Add server button highlighted",
  },
  {
    id: "streamable-http",
    title: "Name the server and select Streamable HTTP",
    description: "Give the server a recognizable name, such as feedvector-social-scheduling, then select Streamable HTTP as the transport.",
    image: "step-5-give-the-server-any-name-and-click-on-streamable-http-option.png",
    width: 2880,
    height: 1800,
    alt: "Codex custom MCP form with a server name and Streamable HTTP highlighted",
  },
  {
    id: "copy-url",
    title: "Copy your FeedVector MCP URL",
    description:
      "In FeedVector, open Settings, choose Public API, then reveal and copy the MCP URL. The URL includes your API key, so keep it private.",
    image: "step-6-copy-the-mcp-url-from-feedvector-app.png",
    width: 2879,
    height: 1625,
    alt: "FeedVector settings page with Public API and the MCP reveal button highlighted",
  },
  {
    id: "paste-url",
    title: "Paste the URL and save",
    description:
      "Paste the FeedVector MCP URL into the URL field in Codex, leave the optional bearer token and header fields empty, then click Save.",
    image: "step-6-paste-the-url-and-click-save.png",
    width: 2880,
    height: 1800,
    alt: "Codex custom MCP form with the FeedVector URL field and Save button highlighted",
  },
  {
    id: "restart-extension",
    title: "Restart the Codex extension",
    description:
      "After saving, confirm the FeedVector server appears in the MCP servers list and click Restart extension so Codex can load the new tools.",
    image: "step-7-you-should-see-new-mcp-server-and-click-on-restart-extension-to-start-using-mcp-server.png",
    width: 2880,
    height: 1800,
    alt: "Codex MCP servers list with the FeedVector server and Restart extension button highlighted",
  },
  {
    id: "connected-account",
    title: "Make sure FeedVector has a connected channel",
    description:
      "In FeedVector, connect at least one social media account. Codex can only list accounts and schedule posts for channels available in your FeedVector workspace.",
    image: "step-8-make-sure-you-have-connected-at-least-one-social-media-account-on-feedvector.png",
    width: 2879,
    height: 1628,
    alt: "FeedVector calendar with a connected channel highlighted",
  },
  {
    id: "verify",
    title: "Ask Codex to list accounts or schedule posts",
    description:
      "Back in VS Code, ask Codex to list connected social accounts. If the MCP server is working, Codex will call FeedVector and return your connected channels.",
    image: "step-9-ask-it-to-list-connected-accounts-or-schedule-posts.png",
    width: 2880,
    height: 1800,
    alt: "Codex chat showing connected FeedVector social media accounts",
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
    question: "Which transport should I choose for FeedVector MCP in Codex?",
    answer: "Choose Streamable HTTP and paste your FeedVector MCP URL into the URL field.",
  },
  {
    question: "Where do I get the FeedVector MCP URL?",
    answer: "Sign in to FeedVector, open Settings, choose Public API, then reveal and copy the MCP URL shown in the MCP section.",
  },
  {
    question: "How do I confirm the FeedVector MCP server is working?",
    answer:
      "Restart the Codex extension, then ask Codex to list your connected social media accounts. Codex should return the accounts connected in FeedVector.",
  },
]

export const metadata: Metadata = {
  title: "Set Up FeedVector MCP in VS Code Codex",
  description: "Step-by-step guide to connect the FeedVector MCP server to VS Code's Codex extension using Streamable HTTP.",
  keywords: [
    "FeedVector MCP VS Code",
    "Codex extension MCP setup",
    "VS Code Codex MCP server",
    "FeedVector social media scheduling",
    "Streamable HTTP MCP",
  ],
  alternates: {
    canonical: "/guides/feedvector-mcp-vscode",
  },
  openGraph: {
    title: "Set Up FeedVector MCP in VS Code Codex",
    description: "Connect FeedVector to VS Code's Codex extension and schedule social media posts through MCP tools.",
    url: "/guides/feedvector-mcp-vscode",
    images: [
      {
        url: `${imageBase}/step-7-you-should-see-new-mcp-server-and-click-on-restart-extension-to-start-using-mcp-server.png`,
        width: 1200,
        height: 750,
        alt: "FeedVector MCP server connected in Codex settings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Set Up FeedVector MCP in VS Code Codex",
    description: "Connect FeedVector MCP to VS Code's Codex extension using Streamable HTTP.",
    images: [`${imageBase}/step-7-you-should-see-new-mcp-server-and-click-on-restart-extension-to-start-using-mcp-server.png`],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HowTo",
      name: "How to set up FeedVector MCP in VS Code Codex",
      description: "Connect the FeedVector MCP server to VS Code's Codex extension using Streamable HTTP.",
      totalTime: "PT5M",
      tool: [
        {
          "@type": "HowToTool",
          name: "VS Code with Codex extension",
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

export default function FeedVectorMcpVsCodeGuidePage() {
  return (
    <>
      <Script id="json-ld-feedvector-mcp-vscode" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
                      Set up FeedVector MCP with VS Code's Codex extension
                    </h1>
                    <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300 md:text-lg">
                      Connect FeedVector to Codex in VS Code so you can ask Codex to list connected social accounts, read platform-specific settings,
                      and schedule posts through FeedVector.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="https://app.feedvector.com"
                      className="inline-flex h-11 items-center justify-center rounded-full bg-primary-500 px-6 text-sm font-medium text-white transition-colors hover:bg-primary-600"
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
                      FeedVector exposes an MCP server over Streamable HTTP. Codex discovers the FeedVector tools from that server and can call them
                      on your behalf after the connection is saved.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Requirement title="1. FeedVector account" text="Create an account at app.feedvector.com." />
                    <Requirement title="2. Connected channel" text="Connect at least one social media account in FeedVector." />
                    <Requirement title="3. Codex extension" text="Install and sign in to the Codex extension in VS Code." />
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
                      Follow these steps in VS Code and FeedVector. The screenshots below will guide you through the set-up process.
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
                      Once the extension restarts, ask Codex a direct question that requires FeedVector data.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm font-semibold text-gray-800 dark:text-white/90">Try this prompt</p>
                    <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4 text-base text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                      Which social media accounts are currently connected?
                    </div>
                    <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                      If the connection works, Codex should return the channels connected in FeedVector. You can then ask it to schedule a post,
                      create a draft, or inspect platform requirements before posting.
                    </p>
                    <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
                      You can also ask the agent to schedule posts for you on any of your connected social media accounts, such as LinkedIn, X,
                      Facebook, Instagram, or any other channel connected in FeedVector.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                    <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                      {" "}
                      You can ask the agent to schedule posts for you on any of your connected social media accounts, such as LinkedIn, X, Facebook,
                      Instagram, or any other channel connected in FeedVector.
                    </p>
                    <div className="mt-3 rounded-xl border border-gray-200 bg-gray-50 p-4 text-base text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                      Please post this on my linkedin: "hey there everyone!"
                    </div>
                    <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">It will ask for a confirmation before posting it.</p>
                  </div>
                </section>

                <section id="troubleshooting" className="scroll-mt-28 space-y-5">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-800 dark:text-white/90 md:text-3xl">Troubleshooting</h2>
                    <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
                      Most setup issues come from an incomplete FeedVector account setup, an old URL, or the Codex extension not being restarted after
                      saving the MCP server.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <TroubleshootingItem
                      title="Codex does not show FeedVector tools"
                      text="Go back to Codex Settings > MCP servers and confirm the FeedVector server is enabled. Click Restart extension after saving or changing the server."
                    />
                    <TroubleshootingItem
                      title="Codex cannot find connected accounts"
                      text="Open FeedVector and confirm at least one social media account is connected. If you just added a channel, try the Codex prompt again."
                    />
                    <TroubleshootingItem
                      title="Authentication fails"
                      text="Copy a fresh MCP URL from FeedVector Settings > Public API. If needed, rotate the key and replace the old URL in Codex."
                    />
                    <TroubleshootingItem
                      title="Codex shows a 403 error"
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
                      Need the general MCP reference?{" "}
                      <Link className="font-medium text-primary-600 hover:underline dark:text-primary-400" href="/mcp">
                        Find it here
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
