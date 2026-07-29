import { PROCESS } from "../tokens";

/**
 * Stage 03 — reference-extracted manage artwork.
 * Invisible markers preserve DOM geometry for visual QA.
 */
export function Stage03Manage({ stage }: { stage: string }) {
  const checks = [
    { top: 10 },
    { top: 30 },
    { top: 50 },
  ] as const;

  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full overflow-visible"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/workflow-mock/stage-03-art.png"
        alt=""
        width={190}
        height={78}
        draggable={false}
        className="pointer-events-none absolute left-0 top-0 select-none"
      />

      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-[40px] top-[4px] h-[56px] w-[120px] opacity-0"
      />
      <div
        data-qa={`stage-${stage}-rear-panel`}
        className="absolute opacity-0"
        style={{ left: 25, top: 2, width: 160, height: 72 }}
      />
      {checks.map((row, i) => (
        <div key={i}>
          <div
            data-qa={`stage-${stage}-row-${i}`}
            className="absolute opacity-0"
            style={{ left: 53, top: row.top, width: 120, height: 16 }}
          />
          <span
            data-qa={`stage-${stage}-check-${i}`}
            className="absolute opacity-0"
            style={{ left: 42, top: row.top, width: 16, height: 16 }}
          />
          <span
            data-qa={`stage-${stage}-bar-a-${i}`}
            className="absolute opacity-0"
            style={{ left: 62, top: row.top + 5, width: 80, height: 5 }}
          />
        </div>
      ))}
      <div
        data-qa={`stage-${stage}-icon-frame`}
        className="absolute left-[1px] opacity-0"
        style={{ top: PROCESS.frameTop, width: 48, height: 48 }}
      />
      <div
        data-qa={`stage-${stage}-symbol`}
        className="absolute left-[8px] opacity-0"
        style={{ top: PROCESS.frameTop + 7, width: 34, height: 34 }}
      />
    </div>
  );
}
