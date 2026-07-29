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
        background: "#121212",
        border: "1px solid rgba(255,255,255,0.13)",
        boxShadow: "none",
      }}
    >
      {children}
    </div>
  );
}
