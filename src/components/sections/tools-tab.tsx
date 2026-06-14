"use client"

import type React from "react"
import { Fragment, useEffect, useState } from "react"

import { ChatGPTIcon, ClipboardIcon, LongArrowUpIcon, PencilIcon, SettingsIcon } from "@/icons/icons"
import Image from "next/image"
import { cn } from "@/lib/utils"

function DashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5.25 7.58c0-1.29 1.04-2.33 2.33-2.33h4.09c1.28 0 2.33 1.04 2.33 2.33v4.09c0 1.28-1.05 2.33-2.33 2.33H7.58a2.33 2.33 0 0 1-2.33-2.33V7.58Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M14 16.33c0-1.28 1.04-2.33 2.33-2.33h4.09c1.29 0 2.33 1.05 2.33 2.33v4.09c0 1.29-1.04 2.33-2.33 2.33h-4.09A2.33 2.33 0 0 1 14 20.42v-4.09Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M16.33 5.25h6.42M19.54 2.04v6.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5.25 19.54h6.42M8.46 16.33v6.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

// Define the tab type
interface Tab {
  id: string
  label: string
  icon: React.ReactNode
  lightImage: string
  darkImage: string
  imageFit?: "cover" | "contain"
  title: string
  description: string
}

// Tab data
const tabs: Tab[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon className="w-7 h-7" />,
    lightImage: "/images/tab-image/dashboard.png",
    darkImage: "/images/tab-image/dashboard-dark.png",
    title: "Your LinkedIn growth command center",
    description: "See weekly content, suggested posts, repurposing tools, and action items in one focused workspace.",
  },
  {
    id: "scheduling",
    label: "Scheduling",
    icon: <PencilIcon className="w-7 h-7" />,
    lightImage: "/images/tab-image/schedule.png",
    darkImage: "/images/tab-image/schedule-dark.png",
    title: "Seamless LinkedIn scheduling",
    description: "Plan your posts ahead of time and keep a consistent LinkedIn cadence.",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <LongArrowUpIcon className="w-7 h-7" />,
    lightImage: "/images/feature-showcase/analytics-opportunities.png",
    darkImage: "/images/feature-showcase/analytics-opportunities-dark.png",
    imageFit: "contain",
    title: "Comprehensive analytics",
    description: "Measure LinkedIn performance and improve every post with clear insights.",
  },
  {
    id: "assistant",
    label: "AI Assistant",
    icon: <ChatGPTIcon className="w-7 h-7" />,
    lightImage: "/images/tab-image/ai-assistant.png",
    darkImage: "/images/tab-image/ai-assistant-dark.png",
    title: "AI content assistant",
    description: "Generate ideas, polish copy, and turn rough thoughts into stronger LinkedIn posts.",
  },
  {
    id: "viral-templates",
    label: "Templates",
    icon: <ClipboardIcon className="w-7 h-7" />,
    lightImage: "/images/tab-image/viral-templates.png",
    darkImage: "/images/tab-image/viral-templates-dark.png",
    title: "Viral templates for LinkedIn",
    description: "Pick a proven format, customize it to your voice, then schedule and publish.",
  },
  // {
  //   id: "design",
  //   label: "AI Design",
  //   icon: <ImageGeneratorIcon className="w-7 h-7" />,
  //   lightImage: "/images/tab-image/ai-image.png",
  //   darkImage: "/images/tab-image/ai-image.png",
  //   title: "Create visuals with AI",
  //   description: "Use a built-in editor and AI image generation to ship great creative.",
  // },
  // {
  //   id: "collaboration",
  //   label: "Teamwork",
  //   icon: <UserIcon className="w-7 h-7" />,
  //   lightImage: "/images/tab-image/team.png",
  //   darkImage: "/images/tab-image/team-dark.png",
  //   title: "Teamwork organization",
  //   description: "Collaborate with your team, assign tasks, and keep approvals aligned.",
  // },
  {
    id: "automation",
    label: "Auto Actions",
    icon: <SettingsIcon className="w-7 h-7" />,
    lightImage: "/images/tab-image/plugs.png",
    darkImage: "/images/tab-image/plugs-dark.png",
    title: "Automation and auto actions",
    description: "Trigger workflows with API integrations and milestone-based actions.",
  },
]

export default function AIToolsTabs() {
  const [activeTab, setActiveTab] = useState("dashboard")

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTab((currentTabId) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === currentTabId)
        const nextIndex = (currentIndex + 1) % tabs.length

        return tabs[nextIndex].id
      })
    }, 2500)

    return () => window.clearInterval(interval)
  }, [])

  // Find the active tab
  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0]

  return (
    <section className="py-14 md:py-28 dark:bg-dark-primary">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 dark:text-white/90 text-3xl md:text-title-lg">
            Everything you need to grow on <span className="text-[#0A66C2]">LinkedIn</span>, in one place
          </h2>
          <p className="max-w-2xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Plan, write faster with viral templates, publish consistently, automate, and analyze LinkedIn content with AI assistance.
          </p>
        </div>

        <div className="max-w-[1008px] mx-auto">
          <div>
            {/* Tab Navigation */}
            <div className="mx-auto max-w-[1008px] relative">
              <div className="flex flex-wrap justify-center gap-2 rounded-3xl bg-gray-100 dark:bg-white/5 p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex flex-none items-center h-12 gap-2 px-3 sm:px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-full ${
                      activeTab === tab.id
                        ? "bg-white dark:text-white/90 dark:bg-white/10 text-gray-800"
                        : "text-gray-500 dark:text-gray-400 bg-transparent"
                    }`}
                  >
                    {tab.icon}
                    <span className="truncate">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}

            <div className="p-6 tab-img-bg overflow-hidden rounded-4xl mt-8">
              <div className="p-3 tab-img-overlay">
                <div className="relative aspect-[936/535] overflow-hidden rounded-2xl bg-white dark:bg-[#151515]">
                  {tabs.map((tab) => (
                    <Fragment key={tab.id}>
                      <Image
                        src={tab.lightImage || "/placeholder.svg"}
                        alt={tab.label}
                        fill
                        sizes="(min-width: 1024px) 936px, 100vw"
                        className={cn(
                          "block object-top dark:hidden",
                          tab.imageFit === "contain" ? "object-contain" : "object-cover",
                          currentTab.id !== tab.id && "hidden!"
                        )}
                        quality={90}
                        priority
                      />

                      <Image
                        src={tab.darkImage || "/placeholder.svg"}
                        alt={tab.label}
                        fill
                        sizes="(min-width: 1024px) 936px, 100vw"
                        className={cn(
                          "hidden object-top dark:block",
                          tab.imageFit === "contain" ? "object-contain" : "object-cover",
                          currentTab.id !== tab.id && "hidden!"
                        )}
                        quality={90}
                        priority
                      />
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
