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
      strokeWidth="1.55"
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

function DatabaseBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className}>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <path d="M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
      <path d="M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
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

/** Shared primary icon frame — identical geometry on all four stages. */
function PrimaryIconFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-process-icon-frame
      className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-[#141414] text-brand-red shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:h-[5.5rem] sm:w-[5.5rem]"
    >
      {children}
    </div>
  );
}

function AbstractPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-0 h-[5.25rem] w-[6.75rem] overflow-hidden rounded-xl border border-white/10 bg-[#101010] shadow-inner shadow-black/50 sm:h-[5.75rem] sm:w-[7.25rem]">
      {children}
    </div>
  );
}

function UploadDocVisual() {
  return (
    <div
      aria-hidden
      className="flex h-full w-full items-center justify-center"
    >
      <PrimaryIconFrame>
        <StrokeIcon className="h-10 w-10 sm:h-11 sm:w-11">
          <path d="M14 2.75H8.25A2.25 2.25 0 0 0 6 5v14a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 19V7.25L14 2.75Z" />
          <path d="M14 2.75V7.5h3.75" />
          <path d="M12 11.25v6" />
          <path d="m9.5 13.75 2.5-2.5 2.5 2.5" />
        </StrokeIcon>
      </PrimaryIconFrame>
    </div>
  );
}

function WorkspaceVisual() {
  return (
    <div
      aria-hidden
      className="relative flex h-full w-full items-center justify-center"
    >
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 sm:right-[6%]">
        <AbstractPanel>
          <div className="flex h-full">
            <div className="relative w-4 shrink-0 border-r border-white/10 bg-black/45">
              <span className="absolute left-1/2 top-2.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-red" />
              <span className="absolute left-1/2 top-6 h-1 w-1 -translate-x-1/2 rounded-full bg-white/25" />
              <span className="absolute left-1/2 top-9 h-1 w-1 -translate-x-1/2 rounded-full bg-white/20" />
              <span className="absolute left-1/2 top-12 h-1 w-1 -translate-x-1/2 rounded-full bg-white/15" />
            </div>
            <div className="flex flex-1 flex-col gap-1.5 p-2">
              <span className="h-1.5 w-full rounded-sm bg-white/12" />
              <span className="h-6 w-full rounded-sm bg-white/[0.06]" />
              <div className="mt-auto flex gap-1">
                <span className="h-2.5 flex-1 rounded-sm bg-white/10" />
                <span className="h-2.5 w-5 rounded-sm bg-white/[0.07]" />
              </div>
            </div>
          </div>
        </AbstractPanel>
      </div>
      <div className="relative -translate-x-5 sm:-translate-x-6">
        <PrimaryIconFrame>
          <StrokeIcon className="h-10 w-10 sm:h-11 sm:w-11">
            <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
            <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
            <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
            <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}

function ManageVisual() {
  return (
    <div
      aria-hidden
      className="relative flex h-full w-full items-center justify-center"
    >
      <div className="absolute right-[6%] top-1/2 -translate-y-1/2 sm:right-[4%]">
        <AbstractPanel>
          <div className="flex h-full flex-col justify-center gap-2 px-2.5 py-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-brand-red/75 text-brand-red">
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
        </AbstractPanel>
      </div>
      <div className="relative -translate-x-5 sm:-translate-x-6">
        <PrimaryIconFrame>
          <StrokeIcon className="h-10 w-10 sm:h-11 sm:w-11">
            <circle cx="9" cy="8.25" r="2.6" />
            <circle cx="16" cy="9" r="2.1" />
            <path d="M4.25 18.25c.65-2.55 2.55-4 4.75-4s4.1 1.45 4.75 4" />
            <path d="M14.25 14.75c1.55-.45 3 .15 3.85 1.55" />
            <path d="M16.5 4.75h3.75v2.4" />
            <path d="M20.25 4.75 17.5 7.25" />
          </StrokeIcon>
        </PrimaryIconFrame>
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
      <PrimaryIconFrame>
        <StrokeIcon className="h-10 w-10 sm:h-11 sm:w-11">
          <circle cx="12" cy="12" r="8.25" />
          <path d="m7.75 14.25 2.75-3.25 2.15 2.15L16.5 8.75" />
          <path d="M14.25 8.75h2.25v2.25" />
        </StrokeIcon>
      </PrimaryIconFrame>
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
  const className = "h-3.5 w-3.5 shrink-0 text-brand-red";
  if (visual === "intake") return <LockBadgeIcon className={className} />;
  if (visual === "workspace") return <DatabaseBadgeIcon className={className} />;
  if (visual === "manage") return <PulseBadgeIcon className={className} />;
  return <EyeBadgeIcon className={className} />;
}

function ProcessStageCard({ item }: { item: HomeProcessStep }) {
  return (
    <div
      data-process-card
      className="group relative flex h-full min-h-[26rem] flex-col rounded-[1.25rem] border border-white/12 bg-[#161616] p-6 shadow-[0_18px_48px_-28px_rgba(0,0,0,0.85),0_0_40px_-28px_rgba(220,38,38,0.22)] transition-colors hover:border-brand-red/40 motion-reduce:transition-none sm:min-h-[28rem] sm:p-7"
    >
      <span
        data-process-step
        className="font-display text-[2.5rem] font-semibold leading-none tracking-tight text-brand-red transition-colors group-hover:text-brand-red-light motion-reduce:transition-none sm:text-5xl"
      >
        {item.step}
      </span>

      <div
        data-process-visual
        className="mt-5 h-36 shrink-0 sm:mt-6 sm:h-40"
      >
        <StageVisual visual={item.visual} />
      </div>

      <h3
        data-process-title
        className="mt-6 min-h-[3.75rem] font-display text-xl font-semibold leading-snug text-white sm:min-h-[4rem] sm:text-[1.35rem]"
      >
        {item.title}
      </h3>

      <p
        data-process-description
        className="mt-2 min-h-[4.5rem] flex-1 text-[0.9375rem] leading-relaxed text-zinc-400"
      >
        {item.description}
      </p>

      <div
        data-process-pill
        className="mt-6 inline-flex h-8 w-fit max-w-full items-center gap-2 rounded-lg border border-white/12 bg-black/35 px-3"
      >
        <SupportBadgeIcon visual={item.visual} />
        <span className="truncate text-[12px] font-medium leading-none text-brand-red-light">
          {item.supportLabel}
        </span>
      </div>
    </div>
  );
}

function DesktopProcessRail({ count }: { count: number }) {
  const gapSlots = Math.max(count - 1, 0);

  return (
    <div
      aria-hidden
      data-process-rail
      className="pointer-events-none absolute inset-x-0 top-[9.75rem] z-[1] sm:top-[11.25rem]"
    >
      {/* Continuous rail through card centers; solid cards mask the mid-span. */}
      <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px -translate-y-1/2 bg-brand-red/60" />

      {/* Nodes centered in the three equal gaps between four columns. */}
      <div className="absolute inset-x-0 top-1/2 grid -translate-y-1/2 grid-cols-4 gap-6 xl:gap-8">
        {Array.from({ length: gapSlots }).map((_, index) => (
          <div key={index} className="relative">
            <span
              data-process-node
              className="absolute left-[calc(100%+0.75rem)] top-1/2 flex h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-brand-red bg-brand-elevated shadow-[0_0_14px_rgba(220,38,38,0.4)] xl:left-[calc(100%+1rem)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            </span>
          </div>
        ))}
        <div />
      </div>
    </div>
  );
}

export function ProcessSection({ locale = "en" }: { locale?: Locale }) {
  const content = getHomeContent(locale).process;

  return (
    <Section id="process" bordered className="bg-brand-elevated">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[42%] z-0 mx-auto h-[28rem] w-[70%] max-w-5xl bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.14),transparent_68%)]"
      />

      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      {/* Mobile: vertical timeline */}
      <div className="relative mt-10 sm:hidden">
        <div
          aria-hidden
          className="absolute bottom-6 left-[1.15rem] top-6 w-px bg-gradient-to-b from-brand-red/70 via-brand-red/40 to-brand-red/20"
        />
        <ol className="space-y-5">
          {content.steps.map((item) => (
            <li key={item.step} className="relative pl-10">
              <span
                aria-hidden
                className="absolute left-2.5 top-8 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-brand-red bg-brand-elevated"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              </span>
              <ProcessStageCard item={item} />
            </li>
          ))}
        </ol>
      </div>

      {/* Tablet: 2×2 — no misleading horizontal rail */}
      <ol className="mt-12 hidden grid-cols-2 gap-6 sm:grid xl:hidden">
        {content.steps.map((item) => (
          <li key={item.step} className="h-full min-h-0">
            <ProcessStageCard item={item} />
          </li>
        ))}
      </ol>

      {/* Desktop: four tall stages + rail with nodes in gaps */}
      <div className="relative mt-12 hidden xl:block">
        <DesktopProcessRail count={content.steps.length} />
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
