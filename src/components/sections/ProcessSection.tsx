import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import {
  getHomeContent,
  type HomeProcessStep,
  type HomeProcessVisual,
} from "@/lib/i18n/content/home";

/**
 * Native mock canvas: 1024×467.
 * Measured card boxes (inclusive edges → CSS widths):
 *   85–241 (157), gap 40
 *   282–501 (220), gap 34
 *   536–745 (210), gap 33
 *   779–920 (142)
 * Connector axis ≈ y 239–240; chat 38×38 @ right 9 / bottom 17.
 */
const REF = {
  width: 1024,
  height: 467,
  padLeft: 85,
  cardTop: 170,
  cardHeight: 229,
  widths: [157, 220, 210, 142] as const,
  gaps: [40, 34, 33] as const,
  connectorY: 239,
  bottomLineY: 465,
};

function StrokeIcon({
  className,
  children,
  strokeWidth = 1.5,
}: {
  className?: string;
  children: ReactNode;
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
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      data-process-icon-frame
      className={`relative z-10 flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[8px] border border-white/18 bg-[#121212] text-brand-red ${className}`}
    >
      {children}
    </div>
  );
}

function UploadDocVisual() {
  return (
    <div aria-hidden className="flex h-full items-start justify-start pl-0.5 pt-0.5">
      <PrimaryIconFrame>
        <StrokeIcon className="h-[22px] w-[22px]" strokeWidth={1.5}>
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
    <div aria-hidden className="relative h-full w-full overflow-visible">
      <div className="absolute left-[32px] top-px h-[62px] w-[min(152px,calc(100%-26px))] overflow-hidden rounded-[8px] border border-white/18 bg-[#0c0c0c]">
        <div className="flex h-full">
          <div className="relative w-[17px] shrink-0 border-r border-white/14 bg-black/60">
            <span className="absolute left-1/2 top-[7px] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-brand-red" />
            <span className="absolute left-1/2 top-[18px] h-[2px] w-[7px] -translate-x-1/2 rounded-[1px] bg-white/30" />
            <span className="absolute left-1/2 top-[25px] h-[2px] w-[7px] -translate-x-1/2 rounded-[1px] bg-white/22" />
            <span className="absolute left-1/2 top-[32px] h-[2px] w-[7px] -translate-x-1/2 rounded-[1px] bg-white/16" />
            <span className="absolute left-1/2 top-[39px] h-[2px] w-[7px] -translate-x-1/2 rounded-[1px] bg-white/12" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-[3px] p-[6px]">
            <span className="h-[2.5px] w-[68%] rounded-[1px] bg-white/24" />
            <span className="h-[2.5px] w-[88%] rounded-[1px] bg-white/16" />
            <span className="h-[2.5px] w-[54%] rounded-[1px] bg-white/12" />
            <div className="mt-auto flex gap-[3px] pt-[2px]">
              <span className="h-[15px] flex-1 rounded-[3px] border border-white/[0.08] bg-white/[0.07]" />
              <span className="h-[15px] w-[22px] rounded-[3px] border border-white/[0.08] bg-white/[0.07]" />
              <span className="h-[15px] w-[18px] rounded-[3px] border border-white/[0.08] bg-white/[0.07]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[5px]">
        <PrimaryIconFrame>
          <StrokeIcon className="h-[22px] w-[22px]" strokeWidth={1.5}>
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
    <div aria-hidden className="relative h-full w-full overflow-visible">
      <div className="absolute left-[34px] top-0 h-[64px] w-[min(148px,calc(100%-28px))] overflow-hidden rounded-[8px] border border-white/16 bg-[#0e0e0e] shadow-[0_0_0_1px_rgba(0,0,0,0.4)]">
        <div className="flex h-full flex-col justify-center gap-[7px] px-[8px] py-[6px]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-[6px]">
              <span className="flex h-[12px] w-[12px] shrink-0 items-center justify-center rounded-full border border-brand-red text-brand-red">
                <svg
                  aria-hidden
                  viewBox="0 0 12 12"
                  className="h-[6px] w-[6px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m2.3 6.1 2.3 2.3L9.7 3.6" />
                </svg>
              </span>
              <span className="h-[3px] flex-1 rounded-[1px] bg-white/18" />
              {i === 0 ? (
                <span className="h-[3px] w-[18px] rounded-[1px] bg-white/12" />
              ) : null}
            </div>
          ))}
        </div>
        <span className="absolute bottom-[6px] right-[5px] top-[6px] w-px bg-white/12" />
      </div>
      <div className="absolute left-0 top-[6px]">
        <PrimaryIconFrame>
          <StrokeIcon className="h-[22px] w-[22px]" strokeWidth={1.5}>
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
    <div aria-hidden className="flex h-full items-start justify-start pl-0.5 pt-0.5">
      <PrimaryIconFrame>
        <StrokeIcon className="h-[22px] w-[22px]" strokeWidth={1.5}>
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
  narrowTitle,
}: {
  item: HomeProcessStep;
  referenceMode?: boolean;
  narrowTitle?: boolean;
}) {
  return (
    <div
      data-process-card
      data-width={item.width}
      className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[10px] border border-white/[0.14] bg-[#161616] shadow-[0_8px_24px_-16px_rgba(0,0,0,0.95)]"
    >
      <span
        data-process-step
        className="absolute left-[12px] top-[12px] font-display text-[20px] font-semibold leading-none tracking-tight text-brand-red"
      >
        {item.step}
      </span>

      <div
        data-process-visual
        className="absolute left-[10px] right-[8px] top-[40px] h-[66px]"
      >
        <StageVisual visual={item.visual} />
      </div>

      <h3
        data-process-title
        className={`absolute left-[12px] right-[6px] top-[114px] font-display font-semibold leading-[1.12] tracking-tight text-white ${
          narrowTitle
            ? "whitespace-nowrap text-[10.5px]"
            : "text-[12.5px]"
        }`}
      >
        {item.title}
      </h3>

      <p
        data-process-description
        className="absolute left-[12px] right-[6px] top-[138px] text-[9.5px] leading-[1.32] text-zinc-400"
      >
        {(referenceMode ? item.descriptionLines : null)?.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        )) ?? item.description}
      </p>

      <div
        data-process-pill
        className="absolute bottom-[11px] left-[10px] inline-flex h-[22px] w-fit max-w-[calc(100%-1.25rem)] items-center gap-1.5 rounded-[5px] border border-white/14 bg-black/50 px-[7px]"
      >
        <SupportBadgeIcon visual={item.visual} />
        <span className="truncate text-[10px] font-medium leading-none text-zinc-200">
          {item.supportLabel}
        </span>
      </div>
    </div>
  );
}

function ConnectorSegment() {
  return (
    <span
      aria-hidden
      data-process-connector
      className="relative block h-[12px] w-full"
    >
      <span
        data-process-rail-segment
        className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#c43b3b]"
      />
      <span
        data-process-node
        className="absolute left-1/2 top-1/2 flex h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-[#dc2626] bg-[#111]"
      >
        <span className="h-[3.5px] w-[3.5px] rounded-full bg-[#dc2626]" />
      </span>
    </span>
  );
}

function DesktopJourney({
  steps,
  referenceMode,
}: {
  steps: HomeProcessStep[];
  referenceMode?: boolean;
}) {
  const widthSum = REF.widths.reduce((a, b) => a + b, 0);
  const gapSum = REF.gaps.reduce((a, b) => a + b, 0);
  const padRight = REF.width - REF.padLeft - widthSum - gapSum;
  const connectorTop = REF.connectorY - REF.cardTop;

  const track = referenceMode
    ? [
        `${REF.widths[0]}px`,
        `${REF.gaps[0]}px`,
        `${REF.widths[1]}px`,
        `${REF.gaps[1]}px`,
        `${REF.widths[2]}px`,
        `${REF.gaps[2]}px`,
        `${REF.widths[3]}px`,
      ].join(" ")
    : [
        `${REF.widths[0]}fr`,
        `${REF.gaps[0]}fr`,
        `${REF.widths[1]}fr`,
        `${REF.gaps[1]}fr`,
        `${REF.widths[2]}fr`,
        `${REF.gaps[2]}fr`,
        `${REF.widths[3]}fr`,
      ].join(" ");

  const cells: ReactNode[] = [];
  steps.forEach((item, index) => {
    cells.push(
      <div key={item.step} className="relative h-full min-w-0">
        <ProcessStageCard
          item={item}
          referenceMode={referenceMode}
          narrowTitle={index === 3}
        />
      </div>,
    );
    if (index < steps.length - 1) {
      cells.push(
        <div
          key={`gap-${item.step}`}
          aria-hidden
          className="relative h-full"
        >
          <div
            className="absolute inset-x-0 -translate-y-1/2"
            style={{ top: connectorTop }}
          >
            <ConnectorSegment />
          </div>
        </div>,
      );
    }
  });

  return (
    <div
      data-process-desktop
      className={
        referenceMode
          ? "relative w-full"
          : "relative mx-auto hidden w-full max-w-[1024px] px-[85px] xl:block"
      }
      style={
        referenceMode
          ? {
              height: REF.cardHeight,
              paddingLeft: REF.padLeft,
              paddingRight: padRight,
            }
          : { minHeight: REF.cardHeight }
      }
    >
      <div
        className="relative grid h-full items-stretch"
        style={{ gridTemplateColumns: track }}
      >
        {cells}
      </div>
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
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_78%_68%_at_50%_58%,rgba(120,28,28,0.26),transparent_62%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_16%,rgba(90,40,20,0.11),transparent_55%)]" />
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
              ? "px-8 pt-[50px] text-center"
              : "mx-auto max-w-3xl px-6 pt-2 text-center xl:pt-[50px]"
          }
        >
          <p className="text-[10px] font-semibold uppercase leading-none tracking-[0.22em] text-brand-red sm:text-[10.5px]">
            {content.eyebrow}
          </p>
          <h2 className="mt-[14px] font-display text-[28px] font-semibold leading-[1.08] tracking-[-0.015em] text-white sm:text-[30px] xl:text-[31px]">
            {content.title}
          </h2>
          <p className="mx-auto mt-[11px] max-w-[36rem] text-[12.5px] leading-[1.35] text-zinc-400 sm:text-[13px]">
            {content.description}
          </p>
        </header>

        <div
          className={
            referenceMode
              ? "absolute inset-x-0"
              : "mt-10 sm:mt-12 xl:mt-[46px]"
          }
          style={referenceMode ? { top: REF.cardTop } : undefined}
        >
          {referenceMode ? null : (
            <>
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

      <div
        aria-hidden
        data-process-bottom-line
        className="pointer-events-none absolute inset-x-0 h-px bg-white/14"
        style={{ bottom: referenceMode ? REF.height - REF.bottomLineY : 0 }}
      />
    </section>
  );
}
