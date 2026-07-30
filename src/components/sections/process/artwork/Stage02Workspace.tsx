import { PrimaryIconFrame } from "../PrimaryIconFrame";
import { StrokeIcon } from "../StrokeIcon";
import { PROCESS } from "../tokens";

/**
 * Stage 02 — native 2×2 mark over a Claim Workspace panel.
 * Sidebar: active red-dot + light bar, then inactive dot+bar rows.
 */
export function Stage02Workspace({ stage }: { stage: string }) {
  const inactive = [22, 34, 46, 58] as const;

  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full overflow-visible"
    >
      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-[40px] top-[4px] h-[56px] w-[130px] rounded-[10px] blur-[7px]"
        style={{
          background:
            "radial-gradient(ellipse at 35% 40%, rgba(56,25,22,0.5), transparent 72%)",
        }}
      />

      <div
        data-qa={`stage-${stage}-rear-panel`}
        className="absolute overflow-hidden rounded-[9px]"
        style={{
          left: 25,
          top: 2,
          width: 170,
          height: 72,
          background: PROCESS.panelBg,
          border: `1px solid ${PROCESS.panelBorder}`,
        }}
      >
        <div className="relative flex h-full">
          <div
            data-qa={`stage-${stage}-sidebar`}
            className="relative shrink-0"
            style={{
              width: 34,
              background: "#0a0a0a",
              borderRight: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <span
              data-qa={`stage-${stage}-active-dot`}
              className="absolute rounded-full"
              style={{
                left: 13,
                top: 10,
                width: 7,
                height: 7,
                background: PROCESS.activeDot,
                boxShadow: "0 0 5px rgba(194,74,72,0.55)",
              }}
            />
            <span
              data-qa={`stage-${stage}-sidebar-row-0`}
              className="absolute rounded-[1px]"
              style={{
                left: 23,
                top: 12,
                width: 8,
                height: 3,
                background: "rgba(255,255,255,0.45)",
              }}
            />

            {inactive.map((top, i) => (
              <span key={top}>
                <span
                  className="absolute rounded-full"
                  style={{
                    left: 14,
                    top,
                    width: 5,
                    height: 5,
                    background: "rgba(255,255,255,0.2)",
                  }}
                />
                <span
                  data-qa={i === 0 ? `stage-${stage}-sidebar-row-1` : undefined}
                  className="absolute rounded-[1px]"
                  style={{
                    left: 23,
                    top: top + 1,
                    width: 7,
                    height: 2,
                    background: "rgba(255,255,255,0.16)",
                  }}
                />
              </span>
            ))}
          </div>

          <div
            data-qa={`stage-${stage}-divider`}
            className="w-px shrink-0"
            style={{ background: "rgba(255,255,255,0.12)" }}
          />

          <div className="relative flex min-w-0 flex-1 flex-col px-[10px] pb-[8px] pt-[10px]">
            <span
              data-qa={`stage-${stage}-content-bar-0`}
              className="mb-[8px] h-[6px] rounded-[2px]"
              style={{
                width: "70%",
                background: "rgba(255,255,255,0.34)",
              }}
            />
            <span
              data-qa={`stage-${stage}-content-bar-1`}
              className="mb-auto h-[6px] rounded-[2px]"
              style={{
                width: "86%",
                background: "rgba(255,255,255,0.2)",
              }}
            />
            <div className="mt-[8px] flex gap-[6px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  data-qa={`stage-${stage}-lower-block-${i}`}
                  className="h-[14px] w-[14px] rounded-[3px]"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-[1px] z-20" style={{ top: PROCESS.frameTop }}>
        <PrimaryIconFrame stage={stage} size={48}>
          <StrokeIcon
            className="h-[30px] w-[30px]"
            strokeWidth={1.75}
            color={PROCESS.mutedRed}
            qa={`stage-${stage}-symbol`}
          >
            <rect x="3" y="3" width="7.5" height="7.5" rx="1.4" />
            <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.4" />
            <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.4" />
            <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.4" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}
