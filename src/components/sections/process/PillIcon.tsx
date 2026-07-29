import type { HomeProcessVisual } from "@/lib/i18n/content/home";
import { StrokeIcon } from "./StrokeIcon";
import { PROCESS } from "./tokens";

export function PillIcon({
  visual,
  stage,
}: {
  visual: HomeProcessVisual;
  stage: string;
}) {
  const className = "h-[13px] w-[13px] shrink-0";
  const qa = `stage-${stage}-pill-icon`;
  const color = PROCESS.mutedRed;

  if (visual === "intake") {
    return (
      <StrokeIcon className={className} strokeWidth={1.5} color={color} qa={qa}>
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </StrokeIcon>
    );
  }
  if (visual === "workspace") {
    return (
      <StrokeIcon className={className} strokeWidth={1.5} color={color} qa={qa}>
        <ellipse cx="12" cy="5.5" rx="6.5" ry="2.4" />
        <path d="M5.5 5.5v4.2c0 1.3 2.9 2.4 6.5 2.4s6.5-1.1 6.5-2.4V5.5" />
        <path d="M5.5 9.7v4.2c0 1.3 2.9 2.4 6.5 2.4s6.5-1.1 6.5-2.4V9.7" />
      </StrokeIcon>
    );
  }
  if (visual === "manage") {
    return (
      <StrokeIcon className={className} strokeWidth={1.5} color={color} qa={qa}>
        <path d="M3.5 12h2.2l1.6-4.2 2.4 8.4L12.4 8l1.8 4H20.5" />
      </StrokeIcon>
    );
  }
  return (
    <StrokeIcon className={className} strokeWidth={1.5} color={color} qa={qa}>
      <path d="M2.5 12s3.2-5.5 9.5-5.5S21.5 12 21.5 12s-3.2 5.5-9.5 5.5S2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.4" />
    </StrokeIcon>
  );
}
