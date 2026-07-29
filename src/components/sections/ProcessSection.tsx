import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import {
  getHomeContent,
  type HomeProcessStep,
  type HomeProcessVisual,
} from "@/lib/i18n/content/home";

/**
 * Native mock canvas: 1024×467 — outer card geometry LOCKED.
 * data-qa-* selectors exist for paint-isolation measurement only.
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
  cardBorder: "#222222",
  /** Solid glyph interior target ≈ 231/231/231. */
  title: "#e7e7e7",
  /** Neutral body ≈ 104/104/104. */
  bodyText: "#686868",
  supportText: "#5a5a5a",
  /** Pill stroke target ≈ 28/28/28. */
  pillBorder: "#1c1c1c",
  /** Muted icon stroke ≈ 43/28/31. */
  mutedRed: "#2b1c1f",
  connector: "#984746",
  /** Number solid ≈ 118/46/49. */
  numberRed: "#762e31",
  numberRedRgb: "118, 46, 49",
};

/** Card-relative layout from reference painted ink (not DOM wrappers). */
const CARD_INK = {
  number: { left: 15, top: 16, size: 14.5 },
  visual: { left: 11, top: 28, height: 82 },
  title: { left: 14, top: 112, size: 12.45 },
  desc: { left: 15, top: 132, size: 9.55, lineHeight: 1.48 },
  pill: { left: 11, top: 191, height: 22 },
} as const;

function StrokeIcon({
  className,
  children,
  strokeWidth = 1.25,
  color,
  qa,
}: {
  className?: string;
  children: ReactNode;
  strokeWidth?: number;
  color?: string;
  qa?: string;
}) {
  return (
    <svg
      aria-hidden
      data-qa={qa}
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

function PillIcon({
  visual,
  stage,
}: {
  visual: HomeProcessVisual;
  stage: string;
}) {
  const className = "h-[14px] w-[14px] shrink-0 -translate-y-[3px]";
  const qa = `stage-${stage}-pill-icon`;
  const color = REF.mutedRed;
  if (visual === "intake") {
    return (
      <StrokeIcon className={className} strokeWidth={1.5} color={color} qa={qa}>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </StrokeIcon>
    );
  }
  if (visual === "workspace") {
    return (
      <StrokeIcon className={className} strokeWidth={1.5} color={color} qa={qa}>
        <ellipse cx="12" cy="6" rx="7" ry="2.5" />
        <path d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
        <path d="M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
        <path d="M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" />
      </StrokeIcon>
    );
  }
  if (visual === "manage") {
    return (
      <StrokeIcon className={className} strokeWidth={1.5} color={color} qa={qa}>
        <path d="M3 12h4l2-5 4 10 2-5h6" />
      </StrokeIcon>
    );
  }
  return (
    <StrokeIcon className={className} strokeWidth={1.5} color={color} qa={qa}>
      <path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </StrokeIcon>
  );
}

function PrimaryIconFrame({
  children,
  stage,
  size = 48,
}: {
  children: ReactNode;
  stage: string;
  size?: number;
}) {
  return (
    <div
      data-qa={`stage-${stage}-icon-frame`}
      className="relative z-10 flex shrink-0 items-center justify-center rounded-[10px]"
      style={{
        width: size,
        height: size,
        color: REF.mutedRed,
        background: "#121212",
        border: "1px solid rgba(255,255,255,0.11)",
        boxShadow: "0 0 12px -5px rgba(30,20,28,0.65)",
      }}
    >
      {children}
    </div>
  );
}

function UploadDocVisual({ stage }: { stage: string }) {
  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full"
    >
      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-[-2px] top-[2px] h-[52px] w-[52px] rounded-full blur-[5px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,25,22,0.55), transparent 70%)",
        }}
      />
      <div className="absolute left-[0px] top-[14px]">
        <PrimaryIconFrame stage={stage} size={50}>
          <StrokeIcon
            className="h-[33px] w-[33px]"
            strokeWidth={1.4}
            color={REF.mutedRed}
            qa={`stage-${stage}-symbol`}
          >
            <path d="M14.4 1.6H7A2.7 2.7 0 0 0 4.3 4.3v15.4A2.7 2.7 0 0 0 7 22.4h9.4a2.7 2.7 0 0 0 2.7-2.7V7.1L14.4 1.6Z" />
            <path d="M14.4 1.6V7.4h5" />
            <path d="M12 11.2v7.2" />
            <path d="m8.5 14.3 3.5-3.5 3.5 3.5" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}

function WorkspaceVisual({ stage }: { stage: string }) {
  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full overflow-visible"
    >
      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-[24px] top-0 h-[66px] w-[150px] rounded-[12px] blur-[8px]"
        style={{
          background:
            "radial-gradient(ellipse at 40% 45%, rgba(56,25,22,0.55), transparent 72%)",
        }}
      />
      <div
        data-qa={`stage-${stage}-rear-panel`}
        className="absolute left-[24px] top-[1px] h-[72px] overflow-hidden rounded-[9px]"
        style={{
          width: 170,
          background: "#0d0d0d",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div className="relative flex h-full">
          <div
            data-qa={`stage-${stage}-sidebar`}
            className="relative w-[24px] shrink-0"
            style={{
              background: "#080808",
              borderRight: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <span
              data-qa={`stage-${stage}-active-dot`}
              className="absolute left-1/2 top-[8px] h-[9px] w-[9px] -translate-x-1/2 rounded-full"
              style={{ background: "#9a4540" }}
            />
            {[22, 32, 42, 52].map((top, i) => (
              <span
                key={top}
                data-qa={`stage-${stage}-sidebar-row-${i}`}
                className="absolute left-1/2 h-[2px] w-[11px] -translate-x-1/2 rounded-[1px]"
                style={{ top, background: "rgba(255,255,255,0.2)" }}
              />
            ))}
          </div>
          <div
            data-qa={`stage-${stage}-divider`}
            className="w-px shrink-0"
            style={{ background: "rgba(255,255,255,0.12)" }}
          />
          <div className="relative flex min-w-0 flex-1 flex-col px-[8px] pb-[7px] pt-[9px]">
            <span
              data-qa={`stage-${stage}-content-bar-0`}
              className="mb-[7px] h-[7px] w-[70%] rounded-[3px]"
              style={{ background: "rgba(255,255,255,0.2)" }}
            />
            <span
              data-qa={`stage-${stage}-content-bar-1`}
              className="mb-auto h-[7px] w-[88%] rounded-[3px]"
              style={{ background: "rgba(255,255,255,0.13)" }}
            />
            <div className="mt-[7px] flex gap-[5px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  data-qa={`stage-${stage}-lower-block-${i}`}
                  className="h-[15px] w-[15px] rounded-[3px]"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.11)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[1px] top-[13px]">
        <PrimaryIconFrame stage={stage} size={50}>
          <StrokeIcon
            className="h-[32px] w-[32px]"
            strokeWidth={1.35}
            color={REF.mutedRed}
            qa={`stage-${stage}-symbol`}
          >
            <rect x="2.6" y="3.4" width="8" height="7" rx="1.35" />
            <rect x="13.4" y="3.4" width="8" height="7" rx="1.35" />
            <rect x="2.6" y="13.8" width="8" height="7" rx="1.35" />
            <rect x="13.4" y="13.8" width="8" height="7" rx="1.35" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}

function ManageVisual({ stage }: { stage: string }) {
  /** Check tops relative to visual: canvas 208/228/248 − cardTop 170 − visualTop 28. */
  const checkTops = [9, 29, 49] as const;
  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full overflow-visible"
    >
      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-[22px] top-0 h-[66px] w-[145px] rounded-[12px] blur-[8px]"
        style={{
          background:
            "radial-gradient(ellipse at 45% 45%, rgba(56,25,22,0.5), transparent 72%)",
        }}
      />
      <div
        data-qa={`stage-${stage}-rear-panel`}
        className="absolute left-[24px] top-[1px] h-[72px] overflow-hidden rounded-[9px]"
        style={{
          width: 160,
          background: "#0d0d0d",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            data-qa={`stage-${stage}-row-${i}`}
            className="absolute left-[26px] right-[10px] flex h-[14px] items-center gap-[5px] rounded-[4px] px-[5px]"
            style={{
              top: 8 + i * 20,
              background: "rgba(0,0,0,0.38)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <span
              data-qa={`stage-${stage}-bar-a-${i}`}
              className="h-[4px] flex-1 rounded-[2px]"
              style={{ background: "rgba(255,255,255,0.17)" }}
            />
            <span
              data-qa={`stage-${stage}-bar-b-${i}`}
              className="h-[4px] rounded-[2px]"
              style={{
                width: i === 0 ? 18 : i === 1 ? 14 : 10,
                background: "rgba(255,255,255,0.11)",
              }}
            />
          </div>
        ))}
        <span
          data-qa={`stage-${stage}-right-edge`}
          className="absolute bottom-[7px] right-[6px] top-[7px] w-px"
          style={{ background: "rgba(255,255,255,0.12)" }}
        />
      </div>
      {checkTops.map((top, i) => (
        <span
          key={i}
          data-qa={`stage-${stage}-check-${i}`}
          className="absolute z-20 flex h-[16px] w-[16px] items-center justify-center rounded-full"
          style={{
            left: 41,
            top,
            border: `1.35px solid ${REF.mutedRed}`,
            color: REF.mutedRed,
            background: "#0d0d0d",
          }}
        >
          <svg
            aria-hidden
            data-qa={`stage-${stage}-check-mark-${i}`}
            viewBox="0 0 12 12"
            className="h-[8px] w-[8px]"
            fill="none"
            stroke={REF.mutedRed}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m2.2 6.2 2.5 2.5L9.9 3.5" fill="none" stroke={REF.mutedRed} />
          </svg>
        </span>
      ))}
      <div className="absolute left-[1px] top-[12px]">
        <PrimaryIconFrame stage={stage} size={50}>
          <StrokeIcon
            className="h-[30px] w-[30px]"
            strokeWidth={1.35}
            color={REF.mutedRed}
            qa={`stage-${stage}-symbol`}
          >
            <circle cx="8.2" cy="7.8" r="2.9" />
            <circle cx="15.5" cy="8.6" r="2.4" />
            <path d="M3.4 18.6c.7-2.7 2.7-4.2 4.9-4.2s4.2 1.5 4.9 4.2" />
            <path d="M13.7 14.8c1.7-.45 3.2.25 4.1 1.7" />
            <rect x="15.1" y="3.4" width="5.3" height="3.7" rx="1.1" />
            <path d="M16.3 5.2h2.8M16.3 6.2h1.8" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}

function RecoverVisual({ stage }: { stage: string }) {
  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full"
    >
      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-[-2px] top-[2px] h-[52px] w-[52px] rounded-full blur-[5px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,25,22,0.55), transparent 70%)",
        }}
      />
      <div className="absolute left-[1px] top-[13px]">
        <PrimaryIconFrame stage={stage} size={50}>
          <StrokeIcon
            className="h-[33px] w-[33px]"
            strokeWidth={1.4}
            color={REF.mutedRed}
            qa={`stage-${stage}-symbol`}
          >
            <circle cx="12" cy="12" r="8.8" />
            <path d="m6.8 14.8 3.2-3.7 2.4 2.4L17.4 7.8" />
            <path d="M14 7.8h3.2v3.2" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}

function StageVisual({
  visual,
  stage,
}: {
  visual: HomeProcessVisual;
  stage: string;
}) {
  if (visual === "intake") return <UploadDocVisual stage={stage} />;
  if (visual === "workspace") return <WorkspaceVisual stage={stage} />;
  if (visual === "manage") return <ManageVisual stage={stage} />;
  return <RecoverVisual stage={stage} />;
}

function ProcessStageCard({
  item,
  referenceMode,
}: {
  item: HomeProcessStep;
  referenceMode?: boolean;
}) {
  const stage = item.step;
  const titleSize = stage === "04" ? 12.05 : 12.45;
  const lines = referenceMode ? item.descriptionLines : null;

  return (
    <div
      data-process-card
      data-qa={`stage-${stage}-card`}
      data-width={item.width}
      className="group relative flex h-full min-h-0 flex-col overflow-visible rounded-[11px]"
      style={{
        background: REF.cardBg,
        border: `1px solid ${REF.cardBorder}`,
        boxShadow: "0 12px 28px -16px rgba(0,0,0,0.92)",
      }}
    >
      <span
        data-process-step
        data-qa={`stage-${stage}-number`}
        className="absolute font-display leading-none tracking-tight"
        style={{
          left: CARD_INK.number.left,
          top: CARD_INK.number.top,
          fontSize: CARD_INK.number.size,
          fontWeight: 600,
          letterSpacing: "0",
          color: `rgb(${REF.numberRedRgb})`,
          WebkitTextFillColor: `rgb(${REF.numberRedRgb})`,
          opacity: 1,
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
        <StageVisual visual={item.visual} stage={stage} />
      </div>

      <h3
        data-process-title
        data-qa={`stage-${stage}-title`}
        className="absolute font-display tracking-tight"
        style={{
          left: CARD_INK.title.left,
          right: stage === "01" ? 16 : stage === "04" ? 10 : 20,
          top: CARD_INK.title.top,
          fontSize: titleSize,
          fontWeight: 600,
          lineHeight: 1.05,
          letterSpacing: stage === "04" ? "-0.022em" : "-0.018em",
          color: REF.title,
          whiteSpace: "nowrap",
        }}
      >
        {item.title}
      </h3>

      <p
        data-process-description
        data-qa={`stage-${stage}-body`}
        className="absolute"
        style={{
          left: CARD_INK.desc.left,
          right: stage === "01" || stage === "04" ? 14 : 24,
          top: CARD_INK.desc.top,
          fontSize: CARD_INK.desc.size,
          lineHeight: CARD_INK.desc.lineHeight,
          letterSpacing: "-0.01em",
          fontWeight: 400,
          color: REF.bodyText,
          overflow: "visible",
        }}
      >
        {lines
          ? lines.map((line, i) => (
              <span
                key={`${stage}-${i}-${line}`}
                data-qa={`stage-${stage}-body-line-${i}`}
                className="block"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "visible",
                  height: Math.round(
                    CARD_INK.desc.size * CARD_INK.desc.lineHeight,
                  ),
                }}
              >
                {line}
              </span>
            ))
          : item.description}
      </p>

      <div
        data-process-pill
        data-qa={`stage-${stage}-pill`}
        className="absolute inline-flex items-center"
        style={{
          left: stage === "04" ? CARD_INK.pill.left - 1 : CARD_INK.pill.left,
          top: CARD_INK.pill.top,
          height: CARD_INK.pill.height,
          borderRadius: 5,
          border: `1px solid ${REF.pillBorder}`,
          background: "rgba(8,8,8,0.72)",
          paddingLeft: 7,
          paddingRight: stage === "04" ? 10 : 8,
          gap: 5,
          maxWidth:
            stage === "01"
              ? 94
              : stage === "02"
                ? 120
                : stage === "03"
                  ? 132
                  : 100,
          boxSizing: "border-box",
        }}
      >
        <PillIcon visual={item.visual} stage={stage} />
        <span
          data-qa={`stage-${stage}-pill-label`}
          className="truncate font-medium leading-none"
          style={{
            fontSize: 9.35,
            color: "#bdbdbd",
            letterSpacing: "-0.015em",
            transform: "translate(1px, 0.5px)",
          }}
        >
          {item.supportLabel}
        </span>
      </div>
    </div>
  );
}

function ConnectorSegment({ index }: { index: number }) {
  /** Exact reference line insets within each gap (40 / 34 / 33). */
  const lineSpec =
    index === 1
      ? { left: 4, width: 30 }
      : index === 2
        ? { left: 6, width: 24 }
        : { left: 4, width: 24 };
  /** Gap 3 is odd-width (33); nudge node/dot +1px to match mask centers. */
  const nodeNudgeX = index === 3 ? 1 : 0;

  return (
    <span
      aria-hidden
      data-process-connector
      data-qa={`connector-${index}-wrap`}
      className="relative block h-[16px] w-full"
    >
      <span
        data-qa={`connector-${index}-glow`}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[16px] w-[16px] -translate-y-1/2 rounded-full"
        style={{
          left: `calc(50% + ${nodeNudgeX}px)`,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(56,25,22,0.4), transparent 68%)",
        }}
      />
      <span
        data-process-rail-segment
        data-qa={`connector-${index}-line`}
        className="absolute top-1/2 -translate-y-1/2"
        style={{
          left: lineSpec.left,
          width: lineSpec.width,
          height: 3,
          background: REF.connector,
          opacity: 0.92,
        }}
      />
      <span
        data-process-node
        data-qa={`connector-${index}-node`}
        className="absolute top-1/2 flex items-center justify-center rounded-full"
        style={{
          left: `calc(50% + ${nodeNudgeX}px)`,
          transform: "translate(-50%, -50%)",
          width: 13,
          height: 13,
          border: `1.5px solid ${REF.connector}`,
          background: "#111111",
          boxSizing: "border-box",
        }}
      >
        <span
          data-qa={`connector-${index}-dot`}
          className="rounded-full"
          style={{ width: 5, height: 5, background: REF.connector }}
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
            <ConnectorSegment index={index + 1} />
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_78%_66%_at_50%_58%,rgba(56,25,22,1.18),transparent_56%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_88%_50%_at_50%_20%,rgba(56,25,22,0.66),transparent_52%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_130%_110%_at_50%_50%,transparent_58%,rgba(0,0,0,0.18)_100%)]" />
      </div>

      <div
        className={
          referenceMode
            ? "relative z-10 flex h-full flex-col"
            : "relative z-10 mx-auto w-full max-w-[1024px] px-0 pb-16 pt-10 sm:pb-20 sm:pt-12 xl:min-h-[467px] xl:pb-[67px] xl:pt-0"
        }
      >
        <header
          data-qa="heading"
          className={
            referenceMode
              ? "pointer-events-none absolute inset-x-0 text-center"
              : "mx-auto max-w-3xl px-6 pt-2 text-center xl:pt-[49px]"
          }
          style={referenceMode ? { top: 0, height: 160 } : undefined}
        >
          <p
            data-qa="heading-eyebrow"
            className={`font-semibold uppercase leading-none ${
              referenceMode ? "absolute inset-x-0" : ""
            }`}
            style={{
              top: referenceMode ? 49 : undefined,
              left: referenceMode ? 1 : undefined,
              fontSize: referenceMode ? 9.4 : 11,
              letterSpacing: referenceMode ? "0.142em" : "0.2em",
              fontWeight: 700,
              color: "#711929",
            }}
          >
            {content.eyebrow}
          </p>
          <h2
            data-qa="heading-title"
            className={`font-display ${
              referenceMode
                ? "absolute inset-x-0"
                : "mt-4 text-[28px] sm:text-[32px] xl:text-[34px]"
            }`}
            style={{
              top: referenceMode ? 70 : undefined,
              fontSize: referenceMode ? 29.85 : undefined,
              lineHeight: referenceMode ? "30px" : 1.15,
              letterSpacing: referenceMode ? "0.002em" : "0.01em",
              fontWeight: 600,
              color: REF.title,
              transform: referenceMode ? "translateX(3px)" : undefined,
            }}
          >
            {content.title}
          </h2>
          <p
            data-qa="heading-support"
            className={`mx-auto ${
              referenceMode ? "absolute inset-x-0" : "mt-3"
            }`}
            style={{
              top: referenceMode ? 112 : undefined,
              maxWidth: referenceMode ? 452 : 460,
              fontSize: referenceMode ? 12.5 : 13.5,
              lineHeight: 1.3,
              letterSpacing: referenceMode ? "0.003em" : undefined,
              color: REF.supportText,
              whiteSpace: referenceMode ? "nowrap" : undefined,
              transform: referenceMode ? "translateX(2px)" : undefined,
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
