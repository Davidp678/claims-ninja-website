"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { ClaimAnalysisResult } from "@/lib/claim-analysis";
import { CTA_LINKS } from "@/lib/constants";
import {
  type ClaimFilePrepareResponse,
  type ClaimFileRecord,
  validateClaimFileSelection,
} from "@/lib/claim-files";
import { cn } from "@/lib/cn";
import type { LeadContactFields } from "@/lib/calculator-lead";
import {
  ClaimAnalysisProgress,
  type AnalysisProgressPhase,
} from "./ClaimAnalysisProgress";
import { LeadCaptureForm } from "./LeadCaptureForm";

const CLAIM_TYPES = [
  "Water",
  "Fire",
  "Mold",
  "Roofing",
  "Reconstruction",
  "Other",
] as const;
type ClaimType = (typeof CLAIM_TYPES)[number];

type UploadStatus = "idle" | "uploading" | "ready" | "error";

const inputClass =
  "mt-2 block w-full rounded-lg border border-white/22 bg-brand-black/60 px-4 h-12 text-base text-white placeholder-zinc-400 focus:border-brand-red/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40";

const labelClass =
  "text-xs font-semibold uppercase tracking-wider text-zinc-300";

const currencyFmt = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

type ClaimFilePrepareApiResponse = ClaimFilePrepareResponse & {
  error?: string;
  code?: string;
};

async function uploadSingleClaimFile(
  sessionId: string,
  file: File,
): Promise<ClaimFileRecord> {
  const prepareRes = await fetch("/api/claim-files", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      sessionId,
      file: { name: file.name, type: file.type, size: file.size },
    }),
  });

  let prepareData: ClaimFilePrepareApiResponse = {
    sessionId,
    signedUrl: "",
    file: {} as ClaimFileRecord,
  };
  try {
    prepareData = (await prepareRes.json()) as ClaimFilePrepareApiResponse;
  } catch {
    prepareData = { sessionId, signedUrl: "", file: {} as ClaimFileRecord };
  }

  if (!prepareRes.ok || !prepareData.signedUrl || !prepareData.file?.storagePath) {
    if (prepareRes.status === 413) {
      throw new Error(
        "File is too large for the upload proxy. Please try again or use a smaller file.",
      );
    }
    throw new Error(prepareData.error ?? "Upload failed");
  }

  const contentType =
    file.type.split(";")[0]?.trim() || "application/octet-stream";

  const uploadRes = await fetch(prepareData.signedUrl, {
    method: "PUT",
    body: file,
    headers: { "Content-Type": contentType },
  });

  if (!uploadRes.ok) {
    throw new Error("Failed to upload file to storage.");
  }

  return prepareData.file;
}

async function uploadClaimFilesParallel(
  sessionId: string,
  fileList: File[],
  onProgress: (completed: number, total: number) => void,
): Promise<ClaimFileRecord[]> {
  const total = fileList.length;
  let completed = 0;

  const results = await Promise.all(
    fileList.map(async (file) => {
      const record = await uploadSingleClaimFile(sessionId, file);
      completed += 1;
      onProgress(completed, total);
      return record;
    }),
  );

  return results;
}

type AnalyzeClaimResponse = {
  analysis: ClaimAnalysisResult;
  error?: string;
};

async function requestClaimAnalysis(body: {
  claimSessionId: string;
  uploadedFilesMeta: ClaimFileRecord[];
  claimType: string;
  carrierEstimate: string;
  description: string;
}): Promise<ClaimAnalysisResult> {
  const res = await fetch("/api/analyze-claim", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  let data: AnalyzeClaimResponse = { analysis: {} as ClaimAnalysisResult };
  try {
    data = (await res.json()) as AnalyzeClaimResponse;
  } catch {
    data = { analysis: {} as ClaimAnalysisResult };
  }

  if (!res.ok || !data.analysis?.summary) {
    throw new Error(data.error ?? "Analysis failed");
  }

  return data.analysis;
}

export function SingleClaimReview() {
  const uploadId = useId();
  const claimTypeId = useId();
  const carrierEstId = useId();
  const descriptionId = useId();

  const [claimSessionId, setClaimSessionId] = useState(() =>
    crypto.randomUUID(),
  );
  const [files, setFiles] = useState<File[]>([]);
  const [persistedFiles, setPersistedFiles] = useState<ClaimFileRecord[]>([]);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle");
  const [uploadCompleted, setUploadCompleted] = useState(0);
  const [uploadTotal, setUploadTotal] = useState(0);
  const [claimType, setClaimType] = useState<ClaimType>("Water");
  const [carrierEstimate, setCarrierEstimate] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [analyzed, setAnalyzed] = useState(false);
  const [analysis, setAnalysis] = useState<ClaimAnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisPhase, setAnalysisPhase] =
    useState<AnalysisProgressPhase>("reading");
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [filePickError, setFilePickError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const uploadGenerationRef = useRef(0);

  const isUploading = uploadStatus === "uploading";
  const isBusy = isUploading || isAnalyzing;

  useEffect(() => {
    if (files.length === 0) return;

    const generation = ++uploadGenerationRef.current;
    const sessionId = claimSessionId;

    void uploadClaimFilesParallel(sessionId, files, (completed, total) => {
      if (uploadGenerationRef.current !== generation) return;
      setUploadCompleted(completed);
      setUploadTotal(total);
    })
      .then((uploaded) => {
        if (uploadGenerationRef.current !== generation) return;
        setPersistedFiles(uploaded);
        setUploadStatus("ready");
      })
      .catch(() => {
        if (uploadGenerationRef.current !== generation) return;
        setUploadStatus("error");
        setUploadError("We couldn't upload your files. Please try again.");
        setPersistedFiles([]);
      });
  }, [files, claimSessionId]);

  useEffect(() => {
    if (!isAnalyzing) return;

    const timers = [
      window.setTimeout(() => setAnalysisPhase("scoring"), 4000),
      window.setTimeout(() => setAnalysisPhase("finalizing"), 9000),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [isAnalyzing]);

  const handleFilesSelected = (list: File[]) => {
    setFilePickError(null);
    setUploadError(null);
    setAnalysisError(null);
    setAnalyzed(false);
    setAnalysis(null);
    setClaimSessionId(crypto.randomUUID());

    const check = validateClaimFileSelection(list);
    if (!check.ok) {
      setFilePickError(check.reason);
      setFiles([]);
      setUploadStatus("idle");
      setPersistedFiles([]);
      setUploadCompleted(0);
      setUploadTotal(0);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setUploadError(null);
    setUploadTotal(list.length);
    setUploadCompleted(0);
    setUploadStatus("uploading");
    setFiles(list);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAnalysisError(null);
    setAnalyzed(false);
    setAnalysis(null);

    if (files.length > 0) {
      if (uploadStatus === "uploading") {
        setUploadError("Please wait for file uploads to finish.");
        return;
      }
      if (uploadStatus === "error") {
        setUploadError("We couldn't upload your files. Please try again.");
        return;
      }
    }

    setAnalysisPhase("reading");
    setIsAnalyzing(true);
    try {
      const result = await requestClaimAnalysis({
        claimSessionId,
        uploadedFilesMeta: persistedFiles,
        claimType,
        carrierEstimate,
        description,
      });
      setAnalysis(result);
      setAnalyzed(true);
    } catch {
      setAnalysisError(
        "We couldn't complete the claim analysis. Please try again.",
      );
      setAnalyzed(false);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const progressPhase: AnalysisProgressPhase | null = isUploading
    ? "uploading"
    : isAnalyzing
      ? analysisPhase
      : null;

  const submitLabel = isUploading
    ? "Uploading files…"
    : isAnalyzing
      ? "Analyzing…"
      : "Analyze claim opportunity";

  return (
    <div className="rounded-2xl border border-white/15 bg-brand-surface p-6 shadow-2xl shadow-black/50 ring-1 ring-brand-red/30 sm:p-10">
      <form onSubmit={handleSubmit} noValidate>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-6">
            <div>
              <label htmlFor={uploadId} className={labelClass}>
                Upload photos or documents
              </label>
              <div
                className={cn(
                  "mt-2 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-white/25 bg-brand-black/50 px-4 py-8 text-center text-sm text-zinc-300 transition-colors hover:border-brand-red/50",
                )}
              >
                <input
                  ref={fileInputRef}
                  id={uploadId}
                  type="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp"
                  className="sr-only"
                  onChange={(event) => {
                    const list = event.target.files
                      ? Array.from(event.target.files)
                      : [];
                    handleFilesSelected(list);
                  }}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-full border border-white/25 bg-brand-elevated/80 px-4 py-2 text-sm font-medium text-white hover:bg-brand-elevated"
                  disabled={isBusy}
                >
                  Choose files
                </button>
                <p className="text-xs text-zinc-400">
                  PDF or image files, up to 20MB each.
                </p>
                {uploadStatus === "ready" && files.length > 0 ? (
                  <p className="text-xs text-emerald-300/90">
                    Files ready for analysis.
                  </p>
                ) : null}
                {filePickError && (
                  <p
                    className="mt-2 w-full rounded-lg border border-brand-red/40 bg-brand-red/10 px-3 py-2 text-left text-xs text-red-200"
                    role="alert"
                  >
                    {filePickError}
                  </p>
                )}
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
                      <li className="text-zinc-400">
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
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-base text-zinc-400"
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
                className={cn(inputClass, "min-h-[7.5rem] py-3")}
                style={{ height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs text-zinc-400">
              This is a preliminary review only — not a final estimate, legal
              opinion, or coverage determination.
            </p>
            {progressPhase ? (
              <ClaimAnalysisProgress
                phase={progressPhase}
                uploadCompleted={uploadCompleted}
                uploadTotal={uploadTotal}
              />
            ) : null}
            {uploadError && (
              <p
                className="rounded-lg border border-brand-red/40 bg-brand-red/10 px-3 py-2 text-xs text-red-200"
                role="alert"
              >
                {uploadError}
              </p>
            )}
            {analysisError && (
              <p
                className="rounded-lg border border-brand-red/40 bg-brand-red/10 px-3 py-2 text-xs text-red-200"
                role="alert"
              >
                {analysisError}
              </p>
            )}
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto"
            disabled={isBusy}
          >
            {submitLabel}
          </Button>
        </div>
      </form>

      {analyzed && analysis && (
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
              Preliminary triage — {claimType}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              {analysis.summary}
            </p>
            <p className="mt-2 text-xs text-zinc-400">
              Opportunity score: {analysis.opportunityScore}/100 · Estimated
              missed revenue:{" "}
              {currencyFmt.format(analysis.estimatedMissedRevenueRange.low)}–
              {currencyFmt.format(analysis.estimatedMissedRevenueRange.high)}
            </p>
            <p className="mt-2 text-xs text-zinc-500">
              Full intelligence report continues generating in the background.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={CTA_LINKS.onboarding} size="lg" className="w-full sm:w-auto">
                Start My Review
              </Button>
              <Button
                href={`/claim-report/${claimSessionId}`}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                View full intelligence report
              </Button>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {analysis.findings.map((finding) => (
                <div
                  key={`${finding.title}-${finding.category}`}
                  className="rounded-xl border border-white/12 bg-brand-black/55 p-5 ring-1 ring-white/5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-red-light">
                    {finding.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                    {finding.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <LeadCaptureForm
            variant="claim-review"
            submitLabel="Start My Review"
            successMessage="Your claim review request has been received. Our team will review your details and follow up shortly."
            mergePayload={(lead: LeadContactFields) => ({
              calculatorType: "claim-review",
              lead,
              claimSessionId,
              claimCalculatorInputs: {
                claimType,
                carrierEstimate,
                description,
              },
              uploadedFilesMeta: persistedFiles,
            })}
          />
        </div>
      )}
    </div>
  );
}
