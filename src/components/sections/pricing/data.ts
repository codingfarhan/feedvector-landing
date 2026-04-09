export const BILLING_PERIODS = [
  {
    label: "Monthly",
    key: "monthly",
    saving: null,
  },
] as const

const AMOUNTS = {
  free: {
    monthly: 0,
    yearly: null,
  },
  pro: {
    monthly: 29,
    yearly: null,
  },
}

export type TBILLING_PLAN = (typeof BILLING_PLANS)[number]
export const BILLING_PLANS = [
  {
    name: "Free",
    description: "For individuals getting started with social scheduling and AI.",
    pricing: {
      monthly: {
        amount: AMOUNTS["free"]["monthly"],
        formattedPrice: "$" + AMOUNTS["free"]["monthly"],
        stripeId: null,
      },
      yearly: {
        amount: AMOUNTS["free"]["yearly"],
        formattedPrice: "$" + AMOUNTS["free"]["yearly"],
        stripeId: null,
      },
    },
    features: [
      "2 channels",
      "20 posts per month",
      "AI auto-complete",
      "AI copilots",
      "Advanced Picture Editor",
      "2 AI Images per month",
      "1 AI Videos per month",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For teams that need full publishing, analytics, and advanced AI features.",
    pricing: {
      monthly: {
        amount: AMOUNTS["pro"]["monthly"],
        formattedPrice: "$" + AMOUNTS["pro"]["monthly"],
        stripeId: process.env.NEXT_PUBLIC_PRO_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS["pro"]["yearly"],
        formattedPrice: "Let's talk",
        stripeId: null,
      },
    },
    features: [
      "50 channels",
      "Unlimited posts per month",
      "Analytics for all Social Media Platforms",
      "Plugs for creating complex workflows",
      "Third-party integrations with FeedVector app",
      "Unlimited team members",
      "AI auto-complete",
      "AI copilots",
      "Advanced Picture Editor",
      "35 AI Images per month",
      "20 AI Videos per month",
    ],
    cta: "Get Started",
    popular: true,
  },
]
