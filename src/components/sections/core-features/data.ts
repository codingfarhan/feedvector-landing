import * as icons from "@/assets/homepage/core-features"

export type CoreFeature = {
  title: string
  description: string
  iconUrl: string
  badge?: string
}

export const CORE_FEATURES: CoreFeature[] = [
  {
    title: "Viral Templates for LinkedIn",
    description: "Choose from hundreds of proven templates and tailor them to your voice in seconds.",
    iconUrl: icons.file,
  },
  {
    title: "Analytics & Insights",
    description: "Track performance across channels and optimize what you publish.",
    iconUrl: icons.lightningBolt,
  },
  {
    title: "Seamless Scheduling",
    description: "Plan ahead and cross-post to multiple LinkedIn accounts from a single place.",
    iconUrl: icons.pencil,
  },
  {
    title: "AI Content Assistant",
    description: "Draft, refine, and repurpose posts faster with agentic AI help.",
    iconUrl: icons.bulb,
  },
  {
    title: "Design with AI",
    description: "Create on-brand visuals with a built-in editor and AI image generation.",
    iconUrl: icons.robot,
  },
  {
    title: "Teamwork & Approvals",
    description: "Collaborate with teammates, delegate tasks, and keep approvals moving.",
    iconUrl: icons.chat,
  },
]
