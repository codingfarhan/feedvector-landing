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
  title: {
    default: "FeedVector - Social Scheduling with AI",
    template: "%s | FeedVector",
  },
  description: "FeedVector helps teams plan, create, and schedule social content across channels with AI assistance, automation, and analytics.",
  openGraph: {
    title: "FeedVector",
    description: "FeedVector helps teams plan, create, and schedule social content across channels with AI assistance, automation, and analytics.",
    url: "https://feedvector.com",
    siteName: "FeedVector",
    images: [{ url: "https://example.com/og.png" }],
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
