export const BILLING_PERIODS = [
  {
    label: "Monthly",
    key: "monthly",
    saving: null,
  },
] as const;

const AMOUNTS = {
  standard: {
    monthly: 29,
    yearly: null,
  },
  pro: {
    monthly: 99,
    yearly: null,
  },
  growth: {
    monthly: 149,
    yearly: null,
  },
};

export type TBILLING_PLAN = (typeof BILLING_PLANS)[number];
export const BILLING_PLANS = [
  {
    name: "Standard",
    description:
      "For creators and founders who want a full LinkedIn content system.",
    pricing: {
      monthly: {
        amount: AMOUNTS["standard"]["monthly"],
        formattedPrice: "$" + AMOUNTS["standard"]["monthly"],
        stripeId:
          process.env.NEXT_PUBLIC_STANDARD_MONTHLY_PRICE_ID ||
          process.env.NEXT_PUBLIC_PRO_MONTHLY_PRICE_ID!,
      },
      yearly: {
        amount: AMOUNTS["standard"]["yearly"],
        formattedPrice: "Let's talk",
        stripeId: null,
      },
    },
    features: [
      "1 LinkedIn account",
      "Plan and schedule LinkedIn posts",
      "AI-assisted LinkedIn post drafting",
      "Use LinkedIn post templates",
      "Repurpose existing ideas into LinkedIn posts",
      "Unlimited LinkedIn posts per month",
      "Recommended LinkedIn posts refreshed every 24 hours",
      "LinkedIn analytics that show what to post next",
      "Recommended topics, formats, hooks, and posting times",
      "Auto actions for repeat LinkedIn publishing tasks",
      "Third-party integrations with the FeedVector app",
      "AI autocomplete for LinkedIn drafts",
      "AI copilots for LinkedIn content creation",
      "Advanced picture editor for LinkedIn visuals",
      "35 AI images per month",
      "20 AI videos per month",
    ],
    cta: "Choose Standard",
    popular: true,
  },
  {
    name: "Pro",
    description:
      "For teams that need more accounts, shared access, and collaboration.",
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
      "Everything in Standard",
      "Up to 5 connected social accounts",
      "Connect accounts across Instagram, X, Facebook, YouTube, Bluesky, and more",
      "Team access for your workspace",
      "Approval workflows for LinkedIn content",
      "Shared calendars and team collaboration",
      "Task delegation for content workflows",
      "Recommended LinkedIn posts refreshed every 4 hours",
      "100 AI images per month",
      "35 AI videos per month",
      "Priority support",
    ],
    cta: "Choose Pro",
    popular: false,
  },
  {
    name: "Growth",
    description:
      "For agencies and operators managing content across many client accounts.",
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
      "Everything in Pro",
      "Unlimited connected social accounts",
      "Exportable client reports",
      "Client-ready LinkedIn analytics",
      "Multi-client workspace organization",
      "Advanced reporting for content performance",
      "200 AI images per month",
      "50 AI videos per month",
      "Priority onboarding support",
    ],
    cta: "Choose Growth",
    popular: false,
  },
];
