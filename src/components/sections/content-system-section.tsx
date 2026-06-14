const inputSignals = ["Profile", "Website", "Posts"]
const engineSignals = ["Pillars", "Voice", "Data"]
const outputSignals = ["Ideas", "Drafts", "Next Action"]

function SignalGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-white/10 dark:bg-white/[0.04]">
      <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-gray-400">{label}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-800 dark:border-white/10 dark:bg-dark-primary dark:text-white/90"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ContentSystemSection() {
  return (
    <>
      <section className="border-y border-gray-200 bg-gray-50 py-14 dark:border-white/10 dark:bg-[#171f2e] md:py-24">
        <div className="wrapper">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white/90 md:text-title-lg">How it works:</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
              FeedVector learns your business, plans relevant posts, helps you publish consistently and shows you what is working.
            </p>
          </div>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-theme-sm dark:border-white/10 dark:bg-dark-primary md:p-7">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto_1.25fr_auto_1fr] lg:items-center">
              <SignalGroup label="Inputs" items={inputSignals} />

              <div className="flex items-center justify-center text-2xl font-bold text-primary-500/50 lg:text-3xl" aria-hidden="true">
                <span className="hidden lg:inline">→</span>
                <span className="lg:hidden">↓</span>
              </div>

              <div className="rounded-3xl bg-gray-900 p-6 text-center text-white shadow-theme-sm dark:bg-black/30">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary-300">FeedVector</p>
                <div className="mx-auto mt-5 grid max-w-[280px] grid-cols-3 gap-2">
                  {engineSignals.map((item) => (
                    <span key={item} className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-white">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mx-auto mt-6 h-1.5 max-w-[260px] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500" />
                <p className="mt-5 text-lg font-bold">Content engine</p>
              </div>

              <div className="flex items-center justify-center text-2xl font-bold text-primary-500/50 lg:text-3xl" aria-hidden="true">
                <span className="hidden lg:inline">→</span>
                <span className="lg:hidden">↓</span>
              </div>

              <SignalGroup label="Outputs" items={outputSignals} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
