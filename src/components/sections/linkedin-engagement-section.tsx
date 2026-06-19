import Image from "next/image"

export default function LinkedinEngagementSection() {
  return (
    <section className="border-y border-gray-200 bg-white py-14 dark:border-white/10 dark:bg-dark-primary md:py-24">
      <div className="wrapper">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white/90 md:text-title-lg">
            Posting alone isn't enough to grow on LinkedIn
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
            FeedVector gives you relevant LinkedIn posts to comment on every day, so you can build visibility beyond your own publishing schedule.
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-[32px] border border-gray-200 bg-gray-50 p-3 shadow-theme-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-5">
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#141414]">
            <Image
              src="/images/tab-image/engage-posts.png"
              alt="Recommended LinkedIn posts to comment on in FeedVector"
              width={1920}
              height={1080}
              className="block h-auto w-full dark:hidden"
              priority
            />
            <Image
              src="/images/tab-image/engage-posts-dark.png"
              alt="Recommended LinkedIn posts to comment on in FeedVector"
              width={1920}
              height={1080}
              className="hidden h-auto w-full dark:block"
              priority
            />

            <div className="engagement-cursor" aria-hidden="true">
              <svg className="engagement-cursor-pointer" width="32" height="32" viewBox="0 0 30 30" fill="none">
                <path
                  d="M7.25 4.75L22.96 16.06L15.69 17.34L19.66 24.22L16.74 25.91L12.77 19.03L8.02 24.67L7.25 4.75Z"
                  fill="white"
                  stroke="#111827"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .engagement-cursor {
          position: absolute;
          z-index: 20;
          left: 16%;
          top: 28%;
          display: none;
          width: 32px;
          height: 32px;
          pointer-events: none;
          animation: engagement-cursor-path 8s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }

        .engagement-cursor-pointer {
          display: block;
          filter: drop-shadow(0 10px 18px rgba(15, 23, 42, 0.32));
        }

        @media (min-width: 768px) {
          .engagement-cursor {
            display: block;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .engagement-cursor {
            display: none;
          }
        }

        @keyframes engagement-cursor-path {
          0%,
          12% {
            left: 16%;
            top: 28%;
          }
          30%,
          42% {
            left: 62%;
            top: 34%;
          }
          58%,
          70% {
            left: 78%;
            top: 58%;
          }
          86%,
          100% {
            left: 31%;
            top: 72%;
          }
        }
      `}</style>
    </section>
  )
}
