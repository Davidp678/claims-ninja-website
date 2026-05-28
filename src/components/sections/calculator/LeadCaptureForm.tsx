"use client";

import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import type {
  LeadContactFields,
  LeadSubmissionPayload,
  LeadSubmissionPayloadWithoutTimestamp,
  PreferredContactMethod,
} from "@/lib/calculator-lead";

const inputClass =
  "mt-2 block w-full rounded-lg border border-white/22 bg-brand-black/60 px-4 h-12 text-base text-white placeholder-zinc-500 focus:border-brand-red/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40";

const labelClass =
  "text-xs font-semibold uppercase tracking-wider text-zinc-400";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export type LeadCaptureFormProps = {
  variant: "claim-review" | "roi-report";
  /** Prefill for ROI monthly claim volume (e.g. jobs per month). */
  defaultMonthlyVolume?: string;
  submitLabel: string;
  successMessage: string;
  mergePayload: (
    lead: LeadContactFields,
  ) => LeadSubmissionPayloadWithoutTimestamp;
  onSubmit?: (payload: LeadSubmissionPayload) => void;
  className?: string;
};

export function LeadCaptureForm({
  variant,
  defaultMonthlyVolume = "",
  submitLabel,
  successMessage,
  mergePayload,
  onSubmit,
  className,
}: LeadCaptureFormProps) {
  const baseId = useId();
  const fullNameId = `${baseId}-fullName`;
  const companyId = `${baseId}-company`;
  const emailId = `${baseId}-email`;
  const phoneId = `${baseId}-phone`;
  const contactMethodId = `${baseId}-contactMethod`;
  const monthlyVolumeId = `${baseId}-monthlyVolume`;

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredContactMethod, setPreferredContactMethod] =
    useState<PreferredContactMethod>("email");
  const [monthlyClaimVolume, setMonthlyClaimVolume] = useState(
    defaultMonthlyVolume,
  );
  const [submitted, setSubmitted] = useState(false);
  const [storedPayload, setStoredPayload] =
    useState<LeadSubmissionPayload | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMonthlyClaimVolume(defaultMonthlyVolume);
  }, [defaultMonthlyVolume]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: string[] = [];
    setSubmitError(null);

    if (!fullName.trim()) nextErrors.push("Full name is required.");
    if (!company.trim()) nextErrors.push("Company is required.");
    if (!email.trim()) nextErrors.push("Email is required.");
    else if (!isValidEmail(email))
      nextErrors.push("Enter a valid email address.");
    if (!phone.trim()) nextErrors.push("Phone is required.");

    if (variant === "roi-report") {
      const vol = monthlyClaimVolume.trim();
      if (!vol) nextErrors.push("Monthly claim volume is required.");
      else if (!Number.isFinite(Number(vol)) || Number(vol) < 0) {
        nextErrors.push("Monthly claim volume must be a valid number.");
      }
    }

    setErrors(nextErrors);
    if (nextErrors.length > 0) return;

    const lead: LeadContactFields = {
      fullName: fullName.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
      ...(variant === "claim-review"
        ? { preferredContactMethod }
        : { monthlyClaimVolume: monthlyClaimVolume.trim() }),
    };

    const withoutTs = mergePayload(lead);
    const merged = {
      ...withoutTs,
      timestamp: new Date().toISOString(),
    } as LeadSubmissionPayload;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(merged),
      });

      let data: { success?: boolean } = {};
      try {
        data = (await res.json()) as { success?: boolean };
      } catch {
        data = {};
      }

      if (!res.ok || !data.success) {
        setSubmitError("Something went wrong. Please try again.");
        return;
      }

      setStoredPayload(merged);
      onSubmit?.(merged);
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted && storedPayload) {
    return (
      <div
        className={cn(
          "rounded-xl border border-brand-red/35 bg-gradient-to-b from-brand-red/15 to-brand-black/60 p-8 text-center shadow-[0_12px_40px_-24px_rgba(220,38,38,0.68)] ring-1 ring-brand-red/25",
          className,
        )}
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-brand-red/40 bg-brand-red/20 text-brand-red-light">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="mt-5 text-base font-medium leading-relaxed text-white">
          {successMessage}
        </p>
        <p className="mt-2 text-sm text-zinc-400">
          A specialist will reach out using the details you provided.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-xl border border-white/12 bg-brand-black/50 p-6 ring-1 ring-white/5 sm:p-8",
        className,
      )}
      noValidate
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
        {variant === "claim-review"
          ? "Full supplement review"
          : "Request your ROI report"}
      </p>
      <p className="mt-2 text-sm text-zinc-400">
        {variant === "claim-review"
          ? "Preliminary opportunities identified. Submit your information for a deeper line-item and carrier review from the Claims Ninja team."
          : "We’ll validate your numbers and send a concise readout your leadership team can use."}
      </p>

      {errors.length > 0 && (
        <div
          className="mt-5 rounded-lg border border-brand-red/40 bg-brand-red/10 px-4 py-3 text-sm text-red-200"
          role="alert"
          aria-live="assertive"
        >
          <ul className="list-inside list-disc space-y-1">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      {submitError && (
        <div
          className="mt-5 rounded-lg border border-white/20 bg-white/[0.06] px-4 py-3 text-sm text-zinc-200"
          role="alert"
          aria-live="assertive"
        >
          {submitError}
        </div>
      )}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={fullNameId} className={labelClass}>
            Full name
          </label>
          <input
            id={fullNameId}
            name="fullName"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={companyId} className={labelClass}>
            Company
          </label>
          <input
            id={companyId}
            name="company"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={emailId} className={labelClass}>
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={phoneId} className={labelClass}>
            Phone
          </label>
          <input
            id={phoneId}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
          />
        </div>

        {variant === "claim-review" ? (
          <div className="sm:col-span-2">
            <label htmlFor={contactMethodId} className={labelClass}>
              Preferred contact method
            </label>
            <select
              id={contactMethodId}
              name="preferredContactMethod"
              value={preferredContactMethod}
              onChange={(e) =>
                setPreferredContactMethod(
                  e.target.value as PreferredContactMethod,
                )
              }
              className={inputClass}
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="either">Either</option>
            </select>
          </div>
        ) : (
          <div className="sm:col-span-2">
            <label htmlFor={monthlyVolumeId} className={labelClass}>
              Monthly claim volume
            </label>
            <input
              id={monthlyVolumeId}
              name="monthlyClaimVolume"
              type="number"
              inputMode="numeric"
              min={0}
              step="1"
              value={monthlyClaimVolume}
              onChange={(e) => setMonthlyClaimVolume(e.target.value)}
              className={inputClass}
              placeholder="e.g. number of jobs or claims per month"
            />
            <p className="mt-1 text-xs text-zinc-500">
              Pre-filled from your calculator where possible — adjust to match
              your organization.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8">
        {variant === "claim-review" && (
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Potential missed revenue detected.
          </p>
        )}
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : submitLabel}
        </Button>
      </div>
    </form>
  );
}
