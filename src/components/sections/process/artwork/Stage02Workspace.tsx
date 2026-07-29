import { PrimaryIconFrame } from "../PrimaryIconFrame";
import { StrokeIcon } from "../StrokeIcon";
import { PROCESS } from "../tokens";

/**
 * Stage 02 — matches reference crop structure:
 * framed 2×2 mark over a workspace panel with header (active dot + bar),
 * left nav dots, content bars, and three lower blocks.
 */
export function Stage02Workspace({ stage }: { stage: string }) {
  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full overflow-visible"
    >
      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-[36px] top-[6px] h-[52px] w-[120px] rounded-[10px] blur-[6px]"
        style={{
          background:
            "radial-gradient(ellipse at 40% 45%, rgba(56,25,22,0.42), transparent 70%)",
        }}
      />

      <div
        data-qa={`stage-${stage}-rear-panel`}
        className="absolute left-[24px] top-[2px] h-[72px] overflow-hidden rounded-[9px]"
        style={{
          width: 170,
          background: PROCESS.panelBg,
          border: `1px solid ${PROCESS.panelBorder}`,
        }}
      >
        {/* Header: active dot + short bar */}
        <span
          data-qa={`stage-${stage}-active-dot`}
          className="absolute left-[9px] top-[9px] h-[9px] w-[9px] rounded-full"
          style={{ background: PROCESS.activeDot }}
        />
        <span
          data-qa={`stage-${stage}-content-bar-0`}
          className="absolute left-[22px] top-[12px] h-[4px] w-[28px] rounded-[2px]"
          style={{ background: "rgba(255,255,255,0.4)" }}
        />

        {/* Nav dots column */}
        <div
          data-qa={`stage-${stage}-sidebar`}
          className="absolute left-[11px] top-[26px]"
        >
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              data-qa={`stage-${stage}-sidebar-row-${i}`}
              className="mb-[7px] block h-[4px] w-[4px] rounded-full last:mb-0"
              style={{ background: "rgba(255,255,255,0.28)" }}
            />
          ))}
        </div>

        {/* Content bars */}
        <span
          data-qa={`stage-${stage}-content-bar-1`}
          className="absolute left-[28px] top-[28px] h-[8px] rounded-[3px]"
          style={{
            width: 118,
            background: "rgba(255,255,255,0.18)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        />
        <span
          className="absolute left-[28px] top-[42px] h-[8px] rounded-[3px]"
          style={{
            width: 96,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        />

        {/* Lower blocks */}
        <div className="absolute bottom-[8px] left-[28px] flex gap-[5px]">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              data-qa={`stage-${stage}-lower-block-${i}`}
              className="h-[14px] w-[14px] rounded-[3px]"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute left-[1px]" style={{ top: PROCESS.frameTop }}>
        <PrimaryIconFrame stage={stage} size={48}>
          <StrokeIcon
            className="h-[34px] w-[34px]"
            strokeWidth={1.9}
            color={PROCESS.mutedRed}
            qa={`stage-${stage}-symbol`}
          >
            <rect x="2.2" y="3" width="8.4" height="7.4" rx="1.4" />
            <rect x="13.4" y="3" width="8.4" height="7.4" rx="1.4" />
            <rect x="2.2" y="13.6" width="8.4" height="7.4" rx="1.4" />
            <rect x="13.4" y="13.6" width="8.4" height="7.4" rx="1.4" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}
