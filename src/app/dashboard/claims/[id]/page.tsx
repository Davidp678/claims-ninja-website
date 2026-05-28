import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { ClaimNotes } from "@/components/dashboard/ClaimNotes";
import { ClaimStatusSelect } from "@/components/dashboard/ClaimStatusSelect";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { getDashboardUser } from "@/lib/dashboard/auth";
import { getClaimReviewLeadById, listClaimNotes } from "@/lib/dashboard/leads";

const currencyFmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const dateFmt = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeStyle: "short",
});

type PageProps = { params: Promise<{ id: string }> };

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-white/12 bg-brand-surface/60 p-6 ring-1 ring-white/5">
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default async function ClaimDetailPage({ params }: PageProps) {
  const user = await getDashboardUser();
  if (!user) {
    redirect("/login");
  }

  const { id } = await params;

  let claim: Awaited<ReturnType<typeof getClaimReviewLeadById>> = null;
  let notes: Awaited<ReturnType<typeof listClaimNotes>> = [];

  try {
    claim = await getClaimReviewLeadById(id);
    if (claim) {
      notes = await listClaimNotes(id);
    }
  } catch {
    return (
      <DashboardShell title="Claim detail">
        <p className="text-sm text-red-200" role="alert">
          Failed to load claim. Try again later.
        </p>
      </DashboardShell>
    );
  }

  if (!claim) {
    notFound();
  }

  const analysis = claim.aiAnalysis;

  return (
    <DashboardShell title={claim.company}>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Link
          href="/dashboard/claims"
          className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white"
        >
          ← Back to queue
        </Link>
        <StatusBadge status={claim.status} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Section title="Contact">
            <dl className="grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-zinc-400">Name</dt>
                <dd className="mt-0.5 text-white">{claim.contactName}</dd>
              </div>
              <div>
                <dt className="text-zinc-400">Company</dt>
                <dd className="mt-0.5 text-white">{claim.company}</dd>
              </div>
              <div>
                <dt className="text-zinc-400">Email</dt>
                <dd className="mt-0.5 text-zinc-300">{claim.email}</dd>
              </div>
              <div>
                <dt className="text-zinc-400">Phone</dt>
                <dd className="mt-0.5 text-zinc-300">{claim.phone}</dd>
              </div>
              {claim.preferredContactMethod && (
                <div>
                  <dt className="text-zinc-400">Preferred contact</dt>
                  <dd className="mt-0.5 capitalize text-zinc-300">
                    {claim.preferredContactMethod}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-zinc-400">Submitted</dt>
                <dd className="mt-0.5 text-zinc-300">
                  {dateFmt.format(new Date(claim.createdAt))}
                </dd>
              </div>
            </dl>
            <div className="mt-6">
              <ClaimStatusSelect leadId={claim.id} initialStatus={claim.status} />
            </div>
          </Section>

          <Section title="Claim context">
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-zinc-400">Session ID</dt>
                <dd className="mt-0.5 break-all font-mono text-xs text-zinc-300">
                  {claim.claimSessionId ?? "—"}
                </dd>
              </div>
              {claim.claimCalculatorInputs && (
                <>
                  <div>
                    <dt className="text-zinc-400">Claim type</dt>
                    <dd className="mt-0.5 text-zinc-200">
                      {claim.claimCalculatorInputs.claimType}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-zinc-400">Carrier estimate</dt>
                    <dd className="mt-0.5 text-zinc-200">
                      {claim.claimCalculatorInputs.carrierEstimate || "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-zinc-400">Description</dt>
                    <dd className="mt-0.5 whitespace-pre-wrap text-zinc-300">
                      {claim.claimCalculatorInputs.description || "—"}
                    </dd>
                  </div>
                </>
              )}
            </dl>
          </Section>

          <Section title="Uploaded files">
            {claim.uploadedFilesMeta.length === 0 ? (
              <p className="text-sm text-zinc-400">No files uploaded.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wider text-zinc-400">
                      <th className="pb-2 pr-4">File</th>
                      <th className="pb-2 pr-4">Type</th>
                      <th className="pb-2">Size</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/8">
                    {claim.uploadedFilesMeta.map((file) => (
                      <tr key={file.storagePath}>
                        <td className="py-2 pr-4 text-zinc-200">
                          {file.originalName}
                        </td>
                        <td className="py-2 pr-4 text-zinc-400">{file.contentType}</td>
                        <td className="py-2 text-zinc-400">
                          {(file.size / 1024).toFixed(0)} KB
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Section>
        </div>

        <div className="space-y-6">
          <Section title="AI analysis">
            {!analysis ? (
              <p className="text-sm text-zinc-400">No AI analysis available.</p>
            ) : (
              <div className="space-y-5">
                <p className="text-sm leading-relaxed text-zinc-200">{analysis.summary}</p>
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-zinc-400">Opportunity score</dt>
                    <dd className="mt-0.5 text-2xl font-semibold text-brand-red-light">
                      {analysis.opportunityScore}/100
                    </dd>
                  </div>
                  <div>
                    <dt className="text-zinc-400">Est. missed revenue</dt>
                    <dd className="mt-0.5 text-zinc-200">
                      {currencyFmt.format(analysis.estimatedMissedRevenueRange.low)}
                      {" – "}
                      {currencyFmt.format(analysis.estimatedMissedRevenueRange.high)}
                    </dd>
                  </div>
                </dl>
                {(claim.analyzedAt || claim.aiModel) && (
                  <p className="text-xs text-zinc-400">
                    {claim.analyzedAt &&
                      `Analyzed ${dateFmt.format(new Date(claim.analyzedAt))}`}
                    {claim.aiModel && ` · ${claim.aiModel}`}
                    {claim.analysisVersion && ` · v${claim.analysisVersion}`}
                  </p>
                )}
                {analysis.findings.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      Findings
                    </h3>
                    <ul className="mt-3 space-y-3">
                      {analysis.findings.map((f) => (
                        <li
                          key={`${f.title}-${f.category}`}
                          className="rounded-lg border border-white/10 bg-brand-black/40 p-4"
                        >
                          <p className="font-medium text-white">{f.title}</p>
                          <p className="mt-1 text-xs uppercase text-zinc-400">
                            {f.severity} · {f.category}
                          </p>
                          <p className="mt-2 text-sm text-zinc-300">{f.explanation}</p>
                          <p className="mt-2 text-sm text-brand-red-light/90">
                            {f.recommendedAction}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {analysis.nextSteps.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      Next steps
                    </h3>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-300">
                      {analysis.nextSteps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {analysis.disclaimers.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Disclaimers
                    </h3>
                    <ul className="mt-2 space-y-1 text-xs text-zinc-400">
                      {analysis.disclaimers.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </Section>

          <ClaimNotes leadId={claim.id} initialNotes={notes} />
        </div>
      </div>
    </DashboardShell>
  );
}
