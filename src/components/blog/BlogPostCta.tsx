import { ConversionCtaGroup } from "@/components/ui/ConversionCtaGroup";
import { BLOG_POST_CTA } from "@/lib/blog-page";

export function BlogPostCta() {
  return (
    <aside className="my-12 overflow-hidden rounded-2xl border border-brand-red/40 bg-gradient-to-br from-brand-red/20 via-brand-surface to-brand-black p-6 shadow-[0_0_48px_-18px_rgba(220,38,38,0.45)] sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
        {BLOG_POST_CTA.eyebrow}
      </p>
      <h2 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">
        {BLOG_POST_CTA.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
        {BLOG_POST_CTA.description}
      </p>
      <ConversionCtaGroup
        className="mt-6"
        primaryLabel="Begin Claim Intake"
        secondaryLabel="Schedule Strategy Call"
        size="md"
      />
    </aside>
  );
}
