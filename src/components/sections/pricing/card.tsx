import { CheckIcon } from "@/icons/icons";
import GlowGradient from "@/assets/pricing/glow";
import type { TBILLING_PLAN } from "@/components/sections/pricing/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  plan: TBILLING_PLAN;
  billingPeriod: keyof TBILLING_PLAN["pricing"];
};

export function PricingCard({ plan, billingPeriod }: Props) {
  const isTrialPlan = plan.pricing[billingPeriod].amount === 0;
  const price = plan.pricing[billingPeriod];

  return (
    <div className="relative">
      <div
        className={`bg-white dark:bg-dark-primary rounded-[20px] shadow-one relative z-10 h-full ${
          plan.popular ? "relative border-2 border-primary-500" : ""
        }`}
      >
        <div className="p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
              {plan.name}
            </h2>
            {plan.popular && (
              <span className="px-2 py-1 text-xs font-medium dark:text-pir rounded-full dark:bg-primary-500/15 bg-primary-50 text-primary-500">
                Popular
              </span>
            )}
          </div>
          <p className="flex items-baseline mt-4">
            {"pricePrefix" in price && price.pricePrefix ? (
              <span className="mr-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {price.pricePrefix}
              </span>
            ) : null}
            <span className="text-4xl font-semibold text-gray-800 dark:text-white/90">
              {price.formattedPrice}
            </span>

            {!!price.amount && (
              <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                {billingPeriod === "yearly" ? "Per year" : "Per month"}
              </span>
            )}
          </p>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            {plan.description}
          </p>

          {"ctaHref" in plan && plan.ctaHref ? (
            <Link
              href={plan.ctaHref}
              target={plan.ctaHref.startsWith("http") ? "_blank" : undefined}
              rel={
                plan.ctaHref.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={cn(
                "block w-full px-8 py-3.5 mt-7 text-sm font-medium text-center rounded-full transition",
                {
                  "dark:bg-dark-primary dark:text-white/90 dark:hover:bg-gray-800 dark:border-gray-800 text-gray-800 bg-white border border-gray-200 hover:bg-gray-50":
                    isTrialPlan,
                  "gradient-btn text-white": plan.popular,
                  "dark:hover:bg-primary-500 dark:bg-white/[0.03] hover:bg-gray-900 text-white bg-gray-700":
                    !plan.popular && !isTrialPlan,
                },
              )}
            >
              {plan.cta}
            </Link>
          ) : null}
          {"ctaNote" in plan && plan.ctaNote ? (
            <p className="mt-3 text-xs leading-5 text-gray-500 dark:text-gray-400">
              {plan.ctaNote}
            </p>
          ) : null}
        </div>
        <div className="px-8 pb-7">
          <ul className="space-y-3">
            {plan.features.map((feature) => {
              const isIncludedPlanFeature =
                feature.startsWith("Everything in ");

              return (
                <li
                  key={feature}
                  className={cn("flex items-start", {
                    "rounded-xl border border-primary-500/20 bg-primary-50 px-3 py-2 dark:border-primary-500/30 dark:bg-primary-500/10":
                      isIncludedPlanFeature,
                  })}
                >
                  <div
                    className={cn(
                      "flex-shrink-0 text-gray-500 dark:text-gray-400",
                      {
                        "text-primary-500 dark:text-primary-300":
                          isIncludedPlanFeature,
                      },
                    )}
                  >
                    <CheckIcon />
                  </div>

                  <p
                    className={cn(
                      "ml-2 text-sm text-gray-800 dark:text-white/90",
                      {
                        "font-semibold text-primary-700 dark:text-primary-200":
                          isIncludedPlanFeature,
                      },
                    )}
                  >
                    {feature}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {plan.popular && (
        <GlowGradient className="absolute -left-full -translate-x-20 top-0 max-lg:hidden" />
      )}
    </div>
  );
}
