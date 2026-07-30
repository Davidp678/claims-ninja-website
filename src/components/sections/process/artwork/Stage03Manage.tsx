import { PrimaryIconFrame } from "../PrimaryIconFrame";
import { StrokeIcon } from "../StrokeIcon";
import { PROCESS } from "../tokens";

/**
 * Stage 03 — native people + speech bubble over a three-row checklist panel.
 */
export function Stage03Manage({ stage }: { stage: string }) {
  const rows = [
    { top: 10, checkTop: 9, barW: 92 },
    { top: 30, checkTop: 29, barW: 78 },
    { top: 50, checkTop: 49, barW: 64 },
  ] as const;

  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full overflow-visible"
    >
      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-[40px] top-[4px] h-[56px] w-[120px] rounded-[10px] blur-[7px]"
        style={{
          background:
            "radial-gradient(ellipse at 40% 40%, rgba(56,25,22,0.48), transparent 72%)",
        }}
      />

      <div
        data-qa={`stage-${stage}-rear-panel`}
        className="absolute overflow-hidden rounded-[9px]"
        style={{
          left: 25,
          top: 2,
          width: 160,
          height: 72,
          background: PROCESS.panelBg,
          border: `1px solid ${PROCESS.panelBorder}`,
        }}
      >
        {rows.map((row, i) => (
          <div
            key={i}
            data-qa={`stage-${stage}-row-${i}`}
            className="absolute flex h-[16px] items-center rounded-[4px]"
            style={{
              left: 28,
              right: 10,
              top: row.top,
              background: "rgba(0,0,0,0.42)",
              border: "1px solid rgba(255,255,255,0.08)",
              paddingLeft: 18,
            }}
          >
            <span
              data-qa={`stage-${stage}-bar-a-${i}`}
              className="h-[5px] rounded-full"
              style={{
                width: row.barW,
                background: "rgba(255,255,255,0.32)",
              }}
            />
          </div>
        ))}
      </div>

      {rows.map((row, i) => (
        <span
          key={i}
          data-qa={`stage-${stage}-check-${i}`}
          className="absolute z-20 flex h-[16px] w-[16px] items-center justify-center rounded-full"
          style={{
            left: 42,
            top: row.checkTop,
            border: `1.5px solid ${PROCESS.mutedRed}`,
            background: PROCESS.panelBg,
          }}
        >
          <svg
            aria-hidden
            data-qa={`stage-${stage}-check-mark-${i}`}
            viewBox="0 0 12 12"
            className="h-[8px] w-[8px]"
            fill="none"
            stroke={PROCESS.mutedRed}
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m2.2 6.2 2.5 2.5L9.9 3.5" />
          </svg>
        </span>
      ))}

      <div className="absolute left-[1px] z-10" style={{ top: PROCESS.frameTop }}>
        <PrimaryIconFrame stage={stage} size={48}>
          <StrokeIcon
            className="h-[32px] w-[32px]"
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
