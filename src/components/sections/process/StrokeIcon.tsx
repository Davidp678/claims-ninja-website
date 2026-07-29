import type { ReactNode } from "react";

export function StrokeIcon({
  className,
  children,
  strokeWidth = 1.25,
  color,
  qa,
}: {
  className?: string;
  children: ReactNode;
  strokeWidth?: number;
  color?: string;
  qa?: string;
}) {
  return (
    <svg
      aria-hidden
      data-qa={qa}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke={color ?? "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}
