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
 * Surface RGB sampled from normalized reference.
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
  pageBg: "#111111", // 17,17,17
  cardBg: "#171717", // 23,23,23
  cardBorder: "#222222", // 34,34,34
  title: "#f1f1f1", // 241,241,241
  bodyText: "#686868", // sampled body ink ~104
  supportText: "#5a5a5a",
  pillBorder: "#2c2c2c", // target painted border ~28 after AA
  mutedRed: "#773f3b",
  connector: "#984746", // 152,71,70
  numberRed: "#77403b",
};

/** Interior layout relative to card top-left (painted ink). */
const CARD_INK = {
  number: { left: 16, top: 16, size: 22 },
  visual: { left: 14, top: 40, height: 72 },
  title: { left: 16, top: 114, size: 17 },
  desc: { left: 16, top: 136, size: 12.5, lineHeight: 1.42 },
  pill: { left: 12, top: 186, height: 30 },
} as const;

function StrokeIcon({
  className,
  children,
  strokeWidth = 1.3,
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
    <StrokeIcon className={className} strokeWidth={1.55} color={REF.mutedRed}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </StrokeIcon>
  );
}

function DatabaseBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className} strokeWidth={1.55} color={REF.mutedRed}>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <path d="M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
      <path d="M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
    </StrokeIcon>
  );
}

function PulseBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className} strokeWidth={1.55} color={REF.mutedRed}>
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </StrokeIcon>
  );
}

function EyeBadgeIcon({ className }: { className?: string }) {
  return (
    <StrokeIcon className={className} strokeWidth={1.55} color={REF.mutedRed}>
      <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </StrokeIcon>
  );
}

function PrimaryIconFrame({
  children,
  className = "",
  size = 58,
}: {
  children: ReactNode;
  className?: string;
  size?: number;
}) {
  return (
    <div
      data-process-icon-frame
      className={`relative z-10 flex shrink-0 items-center justify-center rounded-[11px] ${className}`}
      style={{
        width: size,
        height: size,
        color: REF.mutedRed,
        background: "#121212",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0 0 20px -4px rgba(56,25,22,0.75)",
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
        className="pointer-events-none absolute left-[-6px] top-[6px] h-[58px] w-[58px] rounded-full blur-[7px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,25,22,0.55), transparent 70%)",
        }}
      />
      <div className="absolute left-0 top-[2px]">
        <PrimaryIconFrame size={52}>
          <StrokeIcon className="h-[30px] w-[30px]" strokeWidth={1.2}>
            <path d="M14.4 2.4H7.6A2.5 2.5 0 0 0 5.1 4.9v14.4A2.5 2.5 0 0 0 7.6 21.8h8.8a2.5 2.5 0 0 0 2.5-2.5V7.2L14.4 2.4Z" />
            <path d="M14.4 2.4V7.8h4.5" />
            <path d="M12 11v6.8" />
            <path d="m9 13.8 3-3 3 3" />
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
        className="pointer-events-none absolute left-[28px] top-0 h-[72px] w-[160px] rounded-[14px] blur-[9px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56,25,22,0.5), transparent 72%)",
        }}
      />
      <div
        className="absolute left-[28px] top-0 h-[74px] overflow-hidden rounded-[10px]"
        style={{
          width: "min(172px, calc(100% - 18px))",
          background: "#0d0d0d",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <div className="flex h-full">
          <div
            className="relative w-[22px] shrink-0"
            style={{
              background: "#080808",
              borderRight: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <span
              className="absolute left-1/2 top-[8px] h-[6px] w-[6px] -translate-x-1/2 rounded-full"
              style={{
                background: "#c44a42",
                boxShadow: "0 0 6px rgba(196,74,66,0.8)",
              }}
            />
            {[19, 28, 37, 46, 55].map((top) => (
              <span
                key={top}
                className="absolute left-1/2 h-[2.5px] w-[9px] -translate-x-1/2 rounded-[1px]"
                style={{ top, background: "rgba(255,255,255,0.2)" }}
              />
            ))}
          </div>
          <div className="flex min-w-0 flex-1 flex-col px-[8px] py-[8px]">
            <span
              className="mb-[7px] h-[9px] w-[70%] rounded-[3px]"
              style={{ background: "rgba(255,255,255,0.18)" }}
            />
            <span
              className="mb-auto h-[9px] w-[92%] rounded-[3px]"
              style={{ background: "rgba(255,255,255,0.12)" }}
            />
            <div className="mt-[8px] grid grid-cols-3 gap-[5px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-[18px] rounded-[4px]"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-[8px]">
        <PrimaryIconFrame size={50}>
          <StrokeIcon className="h-[26px] w-[26px]" strokeWidth={1.25}>
            <rect x="3" y="3" width="7.6" height="7.6" rx="1.5" />
            <rect x="13.4" y="3" width="7.6" height="7.6" rx="1.5" />
            <rect x="3" y="13.4" width="7.6" height="7.6" rx="1.5" />
            <rect x="13.4" y="13.4" width="7.6" height="7.6" rx="1.5" />
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
        className="pointer-events-none absolute left-[26px] top-0 h-[74px] w-[160px] rounded-[14px] blur-[9px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56,25,22,0.48), transparent 72%)",
        }}
      />
      {/* Three distinct checklist row pills — matches 4× ref crop */}
      <div
        className="absolute left-[28px] top-0 flex h-[74px] flex-col justify-center gap-[5px] overflow-hidden rounded-[10px] px-[7px] py-[6px]"
        style={{
          width: "min(168px, calc(100% - 18px))",
          background: "#0d0d0d",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex h-[18px] items-center gap-[6px] rounded-[5px] px-[5px]"
            style={{
              background: "rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span
              className="flex h-[12px] w-[12px] shrink-0 items-center justify-center rounded-full"
              style={{ border: `1.25px solid ${REF.mutedRed}`, color: REF.mutedRed }}
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
            <span
              className="h-[5px] flex-1 rounded-[2px]"
              style={{ background: "rgba(255,255,255,0.16)" }}
            />
            <span
              className="h-[5px] rounded-[2px]"
              style={{
                width: i === 0 ? 20 : i === 1 ? 14 : 10,
                background: "rgba(255,255,255,0.1)",
              }}
            />
          </div>
        ))}
        <span
          className="absolute bottom-[6px] right-[5px] top-[6px] w-px"
          style={{ background: "rgba(255,255,255,0.12)" }}
        />
      </div>
      <div className="absolute left-0 top-[8px]">
        <PrimaryIconFrame size={50}>
          <StrokeIcon className="h-[26px] w-[26px]" strokeWidth={1.25}>
            <circle cx="8.4" cy="8" r="2.8" />
            <circle cx="15.5" cy="8.8" r="2.3" />
            <path d="M3.6 18.4c.7-2.7 2.7-4.2 4.9-4.2s4.2 1.5 4.9 4.2" />
            <path d="M13.8 14.7c1.7-.45 3.2.25 4.1 1.7" />
            <rect x="15.2" y="3.6" width="5.2" height="3.6" rx="1.1" />
            <path d="M16.4 5.4h2.8M16.4 6.4h1.8" />
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
        className="pointer-events-none absolute left-[-4px] top-[6px] h-[58px] w-[58px] rounded-full blur-[7px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,25,22,0.55), transparent 70%)",
        }}
      />
      <div className="absolute left-0 top-[2px]">
        <PrimaryIconFrame size={52}>
          <StrokeIcon className="h-[30px] w-[30px]" strokeWidth={1.2}>
            <circle cx="12" cy="12" r="8.6" />
            <path d="m7.2 14.6 3-3.5 2.3 2.3L17 8.2" />
            <path d="M14.2 8.2h2.8v2.8" />
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
  const className = "h-[14px] w-[14px] shrink-0";
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
  const titleSize = item.step === "04" ? 14 : CARD_INK.title.size;

  return (
    <div
      data-process-card
      data-width={item.width}
      className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[11px]"
      style={{
        background: REF.cardBg,
        border: `1px solid ${REF.cardBorder}`,
        boxShadow: "0 12px 28px -16px rgba(0,0,0,0.92)",
      }}
    >
      <span
        data-process-step
        className="absolute font-display leading-none tracking-tight"
        style={{
          left: CARD_INK.number.left,
          top: CARD_INK.number.top,
          fontSize: CARD_INK.number.size,
          fontWeight: 600,
          color: REF.numberRed,
        }}
      >
        {item.step}
      </span>

      <div
        data-process-visual
        className="absolute"
        style={{
          left: CARD_INK.visual.left,
          right: 8,
          top: CARD_INK.visual.top,
          height: CARD_INK.visual.height,
        }}
      >
        <StageVisual visual={item.visual} />
      </div>

      <h3
        data-process-title
        className="absolute font-display tracking-[-0.01em]"
        style={{
          left: CARD_INK.title.left,
          right: 8,
          top: CARD_INK.title.top,
          fontSize: titleSize,
          fontWeight: 600,
          lineHeight: 1.18,
          color: REF.title,
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
          right: 8,
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
        className="absolute inline-flex items-center gap-[7px]"
        style={{
          left: CARD_INK.pill.left,
          top: CARD_INK.pill.top,
          height: CARD_INK.pill.height,
          borderRadius: 7,
          border: `1px solid ${REF.pillBorder}`,
          background: "rgba(0,0,0,0.55)",
          paddingLeft: 10,
          paddingRight: 11,
          maxWidth: "calc(100% - 1.35rem)",
        }}
      >
        <SupportBadgeIcon visual={item.visual} />
        <span
          className="truncate font-medium leading-none"
          style={{ fontSize: 12, color: "#cfcfcf" }}
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
      className="relative block h-[16px] w-full"
    >
      <span
        data-process-rail-segment
        className="absolute inset-x-0 top-1/2 -translate-y-1/2"
        style={{
          height: 2,
          background: REF.connector,
          opacity: 0.92,
          boxShadow: "0 0 5px rgba(56,25,22,0.7)",
        }}
      />
      <span
        data-process-node
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        style={{
          width: 11,
          height: 11,
          border: `1.5px solid ${REF.connector}`,
          background: "#111111",
          boxShadow: "0 0 7px rgba(56,25,22,0.65)",
        }}
      >
        <span
          className="rounded-full"
          style={{ width: 3.5, height: 3.5, background: REF.connector }}
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
        {/* Center glow target ~56,25,22 at 512,250 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_64%_at_50%_58%,rgba(72,32,28,1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_48%_at_50%_20%,rgba(56,25,22,0.55),transparent_56%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_130%_110%_at_50%_50%,transparent_58%,rgba(0,0,0,0.22)_100%)]" />
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
              fontSize: referenceMode ? 9.5 : 11,
              letterSpacing: referenceMode ? "0.135em" : "0.2em",
              fontWeight: 700,
              color: "#711929",
            }}
          >
            {content.eyebrow}
          </p>
          <h2
            className={`font-display ${
              referenceMode
                ? "absolute inset-x-0"
                : "mt-4 text-[28px] sm:text-[32px] xl:text-[34px]"
            }`}
            style={{
              // Dense ink target ~463×29 starting at y=74
              top: referenceMode ? 71 : undefined,
              fontSize: referenceMode ? 30.5 : undefined,
              lineHeight: referenceMode ? "32px" : 1.15,
              letterSpacing: "0em",
              fontWeight: 600,
              color: REF.title,
            }}
          >
            {content.title}
          </h2>
          <p
            className={`mx-auto ${
              referenceMode ? "absolute inset-x-0" : "mt-3"
            }`}
            style={{
              top: referenceMode ? 112 : undefined,
              maxWidth: referenceMode ? 500 : 460,
              fontSize: referenceMode ? 12.75 : 13.5,
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
        className="pointer-events-none absolute inset-x-0 h-px"
        style={{
          bottom: referenceMode ? REF.height - REF.bottomLineY : 0,
          background: "rgba(255,255,255,0.12)",
        }}
      />
    </section>
  );
}
