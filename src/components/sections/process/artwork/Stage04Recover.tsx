import { PrimaryIconFrame } from "../PrimaryIconFrame";
import { StrokeIcon } from "../StrokeIcon";
import { PROCESS } from "../tokens";

/** Framed circular trend / recovery mark (Stage 04). */
export function Stage04Recover({ stage }: { stage: string }) {
  return (
    <div
      aria-hidden
      data-qa={`stage-${stage}-visual`}
      className="relative h-full w-full"
    >
      <div
        data-qa={`stage-${stage}-glow`}
        className="pointer-events-none absolute left-[-1px] top-[4px] h-[48px] w-[48px] rounded-full blur-[4px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,25,22,0.48), transparent 68%)",
        }}
      />
      <div className="absolute left-[1px] top-[13px]">
        <PrimaryIconFrame stage={stage} size={50}>
          <StrokeIcon
            className="h-[36px] w-[36px]"
            strokeWidth={1.85}
            color={PROCESS.mutedRed}
            qa={`stage-${stage}-symbol`}
          >
            <circle cx="12" cy="12" r="9.2" />
            <path d="m6.4 15 3.4-4 2.6 2.6L17.8 7.4" />
            <path d="M13.8 7.4h3.6v3.6" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}