import Image from "next/image"

const AUDIENCES = [
  {
    title: "Creators",
    description: "Plan content weeks ahead, repurpose ideas, and stay consistent across every channel.",
    image: "/images/audience/creators.svg",
  },
  {
    title: "Businesses",
    description: "Keep teams aligned with approvals, shared calendars, and reliable publishing workflows.",
    image: "/images/audience/businesses.svg",
  },
  {
    title: "Agencies",
    description: "Manage multiple brands, automate repeat tasks, and report results with clear analytics.",
    image: "/images/audience/agencies.svg",
  },
]

export default function AudienceSection() {
  return (
    <section className="py-14 md:py-28 bg-white dark:bg-dark-primary">
      <div className="wrapper">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h2 className="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">Who is FeedVector for?</h2>
          <p className="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
            Whether you are a solo creator or a growing team, FeedVector keeps your publishing system clear and fast.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {AUDIENCES.map((audience) => (
            <div key={audience.title} className="rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 p-8">
              <div className="mb-6 flex items-center justify-center">
                <Image src={audience.image} alt={audience.title} width={88} height={88} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-3 text-center">{audience.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-center">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
