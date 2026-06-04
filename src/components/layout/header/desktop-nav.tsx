import { ChevronDown2Icon } from '@/icons/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from './nav-items';
import { useEffect, useState } from 'react';
import type { NavSection, NavSubItem } from './nav-items';

function getDropdownSections(item: Extract<(typeof navItems)[number], { type: 'dropdown' }>): NavSection[] {
  return item.sections ?? [{ items: item.items ?? [] }];
}

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function flattenSubItems(items: NavSubItem[]): NavSubItem[] {
  return items.flatMap((item) => [item, ...(item.items ? flattenSubItems(item.items) : [])]);
}

export default function DesktopNav() {
  const pathname = usePathname();
  const [activeDropdownKey, setActiveDropdownKey] = useState('');
  const [activeSubmenuKey, setActiveSubmenuKey] = useState('');

  useEffect(() => {
    // Hide dropdown on pathname changes
    setActiveDropdownKey('');
    setActiveSubmenuKey('');
  }, [pathname]);

  return (
    <nav className="hidden lg:flex lg:items-center bg-[#F9FAFB] dark:bg-white/3 rounded-full p-1 max-h-fit">
      {navItems.map((item) => {
        if (item.type === 'link') {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-gray-500 dark:text-gray-400 text-sm px-4 py-1.5 rounded-full hover:text-primary-500 font-medium inline-flex items-center gap-2 whitespace-nowrap',
                {
                  'bg-white dark:bg-white/5 font-medium text-gray-800 dark:text-white/90 shadow-xs':
                    pathname === item.href,
                }
              )}
            >
              <span>{item.label}</span>
              {item.badge ? (
                <span className="inline-flex items-center h-5 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 px-2 text-[10px] font-semibold leading-none shrink-0">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          );
        }

        if (item.type === 'dropdown') {
          const isDropdownActive = activeDropdownKey === item.label;
          const sections = getDropdownSections(item);
          const dropdownItems = sections.flatMap((section) => flattenSubItems(section.items));

          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdownKey(item.label)}
              onMouseLeave={() => {
                setActiveDropdownKey('');
                setActiveSubmenuKey('');
              }}
            >
              <button
                type="button"
                onClick={() => setActiveDropdownKey(isDropdownActive ? '' : item.label)}
                onKeyDown={(e) => {
                  if (isDropdownActive && e.key === 'Escape') {
                    setActiveDropdownKey('');
                  }
                }}
                className={cn(
                  'text-gray-500 dark:text-gray-400 hover:text-primary-500 group text-sm inline-flex gap-1 items-center px-4 py-1.5 font-medium rounded-full',
                  {
                    'bg-white dark:bg-white/5 font-medium text-gray-800 dark:text-white/90 shadow-xs':
                      dropdownItems.some(({ href }) => href && isActivePath(pathname, href)),
                  }
                )}
                aria-expanded={isDropdownActive}
              >
                <span>{item.label}</span>
                <ChevronDown2Icon
                  className={cn('size-4 transition-transform duration-200', {
                    'rotate-180': isDropdownActive,
                  })}
                />
              </button>

              {isDropdownActive && (
                <div
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') {
                      setActiveDropdownKey('');
                      setActiveSubmenuKey('');
                    }
                  }}
                  className="absolute left-0 top-full w-[240px] bg-white dark:bg-dark-secondary dark:border-gray-800 rounded-2xl shadow-theme-lg border border-gray-100 p-2 z-50"
                >
                  {sections.map((section, sectionIndex) => (
                    <div key={section.title ?? `${item.label}-${sectionIndex}`} className={cn(sectionIndex > 0 && 'mt-2 border-t border-gray-100 pt-2 dark:border-gray-800')}>
                      {section.title ? (
                        <p className="px-3 pb-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-gray-400 dark:text-gray-500">
                          {section.title}
                        </p>
                      ) : null}
                      <div className="space-y-1">
                        {section.items.map((subItem) => {
                          const hasChildren = Boolean(subItem.items?.length);
                          const subItems = subItem.items ?? [];
                          const isSubmenuActive = activeSubmenuKey === subItem.label;
                          const isSubItemActive = subItem.href ? isActivePath(pathname, subItem.href) : subItems.some(({ href }) => href && isActivePath(pathname, href));

                          if (hasChildren) {
                            return (
                              <div
                                key={subItem.label}
                                className="relative"
                                onMouseEnter={() => setActiveSubmenuKey(subItem.label)}
                                onFocus={() => setActiveSubmenuKey(subItem.label)}
                              >
                                <button
                                  type="button"
                                  className={cn(
                                    "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/5",
                                    isSubItemActive && "bg-gray-100 text-gray-800 dark:bg-white/5 dark:text-white",
                                  )}
                                  onClick={() => setActiveSubmenuKey(isSubmenuActive ? "" : subItem.label)}
                                  aria-expanded={isSubmenuActive}
                                >
                                  <span>{subItem.label}</span>
                                  <ChevronDown2Icon className={cn("size-4 -rotate-90 transition-transform duration-200", isSubmenuActive && "-translate-x-0.5")} />
                                </button>

                                {isSubmenuActive ? (
                                  <div className="absolute left-full top-0 ml-2 w-[360px] rounded-2xl border border-gray-100 bg-white p-2 shadow-theme-lg dark:border-gray-800 dark:bg-dark-secondary">
                                    {subItems.map((nestedItem) => {
                                      if (!nestedItem.href) {
                                        return null;
                                      }

                                      return (
                                        <Link
                                          key={nestedItem.href}
                                          href={nestedItem.href}
                                          className="block rounded-lg px-4 py-3 hover:bg-gray-100 dark:hover:bg-white/5"
                                        >
                                          <span className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                                            <span>{nestedItem.label}</span>
                                            {nestedItem.badge ? (
                                              <span className="inline-flex h-5 shrink-0 items-center rounded-full bg-primary-500/10 px-2 text-[10px] font-semibold leading-none text-primary-600 dark:text-primary-400">
                                                {nestedItem.badge}
                                              </span>
                                            ) : null}
                                          </span>
                                          {nestedItem.description ? (
                                            <span className="mt-1 block text-xs leading-5 text-gray-500 dark:text-gray-400">{nestedItem.description}</span>
                                          ) : null}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                ) : null}
                              </div>
                            );
                          }

                          if (!subItem.href) {
                            return null;
                          }

                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block rounded-lg px-3 py-2.5 hover:bg-gray-100 dark:hover:bg-white/5"
                            >
                              <span className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                                <span>{subItem.label}</span>
                                {subItem.badge ? (
                                  <span className="inline-flex h-5 shrink-0 items-center rounded-full bg-primary-500/10 px-2 text-[10px] font-semibold leading-none text-primary-600 dark:text-primary-400">
                                    {subItem.badge}
                                  </span>
                                ) : null}
                              </span>
                              {subItem.description ? (
                                <span className="mt-1 block text-xs leading-5 text-gray-500 dark:text-gray-400">{subItem.description}</span>
                              ) : null}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        }
      })}
    </nav>
  );
}
