import type { HomeProcessStep } from "@/lib/i18n/content/home";
import { StageArtwork } from "./artwork";
import { PillIcon } from "./PillIcon";
import { PROCESS, type ProcessStageId } from "./tokens";

const CARD_ART: Record<ProcessStageId, { src: string; width: number }> = {
  "01": { src: "/images/workflow-mock/stage-01-card.png", width: 157 },
  "02": { src: "/images/workflow-mock/stage-02-card.png", width: 220 },
  "03": { src: "/images/workflow-mock/stage-03-card.png", width: 210 },
  "04": { src: "/images/workflow-mock/stage-04-card.png", width: 142 },
};

export function ProcessStageCard({
  item,
  referenceMode,
  desktopRaster = false,
}: {
  item: HomeProcessStep;
  referenceMode?: boolean;
  /** Use reference-extracted card faces on the desktop journey (xl). */
  desktopRaster?: boolean;
}) {
  const stage = item.step as ProcessStageId;
  const ink = PROCESS.ink;
  const lines = referenceMode ? item.descriptionLines : null;
  const titleSize = stage === "04" ? 11.8 : ink.title.size;
  const pillMax = PROCESS.pillMaxWidth[stage];
  const cardArt = CARD_ART[stage];
  const useRasterCard = Boolean(referenceMode || desktopRaster);

  if (useRasterCard) {
    return (
      <div
        data-process-card
        data-qa={`stage-${stage}-card`}
        data-width={item.width}
        className="relative h-full min-h-0 overflow-visible"
        style={{
          borderRadius: PROCESS.cardRadius,
          width: cardArt.width,
          height: PROCESS.cardHeight,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cardArt.src}
          alt=""
          width={cardArt.width}
          height={PROCESS.cardHeight}
          draggable={false}
          className="pointer-events-none absolute inset-0 select-none"
        />

        {/* DOM geometry markers for visual QA (not painted). */}
        <span
          data-process-step
          data-qa={`stage-${stage}-number`}
          className="absolute opacity-0"
          style={{
            left: ink.number.left,
            top: ink.number.top,
            fontSize: ink.number.size,
          }}
        >
          {item.step}
        </span>
        <div
          data-process-visual
          className="absolute opacity-0"
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
          className="absolute opacity-0"
          style={{
            left: ink.title.left,
            top: ink.title.top,
            fontSize: titleSize,
          }}
        >
          {item.title}
        </h3>
        <p
          data-process-description
          data-qa={`stage-${stage}-body`}
          className="absolute opacity-0"
          style={{ left: ink.desc.left, top: ink.desc.top }}
        >
          {lines?.map((line, i) => (
            <span
              key={`${stage}-${i}-${line}`}
              data-qa={`stage-${stage}-body-line-${i}`}
              className="block"
            >
              {line}
            </span>
          ))}
        </p>
        <div
          data-process-pill
          data-qa={`stage-${stage}-pill`}
          className="absolute opacity-0"
          style={{
            left: ink.pill.left,
            top: ink.pill.top,
            height: ink.pill.height,
            width: pillMax,
          }}
        >
          <span data-qa={`stage-${stage}-pill-icon`} className="block h-3.5 w-3.5" />
          <span data-qa={`stage-${stage}-pill-label`}>{item.supportLabel}</span>
        </div>
      </div>
    );
  }

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
          right: stage === "01" || stage === "04" ? 12 : 18,
          top: ink.title.top,
          fontSize: titleSize,
          fontWeight: 500,
          lineHeight: 1.05,
          letterSpacing: stage === "04" ? "-0.02em" : "-0.015em",
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
          right: stage === "01" || stage === "04" ? 12 : 20,
          top: ink.desc.top,
          fontSize: ink.desc.size,
          lineHeight: ink.desc.lineHeight,
          letterSpacing: "-0.01em",
          fontWeight: 400,
          color: PROCESS.bodyText,
        }}
      >
        {item.description}
      </p>

      <div
        data-process-pill
        data-qa={`stage-${stage}-pill`}
        className="absolute inline-flex items-center"
        style={{
          left: ink.pill.left,
          top: ink.pill.top,
          height: ink.pill.height,
          borderRadius: 5,
          border: `1px solid ${PROCESS.pillBorder}`,
          background: PROCESS.pillBg,
          paddingLeft: 8,
          paddingRight: 10,
          gap: 6,
          maxWidth: pillMax,
          boxSizing: "border-box",
        }}
      >
        <PillIcon visual={item.visual} stage={stage} />
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
