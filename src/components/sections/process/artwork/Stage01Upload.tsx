import { PrimaryIconFrame } from "../PrimaryIconFrame";
import { StrokeIcon } from "../StrokeIcon";
import { PROCESS } from "../tokens";

/** Framed document + upward arrow (Stage 01). */
export function Stage01Upload({ stage }: { stage: string }) {
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
      <div className="absolute left-[2px] top-[15px]">
        <PrimaryIconFrame stage={stage} size={50}>
          <StrokeIcon
            className="h-[36px] w-[36px]"
            strokeWidth={1.9}
            color={PROCESS.mutedRed}
            qa={`stage-${stage}-symbol`}
          >
            <path d="M15 1.2H6.4A3 3 0 0 0 3.4 4.2v16A3 3 0 0 0 6.4 23.2h10a3 3 0 0 0 3-3V7L15 1.2Z" />
            <path d="M15 1.2V7.6h5.4" />
            <path d="M12 10.8v8.2" />
            <path d="m8 14.2 4-4 4 4" />
          </StrokeIcon>
        </PrimaryIconFrame>
      </div>
    </div>
  );
}
