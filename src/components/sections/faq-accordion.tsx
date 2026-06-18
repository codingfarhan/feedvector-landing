"use client"

import { MinusIcon, PlusIcon } from "@/icons/icons"
import { useState } from "react"

// Define the FAQ item type
interface FAQItem {
  id: number
  question: string
  answer: string
}

export default function FaqAccordion() {
  const [activeItem, setActiveItem] = useState<number | null>(1)

  // FAQ data
  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How does the 7-day trial work?",
      answer: "You can try FeedVector for 7 days. After the trial ends, choose a paid plan to keep planning, creating, scheduling, and analyzing LinkedIn content.",
    },
    {
      id: 2,
      question: "Is it really just $29 to unlock ALL features?",
      answer: "Yes. After your 7-day trial, the $29 Pro plan unlocks every core LinkedIn feature, including scheduling, AI assistance, automations, and analytics.",
    },
    {
      id: 3,
      question: "Which social channels are supported?",
      answer:
        "FeedVector supports the major social networks and community channels including Facebook, Instagram, YouTube, LinkedIn, Medium, Dev.to and more.",
    },
    {
      id: 4,
      question: "Can I automate workflows with integrations?",
      answer: "Yes. You can connect via a public API and automation tools like n8n, Make, or Zapier to build custom workflows.",
    },
    {
      id: 5,
      question: "Does it include an AI content assistant?",
      answer: "Yes. The AI assistant helps you draft, refine, and repurpose LinkedIn content faster.",
    },
    {
      id: 6,
      question: "Can my team collaborate in one workspace?",
      answer: "Absolutely. Assign tasks, manage approvals, and collaborate on LinkedIn content with your team.",
    },
    {
      id: 7,
      question: "Do you provide analytics?",
      answer: "Yes. Track LinkedIn performance with analytics that help you improve future posts.",
    },
    {
      id: 8,
      question: "Does FeedVector help me grow through commenting?",
      answer:
        "Yes. FeedVector can surface fresh LinkedIn posts every day so you can join relevant conversations, leave thoughtful comments, and grow your audience.",
    },
    {
      id: 9,
      question: "Do you have viral post templates for LinkedIn?",
      answer: "Yes. Pick from hundreds of viral templates for LinkedIn, customize them to match your voice, then schedule and publish.",
    },
    {
      id: 10,
      question: "Is FeedVector the same as Feed Vector?",
      answer: "Yes. FeedVector is the product name, and some people search for it as Feed Vector.",
    },
  ]

  const toggleItem = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId)
  }

  return (
    <section id="faq" className="py-14 md:py-28 dark:bg-[#171f2e]">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">Frequently Asked Questions</h2>
          <p className="max-w-md mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Answered all frequently asked questions. Still confused? Email our team.
          </p>
        </div>
        <div className="max-w-[600px] mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <FAQItem key={item.id} item={item} isActive={activeItem === item.id} onToggle={() => toggleItem(item.id)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Item Component
function FAQItem({ item, isActive, onToggle }: { item: FAQItem; isActive: boolean; onToggle: () => void }) {
  return (
    <div className="pb-5 border-b border-gray-200 dark:border-gray-800">
      <button type="button" className="flex items-center justify-between w-full text-left" onClick={onToggle} aria-expanded={isActive}>
        <span className="text-lg font-medium text-gray-800 dark:text-white/90">{item.question}</span>
        <span className="flex-shrink-0 ml-6">{isActive ? <MinusIcon /> : <PlusIcon />}</span>
      </button>
      {isActive && (
        <div className="mt-5">
          <p className="text-base leading-7 text-gray-500 dark:text-gray-400">{item.answer}</p>
        </div>
      )}
    </div>
  )
}
