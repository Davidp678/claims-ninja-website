import type { HomeProcessStep } from "@/lib/i18n/content/home";
import { StageArtwork } from "./artwork";
import { PillIcon } from "./PillIcon";
import { PROCESS, type ProcessStageId } from "./tokens";

/** Native HTML/CSS/SVG stage card — no reference imagery. */
export function ProcessStageCard({
  item,
  referenceMode,
}: {
  item: HomeProcessStep;
  referenceMode?: boolean;
}) {
  const stage = item.step as ProcessStageId;
  const ink = PROCESS.ink;
  const lines = referenceMode ? item.descriptionLines : null;
  const titleSize = stage === "04" ? 11.8 : ink.title.size;
  const pillMax = PROCESS.pillMaxWidth[stage];
  const textNudge = { "01": 2, "02": 2, "03": 1, "04": 0 }[stage];
  const numberTopNudge = { "01": 1, "02": 1, "03": 0, "04": 1 }[stage];
  const pillNudge = { "01": 0, "02": 1, "03": -1, "04": -2 }[stage];
  const pillRightPadding = { "01": 8, "02": 7, "03": 8, "04": 7 }[stage];

  return (
    <div
      data-process-card
      data-qa={`stage-${stage}-card`}
      data-width={item.width}
      className="group relative flex h-full min-h-0 flex-col overflow-visible"
      style={{
        borderRadius: PROCESS.cardRadius,
        background: PROCESS.cardBg,
        border: `1px solid ${PROCESS.cardBorder}`,
        boxShadow: PROCESS.cardShadow,
      }}
    >
      <span
        data-process-step
        data-qa={`stage-${stage}-number`}
        className="absolute font-display leading-none tracking-tight"
        style={{
          left: ink.number.left + textNudge,
          top: ink.number.top + numberTopNudge,
          fontSize: stage === "01" ? 14 : ink.number.size,
          fontWeight: 600,
          color: `rgb(${PROCESS.numberRedRgb})`,
          WebkitTextFillColor: `rgb(${PROCESS.numberRedRgb})`,
        }}
      >
        {item.step}
      </span>

      <div
        data-process-visual
        className="absolute"
        style={{
          left: ink.visual.left,
          right: 8,
          top: ink.visual.top,
          height: ink.visual.height,
        }}
      >
        <StageArtwork visual={item.visual} stage={stage} />
      </div>

      <h3
        data-process-title
        data-qa={`stage-${stage}-title`}
        className="absolute font-display tracking-tight"
        style={{
          left: ink.title.left + textNudge,
          right: stage === "01" || stage === "04" ? 12 : 18,
          top: ink.title.top + (stage === "04" ? 1 : 0),
          fontSize: titleSize,
          fontWeight: 500,
          lineHeight: 1.05,
          letterSpacing: stage === "04" ? "-0.05em" : "-0.005em",
          color: PROCESS.title,
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
          left: ink.desc.left + textNudge,
          right: stage === "01" || stage === "04" ? 12 : 20,
          top: ink.desc.top,
          fontSize: ink.desc.size,
          lineHeight: ink.desc.lineHeight,
          letterSpacing: "-0.01em",
          fontWeight: 400,
          color: PROCESS.bodyText,
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
                  height: Math.round(ink.desc.size * ink.desc.lineHeight),
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
          left: ink.pill.left + pillNudge,
          top: ink.pill.top,
          height: ink.pill.height,
          borderRadius: 5,
          border: `1px solid ${PROCESS.pillBorder}`,
          background: PROCESS.pillBg,
          paddingLeft: 7,
          paddingRight: pillRightPadding,
          gap: 5,
          maxWidth: pillMax,
          boxSizing: "border-box",
        }}
      >
        <span className="flex h-[14px] w-[14px] shrink-0 items-center justify-center leading-none">
          <PillIcon visual={item.visual} stage={stage} />
        </span>
        <span
          data-qa={`stage-${stage}-pill-label`}
          className="leading-none"
          style={{
            fontSize: 9.5,
            fontWeight: 400,
            color: PROCESS.pillLabel,
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
          }}
        >
          {item.supportLabel}
        </span>
      </div>
    </div>
  );
}
