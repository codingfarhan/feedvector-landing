"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { navItems } from "./nav-items"
import type { NavSection, NavSubItem } from "./nav-items"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "@/icons/icons"

function getDropdownSections(item: Extract<(typeof navItems)[number], { type: "dropdown" }>): NavSection[] {
  return item.sections ?? [{ items: item.items ?? [] }]
}

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

function flattenSubItems(items: NavSubItem[]): NavSubItem[] {
  return items.flatMap((item) => [item, ...(item.items ? flattenSubItems(item.items) : [])])
}

interface MobileMenuProps {
  isOpen: boolean
}

export default function MainMobileNav({ isOpen }: MobileMenuProps) {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState("")
  const [activeSubmenu, setActiveSubmenu] = useState("")

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? "" : key)
  }

  const toggleSubmenu = (key: string) => {
    setActiveSubmenu(activeSubmenu === key ? "" : key)
  }

  if (!isOpen) return null

  return (
    <div className="lg:hidden h-screen absolute top-full bg-white dark:bg-dark-primary w-full border-b border-gray-200 dark:border-gray-800">
      <div className="flex flex-col justify-between">
        <div className="flex-1 overflow-y-auto">
          <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6">
            {navItems.map((item) => {
              if (item.type === "link") {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                      {
                        "text-gray-800 dark:text-white": pathname === item.href,
                      },
                    )}
                  >
                    <span>{item.label}</span>
                    {item.badge ? (
                      <span className="inline-flex items-center h-5 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 px-2 text-[10px] font-semibold leading-none shrink-0">
                        {item.badge}
                      </span>
                    ) : null}
                  </Link>
                )
              }

              if (item.type === "dropdown") {
                const sections = getDropdownSections(item)
                const dropdownItems = sections.flatMap((section) => flattenSubItems(section.items))

                return (
                  <div key={item.label}>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={cn(
                        "flex justify-between items-center w-full px-3 py-2 rounded-md text-sm font-medium" +
                          " text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                        {
                          "text-gray-700 dark:text-gray-200": dropdownItems.some((subItem) => subItem.href && isActivePath(pathname, subItem.href)),
                        },
                      )}
                      aria-expanded={activeDropdown === item.label}
                    >
                      <span>{item.label}</span>
                      <span className={cn("size-4 transition-transform duration-200", activeDropdown === item.label && "rotate-180")}>
                        <ChevronDownIcon />
                      </span>
                    </button>

                    {activeDropdown === item.label && (
                      <div className="mt-2 space-y-3 pl-4">
                        {sections.map((section, sectionIndex) => (
                          <div key={section.title ?? `${item.label}-${sectionIndex}`}>
                            {section.title ? (
                              <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-[0.08em] text-gray-400 dark:text-gray-500">
                                {section.title}
                              </p>
                            ) : null}
                            <div className="space-y-1">
                              {section.items.map((subItem) => {
                                const hasChildren = Boolean(subItem.items?.length)
                                const subItems = subItem.items ?? []
                                const isSubItemActive = subItem.href
                                  ? isActivePath(pathname, subItem.href)
                                  : subItems.some((nestedItem) => nestedItem.href && isActivePath(pathname, nestedItem.href))

                                if (hasChildren) {
                                  return (
                                    <div key={subItem.label}>
                                      <button
                                        type="button"
                                        onClick={() => toggleSubmenu(`${item.label}-${subItem.label}`)}
                                        className={cn(
                                          "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-gray-500" +
                                            " dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                          {
                                            "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200": isSubItemActive,
                                          },
                                        )}
                                        aria-expanded={activeSubmenu === `${item.label}-${subItem.label}`}
                                      >
                                        <span>{subItem.label}</span>
                                        <span
                                          className={cn(
                                            "size-4 transition-transform duration-200",
                                            activeSubmenu === `${item.label}-${subItem.label}` && "rotate-180",
                                          )}
                                        >
                                          <ChevronDownIcon />
                                        </span>
                                      </button>

                                      {activeSubmenu === `${item.label}-${subItem.label}` ? (
                                        <div className="mt-1 space-y-1 pl-4">
                                          {subItems.map((nestedItem) => {
                                            if (!nestedItem.href) {
                                              return null
                                            }

                                            return (
                                              <Link
                                                key={nestedItem.href}
                                                href={nestedItem.href}
                                                className={cn(
                                                  "block rounded-md px-3 py-2 text-sm font-medium text-gray-500" +
                                                    " dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                                  {
                                                    "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200": isActivePath(pathname, nestedItem.href),
                                                  },
                                                )}
                                              >
                                                <span className="flex items-center gap-2">
                                                  <span>{nestedItem.label}</span>
                                                  {nestedItem.badge ? (
                                                    <span className="inline-flex h-5 shrink-0 items-center rounded-full bg-primary-500/10 px-2 text-[10px] font-semibold leading-none text-primary-600 dark:text-primary-400">
                                                      {nestedItem.badge}
                                                    </span>
                                                  ) : null}
                                                </span>
                                                {nestedItem.description ? (
                                                  <span className="mt-1 block text-xs font-normal leading-5 text-gray-500 dark:text-gray-400">
                                                    {nestedItem.description}
                                                  </span>
                                                ) : null}
                                              </Link>
                                            )
                                          })}
                                        </div>
                                      ) : null}
                                    </div>
                                  )
                                }

                                if (!subItem.href) {
                                  return null
                                }

                                return (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className={cn(
                                      "block rounded-md px-3 py-2 text-sm font-medium text-gray-500" +
                                        " dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                                      {
                                        "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200": isActivePath(pathname, subItem.href),
                                      },
                                    )}
                                  >
                                    <span className="flex items-center gap-2">
                                      <span>{subItem.label}</span>
                                      {subItem.badge ? (
                                        <span className="inline-flex h-5 shrink-0 items-center rounded-full bg-primary-500/10 px-2 text-[10px] font-semibold leading-none text-primary-600 dark:text-primary-400">
                                          {subItem.badge}
                                        </span>
                                      ) : null}
                                    </span>
                                    {subItem.description ? (
                                      <span className="mt-1 block text-xs font-normal leading-5 text-gray-500 dark:text-gray-400">
                                        {subItem.description}
                                      </span>
                                    ) : null}
                                  </Link>
                                )
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
            })}
          </div>
        </div>

        <div className="flex flex-col pt-2 pb-3 space-y-3 px-8">
          <Link
            href="https://app.feedvector.com"
            className="flex items-center px-5 py-3 gradient-btn  justify-center text-sm text-white rounded-full button-bg h-11"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
