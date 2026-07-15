export const BILLING_PERIODS = [
  {
    label: "Monthly",
    key: "monthly",
    saving: null,
  },
] as const

const AMOUNTS = {
  essential: {
    monthly: 179,
    yearly: null,
  },
  growth: {
    monthly: 379,
    yearly: null,
  },
  doneForYou: {
    monthly: 1499,
    yearly: null,
  },
}

const APP_URL = "https://app.feedvector.com"
const STRATEGY_CALL_URL = "https://calendar.app.google/tBHzh5u8n4AGiVTb9"

export type TBILLING_PLAN = (typeof BILLING_PLANS)[number]
export const BILLING_PLANS = [
  {
    name: "Essential",
    description: "For teams that already have a LinkedIn strategy and need one place to execute it.",
    pricing: {
      monthly: {
        amount: AMOUNTS["essential"]["monthly"],
        formattedPrice: "$" + AMOUNTS["essential"]["monthly"],
        stripeId: process.env.NEXT_PUBLIC_ESSENTIAL_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS["essential"]["yearly"],
        formattedPrice: "Let's talk",
        stripeId: null,
      },
    },
    features: [
      "5 social media channels",
      "Invite 2 more users to your team",
      "Full self-service FeedVector software",
      "One onboarding call",
      "Content planning and scheduling",
      "Approval workflows",
      "Engagement discovery",
      "LinkedIn analytics and recommendations",
      "AI-assisted post drafting",
      "LinkedIn post templates",
      "Website, profile, and past-post repurposing",
      "Recommended LinkedIn posts to comment on",
      "Auto actions for repeat publishing tasks",
      "Third-party integrations with the FeedVector app",
      "AI autocomplete for LinkedIn drafts",
      "AI copilots for LinkedIn content creation",
      "Advanced picture editor for LinkedIn visuals",
      "100 AI images per month",
      "35 AI videos per month",
      "Support",
    ],
    cta: "Choose Essential",
    ctaHref: APP_URL,
    popular: false,
  },
  {
    name: "Growth",
    description: "For B2B founders and teams that want a structured LinkedIn growth system, not another tool to configure alone.",
    pricing: {
      monthly: {
        amount: AMOUNTS["growth"]["monthly"],
        formattedPrice: "$" + AMOUNTS["growth"]["monthly"],
        stripeId: process.env.NEXT_PUBLIC_GROWTH_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS["growth"]["yearly"],
        formattedPrice: "Let's talk",
        stripeId: null,
      },
    },
    features: [
      "Everything in Essential",
      "Full FeedVector software access, without limits",
      "Unlimited social media channels and users",
      "Invite unlimited users to your team",
      "Professionally configured brand strategy",
      "Guided onboarding",
      "Trackable content goals",
      "200 AI images per month",
      "50 AI videos per month",
      "Monthly review call",
      "24/7 Priority support",
    ],
    cta: "Choose Growth",
    ctaHref: APP_URL,
    popular: true,
  },
  {
    name: "Done-for-you",
    description: "For founders that want us to plan, create, publish, and improve their LinkedIn content.",
    pricing: {
      monthly: {
        amount: AMOUNTS["doneForYou"]["monthly"],
        formattedPrice: "$" + AMOUNTS["doneForYou"]["monthly"].toLocaleString("en-US"),
        pricePrefix: "Starts at",
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS["doneForYou"]["yearly"],
        formattedPrice: "Let's talk",
        stripeId: null,
      },
    },
    features: [
      "Fully manage 1 Founder profile",
      "Fully manage 1 Company page",
      "Content planning",
      "Writing and editing",
      "Scheduling",
      "Monthly reporting",
      "Ongoing performance reviews",
      "Monthly review call",
    ],
    cta: "Book a strategy call",
    ctaHref: STRATEGY_CALL_URL,
    ctaNote: "Final pricing depends on the number of profiles, publishing frequency, and level of support required.",
    popular: false,
  },
]
