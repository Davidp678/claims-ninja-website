import { DashboardShell } from "@/components/dashboard/DashboardShell";

export default function ClaimDetailLoading() {
  return (
    <DashboardShell title="Loading claim…">
      <div className="h-96 animate-pulse rounded-xl border border-white/10 bg-brand-surface/40" />
    </DashboardShell>
  );
}
