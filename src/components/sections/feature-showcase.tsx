import type { CSSProperties } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type CursorStyle = CSSProperties & {
  "--cursor-x0": string
  "--cursor-y0": string
  "--cursor-x1": string
  "--cursor-y1": string
  "--cursor-x2": string
  "--cursor-y2": string
  "--cursor-delay": string
}

const features = [
  {
    title: "Plan the week from one dashboard",
    description: "Review suggested drafts, generate next week's posts, and keep your LinkedIn cadence visible.",
    lightImage: "/images/feature-showcase/dashboard-weekly.png",
    darkImage: "/images/feature-showcase/dashboard-weekly-dark.png",
    className: "lg:col-span-7",
    imageClassName: "aspect-[16/9]",
    cursorStyle: {
      "--cursor-x0": "14%",
      "--cursor-y0": "22%",
      "--cursor-x1": "82%",
      "--cursor-y1": "9%",
      "--cursor-x2": "77%",
      "--cursor-y2": "74%",
      "--cursor-delay": "0s",
    },
  },
  {
    title: "Find posts to comment on daily",
    description: "Get fresh LinkedIn posts every day so you can add thoughtful comments and grow your audience.",
    lightImage: "/images/tab-image/engage-posts.png",
    darkImage: "/images/tab-image/engage-posts-dark.png",
    className: "lg:col-span-5",
    imageClassName: "aspect-[16/9]",
    imageFitClassName: "object-contain",
    cursorStyle: {
      "--cursor-x0": "12%",
      "--cursor-y0": "22%",
      "--cursor-x1": "56%",
      "--cursor-y1": "38%",
      "--cursor-x2": "82%",
      "--cursor-y2": "67%",
      "--cursor-delay": "-0.7s",
    },
  },
  {
    title: "Repurpose what already works",
    description: "Turn a website page, old LinkedIn post, or profile context into a fresh post idea.",
    lightImage: "/images/feature-showcase/dashboard-repurpose.png",
    darkImage: "/images/feature-showcase/dashboard-repurpose-dark.png",
    className: "lg:col-span-5",
    imageClassName: "aspect-[72/65]",
    imageFitClassName: "object-contain",
    cursorStyle: {
      "--cursor-x0": "18%",
      "--cursor-y0": "18%",
      "--cursor-x1": "77%",
      "--cursor-y1": "18%",
      "--cursor-x2": "73%",
      "--cursor-y2": "48%",
      "--cursor-delay": "-1.1s",
    },
  },
  {
    title: "Know what to post next",
    description: "See your best format, strongest time, recommended topic, and next-post direction in one read.",
    lightImage: "/images/feature-showcase/analytics-overview.png",
    darkImage: "/images/feature-showcase/analytics-overview-dark.png",
    className: "lg:col-span-7",
    imageClassName: "aspect-[21/10]",
    imageFitClassName: "object-contain",
    cursorStyle: {
      "--cursor-x0": "13%",
      "--cursor-y0": "16%",
      "--cursor-x1": "13%",
      "--cursor-y1": "6%",
      "--cursor-x2": "71%",
      "--cursor-y2": "43%",
      "--cursor-delay": "-2.2s",
    },
  },
  {
    title: "Find posts worth reusing",
    description: "Sort top content by engagement, comments, reposts, recency, and original posts.",
    lightImage: "/images/feature-showcase/analytics-top-posts.png",
    darkImage: "/images/feature-showcase/analytics-top-posts-dark.png",
    className: "lg:col-span-6",
    imageClassName: "aspect-[16/10]",
    cursorStyle: {
      "--cursor-x0": "68%",
      "--cursor-y0": "16%",
      "--cursor-x1": "79%",
      "--cursor-y1": "12%",
      "--cursor-x2": "86%",
      "--cursor-y2": "12%",
      "--cursor-delay": "-3.3s",
    },
  },
  {
    title: "Spot optimization opportunities",
    description: "Compare formats, lengths, hooks, topics, and posting times with sample-size confidence.",
    lightImage: "/images/feature-showcase/analytics-opportunities.png",
    darkImage: "/images/feature-showcase/analytics-opportunities-dark.png",
    className: "lg:col-span-6",
    imageClassName: "aspect-[21/10]",
    imageFitClassName: "object-contain",
    cursorStyle: {
      "--cursor-x0": "18%",
      "--cursor-y0": "52%",
      "--cursor-x1": "39%",
      "--cursor-y1": "63%",
      "--cursor-x2": "84%",
      "--cursor-y2": "63%",
      "--cursor-delay": "-4.4s",
    },
  },
  {
    title: "Understand audience response",
    description: "Break down comments, reposts, reactions, and reaction mix so performance is easier to interpret.",
    lightImage: "/images/feature-showcase/analytics-audience.png",
    darkImage: "/images/feature-showcase/analytics-audience-dark.png",
    className: "lg:col-span-12",
    imageClassName: "aspect-[21/10]",
    imageFitClassName: "object-contain",
    cursorStyle: {
      "--cursor-x0": "20%",
      "--cursor-y0": "20%",
      "--cursor-x1": "57%",
      "--cursor-y1": "54%",
      "--cursor-x2": "74%",
      "--cursor-y2": "84%",
      "--cursor-delay": "-5.5s",
    },
  },
]

function CursorDemo({ style }: { style: CursorStyle }) {
  return (
    <div className="feature-cursor" style={style} aria-hidden="true">
      <span className="feature-cursor-ripple feature-cursor-ripple-one" />
      <span className="feature-cursor-ripple feature-cursor-ripple-two" />
      <svg className="feature-cursor-pointer" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <path
          d="M7.25 4.75L22.96 16.06L15.69 17.34L19.66 24.22L16.74 25.91L12.77 19.03L8.02 24.67L7.25 4.75Z"
          fill="white"
          stroke="#111827"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default function FeatureShowcase() {
  return (
    <section className="border-t border-gray-200 bg-white py-14 dark:border-white/10 dark:bg-dark-primary md:py-24">
      <div className="wrapper">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800 dark:text-white/90 md:text-title-lg">Grow with value content the algorithm loves</h2>
          <p className="mx-auto max-w-xl leading-6 text-gray-500 dark:text-gray-400">
            Create high-performing posts and find the right conversations to join so you can grow your audience and revenue on LinkedIn.
          </p>
        </div>

        <div className="mx-auto grid max-w-[1120px] gap-5 lg:grid-cols-12">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={cn(
                "overflow-hidden rounded-lg border border-gray-200 bg-gray-50 shadow-theme-xs dark:border-white/10 dark:bg-white/[0.04]",
                feature.className,
              )}
            >
              <div className="border-b border-gray-200 bg-white p-2 dark:border-white/10 dark:bg-white/[0.03]">
                <div className={cn("relative overflow-hidden rounded-md bg-gray-100 dark:bg-[#141414]", feature.imageClassName)}>
                  <Image
                    src={feature.lightImage}
                    alt={feature.title}
                    fill
                    sizes="(min-width: 1024px) 720px, 100vw"
                    className={cn("block object-top dark:hidden", feature.imageFitClassName || "object-cover")}
                  />
                  <Image
                    src={feature.darkImage}
                    alt={feature.title}
                    fill
                    sizes="(min-width: 1024px) 720px, 100vw"
                    className={cn("hidden object-top dark:block", feature.imageFitClassName || "object-cover")}
                  />
                  <CursorDemo style={feature.cursorStyle as CursorStyle} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-800 dark:text-white/90">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .feature-cursor {
          --cursor-duration: 7.5s;
          position: absolute;
          z-index: 20;
          display: none;
          width: 30px;
          height: 30px;
          left: var(--cursor-x0);
          top: var(--cursor-y0);
          pointer-events: none;
          animation: feature-cursor-path var(--cursor-duration) cubic-bezier(0.65, 0, 0.35, 1) infinite;
          animation-delay: var(--cursor-delay);
        }

        .feature-cursor-pointer {
          position: relative;
          z-index: 2;
          display: block;
          filter: drop-shadow(0 8px 14px rgba(15, 23, 42, 0.28));
          transform-origin: 7px 5px;
          animation: feature-cursor-click var(--cursor-duration) ease-in-out infinite;
          animation-delay: var(--cursor-delay);
        }

        .feature-cursor-ripple {
          position: absolute;
          z-index: 1;
          left: -7px;
          top: -7px;
          width: 28px;
          height: 28px;
          border-radius: 999px;
          border: 2px solid rgba(122, 90, 248, 0.7);
          background: rgba(122, 90, 248, 0.12);
          opacity: 0;
          transform: scale(0.4);
        }

        .feature-cursor-ripple-one {
          animation: feature-cursor-ripple-one var(--cursor-duration) ease-out infinite;
          animation-delay: var(--cursor-delay);
        }

        .feature-cursor-ripple-two {
          animation: feature-cursor-ripple-two var(--cursor-duration) ease-out infinite;
          animation-delay: var(--cursor-delay);
        }

        @media (min-width: 768px) {
          .feature-cursor {
            display: block;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .feature-cursor {
            display: none;
          }
        }

        @keyframes feature-cursor-path {
          0%,
          12% {
            left: var(--cursor-x0);
            top: var(--cursor-y0);
          }
          26%,
          40% {
            left: var(--cursor-x1);
            top: var(--cursor-y1);
          }
          54%,
          68% {
            left: var(--cursor-x2);
            top: var(--cursor-y2);
          }
          82%,
          100% {
            left: var(--cursor-x0);
            top: var(--cursor-y0);
          }
        }

        @keyframes feature-cursor-click {
          0%,
          28%,
          36%,
          56%,
          64%,
          100% {
            transform: scale(1);
          }
          31%,
          59% {
            transform: scale(0.84);
          }
        }

        @keyframes feature-cursor-ripple-one {
          0%,
          28%,
          40%,
          100% {
            opacity: 0;
            transform: scale(0.4);
          }
          31% {
            opacity: 0.85;
            transform: scale(0.55);
          }
          39% {
            opacity: 0;
            transform: scale(1.55);
          }
        }

        @keyframes feature-cursor-ripple-two {
          0%,
          56%,
          68%,
          100% {
            opacity: 0;
            transform: scale(0.4);
          }
          59% {
            opacity: 0.85;
            transform: scale(0.55);
          }
          67% {
            opacity: 0;
            transform: scale(1.55);
          }
        }
      `}</style>
    </section>
  )
}
