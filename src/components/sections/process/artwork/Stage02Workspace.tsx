import { PrimaryIconFrame } from "../PrimaryIconFrame";
import { StrokeIcon } from "../StrokeIcon";
import { PROCESS } from "../tokens";

/**
 * Stage 02: 2×2 tile mark over a Claim Workspace UI panel
 * (sidebar active-dot + nav rows, content bars, lower blocks).
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
        <div className="relative flex h-full">
          <div
            data-qa={`stage-${stage}-sidebar`}
            className="relative w-[24px] shrink-0"
            style={{
              background: "#090909",
              borderRight: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <span
              data-qa={`stage-${stage}-active-dot`}
              className="absolute left-1/2 top-[8px] h-[9px] w-[9px] -translate-x-1/2 rounded-full"
              style={{ background: PROCESS.activeDot }}
            />
            {[22, 32, 42, 52].map((top, i) => (
              <span
                key={top}
                data-qa={`stage-${stage}-sidebar-row-${i}`}
                className="absolute left-1/2 h-[2px] w-[11px] -translate-x-1/2 rounded-[1px]"
                style={{
                  top,
                  background: "rgba(255,255,255,0.28)",
                }}
              />
            ))}
          </div>

          <div
            data-qa={`stage-${stage}-divider`}
            className="w-px shrink-0"
            style={{ background: "rgba(255,255,255,0.14)" }}
          />

          <div className="relative flex min-w-0 flex-1 flex-col px-[9px] pb-[8px] pt-[10px]">
            <span
              data-qa={`stage-${stage}-content-bar-0`}
              className="mb-[7px] h-[7px] w-[70%] rounded-[3px]"
              style={{ background: "rgba(255,255,255,0.28)" }}
            />
            <span
              data-qa={`stage-${stage}-content-bar-1`}
              className="mb-auto h-[7px] w-[88%] rounded-[3px]"
              style={{ background: "rgba(255,255,255,0.18)" }}
            />
            <div className="mt-[7px] flex gap-[5px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  data-qa={`stage-${stage}-lower-block-${i}`}
                  className="h-[15px] w-[15px] rounded-[3px]"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[1px]" style={{ top: PROCESS.frameTop }}>
        <PrimaryIconFrame stage={stage} size={48}>
          <StrokeIcon
            className="h-[34px] w-[34px]"
            strokeWidth={1.85}
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
