"use client"

import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Ralph Edwards",
    company: "Brightline Media",
    image: "/images/users/user-1.png",
    testimonial: "Scheduling across Instagram and LinkedIn finally feels organized. The calendar and cross posting save us hours every week.",
  },
  {
    id: 2,
    name: "Albert Flores",
    company: "Northwind Studio",
    image: "/images/users/user-2.png",
    testimonial: "The AI assistant turns rough notes into polished posts fast. It keeps our tone consistent without slowing the team down.",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    company: "Acme Co.",
    image: "/images/users/user-3.png",
    testimonial: "Built in design tools plus AI images mean we can ship campaigns without bouncing between apps.",
  },
  {
    id: 4,
    name: "Esther Howard",
    company: "Barone LLC.",
    image: "/images/users/user-4.png",
    testimonial: "Approvals are smooth now. Drafts, comments, and handoffs all live in one place for the whole team.",
  },
  {
    id: 5,
    name: "Tyron David",
    company: "Abstergo Ltd.",
    image: "/images/users/user-5.png",
    testimonial: "Auto actions handle the repetitive steps for every launch. We set the rules once and everything just runs.",
  },
  {
    id: 6,
    name: "M. Lane",
    company: "Binford Ltd.",
    image: "/images/users/user-6.png",
    testimonial: "The analytics are clean and easy to read. We finally know which posts drive real engagement.",
  },
]

export default function TestimonialsSection() {
  const visibleTestimonials = testimonials.slice(0, 6)

  return (
    <section className="md:py-28 py-14 relative">
      <div className="wrapper">
        <div>
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">What our users say</h2>
            <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
              Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and
              Intelligence.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-[72rem] mx-auto">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Show More Button */}
          {/*\n          <div className=\"mt-8 text-center relative z-10\">\n            <button\n              onClick={() => setShowAll(!showAll)}\n              className=\"inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 px-6 py-3.5 text-sm font-medium text-gray-800 bg-white border border-gray-200 dark:hover:bg-gray-900 rounded-full shadow-theme-xs hover:bg-gray-50 focus:outline-none\"\n            >\n              <span>{showAll ? \"Show less...\" : \"Show more...\"}</span>\n            </button>\n          </div>\n          */}
        </div>
      </div>

      {/* Gradient overlay when collapsed */}
      {/* <div className="white-gradient h-[264px] w-full absolute bottom-0"></div> */}
    </section>
  )
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <div className="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
      <div className="flex items-center p-3 mb-3 bg-white/90 dark:bg-white/[0.03] rounded-2xl">
        <div>
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            width={52}
            height={52}
            className="size-13 object-cover ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
          />
        </div>
        <div>
          <h3 className="text-gray-800 font-base dark:text-white/90">{testimonial.name}</h3>
        </div>
      </div>
      <div className="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
        <p className="text-base leading-6 text-gray-700 dark:text-gray-400">{testimonial.testimonial}</p>
      </div>
    </div>
  )
}
