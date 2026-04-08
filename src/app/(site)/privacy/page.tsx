import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="wrapper">
        <div className="max-w-3xl mx-auto space-y-8">
          <header className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white/90">
              Privacy Policy - FeedVector
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Effective date: March 5, 2026
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Company / Brand: FeedVector ("FeedVector", "we", "us", "our")
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Website: feedvector.com</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Contact: farhan@feedvector.com</p>
          </header>

          <p className="text-base text-gray-600 dark:text-gray-300">
            This Privacy Policy explains how we collect, use, share, and protect information when you use our
            website and products, including our web app that lets you connect social media accounts (including
            LinkedIn, Instagram, Facebook, YouTube and TikTok) to create and schedule posts ("Services").
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">1) Who this applies to</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">This policy applies to:</p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>Visitors to our website (feedvector.com)</li>
              <li>Users of our web app/dashboard (the scheduling product)</li>
              <li>Customers who connect LinkedIn, Instagram, Facebook, YouTube and/or TikTok accounts to our Services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">2) What we collect</h2>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">A) Information you provide</h3>
              <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
                <li>Account info: name, email, password (or auth method), organization/workspace name (if applicable)</li>
                <li>
                  Content you create in the app: post text, drafts, media you upload, scheduling settings (time, timezone),
                  and any notes/labels you add
                </li>
                <li>Support/comms: messages you send us (email, chat, forms)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                B) Information from LinkedIn, Instagram, Facebook, YouTube and TikTok (when you connect accounts)
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                When you connect LinkedIn, Instagram, Facebook, YouTube and/or TikTok via OAuth (or similar authorization
                methods), the platform(s) may provide us access to limited data based on the permissions you grant (scopes)
                and what the platform approves for our app. This can include:
              </p>
              <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
                <li>Basic profile identifiers needed to show the connected account inside the app (example: name, profile ID)</li>
                <li>Page/Organization/Business identifiers (if you choose to connect/manage a Page, Organization, or Business account)</li>
                <li>Data needed to publish posts on your behalf and show post status (published/failed/scheduled)</li>
              </ul>
              <p className="text-base text-gray-600 dark:text-gray-300">
                We only request and use LinkedIn, Instagram, Facebook, YouTube and TikTok data to provide the
                scheduling/publishing features you asked for, consistent with each platform's API terms.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">C) Technical + usage data</h3>
              <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
                <li>Device/browser info, IP address, app events (pages visited, clicks), logs, timestamps</li>
                <li>Cookies or similar tech (see Section 9)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">3) How we use your information</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">We use information to:</p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>Provide the Services (drafting, scheduling, publishing, showing post status)</li>
              <li>Authenticate you, prevent fraud/abuse, and keep the app secure</li>
              <li>Store your preferences (timezone, schedules)</li>
              <li>Provide customer support and respond to requests</li>
              <li>Improve product reliability and performance (debugging, analytics)</li>
              <li>Send service messages (e.g., "post failed", billing receipts, important product notices)</li>
            </ul>
            <p className="text-base text-gray-600 dark:text-gray-300">We do not sell your personal information.</p>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">AI-assisted features</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                If you use our AI-assisted drafting, brainstorming, optimization, or scheduling features, we may process
                certain content and account context through a third-party AI provider in order to generate suggestions,
                help prepare posts, or support scheduling workflows. We use this processing only to provide the AI
                features you choose to use inside the Services.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                For connected social media accounts, the context sent to the AI provider may include limited integration
                metadata needed for the feature to work properly. For example, in the case of connected YouTube accounts,
                this may include the connected integration or channel name, profile or channel thumbnail, provider
                identifier, and related integration settings. We do not send YouTube OAuth access tokens or refresh
                tokens to the AI provider as part of this AI processing.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">4) Legal bases (GDPR-style)</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">Depending on where you live, our legal bases may include:</p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>Contract: providing the Services you signed up for</li>
              <li>Legitimate interests: improving and securing the Services</li>
              <li>Consent: where required (e.g., non-essential cookies, marketing emails)</li>
              <li>Legal obligation: compliance with applicable laws</li>
            </ul>
            <p className="text-base text-gray-600 dark:text-gray-300">
              LinkedIn reminds developers they're responsible for their own GDPR compliance for data obtained from LinkedIn.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">
              5) How scheduling + publishing works (LinkedIn, Instagram, Facebook, YouTube)
            </h2>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>You connect LinkedIn, Instagram, Facebook, YouTube and/or TikTok using OAuth 2.0 (or similar authorization methods).</li>
              <li>We store the credentials/tokens needed to keep your account connected and publish content you schedule.</li>
              <li>We use platform APIs to publish content only when you ask us to (immediate publish or scheduled publish).</li>
              <li>You can disconnect LinkedIn, Instagram, Facebook, YouTube and/or TikTok anytime (see Section 8).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">6) How we share information</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">We share information only as needed to run the Services:</p>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">A) Service providers (processors)</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">We may share data with vendors that help us operate, such as:</p>
              <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
                <li>Hosting/infrastructure (Railway)</li>
                <li>Database/storage (Postgres)</li>
                <li>Email delivery</li>
                <li>Analytics/error monitoring</li>
              </ul>
              <p className="text-base text-gray-600 dark:text-gray-300">
                They can only process data on our instructions and for providing their services to us.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                B) LinkedIn, Instagram, Facebook, YouTube and TikTok
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                When you publish through our app, we send the required content and metadata to LinkedIn, Instagram,
                Facebook, YouTube and/or TikTok for posting and status updates.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">C) Legal / safety</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                We may disclose info if required by law, or to protect rights, safety, and security.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">D) Third-party AI providers</h3>
              <p className="text-base text-gray-600 dark:text-gray-300">
                If you use AI-powered features in the Services, we may share limited content, prompts, and account or
                integration context with third-party AI service providers that help us operate those features. Our current
                AI provider is OpenAI.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300">
                This sharing is limited to what is reasonably necessary to provide the AI functionality requested by the user,
                such as generating drafts, brainstorming content ideas, improving post wording, or assisting with scheduling
                workflows. We do not share OAuth access tokens or refresh tokens with such AI providers for these purposes.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">7) Data retention</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">We keep data only as long as needed:</p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>Account data: while your account is active</li>
              <li>
                Scheduled posts/drafts: until you delete them or close your account (unless we need them for legitimate
                business purposes like audit logs)
              </li>
              <li>Logs: typically retained for a limited period (e.g., [30/60/90] days) for security/debugging</li>
            </ul>
            <p className="text-base text-gray-600 dark:text-gray-300">You can request deletion (see Section 8).</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">8) Your choices and rights</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">Depending on your location, you may have rights to:</p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>Access, correct, or delete your personal information</li>
              <li>Object to certain processing or request restriction</li>
              <li>Export your data (data portability)</li>
              <li>Withdraw consent (where processing is based on consent)</li>
            </ul>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Disconnect LinkedIn, Instagram, Facebook, YouTube and/or TikTok: You can revoke our access by disconnecting
              inside the app and/or via your platform account settings. After disconnection, we stop new publishing actions
              and delete or invalidate tokens within a reasonable period, except where we must keep certain records for
              legal/security reasons.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300">To make a request, email: farhan@feedvector.com.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">9) Cookies and tracking</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">We use cookies/local storage for:</p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>Login sessions (essential)</li>
              <li>App preferences (essential)</li>
              <li>Analytics (optional)</li>
            </ul>
            <p className="text-base text-gray-600 dark:text-gray-300">
              If we use non-essential cookies, we'll provide a cookie banner or controls where required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">10) Security</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">We take reasonable measures to protect data, such as:</p>
            <ul className="list-disc pl-5 text-base text-gray-600 dark:text-gray-300 space-y-1">
              <li>Encryption in transit (HTTPS)</li>
              <li>Access controls and least-privilege</li>
              <li>Encrypting sensitive secrets/tokens at rest (where applicable)</li>
            </ul>
            <p className="text-base text-gray-600 dark:text-gray-300">
              No system is 100% secure, but we aim to use industry-standard practices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">11) International transfers</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              If you access the Services from outside the country where our servers/processors are located, your data may
              be transferred and processed internationally. Where required, we use appropriate safeguards.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">12) Children</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Our Services are not intended for children under 13 (or the minimum age required in your country). We don't
              knowingly collect data from children.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">13) Changes to this policy</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              We may update this Privacy Policy from time to time. We'll update the "Effective date" and may notify you of
              material changes in the app or by email.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">14) Contact</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">Questions or requests: farhan@feedvector.com</p>
            <p className="text-base text-gray-600 dark:text-gray-300">Controller: FMW Enterprises Pvt. Limited</p>
          </section>
        </div>
      </div>
    </section>
  );
}
