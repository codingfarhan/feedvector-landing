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
    name: "7-day trial",
    description: "Try FeedVector for 7 days. After the trial, choose a paid plan to keep publishing.",
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
      "1 LinkedIn account",
      "Plan and schedule LinkedIn posts during the trial",
      "Try AI-assisted LinkedIn post drafting",
      "Use LinkedIn post templates",
      "Repurpose existing ideas into LinkedIn posts",
      "Test the picture editor for LinkedIn visuals",
      "2 AI images for LinkedIn posts",
      "1 AI video for LinkedIn content",
    ],
    cta: "Start 7-day trial",
    popular: false,
  },
  {
    name: "Pro",
    description: "For creators and teams that want a full LinkedIn content system after the trial.",
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
      "20 social media accounts",
      "Connect multiple social accounts across Instagram, X, Facebook, YouTube, Bluesky, and more",
      "Unlimited LinkedIn posts per month",
      "LinkedIn analytics that show what to post next",
      "Recommended topics, formats, hooks, and posting times",
      "Unlimited team members in your workspace",
      "Approval workflows for LinkedIn content",
      "Auto actions for repeat LinkedIn publishing tasks",
      "Third-party integrations with the FeedVector app",
      "AI autocomplete for LinkedIn drafts",
      "AI copilots for LinkedIn content creation",
      "Advanced picture editor for LinkedIn visuals",
      "35 AI images per month",
      "20 AI videos per month",
    ],
    cta: "Choose Pro",
    popular: true,
  },
]
