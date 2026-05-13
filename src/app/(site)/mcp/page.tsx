import type { Metadata } from "next"
import { CopyBlock } from "@/components/ui/copy-block"

export const metadata: Metadata = {
  title: "MCP (Model Context Protocol)",
  description: "Connect AI clients like Claude and Cursor to the FeedVector MCP server to schedule posts across platforms.",
  keywords: ["mcp", "model context protocol", "feedvector", "social media scheduling", "claude", "cursor"],
  alternates: {
    canonical: "/mcp",
  },
  openGraph: {
    title: "MCP (Model Context Protocol)",
    description: "Connect AI clients like Claude and Cursor to the FeedVector MCP server to schedule posts across platforms.",
    url: "/mcp",
  },
}

export default function McpPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="wrapper">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">
            <div className="space-y-14">
              <header className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white/90">MCP (Model Context Protocol)</h1>
                <p className="text-base text-gray-600 dark:text-gray-300">Connect AI agents to FeedVector using the Model Context Protocol (MCP)</p>
              </header>

              <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                <div className="space-y-2">
                  <p className="text-base font-semibold text-gray-800 dark:text-white/90">Documentation Index</p>
                  <p className="text-base text-gray-600 dark:text-gray-300">Fetch the complete documentation index at:</p>
                  <CopyBlock variant="inline" value="https://feedvector.com/llms.txt" className="mt-2" />
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    Use this file to discover all available pages before exploring further.
                  </p>
                </div>
              </div>

              <section id="introduction" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-800 dark:text-white/90">Introduction</h2>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  MCP lets AI agents interact with FeedVector directly through a standardized tool-calling interface. This means you can connect
                  Claude, Cursor, or any MCP-compatible client to your FeedVector account and manage your social scheduling through natural language.
                </p>
              </section>

              <section id="how-it-works" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-800 dark:text-white/90">How It Works</h2>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  FeedVector exposes an MCP server with a set of tools. Your AI client discovers those tools, reads their schemas, and calls them on
                  your behalf.
                </p>
              </section>

              <section id="tools" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-800 dark:text-white/90">Available Tools</h2>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Tool availability can vary by account and enabled features. Commonly used tools include:
                </p>
                <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
                  <li>
                    <code className="text-gray-800 dark:text-white/90">integrationList</code> — list connected social media accounts
                  </li>
                  <li>
                    <code className="text-gray-800 dark:text-white/90">integrationSchema</code> — fetch platform-specific rules/settings schema
                  </li>
                  <li>
                    <code className="text-gray-800 dark:text-white/90">schedulePostTool</code> — schedule, draft, or publish posts
                  </li>
                </ul>
              </section>

              <section id="authentication" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-800 dark:text-white/90">Authentication</h2>
                <p className="text-base text-gray-600 dark:text-gray-300">There are two common ways to authenticate with an MCP server:</p>
                <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/5 space-y-3">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">How to get your API key</h3>
                  <ol className="list-decimal pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
                    <li>
                      Create an account at{" "}
                      <a
                        className="font-medium text-primary-600 dark:text-primary-400 hover:underline"
                        href="https://app.feedvector.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        app.feedvector.com
                      </a>
                    </li>
                    <li>Connect at least one social media account</li>
                    <li>
                      Go to <span className="font-medium text-gray-700 dark:text-gray-200">Settings &gt; MCP</span> and copy your API key
                    </li>
                  </ol>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">API Key</h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    Use your API key directly in the MCP endpoint URL or as a Bearer token.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-gray-800 dark:text-white/90">OAuth Token (if applicable)</h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    If you’re building an app for other users and OAuth2 is enabled, use OAuth2 to obtain tokens and pass them the same way as API
                    keys.
                  </p>
                </div>
              </section>

              <section id="connecting" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-800 dark:text-white/90">Connecting</h2>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Use the <code className="text-gray-800 dark:text-white/90">/mcp</code> endpoint with a Bearer token, or embed your API key in the
                  URL using <code className="text-gray-800 dark:text-white/90">/mcp/&lt;apiKey&gt;</code>.
                </p>
              </section>

              <section id="quick-example" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-800 dark:text-white/90">Quick Example</h2>
                <p className="text-base text-gray-600 dark:text-gray-300">A typical interaction looks like:</p>
                <ol className="list-decimal pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
                  <li>
                    Agent calls <code className="text-gray-800 dark:text-white/90">integrationList</code> to see your connected accounts
                  </li>
                  <li>
                    Agent calls <code className="text-gray-800 dark:text-white/90">integrationSchema</code> for a platform to learn posting rules
                  </li>
                  <li>
                    Agent calls <code className="text-gray-800 dark:text-white/90">schedulePostTool</code> to schedule the post with valid settings
                  </li>
                </ol>
                <div className="rounded-2xl border border-gray-200 bg-white p-4 text-base text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                  “Schedule a post to LinkedIn for tomorrow at 10am: Excited to announce our new feature!”
                </div>
              </section>

              <section id="client-setup" className="space-y-4 scroll-mt-28">
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-800 dark:text-white/90">Client Setup</h2>
                <p className="text-base text-gray-600 dark:text-gray-300">Configure your AI client to connect to the FeedVector MCP server.</p>
              </section>

              <section className="space-y-4">
                <h3 id="claude-desktop" className="text-xl font-bold tracking-tight text-gray-800 dark:text-white/90 scroll-mt-24">
                  Claude Desktop
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">Add the following to your Claude Desktop MCP configuration file:</p>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">macOS</p>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Edit <code className="text-gray-800 dark:text-white/90">~/Library/Application Support/Claude/claude_desktop_config.json</code>:
                </p>
                <CopyBlock
                  value={`{
  "mcpServers": {
    "feedvector": {
      "url": "https://app.feedvector.com/api/mcp/your-api-key"
    }
  }
}`}
                />
                <p className="mt-6 text-sm font-semibold text-gray-700 dark:text-gray-200">Windows</p>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Edit <code className="text-gray-800 dark:text-white/90">%APPDATA%\\Claude\\claude_desktop_config.json</code>:
                </p>
                <CopyBlock
                  value={`{
  "mcpServers": {
    "feedvector": {
      "url": "https://app.feedvector.com/api/mcp/your-api-key"
    }
  }
}`}
                />
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Replace <code className="text-gray-800 dark:text-white/90">your-api-key</code> with your actual API key from Settings &gt; Public
                  API.
                </p>
              </section>

              <section className="space-y-4">
                <h3 id="claude-code" className="text-xl font-bold tracking-tight text-gray-800 dark:text-white/90 scroll-mt-24">
                  Claude Code
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">Add FeedVector as an MCP server in your Claude Code configuration:</p>
                <CopyBlock
                  value={`{
  "mcpServers": {
    "feedvector": {
      "url": "https://app.feedvector.com/api/mcp/your-api-key"
    }
  }
}`}
                />
              </section>

              <section className="space-y-4">
                <h3 id="cursor" className="text-xl font-bold tracking-tight text-gray-800 dark:text-white/90 scroll-mt-24">
                  Cursor
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">In Cursor, go to Settings &gt; MCP and add a new server:</p>
                <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
                  <li>
                    Name: <span className="font-medium text-gray-700 dark:text-gray-200">FeedVector</span>
                  </li>
                  <li>
                    Type: <span className="font-medium text-gray-700 dark:text-gray-200">HTTP</span>
                  </li>
                  <li>
                    URL:
                    <CopyBlock variant="inline" value="https://app.feedvector.com/api/mcp/your-api-key" className="mt-2" />
                  </li>
                </ul>
              </section>

              <section id="other-clients" className="space-y-4 scroll-mt-28">
                <h3 className="text-xl font-bold tracking-tight text-gray-800 dark:text-white/90">Other MCP Clients</h3>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  Any MCP-compatible client can connect to FeedVector. Use the streamable HTTP transport:
                </p>
                <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
                  <li>
                    URL:
                    <CopyBlock variant="inline" value="https://app.feedvector.com/api/mcp/your-api-key" className="mt-2" />
                  </li>
                  <li>
                    Transport: <span className="font-medium text-gray-700 dark:text-gray-200">Streamable HTTP</span>
                  </li>
                </ul>
                <p className="text-base text-gray-600 dark:text-gray-300">Or, if your client supports Bearer token authentication:</p>
                <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
                  <li>
                    URL:
                    <CopyBlock variant="inline" value="https://app.feedvector.com/api/mcp" className="mt-2" />
                  </li>
                  <li>
                    Transport: <span className="font-medium text-gray-700 dark:text-gray-200">Streamable HTTP</span>
                  </li>
                  <li>
                    Authorization:
                    <CopyBlock variant="inline" value="Bearer your-api-key" className="mt-2" />
                  </li>
                </ul>
              </section>

              <section id="verify" className="space-y-4 scroll-mt-28">
                <h3 className="text-xl font-bold tracking-tight text-gray-800 dark:text-white/90">Verify Connection</h3>
                <p className="text-base text-gray-600 dark:text-gray-300">Once connected, ask your AI agent:</p>
                <div className="rounded-2xl border border-gray-200 bg-white p-4 text-base text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                  “List my connected social media accounts”
                </div>
                <p className="text-base text-gray-600 dark:text-gray-300">
                  If the connection is working, the agent will call the <code className="text-gray-800 dark:text-white/90">integrationList</code> tool
                  and return your connected accounts.
                </p>
              </section>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5 p-5">
                <p className="text-xs font-extrabold tracking-widest uppercase text-gray-800 dark:text-white/90">On this page</p>
                <nav className="mt-4 space-y-2.5 text-sm">
                  <a className="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400" href="#introduction">
                    Introduction
                  </a>
                  <a className="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400" href="#how-it-works">
                    How it works
                  </a>
                  <a className="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400" href="#tools">
                    Tools
                  </a>
                  <a className="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400" href="#authentication">
                    Authentication
                  </a>
                  <a className="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400" href="#connecting">
                    Connecting
                  </a>
                  <a className="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400" href="#quick-example">
                    Quick example
                  </a>
                  <a className="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400" href="#client-setup">
                    Client setup
                  </a>
                  <div className="pt-2 border-t border-gray-200 dark:border-white/10">
                    <a
                      className="block mt-2 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                      href="#claude-desktop"
                    >
                      Claude Desktop
                    </a>
                    <a className="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400" href="#claude-code">
                      Claude Code
                    </a>
                    <a className="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400" href="#cursor">
                      Cursor
                    </a>
                    <a className="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400" href="#other-clients">
                      Other clients
                    </a>
                    <a className="block text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400" href="#verify">
                      Verify
                    </a>
                  </div>
                </nav>
                <div className="mt-5 pt-4 border-t border-gray-200 dark:border-white/10">
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    Need help? Reach out at{" "}
                    <a className="font-medium text-primary-600 dark:text-primary-400 hover:underline" href="mailto:contact@feedvector.com">
                      contact@feedvector.com
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
