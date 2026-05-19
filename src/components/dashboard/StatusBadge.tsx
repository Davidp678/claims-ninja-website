import { formatClaimStatusLabel, type ClaimStatus } from "@/lib/dashboard/claim-status";
import { cn } from "@/lib/cn";

const statusStyles: Partial<Record<ClaimStatus, string>> = {
  new: "border-white/20 bg-white/5 text-zinc-200",
  ai_reviewed: "border-brand-red/40 bg-brand-red/15 text-brand-red-light",
  human_review: "border-amber-500/30 bg-amber-500/10 text-amber-200",
  supplement_drafted: "border-sky-500/30 bg-sky-500/10 text-sky-200",
  sent_to_carrier: "border-violet-500/30 bg-violet-500/10 text-violet-200",
  closed_won: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
  closed_lost: "border-zinc-500/40 bg-zinc-500/10 text-zinc-400",
};

type StatusBadgeProps = {
  status: ClaimStatus;
  className?: string;
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
        statusStyles[status] ?? "border-white/20 bg-white/5 text-zinc-300",
        className,
      )}
    >
      {formatClaimStatusLabel(status)}
    </span>
  );
}
