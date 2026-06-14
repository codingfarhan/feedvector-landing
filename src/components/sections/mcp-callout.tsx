import Link from "next/link"

export default function McpCallout() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-white/1 px-5">
      <div className="max-w-[72rem] mx-auto">
        <div className="rounded-[24px] border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 px-2.5 py-1 text-xs font-semibold">
                New
              </span>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">FeedVector MCP Server</p>
            </div>

            <h2 className="font-bold text-gray-800 text-2xl md:text-3xl dark:text-white/90">
              Schedule posts on social media from your favourite AI client
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Connect Claude, ChatGPT, or any MCP-compatible client to FeedVector and schedule posts on different social accounts using natural
              language.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/mcp"
              className="bg-primary-500 transition h-12 inline-flex items-center justify-center hover:bg-primary-600 px-6 py-3 rounded-full text-white text-sm"
            >
              MCP setup Guide
            </Link>
            <Link
              href="https://app.feedvector.com"
              className="h-12 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white/90 hover:bg-gray-50 dark:hover:bg-white/5"
            >
              Open app
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
