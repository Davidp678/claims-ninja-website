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
  /** Art strip is 40px tall extracted at canvas y=220 → card-relative top 50. */
  const connectorTop = 220 - PROCESS.cardTop;

  const track = [
    `${PROCESS.widths[0]}px`,
    `${PROCESS.gaps[0]}px`,
    `${PROCESS.widths[1]}px`,
    `${PROCESS.gaps[1]}px`,
    `${PROCESS.widths[2]}px`,
    `${PROCESS.gaps[2]}px`,
    `${PROCESS.widths[3]}px`,
  ].join(" ");

  const cells: ReactNode[] = [];
  steps.forEach((item, index) => {
    cells.push(
      <div key={item.step} className="relative h-full min-w-0">
        <ProcessStageCard
          item={item}
          referenceMode={referenceMode}
          desktopRaster
        />
      </div>,
    );
    if (index < steps.length - 1) {
      const connectorIndex = (index + 1) as 1 | 2 | 3;
      cells.push(
        <div key={`gap-${item.step}`} aria-hidden className="relative h-full">
          <div className="absolute inset-x-0" style={{ top: connectorTop }}>
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
          : "relative mx-auto hidden w-full max-w-[1024px] xl:block"
      }
      style={{
        height: PROCESS.cardHeight,
        paddingLeft: PROCESS.padLeft,
        paddingRight: padRight,
      }}
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
