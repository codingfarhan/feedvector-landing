export const navItems = [
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
] satisfies NavItem[]

type NavItem = Record<string, string | unknown> &
  (
    | {
        type: "link"
        href: string
      }
    | {
        type: "dropdown"
      }
  )
