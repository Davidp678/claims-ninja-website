import { PrimaryIconFrame } from "../PrimaryIconFrame";
import { StrokeIcon } from "../StrokeIcon";
import { PROCESS } from "../tokens";

/**
 * Stage 02 — a foreground workspace mark over a layered application panel.
 * The broad rear plate supplies depth; the narrower face contains the actual UI.
 */
export function Stage02Workspace({ stage }: { stage: string }) {
  const sidebarRows = [25, 36, 47, 58] as const;

  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full overflow-visible"
    >
      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-[58px] top-[-7px] h-[88px] w-[125px] rounded-[12px] blur-[9px]"
        style={{
          background:
            "radial-gradient(ellipse at 52% 45%, rgba(56,25,22,0.44), transparent 70%)",
        }}
      />

      <div
        data-qa={`stage-${stage}-rear-panel`}
        className="absolute rounded-[9px]"
        style={{
          left: 24,
          top: 1,
          width: 170,
          height: 72,
          background: "rgba(9,9,9,0.2)",
          border: "1px solid rgba(255,255,255,0.035)",
          boxShadow: "6px -5px 14px rgba(0,0,0,0.28)",
        }}
      />

      <div
        className="absolute overflow-hidden rounded-[8px]"
        style={{
          left: 74,
          top: -5,
          width: 122,
          height: 84,
          background: "#0d0d0d",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "-7px 7px 15px rgba(0,0,0,0.34), 0 0 18px rgba(56,25,22,0.16)",
        }}
      >
        <div
          data-qa={`stage-${stage}-sidebar`}
          className="absolute inset-y-0 left-0"
          style={{
            width: 39,
            background: "#0a0a0a",
            borderRight: "1px solid rgba(255,255,255,0.11)",
          }}
        >
          <span
            data-qa={`stage-${stage}-active-dot`}
            className="absolute rounded-full"
            style={{
              left: 6,
              top: 8,
              width: 6,
              height: 6,
              background: PROCESS.activeDot,
              boxShadow: "0 0 6px rgba(239,68,68,0.58)",
            }}
          />
          <span
            data-qa={`stage-${stage}-sidebar-row-0`}
            className="absolute rounded-full"
            style={{
              left: 16,
              top: 9,
              width: 19,
              height: 4,
              background: "rgba(255,255,255,0.34)",
            }}
          />

          {sidebarRows.map((top, index) => (
            <span key={top}>
              <span
                className="absolute rounded-full"
                style={{
                  left: 7,
                  top,
                  width: 4,
                  height: 4,
                  background: "rgba(255,255,255,0.14)",
                }}
              />
              <span
                data-qa={
                  index === 0 ? `stage-${stage}-sidebar-row-1` : undefined
                }
                className="absolute rounded-full"
                style={{
                  left: 16,
                  top: top + 1,
                  width: index === 3 ? 21 : 18,
                  height: 3,
                  background: "rgba(255,255,255,0.13)",
                }}
              />
            </span>
          ))}
        </div>

        <span
          data-qa={`stage-${stage}-divider`}
          className="absolute inset-y-0 w-px"
          style={{ left: 38, background: "rgba(255,255,255,0.1)" }}
        />

        <span
          data-qa={`stage-${stage}-content-bar-0`}
          className="absolute h-[6px] rounded-[2px]"
          style={{
            left: 47,
            top: 17,
            width: 39,
            background: "rgba(255,255,255,0.16)",
          }}
        />
        <span
          data-qa={`stage-${stage}-content-bar-1`}
          className="absolute h-[6px] rounded-[2px]"
          style={{
            left: 47,
            top: 37,
            width: 52,
            background: "rgba(255,255,255,0.1)",
          }}
        />

        <div className="absolute bottom-[8px] left-[47px] flex gap-[5px]">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              data-qa={`stage-${stage}-lower-block-${index}`}
              className="h-[18px] w-[18px] rounded-[3px]"
              style={{
                background: "rgba(255,255,255,0.055)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute left-0 z-20" style={{ top: PROCESS.frameTop }}>
        <PrimaryIconFrame stage={stage} size={52}>
          <StrokeIcon
            className="h-[36px] w-[36px]"
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
