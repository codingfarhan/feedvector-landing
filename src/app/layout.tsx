import type { Metadata } from "next"
import Script from "next/script"
import { ThemeProvider } from "next-themes"
import { Onest } from "next/font/google"
import "./globals.css"
import { ToasterProvider } from "./providers/toaster"

const onest = Onest({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://feedvector.com"),
  title: {
    default: "FeedVector - Social Media Scheduling with AI",
    template: "%s | FeedVector",
  },
  description:
    "FeedVector is an AI social media scheduling platform for planning, creating, and publishing posts across channels with automation and analytics.",
  keywords: [
    "social media scheduling",
    "AI social media",
    "social media scheduler",
    "social media management",
    "content scheduling",
    "feed vector",
    "feedvector",
  ],
  openGraph: {
    title: "FeedVector",
    description:
      "FeedVector (often written as Feed Vector) is an AI social media scheduling platform for planning, creating, and publishing posts across channels with automation and analytics.",
    url: "/",
    siteName: "FeedVector",
    images: [{ url: "/images/hero/hero-img.png", width: 1200, height: 630, alt: "FeedVector product preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FeedVector",
    description:
      "FeedVector (often written as Feed Vector) is an AI social media scheduling platform for planning, creating, and publishing posts across channels with automation and analytics.",
    images: ["/images/hero/hero-img.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-CRD0JM1LZ5" strategy="afterInteractive" />
        <Script id="google-gtag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-CRD0JM1LZ5');`}
        </Script>
      </head>
      <body className={`bg-gray-50 dark:bg-dark-secondary min-h-screen flex flex-col ${onest.className}`}>
        <ThemeProvider disableTransitionOnChange>
          {/* ToasterProvider must render before the children components */}
          {/* https://github.com/emilkowalski/sonner/issues/168#issuecomment-1773734618 */}
          <ToasterProvider />

          <div className="isolate flex flex-col flex-1">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
