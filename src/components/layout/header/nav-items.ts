export type NavSubItem = {
  href?: string
  label: string
  description?: string
  badge?: string
  items?: NavSubItem[]
}

export type NavSection = {
  title?: string
  items: NavSubItem[]
}

export type NavItem =
  | {
      type: "link"
      href: string
      label: string
      badge?: string
    }
  | {
      type: "dropdown"
      label: string
      items?: NavSubItem[]
      sections?: NavSection[]
    }

export const navItems: NavItem[] = [
  {
    type: "link",
    href: "/",
    label: "Home",
  },
  {
    type: "link",
    label: "Pricing",
    href: "/pricing",
  },
  {
    type: "link",
    label: "FAQ",
    href: "/faq",
  },
  {
    type: "dropdown",
    label: "More",
    items: [
      {
        label: "Compare",
        items: [
          {
            href: "/compare/feedvector-vs-buffer",
            label: "FeedVector vs Buffer",
            description: "Compare scheduling, automation, and AI workflows.",
          },
          {
            href: "/compare/feedvector-vs-later",
            label: "FeedVector vs Later",
            description: "See how FeedVector compares for content planning.",
          },
          {
            href: "/compare/feedvector-vs-hootsuite",
            label: "FeedVector vs Hootsuite",
            description: "Compare AI workflows, planning, and team publishing.",
          },
          {
            href: "/compare/feedvector-vs-metricool",
            label: "FeedVector vs Metricool",
            description: "Evaluate automation, analytics, and content workflows.",
          },
          {
            href: "/compare/feedvector-vs-sprout-social",
            label: "FeedVector vs Sprout Social",
            description: "Compare FeedVector with an enterprise publishing suite.",
          },
        ],
      },
      {
        label: "Guides",
        items: [
          {
            href: "/guides/feedvector-mcp-chatgpt",
            label: "Schedule posts in ChatGPT using FeedVector MCP",
          },
          {
            href: "/guides/feedvector-mcp-codex-desktop",
            label: "Schedule posts in Codex Desktop using FeedVector MCP",
          },
          {
            href: "/guides/feedvector-mcp-vscode",
            label: "Schedule posts in Codex VS Code Extension using FeedVector MCP",
          },
        ],
      },
      {
        href: "/mcp",
        label: "MCP",
        badge: "New",
        description: "Connect FeedVector to ChatGPT, Claude, etc.",
      },
    ],
  },
] satisfies NavItem[]
