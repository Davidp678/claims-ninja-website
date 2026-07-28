import type { Locale } from "@/lib/i18n/config";
import {
  getHomeContent,
  type HomeProcessStep,
  type HomeProcessVisual,
} from "@/lib/i18n/content/home";

/**
 * Reference canvas: 1024×467 (native mock).
 * Card row: left 85 → right 921, top 170, height 229, gap 24,
 * widths 174 / 229 / 217 / 145, connector Y ≈ 240.
 */
const REF = {
  width: 1024,
  height: 467,
  padX: 85,
  cardTop: 170,
  cardHeight: 229,
  gap: 24,
  widths: [174, 229, 217, 145] as const,
  connectorY: 240,
  numberTop: 18,
  numberLeft: 16,
  visualTop: 48,
  visualHeight: 72,
  titleTop: 128,
  descTop: 154,
  pillBottom: 16,
};

function StrokeIcon({
  className,
  children,
  strokeWidth = 1.5,
}: {
  className?: string;
  children: React.ReactNode;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function LockBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className} strokeWidth={1.7}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </StrokeIcon>
  );
}

function DatabaseBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className} strokeWidth={1.7}>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <path d="M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
      <path d="M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
    </StrokeIcon>
  );
}

function PulseBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className} strokeWidth={1.7}>
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </StrokeIcon>
  );
}

function EyeBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className} strokeWidth={1.7}>
      <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </StrokeIcon>
  );
}

function PrimaryIconFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-process-icon-frame
      className={`relative z-10 flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[9px] border border-white/16 bg-[#141414] text-brand-red ${className}`}
    >
      {children}
    </div>
  );
}

function UploadDocVisual() {
  return (
    <div aria-hidden className="flex h-full items-start justify-start pl-1 pt-1">
      <PrimaryIconFrame>
        <StrokeIcon className="h-6 w-6" strokeWidth={1.45}>
          <path d="M14 2.8H8.2A2.2 2.2 0 0 0 6 5v14a2.2 2.2 0 0 0 2.2 2.2h7.6A2.2 2.2 0 0 0 18 19V7.2L14 2.8Z" />
          <path d="M14 2.8V7.4h3.8" />
          <path d="M12 11.2v6" />
          <path d="m9.6 13.6 2.4-2.4 2.4 2.4" />
        </StrokeIcon>
      </PrimaryIconFrame>
    </div>
  );
}

function WorkspaceVisual() {
  return (
    <div aria-hidden className="relative h-full w-full">
      <div className="absolute left-[36px] top-[2px] h-[60px] w-[110px] overflow-hidden rounded-[9px] border border-white/14 bg-[#101010]">
        <div className="flex h-full">
          <div className="relative w-[16px] shrink-0 border-r border-white/10 bg-black/50">
            <span className="absolute left-1/2 top-[7px] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-brand-red" />
            <span className="absolute left-1/2 top-[18px] h-[3px] w-[7px] -translate-x-1/2 rounded-[1px] bg-white/25" />
            <span className="absolute left-1/2 top-[26px] h-[3px] w-[7px] -translate-x-1/2 rounded-[1px] bg-white/18" />
            <span className="absolute left-1/2 top-[34px] h-[3px] w-[7px] -translate-x-1/2 rounded-[1px] bg-white/14" />
          </div>
          <div className="flex flex-1 flex-col gap-[5px] p-[7px]">
            <span className="h-[3px] w-[70%] rounded-[1px] bg-white/16" />
            <span className="h-[3px] w-[86%] rounded-[1px] bg-white/12" />
            <div className="mt-auto flex gap-[4px]">
              <span className="h-[12px] flex-1 rounded-[3px] bg-white/[0.08]" />
              <span className="h-[12px] w-[20px] rounded-[3px] bg-white/[0.08]" />
              <span className="h-[12px] w-[16px] rounded-[3px] bg-white/[0.08]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[1px] top-[8px]">
        <PrimaryIconFrame>
          <StrokeIcon className="h-6 w-6" strokeWidth={1.45}>
            <rect x="3.5" y="3.5" width="7" height="7" rx="1.4" />
            <rect x="13.5" y="3.5" width="7" height="7" rx="1.4" />
            <rect x="3.5" y="13.5" width="7" height="7" rx="1.4" />
            <rect x="13.5" y="13.5" width="7" height="7" rx="1.4" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}

function ManageVisual() {
  return (
    <div aria-hidden className="relative h-full w-full">
      <div className="absolute left-[36px] top-[2px] h-[60px] w-[110px] overflow-hidden rounded-[9px] border border-white/14 bg-[#101010]">
        <div className="flex h-full flex-col justify-center gap-[6px] px-[9px] py-[7px]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-[6px]">
              <span className="flex h-[11px] w-[11px] shrink-0 items-center justify-center rounded-full border border-brand-red/80 text-brand-red">
                <svg
                  aria-hidden
                  viewBox="0 0 12 12"
                  className="h-[6px] w-[6px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m2.4 6.2 2.2 2.2L9.6 3.7" />
                </svg>
              </span>
              <span className="h-[3px] flex-1 rounded-[1px] bg-white/14" />
              {i === 0 ? (
                <span className="h-[3px] w-[16px] rounded-[1px] bg-white/10" />
              ) : null}
            </div>
          ))}
        </div>
        <span className="absolute bottom-[7px] right-[5px] top-[7px] w-px bg-white/10" />
      </div>
      <div className="absolute left-[1px] top-[8px]">
        <PrimaryIconFrame>
          <StrokeIcon className="h-6 w-6" strokeWidth={1.45}>
            <circle cx="9" cy="8.2" r="2.5" />
            <circle cx="15.8" cy="9" r="2" />
            <path d="M4.4 18c.6-2.4 2.4-3.8 4.6-3.8s4 1.4 4.6 3.8" />
            <path d="M14.2 14.7c1.5-.4 2.9.2 3.7 1.5" />
            <path d="M16.2 4.6h3.6v2.2" />
            <path d="m19.8 4.6-2.4 2.2" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}

function RecoverVisual() {
  return (
    <div aria-hidden className="flex h-full items-start justify-start pl-1 pt-1">
      <PrimaryIconFrame>
        <StrokeIcon className="h-6 w-6" strokeWidth={1.45}>
          <circle cx="12" cy="12" r="8.1" />
          <path d="m7.8 14.2 2.7-3.2 2.1 2.1L16.4 8.8" />
          <path d="M14.2 8.8h2.2v2.2" />
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
  const className = "h-3 w-3 shrink-0 text-brand-red";
  if (visual === "intake") return <LockBadgeIcon className={className} />;
  if (visual === "workspace") return <DatabaseBadgeIcon className={className} />;
  if (visual === "manage") return <PulseBadgeIcon className={className} />;
  return <EyeBadgeIcon className={className} />;
}

function ProcessStageCard({
  item,
  referenceMode,
}: {
  item: HomeProcessStep;
  referenceMode?: boolean;
}) {
  return (
    <div
      data-process-card
      data-width={item.width}
      className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[11px] border border-white/[0.13] bg-[#181818] shadow-[0_8px_24px_-16px_rgba(0,0,0,0.95)]"
    >
      <span
        data-process-step
        className="absolute left-[14px] top-[14px] font-display text-[22px] font-semibold leading-none tracking-tight text-brand-red"
      >
        {item.step}
      </span>

      <div
        data-process-visual
        className="absolute left-[10px] right-[10px] top-[42px] h-[68px]"
      >
        <StageVisual visual={item.visual} />
      </div>

      <h3
        data-process-title
        className="absolute left-[14px] right-[8px] top-[116px] font-display text-[12px] font-semibold leading-[1.15] tracking-tight text-white"
      >
        {item.title}
      </h3>

      <p
        data-process-description
        className="absolute left-[14px] right-[8px] top-[142px] text-[10px] leading-[1.35] text-zinc-400"
      >
        {(referenceMode ? item.descriptionLines : null)?.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        )) ?? item.description}
      </p>

      <div
        data-process-pill
        className="absolute bottom-[12px] left-[12px] inline-flex h-[24px] w-fit max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded-[6px] border border-white/14 bg-black/45 px-2"
      >
        <SupportBadgeIcon visual={item.visual} />
        <span className="truncate text-[10.5px] font-medium leading-none text-zinc-200">
          {item.supportLabel}
        </span>
      </div>
    </div>
  );
}

function DesktopJourney({
  steps,
  referenceMode,
}: {
  steps: HomeProcessStep[];
  referenceMode?: boolean;
}) {
  // Explicit narrow/wide/wide/narrow track sizing from the mock.
  return (
    <div
      data-process-desktop
      className={
        referenceMode
          ? "relative mx-auto w-full max-w-[1024px] px-[85px]"
          : "relative mx-auto hidden w-full max-w-[1024px] px-[85px] xl:block"
      }
      style={
        referenceMode
          ? { height: REF.cardHeight, marginTop: 0 }
          : { minHeight: REF.cardHeight }
      }
    >
      <ol
        className="relative grid h-full items-stretch"
        style={{
          gridTemplateColumns: "174fr 229fr 217fr 145fr",
          gap: REF.gap,
        }}
      >
        {steps.map((item, index) => (
          <li key={item.step} className="relative h-full min-w-0">
            <ProcessStageCard item={item} referenceMode={referenceMode} />
            {index < steps.length - 1 ? (
              <span
                aria-hidden
                data-process-connector
                className="absolute top-[66px] z-20 flex items-center"
                style={{
                  left: "100%",
                  width: REF.gap,
                }}
              >
                <span
                  data-process-rail-segment
                  className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#dc2626]/75"
                />
                <span
                  data-process-node
                  className="absolute left-1/2 top-1/2 flex h-[11px] w-[11px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-[#dc2626] bg-[#111]"
                >
                  <span className="h-[4px] w-[4px] rounded-full bg-[#dc2626]" />
                </span>
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ProcessSection({
  locale = "en",
  referenceMode = false,
}: {
  locale?: Locale;
  /** Lock copy wrapping + canvas proportions to the 1024×467 mock. */
  referenceMode?: boolean;
}) {
  const content = getHomeContent(locale).process;

  return (
    <section
      id="process"
      data-process-section
      data-reference-mode={referenceMode ? "true" : undefined}
      className="relative overflow-hidden bg-[#101010]"
      style={
        referenceMode
          ? { width: REF.width, height: REF.height }
          : undefined
      }
    >
      {/* Vignette + center glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_55%,rgba(120,30,30,0.22),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_18%,rgba(90,40,20,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_90%_at_50%_50%,transparent_45%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div
        className={
          referenceMode
            ? "relative z-10 flex h-full flex-col"
            : "relative z-10 mx-auto w-full max-w-[1024px] px-0 pb-16 pt-10 sm:pb-20 sm:pt-12 xl:min-h-[467px] xl:pb-[67px] xl:pt-0"
        }
      >
        <header
          className={
            referenceMode
              ? "px-8 pt-[42px] text-center"
              : "mx-auto max-w-3xl px-6 pt-2 text-center xl:pt-[42px]"
          }
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-red sm:text-[11px]">
            {content.eyebrow}
          </p>
          <h2 className="mt-[10px] font-display text-[28px] font-semibold leading-[1.15] tracking-tight text-white sm:text-[32px] xl:text-[34px]">
            {content.title}
          </h2>
          <p className="mx-auto mt-[10px] max-w-[40rem] text-[13px] leading-relaxed text-zinc-400 sm:text-[14px]">
            {content.description}
          </p>
        </header>

        <div
          className={
            referenceMode
              ? "mt-[52px] flex-1"
              : "mt-10 sm:mt-12 xl:mt-[52px]"
          }
        >
          {referenceMode ? null : (
            <>
              {/* Mobile timeline */}
              <div className="relative px-5 sm:hidden">
                <div
                  aria-hidden
                  className="absolute bottom-4 left-[1.35rem] top-4 w-px bg-gradient-to-b from-brand-red/70 via-brand-red/40 to-brand-red/15"
                />
                <ol className="space-y-4">
                  {content.steps.map((item) => (
                    <li key={item.step} className="relative pl-10">
                      <span
                        aria-hidden
                        className="absolute left-[0.95rem] top-7 flex h-3 w-3 items-center justify-center rounded-full border-[1.5px] border-brand-red bg-[#111]"
                      >
                        <span className="h-1 w-1 rounded-full bg-brand-red" />
                      </span>
                      <div className="h-[229px]">
                        <ProcessStageCard item={item} />
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tablet 2×2 */}
              <ol className="mx-auto hidden max-w-[720px] grid-cols-2 gap-5 px-6 sm:grid xl:hidden">
                {content.steps.map((item) => (
                  <li key={item.step} className="h-[240px] min-h-0">
                    <ProcessStageCard item={item} />
                  </li>
                ))}
              </ol>
            </>
          )}

          <DesktopJourney steps={content.steps} referenceMode={referenceMode} />
        </div>
      </div>

      {/* Full-width bottom boundary */}
      <div
        aria-hidden
        data-process-bottom-line
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/12"
      />
    </section>
  );
}

