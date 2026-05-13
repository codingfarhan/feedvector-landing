type NavItem =
  | {
      type: "link"
      href: string
      label: string
      badge?: string
    }
  | {
      type: "dropdown"
      label: string
      items: Array<{
        href: string
        label: string
      }>
    }

export const navItems: NavItem[] = [
  {
    type: "link",
    href: "/",
    label: "Home",
  },
  {
    type: "link",
    label: "FAQ",
    href: "/faq",
  },
  {
    type: "link",
    label: "Pricing",
    href: "/pricing",
  },
  {
    type: "link",
    label: "MCP",
    href: "/mcp",
    badge: "New!",
  },
] satisfies NavItem[]
