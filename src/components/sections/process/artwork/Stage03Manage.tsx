import { PrimaryIconFrame } from "../PrimaryIconFrame";
import { StrokeIcon } from "../StrokeIcon";
import { PROCESS } from "../tokens";

/**
 * Stage 03: people + speech-bubble mark over a three-row checklist panel.
 */
export function Stage03Manage({ stage }: { stage: string }) {
  /** Check tops relative to visual: canvas 208/228/248 − cardTop 170 − visualTop 28. */
  const checkTops = [9, 29, 49] as const;

  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full overflow-visible"
    >
      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-[34px] top-[8px] h-[52px] w-[110px] rounded-[10px] blur-[6px]"
        style={{
          background:
            "radial-gradient(ellipse at 45% 45%, rgba(56,25,22,0.4), transparent 70%)",
        }}
      />

      <div
        data-qa={`stage-${stage}-rear-panel`}
        className="absolute left-[24px] top-[1px] h-[72px] overflow-hidden rounded-[9px]"
        style={{
          width: 160,
          background: PROCESS.panelBg,
          border: `1px solid ${PROCESS.panelBorder}`,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            data-qa={`stage-${stage}-row-${i}`}
            className="absolute left-[26px] right-[10px] flex h-[14px] items-center gap-[5px] rounded-[4px] px-[5px]"
            style={{
              top: 8 + i * 20,
              background: "rgba(0,0,0,0.38)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            <span
              data-qa={`stage-${stage}-bar-a-${i}`}
              className="h-[4px] flex-1 rounded-[2px]"
              style={{ background: "rgba(255,255,255,0.17)" }}
            />
            <span
              data-qa={`stage-${stage}-bar-b-${i}`}
              className="h-[4px] rounded-[2px]"
              style={{
                width: i === 0 ? 18 : i === 1 ? 14 : 10,
                background: "rgba(255,255,255,0.11)",
              }}
            />
          </div>
        ))}
        <span
          data-qa={`stage-${stage}-right-edge`}
          className="absolute bottom-[7px] right-[6px] top-[7px] w-px"
          style={{ background: "rgba(255,255,255,0.12)" }}
        />
      </div>

      {checkTops.map((top, i) => (
        <span
          key={i}
          data-qa={`stage-${stage}-check-${i}`}
          className="absolute z-20 flex h-[16px] w-[16px] items-center justify-center rounded-full"
          style={{
            left: 41,
            top,
            border: `1.35px solid ${PROCESS.mutedRed}`,
            color: PROCESS.mutedRed,
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m2.2 6.2 2.5 2.5L9.9 3.5" />
          </svg>
        </span>
      ))}

      <div className="absolute left-[2px] top-[14px]">
        <PrimaryIconFrame stage={stage} size={48}>
          <StrokeIcon
            className="h-[33px] w-[33px]"
            strokeWidth={1.75}
            color={PROCESS.mutedRed}
            qa={`stage-${stage}-symbol`}
          >
            <circle cx="7.8" cy="7.4" r="3.1" />
            <circle cx="15.7" cy="8.4" r="2.6" />
            <path d="M2.9 18.9c.8-2.9 3-4.7 5.1-4.7s4.3 1.8 5.1 4.7" />
            <path d="M13.4 14.9c1.85-.5 3.4.3 4.4 1.9" />
            <rect x="14.9" y="2.9" width="5.8" height="4" rx="1.15" />
            <path d="M16.1 4.85h3M16.1 6h2.1" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}
