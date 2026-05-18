"use client";

import { useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const CLAIM_TYPES = [
  "Water",
  "Fire",
  "Mold",
  "Roofing",
  "Reconstruction",
  "Other",
] as const;
type ClaimType = (typeof CLAIM_TYPES)[number];

const inputClass =
  "mt-2 block w-full rounded-lg border border-white/22 bg-brand-black/60 px-4 h-12 text-base text-white placeholder-zinc-500 focus:border-brand-red/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40";

const labelClass =
  "text-xs font-semibold uppercase tracking-wider text-zinc-400";

type ResultCard = {
  eyebrow: string;
  body: string;
};

function buildResults(claimType: ClaimType): ResultCard[] {
  const lower = claimType.toLowerCase();
  return [
    {
      eyebrow: "Potential missed scope",
      body: `Common ${lower} losses often miss adjacent damage, code upgrades, and overhead/profit line items in the carrier's initial estimate.`,
    },
    {
      eyebrow: "Documentation gaps",
      body: "Photos, moisture readings, and material specs may be incomplete for full supplement leverage. We'll flag what's missing before submission.",
    },
    {
      eyebrow: "Pricing/supplement opportunity",
      body: "Line-item pricing typically lags Xactimate by 6–18 months in many regions; a supplement review surfaces line items priced under market.",
    },
    {
      eyebrow: "Recommended next step",
      body: "Send the carrier estimate, scope notes, and photo set to a Claims Ninja adjuster for a full review and supplement plan.",
    },
  ];
}

export function SingleClaimReview() {
  const uploadId = useId();
  const claimTypeId = useId();
  const carrierEstId = useId();
  const descriptionId = useId();

  const [files, setFiles] = useState<File[]>([]);
  const [claimType, setClaimType] = useState<ClaimType>("Water");
  const [carrierEstimate, setCarrierEstimate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [analyzed, setAnalyzed] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAnalyzed(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-2xl shadow-black/50 ring-1 ring-brand-red/25 sm:p-10"
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-6">
          <div>
            <label htmlFor={uploadId} className={labelClass}>
              Upload photos or documents
            </label>
            <div
              className={cn(
                "mt-2 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-white/25 bg-brand-black/50 px-4 py-8 text-center text-sm text-zinc-400 transition-colors hover:border-brand-red/50",
              )}
            >
              <input
                ref={fileInputRef}
                id={uploadId}
                type="file"
                multiple
                accept="image/*,application/pdf"
                className="sr-only"
                onChange={(event) => {
                  const list = event.target.files
                    ? Array.from(event.target.files)
                    : [];
                  setFiles(list);
                }}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="rounded-full border border-white/25 bg-brand-elevated/80 px-4 py-2 text-sm font-medium text-white hover:bg-brand-elevated"
              >
                Choose files
              </button>
              <p className="text-xs text-zinc-500">
                Photos, PDFs of estimates, or scope notes. Files stay in your browser.
              </p>
              {files.length > 0 && (
                <ul className="mt-2 w-full space-y-1 text-left text-xs text-zinc-300">
                  {files.slice(0, 6).map((f, i) => (
                    <li
                      key={`${f.name}-${i}`}
                      className="truncate rounded bg-white/[0.04] px-2 py-1"
                    >
                      {f.name}
                    </li>
                  ))}
                  {files.length > 6 && (
                    <li className="text-zinc-500">
                      +{files.length - 6} more file(s)
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>

          <div>
            <label htmlFor={claimTypeId} className={labelClass}>
              Claim type
            </label>
            <select
              id={claimTypeId}
              value={claimType}
              onChange={(e) => setClaimType(e.target.value as ClaimType)}
              className={inputClass}
            >
              {CLAIM_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor={carrierEstId} className={labelClass}>
              Carrier estimate amount
            </label>
            <div className="relative">
              <span
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-zinc-500"
                aria-hidden
              >
                $
              </span>
              <input
                id={carrierEstId}
                inputMode="decimal"
                type="number"
                min={0}
                step="0.01"
                value={carrierEstimate}
                onChange={(e) => setCarrierEstimate(e.target.value)}
                placeholder="0"
                className={cn(inputClass, "pl-8 mt-2")}
              />
            </div>
          </div>

          <div>
            <label htmlFor={descriptionId} className={labelClass}>
              Brief description of loss / scope
            </label>
            <textarea
              id={descriptionId}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What happened, what's been documented, any disputes so far..."
              className={cn(
                inputClass,
                "min-h-[7.5rem] py-3",
              )}
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-500">
          This is a preliminary review only — not a final estimate, legal
          opinion, or coverage determination.
        </p>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          Analyze claim opportunity
        </Button>
      </div>

      {analyzed && (
        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
            Preliminary triage — {claimType}
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {buildResults(claimType).map((card) => (
              <div
                key={card.eyebrow}
                className="rounded-xl border border-white/12 bg-brand-black/55 p-5 ring-1 ring-white/5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-red-light">
                  {card.eyebrow}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </form>
  );
}
