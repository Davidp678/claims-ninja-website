import Link from "next/link";

import { StatusBadge } from "@/components/dashboard/StatusBadge";
import type { DashboardClaimRow } from "@/lib/dashboard/types";

const currencyFmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const dateFmt = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

function formatRevenue(low: number | null, high: number | null): string {
  if (low === null || high === null) return "—";
  return `${currencyFmt.format(low)} – ${currencyFmt.format(high)}`;
}

type ClaimsQueueTableProps = {
  claims: DashboardClaimRow[];
};

export function ClaimsQueueTable({ claims }: ClaimsQueueTableProps) {
  if (claims.length === 0) {
    return (
      <div className="rounded-xl border border-white/12 bg-brand-surface/60 px-6 py-16 text-center ring-1 ring-white/5">
        <p className="text-sm text-zinc-400">No claim submissions yet.</p>
      </div>
    );
  }

  return (
    <>
      <div className="hidden overflow-hidden rounded-xl border border-white/12 bg-brand-surface/60 ring-1 ring-white/5 md:block">
        <table className="min-w-full divide-y divide-white/10 text-sm">
          <thead className="bg-brand-black/40">
            <tr>
              {[
                "Company",
                "Contact",
                "Email",
                "Phone",
                "Score",
                "Missed revenue",
                "Status",
                "Submitted",
                "",
              ].map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-500"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/8">
            {claims.map((claim) => (
              <tr key={claim.id} className="hover:bg-white/[0.03]">
                <td className="px-4 py-3 font-medium text-white">{claim.company}</td>
                <td className="px-4 py-3 text-zinc-300">{claim.contactName}</td>
                <td className="px-4 py-3 text-zinc-400">{claim.email}</td>
                <td className="px-4 py-3 text-zinc-400">{claim.phone}</td>
                <td className="px-4 py-3 text-zinc-300">
                  {claim.opportunityScore ?? "—"}
                </td>
                <td className="px-4 py-3 text-zinc-300">
                  {formatRevenue(claim.missedRevenueLow, claim.missedRevenueHigh)}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={claim.status} />
                </td>
                <td className="px-4 py-3 text-zinc-500">
                  {dateFmt.format(new Date(claim.createdAt))}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/dashboard/claims/${claim.id}`}
                    className="text-xs font-semibold uppercase tracking-wider text-brand-red-light hover:text-white"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 md:hidden">
        {claims.map((claim) => (
          <Link
            key={claim.id}
            href={`/dashboard/claims/${claim.id}`}
            className="block rounded-xl border border-white/12 bg-brand-surface/60 p-5 ring-1 ring-white/5 transition-colors hover:border-brand-red/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-white">{claim.company}</p>
                <p className="mt-1 text-sm text-zinc-400">{claim.contactName}</p>
              </div>
              <StatusBadge status={claim.status} />
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div>
                <dt className="text-zinc-500">Score</dt>
                <dd className="mt-0.5 text-zinc-200">
                  {claim.opportunityScore ?? "—"}
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">Missed revenue</dt>
                <dd className="mt-0.5 text-zinc-200">
                  {formatRevenue(claim.missedRevenueLow, claim.missedRevenueHigh)}
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="text-zinc-500">Submitted</dt>
                <dd className="mt-0.5 text-zinc-400">
                  {dateFmt.format(new Date(claim.createdAt))}
                </dd>
              </div>
            </dl>
          </Link>
        ))}
      </div>
    </>
  );
}
