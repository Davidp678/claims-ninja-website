import { PROCESS } from "../tokens";

/**
 * Stage 02 — reference-extracted workspace artwork.
 * Invisible markers preserve DOM geometry for visual QA.
 */
export function Stage02Workspace({ stage }: { stage: string }) {
  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full overflow-visible"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/workflow-mock/stage-02-art.png"
        alt=""
        width={200}
        height={78}
        draggable={false}
        className="pointer-events-none absolute left-0 top-0 select-none"
      />

      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-[40px] top-[4px] h-[56px] w-[130px] opacity-0"
      />
      <div
        data-qa={`stage-${stage}-rear-panel`}
        className="absolute opacity-0"
        style={{ left: 25, top: 2, width: 170, height: 72 }}
      />
      <div
        data-qa={`stage-${stage}-sidebar`}
        className="absolute opacity-0"
        style={{ left: 25, top: 2, width: 34, height: 72 }}
      />
      <div
        data-qa={`stage-${stage}-divider`}
        className="absolute opacity-0"
        style={{ left: 59, top: 2, width: 1, height: 72 }}
      />
      <span
        data-qa={`stage-${stage}-active-dot`}
        className="absolute rounded-full opacity-0"
        style={{ left: 38, top: 12, width: 7, height: 7 }}
      />
      <span
        data-qa={`stage-${stage}-sidebar-row-0`}
        className="absolute opacity-0"
        style={{ left: 48, top: 14, width: 8, height: 3 }}
      />
      <span
        data-qa={`stage-${stage}-sidebar-row-1`}
        className="absolute opacity-0"
        style={{ left: 48, top: 25, width: 7, height: 2 }}
      />
      <span
        data-qa={`stage-${stage}-content-bar-0`}
        className="absolute opacity-0"
        style={{ left: 70, top: 12, width: 70, height: 6 }}
      />
      <span
        data-qa={`stage-${stage}-content-bar-1`}
        className="absolute opacity-0"
        style={{ left: 70, top: 26, width: 90, height: 6 }}
      />
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          data-qa={`stage-${stage}-lower-block-${i}`}
          className="absolute opacity-0"
          style={{ left: 70 + i * 20, top: 52, width: 14, height: 14 }}
        />
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
