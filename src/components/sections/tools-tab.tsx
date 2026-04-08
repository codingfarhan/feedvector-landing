"use client"

import type React from "react"
import { Fragment, useState } from "react"

import { ChatGPTIcon, ImageGeneratorIcon, LongArrowUpIcon, PencilIcon, SettingsIcon, UserIcon } from "@/icons/icons"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Define the tab type
interface Tab {
  id: string
  label: string
  icon: React.ReactNode
  lightImage: string
  darkImage: string
  title: string
  description: string
}

export default function AIToolsTabs() {
  const [activeTab, setActiveTab] = useState("scheduling")

  // Tab data
  const tabs: Tab[] = [
    {
      id: "scheduling",
      label: "Scheduling",
      icon: <PencilIcon className="w-7 h-7" />,
      lightImage: "/images/tab-image/schedule.png",
      darkImage: "/images/tab-image/schedule-dark.png",
      title: "Seamless scheduling and cross-posting",
      description: "Plan once, publish everywhere, and keep a consistent posting cadence.",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: <LongArrowUpIcon className="w-7 h-7" />,
      lightImage: "/images/tab-image/analytics.png",
      darkImage: "/images/tab-image/analytics-dark.png",
      title: "Comprehensive analytics",
      description: "Measure performance across channels and improve every campaign.",
    },
    {
      id: "assistant",
      label: "AI Assistant",
      icon: <ChatGPTIcon className="w-7 h-7" />,
      lightImage: "/images/tab-image/ai-assistant.png",
      darkImage: "/images/tab-image/ai-assistant-dark.png",
      title: "AI content assistant",
      description: "Generate ideas, polish copy, and adapt posts for every channel.",
    },
    {
      id: "design",
      label: "AI Design",
      icon: <ImageGeneratorIcon className="w-7 h-7" />,
      lightImage: "/images/tab-image/ai-image.png",
      darkImage: "/images/tab-image/ai-image.png",
      title: "Create visuals with AI",
      description: "Use a built-in editor and AI image generation to ship great creative.",
    },
    {
      id: "collaboration",
      label: "Teamwork",
      icon: <UserIcon className="w-7 h-7" />,
      lightImage: "/images/tab-image/team.png",
      darkImage: "/images/tab-image/team-dark.png",
      title: "Teamwork organization",
      description: "Collaborate with your team, assign tasks, and keep approvals aligned.",
    },
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

  // Find the active tab
  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0]

  return (
    <section className="py-14 md:py-28 dark:bg-dark-primary">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 dark:text-white/90 text-3xl md:text-title-lg">
            Everything you need to grow on social, in one place.
          </h2>
          <p className="max-w-2xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Plan, publish, automate, and analyze with AI assistance and built-in creative tools.
          </p>
        </div>

        <div className="max-w-[1008px] mx-auto">
          <div>
            {/* Tab Navigation */}
            <div className="overflow-x-auto custom-scrollbar mx-auto max-w-fit relative">
              <div className="flex gap-2 min-w-max rounded-full bg-gray-100 dark:bg-white/5 p-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center h-12 gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-full ${
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
                {tabs.map((tab) => (
                  <Fragment key={tab.id}>
                    <Image
                      src={tab.lightImage || "/placeholder.svg"}
                      alt={tab.label}
                      width={936}
                      height={535}
                      className={cn("w-full rounded-2xl block dark:hidden", currentTab.id !== tab.id && "hidden!")}
                      quality={90}
                      priority
                    />

                    <Image
                      src={tab.darkImage || "/placeholder.svg"}
                      alt={tab.label}
                      width={936}
                      height={535}
                      className={cn("w-full rounded-2xl hidden dark:block", currentTab.id !== tab.id && "hidden!")}
                      quality={90}
                      priority
                    />
                  </Fragment>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-6 text-center">
              <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white/90">{currentTab.title}</h2>
              <p className="max-w-xl mx-auto mb-6 text-sm text-gray-500 dark:text-gray-400">{currentTab.description}</p>
              <a
                href="https://app.feedvector.com"
                className="px-6 py-3 text-sm font-medium text-white transition-colors rounded-full bg-primary-500 hover:bg-primary-600 inline-flex items-center justify-center"
              >
                Start scheduling
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
