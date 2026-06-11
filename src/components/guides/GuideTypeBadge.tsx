import type { GuideType } from "@/lib/guide-types";
import { cn } from "@/lib/cn";

const TYPE_STYLES: Record<GuideType, string> = {
  checklist: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  workflow: "border-brand-red/30 bg-brand-red/10 text-brand-red-light",
  "documentation-standard": "border-sky-500/30 bg-sky-500/10 text-sky-300",
  "field-procedure": "border-amber-500/30 bg-amber-500/10 text-amber-300",
};

const DEFAULT_LABELS: Record<GuideType, string> = {
  checklist: "Checklist",
  workflow: "Workflow",
  "documentation-standard": "Documentation Standard",
  "field-procedure": "Field Procedure",
};

type GuideTypeBadgeProps = {
  type: GuideType;
  className?: string;
  labels?: Record<GuideType, string>;
};

export function GuideTypeBadge({ type, className, labels }: GuideTypeBadgeProps) {
  const resolvedLabels = labels ?? DEFAULT_LABELS;

  return (
    <span
      className={cn(
        "inline-block w-fit rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em]",
        TYPE_STYLES[type],
        className,
      )}
    >
      {resolvedLabels[type]}
    </span>
  );
}
