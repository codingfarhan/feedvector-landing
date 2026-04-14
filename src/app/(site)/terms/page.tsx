import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "FeedVector terms of service for using our website and AI social media scheduling platform.",
  keywords: ["terms of service", "legal", "social media scheduling"],
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service",
    description: "FeedVector terms of service for using our website and AI social media scheduling platform.",
    url: "/terms",
  },
}

export default function TermsOfServicePage() {
  return (
    <section className="py-20 md:py-28">
      <div className="wrapper">
        <div className="max-w-3xl mx-auto space-y-8">
          <header className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white/90">
              Terms of Service - FeedVector
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Effective date: March 5, 2026</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Company / Brand: FeedVector ("FeedVector", "we", "us", "our")
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Website: feedvector.com</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Contact: farhan@feedvector.com</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Controller/Legal entity: FMW Enterprises Pvt. Limited</p>
          </header>

          <p className="text-base text-gray-600 dark:text-gray-300">
            These Terms of Service ("Terms") govern your access to and use of FeedVector's website and products, including
            our web app that helps you create, schedule, publish, and manage content for third-party platforms including
            LinkedIn, Instagram, Facebook, YouTube and/or TikTok ("Platforms") (collectively, the "Services"). By using
            the Services, you agree to these Terms.
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">1) Eligibility</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              You must be at least 18 years old (or the age of majority where you live) and able to form a binding
              contract. If you use the Services on behalf of a company, you represent you're authorized to bind that
              company, and "you" includes that company.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">2) Your account</h2>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>You're responsible for safeguarding your account credentials and all activity under your account.</li>
              <li>You must provide accurate info and keep it updated.</li>
              <li>You must notify us if you suspect unauthorized access.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">3) What FeedVector provides</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">FeedVector provides tools to:</p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>Draft, store, and manage content (text, media, links)</li>
              <li>Schedule posts for future publication</li>
              <li>Publish content to connected Platform accounts (when supported and permitted)</li>
              <li>Show publishing status (e.g., queued/published/failed) and basic logs</li>
            </ul>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We may change, add, or remove features at any time. Some features may be in beta and can be unstable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">
              4) Connecting third-party Platforms (LinkedIn, Instagram, Facebook, YouTube, TikTok)
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              To use certain features, you may connect one or more Platform accounts through authorization (e.g., OAuth).
              By connecting a Platform account, you authorize FeedVector to access and use that account only to provide the
              features you enable (like scheduling/publishing, retrieving post status, or showing connected account info).
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300">You agree that:</p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>You will comply with each Platform's terms, policies, and API rules.</li>
              <li>You are responsible for all actions taken through your connected accounts, including anything published or scheduled.</li>
              <li>Platforms may change their APIs, limits, or permissions at any time, which can break features or remove capabilities.</li>
              <li>
                FeedVector is not responsible for Platform downtime, rate limits, API changes, review/approval decisions,
                enforcement actions, content removals, demonetization, strikes, restrictions, or account bans.
              </li>
            </ul>
            <p className="text-base text-gray-600 dark:text-gray-300">
              No guarantee: We do not guarantee that any Platform will publish or keep your content live. Platforms can
              reject, delay, throttle, flag, or remove content.
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">AI-assisted features</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                Some features of the Services may use third-party AI providers to help users draft, brainstorm, optimize,
                or schedule content. By using these features, you authorize FeedVector to process relevant prompts,
                content, and limited account or integration context through such providers solely to provide the
                requested functionality, as further described in our Privacy Policy.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                You acknowledge that AI-generated outputs may be incomplete, inaccurate, or unsuitable for your intended
                use. You are solely responsible for reviewing, approving, editing, and verifying any AI-generated content
                before publishing or relying on it.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">5) Your content</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              "Content" means anything you submit, upload, draft, schedule, publish, or otherwise process through the
              Services (including text, images, videos, captions, hashtags, titles, descriptions, thumbnails, links, and
              metadata).
            </p>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Ownership</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">You keep ownership of your Content.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">License to operate the Services</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                You grant FeedVector a limited, non-exclusive, worldwide license to host, store, process, transmit, and
                display your Content only as needed to provide the Services (e.g., saving drafts, generating previews,
                scheduling, publishing, showing status, and troubleshooting).
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Your responsibilities</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">You represent and warrant that:</p>
              <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
                <li>You have all rights needed to use and publish your Content (including music, footage, images, and trademarks).</li>
                <li>Your Content does not infringe IP rights, violate laws, or violate Platform policies.</li>
                <li>Your Content is not illegal, harmful, deceptive, or abusive.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">6) Prohibited use</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">You may not use the Services to:</p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>Violate any law, regulation, or Platform terms/policies</li>
              <li>Post or promote illegal content, hate, harassment, threats, or violence</li>
              <li>Mislead users, impersonate others, or run deceptive campaigns</li>
              <li>Spam, auto-DM, fake engagement, coordinated inauthentic behavior, or anything designed to manipulate Platform systems</li>
              <li>Upload malware or attempt to break, probe, or bypass security</li>
              <li>Scrape, reverse engineer, or copy the Services except where permitted by law</li>
            </ul>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We can suspend or terminate access if we believe you violated these Terms or created risk for FeedVector or others.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">7) Scheduling, publishing, and failures</h2>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>Scheduled jobs depend on your settings, Platform availability, and network conditions.</li>
              <li>A "scheduled" post is not guaranteed to publish.</li>
              <li>
                If a publish attempt fails (Platform error, revoked permissions, rate limit, invalid media, policy
                restriction, etc.), we may retry or mark it failed.
              </li>
              <li>You're responsible for verifying important posts went out correctly.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">8) YouTube-specific notes (uploads, copyright, and strikes)</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">If you connect YouTube:</p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>You're solely responsible for ensuring your uploads do not violate copyright rules, content policies, or monetization rules.</li>
              <li>FeedVector does not provide legal advice on copyright clearance.</li>
              <li>Any copyright claims, strikes, takedowns, or monetization changes are controlled by YouTube and are your responsibility.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">9) Fees, billing, and refunds (if applicable)</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">If you're on a paid plan:</p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>Fees are billed in advance (monthly/annual) unless stated otherwise.</li>
              <li>Taxes may apply.</li>
              <li>Payments are non-refundable except where required by law or explicitly stated by us.</li>
              <li>We may change pricing with notice. New prices apply at renewal or as otherwise communicated.</li>
              <li>(If you don't have billing live yet, keep this section but it's fine to label "Coming soon" in your UI.)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">10) Cancellation and termination</h2>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Cancellation by you</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                You can cancel at any time via the app (or by emailing support). After cancellation, access may end
                immediately or at the end of the billing period (depending on your plan).
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Termination by us</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">We may suspend or terminate your account if:</p>
              <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
                <li>You violate these Terms</li>
                <li>Your use creates security/legal risk</li>
                <li>A Platform requires us to do so</li>
                <li>We discontinue the Services</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Effect of termination</h3>
              <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
                <li>Scheduled posts may not publish after termination.</li>
                <li>We may delete your data after a reasonable period, consistent with our Privacy Policy.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">11) Service availability and support</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              The Services are provided "as is" and may have interruptions. We aim for reliability but don't guarantee
              uptime.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Support is provided via farhan@feedvector.com on a best-effort basis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">12) Disclaimers</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>We make no warranties that the Services will be uninterrupted, error-free, or meet your needs.</li>
              <li>We do not guarantee growth, reach, engagement, revenue, leads, or outcomes.</li>
              <li>We are not responsible for actions or decisions taken by Platforms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">13) Limitation of liability</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              To the maximum extent permitted by law, FeedVector will not be liable for indirect, incidental, special,
              consequential, or punitive damages, or any loss of profits, revenue, data, goodwill, or business
              opportunities.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Our total liability for any claim related to the Services will not exceed the amount you paid FeedVector in
              the last 3 months before the event giving rise to the claim.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">14) Indemnity</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              You agree to defend, indemnify, and hold harmless FeedVector and its team from claims, damages, liabilities,
              and expenses (including reasonable legal fees) arising from:
            </p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>Your Content</li>
              <li>Your use of the Services</li>
              <li>Your violation of these Terms, Platform policies, or third-party rights</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">15) Intellectual property</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              FeedVector owns the Services, including software, design, branding, and related IP (excluding your Content).
              You may not copy, modify, distribute, or create derivative works from the Services without permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">16) Feedback</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              If you send feedback or suggestions, you allow us to use it without restriction or compensation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">17) Governing law and jurisdiction</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              These Terms are governed by the laws of India. Courts located in Delhi, India will have exclusive
              jurisdiction, unless applicable consumer laws require otherwise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">18) Changes to these Terms</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We may update these Terms. If changes are material, we'll provide notice (e.g., in-app or email). Continued
              use after the effective date means you accept the updated Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">19) Contact</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">Email: farhan@feedvector.com</p>
            <p className="text-base text-gray-600 dark:text-gray-300">Legal entity: FMW Enterprises Pvt. Limited</p>
          </section>
        </div>
      </div>
    </section>
  )
}
