import { PrimaryIconFrame } from "../PrimaryIconFrame";
import { StrokeIcon } from "../StrokeIcon";
import { PROCESS } from "../tokens";

/**
 * Stage 03 — people and communication in front of a layered three-row claim list.
 */
export function Stage03Manage({ stage }: { stage: string }) {
  const rows = [
    { top: 1, barWidth: 47 },
    { top: 27, barWidth: 65 },
    { top: 53, barWidth: 62 },
  ] as const;

  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full overflow-visible"
    >
      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-[63px] top-[-8px] h-[90px] w-[115px] rounded-[12px] blur-[9px]"
        style={{
          background:
            "radial-gradient(ellipse at 48% 46%, rgba(56,25,22,0.42), transparent 70%)",
        }}
      />

      <div
        data-qa={`stage-${stage}-rear-panel`}
        className="absolute rounded-[9px]"
        style={{
          left: 24,
          top: 1,
          width: 160,
          height: 72,
          background: "rgba(9,9,9,0.18)",
          border: "1px solid rgba(255,255,255,0.03)",
          boxShadow: "6px -5px 14px rgba(0,0,0,0.28)",
        }}
      />

      <div
        className="absolute overflow-hidden rounded-[8px]"
        style={{
          left: 72,
          top: -6,
          width: 115,
          height: 82,
          background: "#0d0d0d",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "-7px 7px 15px rgba(0,0,0,0.34), 0 0 18px rgba(56,25,22,0.15)",
        }}
      >
        {rows.map((row, index) => (
          <div
            key={index}
            data-qa={`stage-${stage}-row-${index}`}
            className="absolute h-[20px] rounded-[4px]"
            style={{
              left: 7,
              right: 7,
              top: row.top,
              background: "rgba(0,0,0,0.36)",
              border: "1px solid rgba(255,255,255,0.065)",
            }}
          >
            <span
              data-qa={`stage-${stage}-check-${index}`}
              className="absolute flex h-[14px] w-[14px] items-center justify-center rounded-full"
              style={{
                left: 2,
                top: 2,
                border: `1px solid ${PROCESS.mutedRed}`,
                background: PROCESS.panelBg,
              }}
            >
              <svg
                aria-hidden
                data-qa={`stage-${stage}-check-mark-${index}`}
                viewBox="0 0 12 12"
                className="h-[7px] w-[7px]"
                fill="none"
                stroke={PROCESS.mutedRed}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m2.2 6.2 2.5 2.5L9.9 3.5" />
              </svg>
            </span>
            <span
              data-qa={`stage-${stage}-bar-a-${index}`}
              className="absolute h-[5px] rounded-full"
              style={{
                left: 26,
                top: 7,
                width: row.barWidth,
                background: "rgba(255,255,255,0.16)",
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute left-[-2px] z-20" style={{ top: PROCESS.frameTop }}>
        <PrimaryIconFrame stage={stage} size={52}>
          <StrokeIcon
            className="h-[34px] w-[32px] translate-x-[2px] translate-y-[3px]"
            strokeWidth={1.85}
            color={PROCESS.mutedRed}
            qa={`stage-${stage}-symbol`}
          >
            <circle cx="8" cy="9" r="3.1" />
            <path d="M2.8 20c.9-3.1 3.2-4.9 5.2-4.9s4.3 1.8 5.2 4.9" />
            <circle cx="17.2" cy="10" r="2.6" />
            <path d="M13.4 20c1.1-2.4 2.9-3.6 4.4-3.6 1.2 0 2.3.6 3.2 1.8" />
            <rect x="15.2" y="2" width="8.2" height="5.2" rx="1.5" />
            <path d="M17.2 7.2 16.2 9.2 19 7.2" />
            <circle cx="17.2" cy="4.6" r="0.55" fill={PROCESS.mutedRed} />
            <circle cx="19.3" cy="4.6" r="0.55" fill={PROCESS.mutedRed} />
            <circle cx="21.4" cy="4.6" r="0.55" fill={PROCESS.mutedRed} />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}
