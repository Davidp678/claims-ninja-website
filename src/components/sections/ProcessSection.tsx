import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import {
  getHomeContent,
  type HomeProcessStep,
  type HomeProcessVisual,
} from "@/lib/i18n/content/home";

/**
 * Native mock canvas: 1024×467 — outer card geometry LOCKED.
 *   Stage 01: 85,170 157×229
 *   Stage 02: 282,170 220×229
 *   Stage 03: 536,170 210×229
 *   Stage 04: 779,170 142×229
 * Gaps 40/34/33 · connector Y 239 · chat 38×38 @ r9/b17
 *
 * Interior positions are painted-ink measurements from the normalized mock.
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
  pageBg: "#111111",
  cardBg: "#171717",
  cardBorder: "rgba(255,255,255,0.11)",
  mutedRed: "#7a403b",
  connector: "#984746",
  bodyText: "#636363",
  supportText: "#5a5a5a",
};

/** Per-card interior layout relative to card top-left (painted bounds). */
const CARD_INK = {
  number: { left: 16, top: 15, size: 26 },
  visual: { left: 14, top: 38, height: 80 },
  title: { left: 16, top: 114, size: 15.5 },
  desc: { left: 16, top: 136, size: 12, lineHeight: 1.4 },
  pill: { left: 14, top: 186, height: 30 },
} as const;

function StrokeIcon({
  className,
  children,
  strokeWidth = 1.35,
  color,
}: {
  className?: string;
  children: ReactNode;
  strokeWidth?: number;
  color?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke={color ?? "currentColor"}
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
    <StrokeIcon className={className} strokeWidth={1.6} color={REF.mutedRed}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </StrokeIcon>
  );
}

function DatabaseBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className} strokeWidth={1.6} color={REF.mutedRed}>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <path d="M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
      <path d="M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
    </StrokeIcon>
  );
}

function PulseBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className} strokeWidth={1.6} color={REF.mutedRed}>
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </StrokeIcon>
  );
}

function EyeBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className} strokeWidth={1.6} color={REF.mutedRed}>
      <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </StrokeIcon>
  );
}

function PrimaryIconFrame({
  children,
  className = "",
  size = 56,
}: {
  children: ReactNode;
  className?: string;
  size?: number;
}) {
  return (
    <div
      data-process-icon-frame
      className={`relative z-10 flex shrink-0 items-center justify-center rounded-[10px] border border-white/20 bg-[#121212] shadow-[0_0_18px_-6px_rgba(140,40,40,0.55)] ${className}`}
      style={{
        width: size,
        height: size,
        color: REF.mutedRed,
      }}
    >
      {children}
    </div>
  );
}

function UploadDocVisual() {
  return (
    <div aria-hidden className="relative h-full w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-4px] top-[8px] h-[52px] w-[52px] rounded-full bg-[radial-gradient(circle,rgba(140,40,40,0.35),transparent_70%)] blur-[6px]"
      />
      <div className="absolute left-0 top-[4px]">
        <PrimaryIconFrame size={56}>
          <StrokeIcon className="h-8 w-8" strokeWidth={1.25}>
            <path d="M14.2 2.6H7.8A2.4 2.4 0 0 0 5.4 5v14.2A2.4 2.4 0 0 0 7.8 21.6h8.4A2.4 2.4 0 0 0 18.6 19.2V7.2L14.2 2.6Z" />
            <path d="M14.2 2.6V7.6h4.2" />
            <path d="M12 11.2v6.4" />
            <path d="m9.2 13.8 2.8-2.8 2.8 2.8" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}

function WorkspaceVisual() {
  return (
    <div aria-hidden className="relative h-full w-full overflow-visible">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[40px] top-[4px] h-[64px] w-[140px] rounded-[12px] bg-[radial-gradient(ellipse_at_center,rgba(130,35,35,0.32),transparent_72%)] blur-[8px]"
      />
      {/* Dense rear application panel */}
      <div className="absolute left-[30px] top-0 h-[70px] w-[min(168px,calc(100%-22px))] overflow-hidden rounded-[9px] border border-white/18 bg-[#0d0d0d] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="flex h-full">
          <div className="relative w-[20px] shrink-0 border-r border-white/16 bg-[#080808]">
            <span className="absolute left-1/2 top-[7px] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#c44a42] shadow-[0_0_5px_rgba(196,74,66,0.75)]" />
            {[17, 25, 33, 41, 49].map((top) => (
              <span
                key={top}
                className="absolute left-1/2 h-[2px] w-[8px] -translate-x-1/2 rounded-[1px] bg-white/20"
                style={{ top }}
              />
            ))}
          </div>
          <div className="flex min-w-0 flex-1 flex-col px-[8px] py-[8px]">
            <span className="mb-[6px] h-[8px] w-[72%] rounded-[3px] bg-white/18" />
            <span className="mb-auto h-[8px] w-[90%] rounded-[3px] bg-white/12" />
            <div className="mt-[8px] grid grid-cols-3 gap-[5px]">
              <span className="h-[17px] rounded-[4px] border border-white/10 bg-white/[0.07]" />
              <span className="h-[17px] rounded-[4px] border border-white/10 bg-white/[0.07]" />
              <span className="h-[17px] rounded-[4px] border border-white/10 bg-white/[0.07]" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[8px]">
        <PrimaryIconFrame size={54}>
          <StrokeIcon className="h-[26px] w-[26px]" strokeWidth={1.3}>
            <rect x="3.2" y="3.2" width="7.4" height="7.4" rx="1.5" />
            <rect x="13.4" y="3.2" width="7.4" height="7.4" rx="1.5" />
            <rect x="3.2" y="13.4" width="7.4" height="7.4" rx="1.5" />
            <rect x="13.4" y="13.4" width="7.4" height="7.4" rx="1.5" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}

function ManageVisual() {
  return (
    <div aria-hidden className="relative h-full w-full overflow-visible">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[36px] top-[2px] h-[66px] w-[140px] rounded-[12px] bg-[radial-gradient(ellipse_at_center,rgba(130,35,35,0.3),transparent_72%)] blur-[8px]"
      />
      <div className="absolute left-[30px] top-0 h-[70px] w-[min(160px,calc(100%-22px))] overflow-hidden rounded-[9px] border border-white/18 bg-[#0d0d0d] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="flex h-full flex-col justify-center gap-[6px] px-[8px] py-[7px]">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex h-[16px] items-center gap-[6px] rounded-[3px] bg-black/35 px-[4px]"
            >
              <span
                className="flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full border"
                style={{ borderColor: REF.mutedRed, color: REF.mutedRed }}
              >
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
              <span className="h-[4px] flex-1 rounded-[1px] bg-white/18" />
              <span
                className="h-[4px] rounded-[1px] bg-white/12"
                style={{ width: i === 0 ? 22 : i === 1 ? 14 : 10 }}
              />
            </div>
          ))}
        </div>
        <span className="absolute bottom-[6px] right-[6px] top-[6px] w-px bg-white/14" />
      </div>
      <div className="absolute left-0 top-[8px]">
        <PrimaryIconFrame size={54}>
          <StrokeIcon className="h-[26px] w-[26px]" strokeWidth={1.3}>
            <circle cx="8.6" cy="8" r="2.7" />
            <circle cx="15.6" cy="8.8" r="2.2" />
            <path d="M3.8 18.2c.7-2.6 2.6-4.1 4.8-4.1s4.1 1.5 4.8 4.1" />
            <path d="M14 14.6c1.6-.4 3.1.3 4 1.7" />
            <path d="M15.8 4.2h4v2.4" />
            <path d="m19.8 4.2-2.6 2.4" />
            <circle cx="18.6" cy="5.8" r="0.7" fill="currentColor" stroke="none" />
            <circle cx="17.2" cy="5.8" r="0.7" fill="currentColor" stroke="none" />
            <circle cx="19.9" cy="5.8" r="0.7" fill="currentColor" stroke="none" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}

function RecoverVisual() {
  return (
    <div aria-hidden className="relative h-full w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-2px] top-[8px] h-[52px] w-[52px] rounded-full bg-[radial-gradient(circle,rgba(140,40,40,0.35),transparent_70%)] blur-[6px]"
      />
      <div className="absolute left-0 top-[4px]">
        <PrimaryIconFrame size={56}>
          <StrokeIcon className="h-8 w-8" strokeWidth={1.25}>
            <circle cx="12" cy="12" r="8.4" />
            <path d="m7.4 14.4 2.9-3.4 2.2 2.2L16.8 8.4" />
            <path d="M14.4 8.4h2.5v2.5" />
          </StrokeIcon>
        </PrimaryIconFrame>
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
  const className = "h-[13px] w-[13px] shrink-0";
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
  const titleSize =
    item.width === "narrow" && item.step === "04"
      ? 13.5
      : CARD_INK.title.size;

  return (
    <div
      data-process-card
      data-width={item.width}
      className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[11px] shadow-[0_10px_28px_-14px_rgba(0,0,0,0.9)]"
      style={{
        background: `linear-gradient(180deg, #1a1a1a 0%, ${REF.cardBg} 55%, #141414 100%)`,
        border: `1px solid ${REF.cardBorder}`,
      }}
    >
      <span
        data-process-step
        className="absolute font-display font-semibold leading-none tracking-tight"
        style={{
          left: CARD_INK.number.left,
          top: CARD_INK.number.top,
          fontSize: CARD_INK.number.size,
          color: REF.mutedRed,
        }}
      >
        {item.step}
      </span>

      <div
        data-process-visual
        className="absolute"
        style={{
          left: CARD_INK.visual.left,
          right: 10,
          top: CARD_INK.visual.top,
          height: CARD_INK.visual.height,
        }}
      >
        <StageVisual visual={item.visual} />
      </div>

      <h3
        data-process-title
        className="absolute font-display font-semibold tracking-[-0.01em] text-white"
        style={{
          left: CARD_INK.title.left,
          right: 10,
          top: CARD_INK.title.top,
          fontSize: titleSize,
          lineHeight: 1.15,
          whiteSpace: item.step === "04" ? "nowrap" : undefined,
        }}
      >
        {item.title}
      </h3>

      <p
        data-process-description
        className="absolute"
        style={{
          left: CARD_INK.desc.left,
          right: 10,
          top: CARD_INK.desc.top,
          fontSize: CARD_INK.desc.size,
          lineHeight: CARD_INK.desc.lineHeight,
          color: REF.bodyText,
        }}
      >
        {(referenceMode ? item.descriptionLines : null)?.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        )) ?? item.description}
      </p>

      <div
        data-process-pill
        className="absolute inline-flex items-center gap-[7px] border bg-black/55"
        style={{
          left: CARD_INK.pill.left,
          top: CARD_INK.pill.top,
          height: CARD_INK.pill.height,
          borderRadius: 7,
          borderColor: "rgba(255,255,255,0.18)",
          paddingLeft: 9,
          paddingRight: 10,
          maxWidth: "calc(100% - 1.4rem)",
        }}
      >
        <SupportBadgeIcon visual={item.visual} />
        <span
          className="truncate font-medium leading-none text-[#d4d4d4]"
          style={{ fontSize: 11.5 }}
        >
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
      className="relative block h-[14px] w-full"
    >
      <span
        data-process-rail-segment
        className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2"
        style={{
          background: `linear-gradient(90deg, transparent, ${REF.connector} 12%, ${REF.connector} 88%, transparent)`,
          boxShadow: "0 0 6px rgba(152,71,70,0.55)",
        }}
      />
      <span
        data-process-node
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        style={{
          width: 12,
          height: 12,
          border: `1.5px solid ${REF.connector}`,
          background: "#111",
          boxShadow: "0 0 8px rgba(152,71,70,0.45)",
        }}
      >
        <span
          className="rounded-full"
          style={{
            width: 4,
            height: 4,
            background: REF.connector,
          }}
        />
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
        <ProcessStageCard item={item} referenceMode={referenceMode} />
      </div>,
    );
    if (index < steps.length - 1) {
      cells.push(
        <div key={`gap-${item.step}`} aria-hidden className="relative h-full">
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
      className="relative overflow-hidden"
      style={{
        backgroundColor: REF.pageBg,
        ...(referenceMode
          ? { width: REF.width, height: REF.height }
          : undefined),
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_62%_at_50%_62%,rgba(120,32,28,0.34),transparent_64%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_48%_at_50%_20%,rgba(100,45,25,0.16),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_95%_at_50%_50%,transparent_42%,rgba(0,0,0,0.62)_100%)]" />
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
              ? "pointer-events-none absolute inset-x-0 text-center"
              : "mx-auto max-w-3xl px-6 pt-2 text-center xl:pt-[49px]"
          }
          style={referenceMode ? { top: 0, height: 160 } : undefined}
        >
          <p
            className={`font-semibold uppercase leading-none ${
              referenceMode ? "absolute inset-x-0" : ""
            }`}
            style={{
              top: referenceMode ? 49 : undefined,
              fontSize: referenceMode ? 10 : 11,
              letterSpacing: referenceMode ? "0.185em" : "0.22em",
              color: "#711929",
            }}
          >
            {content.eyebrow}
          </p>
          <h2
            className={`font-display font-semibold text-white ${
              referenceMode
                ? "absolute inset-x-0"
                : "mt-4 text-[28px] sm:text-[32px] xl:text-[34px]"
            }`}
            style={{
              top: referenceMode ? 68 : undefined,
              fontSize: referenceMode ? 31 : undefined,
              lineHeight: 1.18,
              letterSpacing: "-0.01em",
              fontWeight: 600,
            }}
          >
            {content.title}
          </h2>
          <p
            className={`mx-auto ${
              referenceMode ? "absolute inset-x-0" : "mt-3"
            }`}
            style={{
              top: referenceMode ? 114 : undefined,
              maxWidth: referenceMode ? 500 : 460,
              fontSize: referenceMode ? 12.5 : 13.5,
              lineHeight: 1.3,
              color: REF.supportText,
              whiteSpace: referenceMode ? "nowrap" : undefined,
            }}
          >
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
