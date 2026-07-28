import type { Locale } from "@/lib/i18n/config";
import {
  getHomeContent,
  type HomeProcessStep,
  type HomeProcessVisual,
} from "@/lib/i18n/content/home";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

function StrokeIcon({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function LockBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </StrokeIcon>
  );
}

function LayersBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className}>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </StrokeIcon>
  );
}

function PulseBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className}>
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </StrokeIcon>
  );
}

function EyeBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className}>
      <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </StrokeIcon>
  );
}

function UploadDocVisual() {
  return (
    <div
      aria-hidden
      className="flex h-full w-full items-center justify-center"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-brand-elevated text-brand-red">
        <StrokeIcon className="h-7 w-7">
          <path d="M14 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9l-4-6Z" />
          <path d="M14 3v6h4" />
          <path d="M12 12v6" />
          <path d="m9.5 14.5 2.5-2.5 2.5 2.5" />
        </StrokeIcon>
      </div>
    </div>
  );
}

function WorkspaceVisual() {
  return (
    <div
      aria-hidden
      className="flex h-full w-full items-center justify-center gap-2.5"
    >
      <StrokeIcon className="h-7 w-7 shrink-0 text-brand-red">
        <rect x="4" y="4" width="7" height="7" rx="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" />
      </StrokeIcon>
      <div className="flex h-14 w-[4.75rem] overflow-hidden rounded-lg border border-white/12 bg-brand-elevated shadow-inner shadow-black/40">
        <div className="relative w-4 shrink-0 border-r border-white/10 bg-black/40">
          <span className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-red" />
          <span className="absolute left-1/2 top-5 h-1 w-1 -translate-x-1/2 rounded-full bg-white/25" />
          <span className="absolute left-1/2 top-8 h-1 w-1 -translate-x-1/2 rounded-full bg-white/25" />
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-1.5">
          <span className="h-2 w-full rounded-sm bg-white/10" />
          <span className="h-5 w-full rounded-sm bg-white/[0.06]" />
          <span className="h-2 w-3/4 rounded-sm bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function ManageVisual() {
  return (
    <div
      aria-hidden
      className="flex h-full w-full items-center justify-center gap-2.5"
    >
      <StrokeIcon className="h-7 w-7 shrink-0 text-brand-red">
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="16" cy="9" r="2" />
        <path d="M4.5 18c.6-2.4 2.4-3.8 4.5-3.8s3.9 1.4 4.5 3.8" />
        <path d="M14 14.5c1.5-.4 2.9.2 3.7 1.5" />
        <path d="M17 5.5h3.5v2.2" />
      </StrokeIcon>
      <div className="flex h-14 w-[4.75rem] flex-col justify-center gap-1.5 rounded-lg border border-white/12 bg-brand-elevated px-2 py-1.5 shadow-inner shadow-black/40">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-brand-red/70 text-brand-red">
              <svg
                aria-hidden
                viewBox="0 0 12 12"
                className="h-2 w-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m2.5 6.2 2.2 2.2L9.5 3.8" />
              </svg>
            </span>
            <span className="h-1.5 flex-1 rounded-sm bg-white/12" />
          </div>
        ))}
      </div>
    </div>
  );
}

function RecoverVisual() {
  return (
    <div
      aria-hidden
      className="flex h-full w-full items-center justify-center"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-brand-elevated text-brand-red">
        <StrokeIcon className="h-7 w-7">
          <circle cx="12" cy="12" r="8" />
          <path d="m8 14 2.5-3 2 2L16 9" />
        </StrokeIcon>
      </div>
    </div>
  );
}

function StageVisual({ visual }: { visual: HomeProcessVisual }) {
  if (visual === "intake") return <UploadDocVisual />;
  if (visual === "workspace") return <WorkspaceVisual />;
  if (visual === "manage") return <ManageVisual />;
  return <RecoverVisual />;
}

function SupportBadgeIcon({ visual }: { visual: HomeProcessVisual }) {
  const className = "h-3 w-3 shrink-0 text-brand-red";
  if (visual === "intake") return <LockBadgeIcon className={className} />;
  if (visual === "workspace") return <LayersBadgeIcon className={className} />;
  if (visual === "manage") return <PulseBadgeIcon className={className} />;
  return <EyeBadgeIcon className={className} />;
}

function ProcessStageCard({ item }: { item: HomeProcessStep }) {
  return (
    <div
      data-process-card
      className="group relative flex h-full min-h-0 flex-col rounded-2xl border border-white/15 bg-brand-surface p-5 shadow-[0_0_48px_-28px_rgba(220,38,38,0.2)] shadow-lg shadow-black/25 transition-colors hover:border-brand-red/45 motion-reduce:transition-none sm:p-6"
    >
      <span className="font-display text-3xl font-semibold leading-none text-brand-red/80 transition-colors group-hover:text-brand-red-light motion-reduce:transition-none sm:text-4xl">
        {item.step}
      </span>

      <div className="mt-4 h-[4.5rem] shrink-0">
        <StageVisual visual={item.visual} />
      </div>

      <h3 className="mt-4 min-h-[3.5rem] font-display text-lg font-semibold leading-snug text-white sm:min-h-[3.75rem] sm:text-xl">
        {item.title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-300">
        {item.description}
      </p>

      <div className="mt-5 inline-flex w-fit max-w-full items-center gap-1.5 rounded-full border border-white/12 bg-black/25 px-2.5 py-1">
        <SupportBadgeIcon visual={item.visual} />
        <span className="truncate text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-red-light">
          {item.supportLabel}
        </span>
      </div>
    </div>
  );
}

export function ProcessSection({ locale = "en" }: { locale?: Locale }) {
  const content = getHomeContent(locale).process;

  return (
    <Section id="process" bordered className="bg-brand-elevated">
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      {/* Mobile: vertical timeline */}
      <div className="relative mt-12 sm:hidden">
        <div
          aria-hidden
          className="absolute bottom-4 left-[1.15rem] top-4 w-px bg-gradient-to-b from-brand-red/70 via-brand-red/40 to-brand-red/20"
        />
        <ol className="space-y-4">
          {content.steps.map((item) => (
            <li key={item.step} className="relative pl-10">
              <span
                aria-hidden
                className="absolute left-2.5 top-6 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-brand-red bg-brand-elevated"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              </span>
              <ProcessStageCard item={item} />
            </li>
          ))}
        </ol>
      </div>

      {/* Tablet: 2×2 */}
      <ol className="mt-14 hidden grid-cols-2 gap-6 sm:grid xl:hidden">
        {content.steps.map((item) => (
          <li key={item.step} className="h-full min-h-0">
            <ProcessStageCard item={item} />
          </li>
        ))}
      </ol>

      {/* Desktop: four equal stages + process rail through visual midlines */}
      <div className="relative mt-16 hidden xl:block">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[7rem] z-0"
        >
          <div className="mx-[12.5%] h-px bg-brand-red/55" />
          <div className="absolute inset-x-0 top-1/2 grid -translate-y-1/2 grid-cols-4 gap-6 xl:gap-8">
            {content.steps.map((item) => (
              <div key={item.step} className="flex justify-center">
                <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-brand-red bg-brand-elevated shadow-[0_0_12px_rgba(220,38,38,0.35)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                </span>
              </div>
            ))}
          </div>
        </div>

        <ol className="relative z-10 grid grid-cols-4 items-stretch gap-6 xl:gap-8">
          {content.steps.map((item) => (
            <li key={item.step} className="h-full min-h-0">
              <ProcessStageCard item={item} />
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
