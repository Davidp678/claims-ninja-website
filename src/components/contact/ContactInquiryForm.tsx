"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { CTA_LINKS } from "@/lib/constants";
import type {
  ContactInquiryLeadSubmission,
  ContactInquiryType,
  LeadContactFields,
} from "@/lib/calculator-lead";
import { CONTACT_INQUIRY_TYPES } from "@/lib/calculator-lead";
import type { Locale } from "@/lib/i18n/config";
import { getContactContent } from "@/lib/i18n/content/contact";
import { FAQ_ANCHOR_SCROLL_CLASS } from "@/lib/faq-page";
import { cn } from "@/lib/cn";
import { isValidEmail } from "@/lib/validation/email";

const inputClass =
  "mt-2 block w-full rounded-lg border border-white/22 bg-brand-black/60 px-4 h-12 text-base text-white placeholder-zinc-400 focus:border-brand-red/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40";

const textareaClass =
  "mt-2 block w-full min-h-[140px] resize-y rounded-lg border border-white/22 bg-brand-black/60 px-4 py-3 text-base text-white placeholder-zinc-400 focus:border-brand-red/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40";

const labelClass =
  "text-xs font-semibold uppercase tracking-wider text-zinc-300";

type ContactInquiryFormProps = {
  inquiryType: ContactInquiryType;
  onInquiryTypeChange: (inquiryType: ContactInquiryType) => void;
  locale?: Locale;
};

export function ContactInquiryForm({
  inquiryType,
  onInquiryTypeChange,
  locale = "en",
}: ContactInquiryFormProps) {
  const form = getContactContent(locale).form;
  const baseId = useId();
  const fullNameId = `${baseId}-fullName`;
  const companyId = `${baseId}-company`;
  const emailId = `${baseId}-email`;
  const phoneId = `${baseId}-phone`;
  const websiteId = `${baseId}-website`;
  const monthlyVolumeId = `${baseId}-monthlyVolume`;
  const inquiryTypeId = "contact-inquiry-type";
  const messageId = `${baseId}-message`;

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [monthlyClaimVolume, setMonthlyClaimVolume] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: string[] = [];
    setSubmitError(null);

    if (!fullName.trim()) nextErrors.push(form.errors.fullName);
    if (!company.trim()) nextErrors.push(form.errors.company);
    if (!email.trim()) nextErrors.push(form.errors.email);
    else if (!isValidEmail(email)) nextErrors.push(form.errors.emailInvalid);
    if (!phone.trim()) nextErrors.push(form.errors.phone);
    if (!message.trim()) nextErrors.push(form.errors.message);

    const vol = monthlyClaimVolume.trim();
    if (
      vol &&
      (!Number.isFinite(Number(vol)) || Number(vol) < 0)
    ) {
      nextErrors.push(form.errors.monthlyVolume);
    }

    setErrors(nextErrors);
    if (nextErrors.length > 0) return;

    const lead: LeadContactFields = {
      fullName: fullName.trim(),
      company: company.trim(),
      email: email.trim(),
      phone: phone.trim(),
    };

    const payload: ContactInquiryLeadSubmission = {
      calculatorType: "contact-inquiry",
      timestamp: new Date().toISOString(),
      lead,
      contactDetails: {
        inquiryType,
        message: message.trim(),
        sourcePage: "/contact",
        submittedAt: new Date().toISOString(),
        ...(website.trim() ? { website: website.trim() } : {}),
        ...(vol ? { monthlyClaimVolume: vol } : {}),
      },
    };

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: { success?: boolean } = {};
      try {
        data = (await res.json()) as { success?: boolean };
      } catch {
        data = {};
      }

      if (!res.ok || !data.success) {
        setSubmitError(form.errors.generic);
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError(form.errors.generic);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="rounded-xl border border-brand-red/35 bg-gradient-to-b from-brand-red/15 to-brand-black/60 p-8 text-center shadow-[0_12px_40px_-24px_rgba(220,38,38,0.68)] ring-1 ring-brand-red/25"
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
          {form.successMessage}
        </p>
        <p className="mt-2 text-sm text-zinc-300">
          {form.successResponseNote}
        </p>
        <p className="mt-6 text-sm text-zinc-400">
          {form.preferToTalk}{" "}
          <a
            href={CTA_LINKS.schedule}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-300 underline-offset-2 transition-colors hover:text-brand-red-light hover:underline"
          >
            {form.scheduleStrategyCall}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-white/12 bg-brand-black/50 p-6 ring-1 ring-white/5 sm:p-8"
      noValidate
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
        {form.eyebrow}
      </p>
      <p className="mt-2 text-sm text-zinc-300">{form.description}</p>

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
            {form.labels.fullName}
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
            {form.labels.company}
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
            {form.labels.email}
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
            {form.labels.phone}
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

        <div>
          <label htmlFor={websiteId} className={labelClass}>
            {form.labels.website}{" "}
            <span className="normal-case tracking-normal text-zinc-500">
              {form.labels.optional}
            </span>
          </label>
          <input
            id={websiteId}
            name="website"
            type="url"
            autoComplete="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className={inputClass}
            placeholder={form.labels.websitePlaceholder}
          />
        </div>

        <div>
          <label htmlFor={monthlyVolumeId} className={labelClass}>
            {form.labels.monthlyClaimVolume}{" "}
            <span className="normal-case tracking-normal text-zinc-500">
              {form.labels.optional}
            </span>
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
            placeholder={form.labels.monthlyClaimVolumePlaceholder}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={inquiryTypeId} className={labelClass}>
            {form.labels.inquiryType}
          </label>
          <select
            id={inquiryTypeId}
            name="inquiryType"
            value={inquiryType}
            onChange={(e) =>
              onInquiryTypeChange(e.target.value as ContactInquiryType)
            }
            className={inputClass}
          >
            {CONTACT_INQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {form.inquiryTypeLabels[type]}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={messageId} className={labelClass}>
            {form.labels.message}
          </label>
          <textarea
            id={messageId}
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={textareaClass}
            placeholder={form.labels.messagePlaceholder}
          />
        </div>
      </div>

      <div className="mt-8">
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? form.sendingLabel : form.submitLabel}
        </Button>
        <p className="mt-4 text-sm text-zinc-400">
          {form.preferToTalk}{" "}
          <a
            href={CTA_LINKS.schedule}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-zinc-300 underline-offset-2 transition-colors hover:text-brand-red-light hover:underline"
          >
            {form.scheduleStrategyCall}
          </a>
        </p>
      </div>
    </form>
  );
}

export function ContactInquiryFormSection({
  inquiryType,
  onInquiryTypeChange,
  locale = "en",
}: ContactInquiryFormProps) {
  const form = getContactContent(locale).form;

  return (
    <section
      id="contact-form"
      className={cn(FAQ_ANCHOR_SCROLL_CLASS)}
      aria-labelledby="contact-form-heading"
    >
      <h2 id="contact-form-heading" className="sr-only">
        {form.title}
      </h2>
      <ContactInquiryForm
        inquiryType={inquiryType}
        onInquiryTypeChange={onInquiryTypeChange}
        locale={locale}
      />
    </section>
  );
}
