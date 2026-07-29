import type { ReactNode } from "react";
import type { HomeProcessStep } from "@/lib/i18n/content/home";
import { ProcessConnector } from "./ProcessConnector";
import { ProcessStageCard } from "./ProcessStageCard";
import { PROCESS } from "./tokens";

export function ProcessDesktopJourney({
  steps,
  referenceMode,
}: {
  steps: HomeProcessStep[];
  referenceMode?: boolean;
}) {
  const widthSum = PROCESS.widths.reduce((a, b) => a + b, 0);
  const gapSum = PROCESS.gaps.reduce((a, b) => a + b, 0);
  const padRight = PROCESS.width - PROCESS.padLeft - widthSum - gapSum;
  const connectorTop = PROCESS.connectorY - PROCESS.cardTop;

  const track = [
    `${PROCESS.widths[0]}${referenceMode ? "px" : "fr"}`,
    `${PROCESS.gaps[0]}${referenceMode ? "px" : "fr"}`,
    `${PROCESS.widths[1]}${referenceMode ? "px" : "fr"}`,
    `${PROCESS.gaps[1]}${referenceMode ? "px" : "fr"}`,
    `${PROCESS.widths[2]}${referenceMode ? "px" : "fr"}`,
    `${PROCESS.gaps[2]}${referenceMode ? "px" : "fr"}`,
    `${PROCESS.widths[3]}${referenceMode ? "px" : "fr"}`,
  ].join(" ");

  const cells: ReactNode[] = [];
  steps.forEach((item, index) => {
    cells.push(
      <div key={item.step} className="relative h-full min-w-0">
        <ProcessStageCard item={item} referenceMode={referenceMode} />
      </div>,
    );
    if (index < steps.length - 1) {
      const connectorIndex = (index + 1) as 1 | 2 | 3;
      cells.push(
        <div key={`gap-${item.step}`} aria-hidden className="relative h-full">
          <div
            className="absolute inset-x-0 -translate-y-1/2"
            style={{ top: connectorTop }}
          >
            <ProcessConnector index={connectorIndex} />
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
              height: PROCESS.cardHeight,
              paddingLeft: PROCESS.padLeft,
              paddingRight: padRight,
            }
          : { minHeight: PROCESS.cardHeight }
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
