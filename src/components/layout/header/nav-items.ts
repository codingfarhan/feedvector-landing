export type NavSubItem = {
  href: string
  label: string
  description?: string
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
    type: "dropdown",
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
        description: "See how FeedVector compares for social publishing.",
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
        description: "Compare FeedVector with an enterprise social suite.",
      },
    ],
  },
  {
    type: "dropdown",
    label: "Guides",
    sections: [
      {
        title: "MCP setup",
        items: [
          // {
          //   href: "/guides/feedvector-mcp-claude-desktop",
          //   label: "Claude Desktop MCP setup",
          // },
          // {
          //   href: "/guides/feedvector-mcp-claude-code",
          //   label: "Claude Code MCP setup",
          // },
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
      // {
      //   title: "Social media workflows",
      //   items: [
      //     {
      //       href: "/guides/post-daily-on-linkedin-without-writing-daily",
      //       label: "Post daily on LinkedIn without writing daily",
      //     },
      //     {
      //       href: "/guides/turn-one-youtube-video-into-20-social-media-posts",
      //       label: "Turn one YouTube video into 20 social posts",
      //     },
      //     {
      //       href: "/guides/founders-automate-social-media-without-sounding-like-ai",
      //       label: "Automate founder social without sounding like AI",
      //     },
      //     {
      //       href: "/guides/repost-high-performing-posts-automatically",
      //       label: "Repost high-performing posts automatically",
      //     },
      //     {
      //       href: "/guides/build-founder-content-system-in-30-minutes",
      //       label: "Build a founder content system in 30 minutes",
      //     },
      //   ],
      // },
    ],
  },
  {
    type: "link",
    label: "MCP",
    href: "/mcp",
    badge: "New!",
  },
  {
    type: "link",
    label: "FAQ",
    href: "/faq",
  },
] satisfies NavItem[]
