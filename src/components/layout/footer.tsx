import { getCurrentYear } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-900">
      <span className="absolute top-0 -translate-x-1/2 left-1/2">
        <svg width="1260" height="457" viewBox="0 0 1260 457" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_11105_867)">
            <circle cx="630" cy="-173.299" r="230" fill="#3B2EFF" />
          </g>
          <defs>
            <filter
              id="filter0_f_11105_867"
              x="0"
              y="-803.299"
              width="1260"
              height="1260"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_11105_867" />
            </filter>
          </defs>
        </svg>
      </span>
      <div className="relative z-10 py-16 xl:py-24">
        <div className="container px-5 mx-auto sm:px-7">
          <div className="grid gap-y-8 gap-x-6 lg:grid-cols-12">
            <div className="lg:col-span-3 xl:col-span-4">
              <div>
                <Link href="/" className="block mb-6">
                  <Image src="/images/logo-white.svg" alt="logo" width={128} height={32} />
                </Link>
                <p className="block text-sm text-gray-400 mb-9">
                  FeedVector helps teams plan, create, and publish social content across every channel with AI assistance, automation, and
                  clear performance insights.
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="grid sm:grid-cols-3 gap-7">
                <div>
                  <span className="block mb-6 text-sm text-gray-400">Services</span>
                  <nav className="flex flex-col space-y-3">
                    <Link href="/" className="text-sm font-normal text-gray-400 transition hover:text-white">
                      Status
                    </Link>
                    <Link href="/pricing" className="text-sm font-normal text-gray-400 transition hover:text-white">
                      Pricing
                    </Link>
                    <Link href="/pricing#faq" className="text-sm font-normal text-gray-400 transition hover:text-white">
                      FAQ
                    </Link>
                    <Link href="/privacy" className="text-sm font-normal text-gray-400 transition hover:text-white">
                      Privacy Policy
                    </Link>
                    <Link href="/terms" className="text-sm font-normal text-gray-400 transition hover:text-white">
                      Terms of Service
                    </Link>
                  </nav>
                </div>
                <div>
                  <span className="block mb-6 text-sm text-gray-400">Features</span>
                  <nav className="flex flex-col space-y-3">
                    <Link href="/pricing" className="text-sm font-normal text-gray-400 transition hover:text-white">
                      Scheduling and cross posting
                    </Link>
                    <Link href="/pricing" className="text-sm font-normal text-gray-400 transition hover:text-white">
                      AI content assistant
                    </Link>
                    <Link href="/pricing" className="text-sm font-normal text-gray-400 transition hover:text-white">
                      AI design tools
                    </Link>
                    <Link href="/pricing" className="text-sm font-normal text-gray-400 transition hover:text-white">
                      Auto actions and integrations
                    </Link>
                    <Link href="/pricing" className="text-sm font-normal text-gray-400 transition hover:text-white">
                      Analytics and insights
                    </Link>
                  </nav>
                </div>
                <div>
                  <span className="relative block mb-6 text-sm text-gray-400">Account</span>
                  <nav className="flex flex-col space-y-3">
                    <Link href="https://app.feedvector.com" className="text-sm font-normal text-gray-400 transition hover:text-white">
                      Get Started
                    </Link>
                    <a
                      href="mailto:farhan@feedvector.com"
                      className="text-sm font-normal text-gray-400 transition hover:text-white"
                    >
                      Support
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container relative z-10 px-5 mx-auto sm:px-7">
          <div className="py-5 text-center">
            <p className="text-sm text-gray-500">&copy; {getCurrentYear()} FeedVector - All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
