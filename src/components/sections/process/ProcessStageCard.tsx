import type { HomeProcessStep } from "@/lib/i18n/content/home";
import { StageArtwork } from "./artwork";
import { PillIcon } from "./PillIcon";
import { PROCESS, type ProcessStageId } from "./tokens";

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
  const titleSize = stage === "04" ? 11.9 : ink.title.size;
  const pillMax =
    PROCESS.pillMaxWidth[stage] ?? PROCESS.pillMaxWidth["01"];

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
          left: ink.number.left,
          top: ink.number.top,
          fontSize: ink.number.size,
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
          left: ink.title.left,
          right: stage === "01" ? 16 : stage === "04" ? 10 : 20,
          top: ink.title.top,
          fontSize: titleSize,
          fontWeight: 500,
          lineHeight: 1.02,
          letterSpacing: stage === "04" ? "-0.024em" : "-0.02em",
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
          left: ink.desc.left,
          right: stage === "01" || stage === "04" ? 14 : 24,
          top: ink.desc.top,
          fontSize: ink.desc.size,
          lineHeight: ink.desc.lineHeight,
          letterSpacing: "-0.012em",
          fontWeight: 300,
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
          left: stage === "04" ? ink.pill.left - 1 : ink.pill.left,
          top: ink.pill.top,
          height: ink.pill.height,
          borderRadius: 5,
          border: `1px solid ${PROCESS.pillBorder}`,
          background: PROCESS.pillBg,
          paddingLeft: 7,
          paddingRight: stage === "04" ? 10 : 8,
          gap: 5,
          maxWidth: pillMax,
          boxSizing: "border-box",
        }}
      >
        <PillIcon visual={item.visual} stage={stage} />
        <span
          data-qa={`stage-${stage}-pill-label`}
          className="truncate leading-none"
          style={{
            fontSize: 9.1,
            fontWeight: 400,
            color: PROCESS.pillLabel,
            letterSpacing: "-0.018em",
            opacity: 0.92,
          }}
        >
          {item.supportLabel}
        </span>
      </div>
    </div>
  );
}
