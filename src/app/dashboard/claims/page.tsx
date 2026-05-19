import { redirect } from "next/navigation";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { ClaimsQueueTable } from "@/components/dashboard/ClaimsQueueTable";
import { getDashboardUser } from "@/lib/dashboard/auth";
import { listClaimReviewLeads } from "@/lib/dashboard/leads";

export default async function ClaimsQueuePage() {
  const user = await getDashboardUser();
  if (!user) {
    redirect("/login");
  }

  let claims: Awaited<ReturnType<typeof listClaimReviewLeads>> = [];
  let loadError: string | null = null;

  try {
    claims = await listClaimReviewLeads();
  } catch (err) {
    loadError =
      err instanceof Error ? err.message : "Failed to load claims queue.";
  }

  return (
    <DashboardShell title="Claims queue">
      {loadError ? (
        <div
          className="rounded-xl border border-brand-red/40 bg-brand-red/10 px-6 py-8 text-sm text-red-200"
          role="alert"
        >
          {loadError}
        </div>
      ) : (
        <ClaimsQueueTable claims={claims} />
      )}
    </DashboardShell>
  );
}
