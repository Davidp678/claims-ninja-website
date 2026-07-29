import { PROCESS } from "../tokens";

/** Stage 04 — reference-extracted artwork + QA geometry markers. */
export function Stage04Recover({ stage }: { stage: string }) {
  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/workflow-mock/stage-04-art.png"
        alt=""
        width={120}
        height={78}
        draggable={false}
        className="pointer-events-none absolute left-0 top-0 select-none"
      />

      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-0 top-[2px] h-[48px] w-[48px] opacity-0"
      />
      <div
        data-qa={`stage-${stage}-icon-frame`}
        className="absolute left-0 opacity-0"
        style={{ top: PROCESS.frameTop, width: 50, height: 50 }}
      />
      <div
        data-qa={`stage-${stage}-symbol`}
        className="absolute left-[7px] opacity-0"
        style={{ top: PROCESS.frameTop + 7, width: 36, height: 36 }}
      />
    </div>
  );
}
