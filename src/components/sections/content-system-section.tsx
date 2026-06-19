const inputSignals = ["LinkedIn Profile", "Website", "Past Posts"]
const engineSignals = ["Content Pillars", "Voice", "Data"]
const outputSignals = ["Weekly Draft Posts", "Intelligent Analytics", "Recommended Posts to comment on"]

function SignalGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-white/10 dark:bg-white/[0.04]">
      <p className="text-center text-xs font-bold uppercase tracking-[0.14em] text-gray-400">{label}</p>
      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-gray-800 dark:border-white/10 dark:bg-dark-primary dark:text-white/90 text-center items-center"
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
              FeedVector learns your business, recommends posts to comment on, plans relevant posts, helps you publish consistently and shows you what
              is working.
            </p>
          </div>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white p-5 shadow-theme-sm dark:border-white/10 dark:bg-dark-primary md:p-7">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto_1.25fr_auto_1fr] lg:items-center">
              <SignalGroup label="Inputs" items={inputSignals} />

              <div className="flex items-center justify-center text-2xl font-bold text-primary-500/50 lg:text-3xl" aria-hidden="true">
                <span className="hidden lg:inline">→</span>
                <span className="lg:hidden">↓</span>
              </div>

              <div className="content-engine-card relative overflow-hidden rounded-3xl p-[1px] shadow-theme-sm">
                <div className="relative rounded-[23px] bg-gray-900 p-6 text-center text-white dark:bg-black/50">
                  <svg
                    className="content-engine-gear absolute right-5 top-5 text-primary-300/70"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" stroke="currentColor" strokeWidth="1.7" />
                    <path
                      d="M12 2.75v2.2M12 19.05v2.2M4.4 4.4l1.56 1.56M18.04 18.04l1.56 1.56M2.75 12h2.2M19.05 12h2.2M4.4 19.6l1.56-1.56M18.04 5.96 19.6 4.4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
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
      <style>{`
        .content-engine-card::before {
          content: "";
          position: absolute;
          inset: -55%;
          background: conic-gradient(from 0deg, rgba(122, 90, 248, 0), rgba(122, 90, 248, 0.9), rgba(59, 130, 246, 0.75), rgba(16, 185, 129, 0.85), rgba(122, 90, 248, 0));
          animation: content-engine-border-spin 8s linear infinite;
        }

        .content-engine-gear {
          animation: content-engine-gear-spin 10s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .content-engine-card::before,
          .content-engine-gear {
            animation: none;
          }
        }

        @keyframes content-engine-border-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes content-engine-gear-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}
