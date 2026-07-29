import { PrimaryIconFrame } from "../PrimaryIconFrame";
import { StrokeIcon } from "../StrokeIcon";
import { PROCESS } from "../tokens";

/**
 * Stage 03 — people + speech bubble over a three-row checklist panel.
 * Checks sit on the left edge of each row (mask x=589).
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
        className="pointer-events-none absolute left-[34px] top-[6px] h-[52px] w-[110px] rounded-[10px] blur-[6px]"
        style={{
          background:
            "radial-gradient(ellipse at 45% 45%, rgba(56,25,22,0.4), transparent 70%)",
        }}
      />

      <div
        data-qa={`stage-${stage}-rear-panel`}
        className="absolute left-[24px] top-[2px] h-[72px] overflow-hidden rounded-[9px]"
        style={{
          width: 160,
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
              background: "rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,255,255,0.1)",
              paddingLeft: 14,
            }}
          >
            <span
              data-qa={`stage-${stage}-bar-a-${i}`}
              className="h-[5px] rounded-full"
              style={{
                width: row.barW,
                background: "rgba(255,255,255,0.34)",
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
            left: 41,
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

      <div className="absolute left-[2px]" style={{ top: PROCESS.frameTop }}>
        <PrimaryIconFrame stage={stage} size={48}>
          <StrokeIcon
            className="h-[34px] w-[34px]"
            strokeWidth={1.85}
            color={PROCESS.mutedRed}
            qa={`stage-${stage}-symbol`}
          >
            <circle cx="7.6" cy="8.2" r="3.2" />
            <circle cx="15.4" cy="9" r="2.6" />
            <path d="M2.6 19.4c.85-3 3.1-4.8 5.2-4.8s4.3 1.8 5.15 4.8" />
            <path d="M13.2 15.4c1.9-.55 3.5.25 4.55 2" />
            <rect x="14.4" y="2.2" width="6.4" height="4.4" rx="1.25" />
            <circle cx="16" cy="4.4" r="0.6" fill={PROCESS.mutedRed} />
            <circle cx="17.7" cy="4.4" r="0.6" fill={PROCESS.mutedRed} />
            <circle cx="19.4" cy="4.4" r="0.6" fill={PROCESS.mutedRed} />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}
