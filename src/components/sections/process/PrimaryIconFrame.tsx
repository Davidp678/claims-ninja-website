import type { ReactNode } from "react";
import { PROCESS } from "./tokens";

export function PrimaryIconFrame({
  stage,
  size,
  children,
}: {
  stage: string;
  size: number;
  children: ReactNode;
}) {
  return (
    <div
      data-qa={`stage-${stage}-icon-frame`}
      className="relative z-10 flex shrink-0 items-center justify-center rounded-[10px]"
      style={{
        width: size,
        height: size,
        color: PROCESS.mutedRed,
        background: PROCESS.frameBg,
        border: `1px solid ${PROCESS.frameBorder}`,
        boxShadow: "none",
      }}
    >
      {children}
    </div>
  );
}
