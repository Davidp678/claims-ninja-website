"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { CLAIM_STATUS_OPTIONS, type ClaimStatus } from "@/lib/dashboard/claim-status";

const selectClass =
  "mt-2 block w-full max-w-xs rounded-lg border border-white/22 bg-brand-black/60 px-4 h-11 text-sm text-white focus:border-brand-red/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40";

type ClaimStatusSelectProps = {
  leadId: string;
  initialStatus: ClaimStatus;
};

export function ClaimStatusSelect({ leadId, initialStatus }: ClaimStatusSelectProps) {
  const router = useRouter();
  const [status, setStatus] = useState<ClaimStatus>(initialStatus);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = async (next: string) => {
    const previous = status;
    setStatus(next as ClaimStatus);
    setError(null);
    setIsSaving(true);

    try {
      const res = await fetch(`/api/dashboard/leads/${leadId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Failed to update status");
      }

      router.refresh();
    } catch (err) {
      setStatus(previous);
      setError(err instanceof Error ? err.message : "Failed to update status");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <label htmlFor="claim-status" className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
        Pipeline status
      </label>
      <select
        id="claim-status"
        value={status}
        disabled={isSaving}
        onChange={(e) => void handleChange(e.target.value)}
        className={selectClass}
      >
        {CLAIM_STATUS_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {isSaving && (
        <p className="mt-1 text-xs text-zinc-400">Saving…</p>
      )}
      {error && (
        <p className="mt-2 text-xs text-red-300" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
