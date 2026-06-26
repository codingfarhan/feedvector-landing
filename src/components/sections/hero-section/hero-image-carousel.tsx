import Image from "next/image"

const dashboardSlide = {
  light: "/images/tab-image/dashboard.png",
  dark: "/images/tab-image/dashboard-dark.png",
  alt: "FeedVector dashboard for planning LinkedIn content",
}

export function HeroImageCarousel() {
  return (
    <div className="relative aspect-[966/552] overflow-hidden rounded-2xl bg-white/40 dark:bg-white/5">
      <Image
        src={dashboardSlide.light}
        alt={dashboardSlide.alt}
        fill
        sizes="(min-width: 1024px) 966px, 100vw"
        className="block object-cover dark:hidden"
        priority
        unoptimized
      />
      <Image
        src={dashboardSlide.dark}
        alt={dashboardSlide.alt}
        fill
        sizes="(min-width: 1024px) 966px, 100vw"
        className="hidden object-cover dark:block"
        priority
        unoptimized
      />

      <div className="hero-dashboard-cursor" aria-hidden="true">
        <span className="hero-dashboard-click-pulse" />
        <svg className="hero-dashboard-cursor-pointer" width="32" height="32" viewBox="0 0 30 30" fill="none">
          <path
            d="M7.25 4.75L22.96 16.06L15.69 17.34L19.66 24.22L16.74 25.91L12.77 19.03L8.02 24.67L7.25 4.75Z"
            fill="white"
            stroke="#111827"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <style>{`
        .hero-dashboard-cursor {
          position: absolute;
          z-index: 20;
          left: 28%;
          top: 56%;
          display: none;
          width: 32px;
          height: 32px;
          pointer-events: none;
          animation: hero-dashboard-cursor-path 6.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }

        .hero-dashboard-cursor-pointer {
          position: relative;
          z-index: 2;
          display: block;
          filter: drop-shadow(0 10px 18px rgba(15, 23, 42, 0.32));
          transform-origin: 7px 5px;
          animation: hero-dashboard-cursor-click 6.5s ease-in-out infinite;
        }

        .hero-dashboard-click-pulse {
          position: absolute;
          z-index: 1;
          left: -6px;
          top: -7px;
          width: 30px;
          height: 30px;
          border-radius: 999px;
          border: 2px solid rgba(122, 90, 248, 0.78);
          background: rgba(122, 90, 248, 0.16);
          opacity: 0;
          transform: scale(0.45);
          animation: hero-dashboard-click-pulse 6.5s ease-out infinite;
        }

        @media (min-width: 768px) {
          .hero-dashboard-cursor {
            display: block;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-dashboard-cursor,
          .hero-dashboard-cursor-pointer,
          .hero-dashboard-click-pulse {
            animation: none;
          }

          .hero-dashboard-cursor {
            display: none;
          }
        }

        @keyframes hero-dashboard-cursor-path {
          0%,
          12% {
            left: 28%;
            top: 56%;
          }
          28%,
          42% {
            left: 58%;
            top: 28%;
          }
          58%,
          82% {
            left: 84%;
            top: 9%;
          }
          100% {
            left: 28%;
            top: 56%;
          }
        }

        @keyframes hero-dashboard-cursor-click {
          0%,
          60%,
          69%,
          100% {
            transform: scale(1);
          }
          63%,
          66% {
            transform: scale(0.84);
          }
        }

        @keyframes hero-dashboard-click-pulse {
          0%,
          59%,
          72%,
          100% {
            opacity: 0;
            transform: scale(0.45);
          }
          63% {
            opacity: 0.86;
            transform: scale(0.6);
          }
          71% {
            opacity: 0;
            transform: scale(1.8);
          }
        }
      `}</style>
    </div>
  )
}
