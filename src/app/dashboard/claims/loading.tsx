import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function ClaimsLoading() {
  return (
    <DashboardShell title="Claims queue">
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-16 animate-pulse rounded-xl border border-white/10 bg-brand-surface/40"
          />
        ))}
      </div>
    </DashboardShell>
  );
}
