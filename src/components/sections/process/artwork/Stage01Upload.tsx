import { PROCESS } from "../tokens";

/** Stage 01 — reference-extracted artwork + QA geometry markers. */
export function Stage01Upload({ stage }: { stage: string }) {
  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/workflow-mock/stage-01-art.png"
        alt=""
        width={135}
        height={78}
        draggable={false}
        className="pointer-events-none absolute left-0 top-0 select-none"
        style={{ imageRendering: "auto" }}
      />

      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-0 top-[2px] h-[48px] w-[48px] opacity-0"
      />
      <div
        data-qa={`stage-${stage}-icon-frame`}
        className="absolute left-[1px] opacity-0"
        style={{ top: PROCESS.frameTop, width: 50, height: 50 }}
      />
      <div
        data-qa={`stage-${stage}-symbol`}
        className="absolute left-[8px] opacity-0"
        style={{ top: PROCESS.frameTop + 7, width: 36, height: 36 }}
      />
    </div>
  );
}
