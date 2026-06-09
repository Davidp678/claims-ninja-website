"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import type { ContactInquiryLeadSubmission } from "@/lib/calculator-lead";
import { isValidEmail } from "@/lib/validation/email";
import { isValidPhoneOptional } from "@/lib/validation/email";

const inputClass =
  "mt-2 block w-full rounded-lg border border-white/22 bg-brand-black/60 px-4 h-12 text-base text-white placeholder-zinc-400 focus:border-brand-red/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40";

const textareaClass =
  "mt-2 block w-full min-h-[140px] resize-y rounded-lg border border-white/22 bg-brand-black/60 px-4 py-3 text-base text-white placeholder-zinc-400 focus:border-brand-red/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40";

const labelClass =
  "text-xs font-semibold uppercase tracking-wider text-zinc-300";

type ContactSupportModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ContactSupportModal({ open, onClose }: ContactSupportModalProps) {
  const baseId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const nameId = `${baseId}-name`;
  const companyId = `${baseId}-company`;
  const emailId = `${baseId}-email`;
  const phoneId = `${baseId}-phone`;
  const messageId = `${baseId}-message`;

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const resetForm = useCallback(() => {
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setMessage("");
    setErrors([]);
    setSubmitError(null);
    setSubmitted(false);
  }, []);

  const handleClose = useCallback(() => {
    onClose();
    resetForm();
  }, [onClose, resetForm]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    panelRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, handleClose]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: string[] = [];
    setSubmitError(null);

    if (!name.trim()) nextErrors.push("Name is required.");
    if (!company.trim()) nextErrors.push("Company is required.");
    if (!email.trim()) nextErrors.push("Email is required.");
    else if (!isValidEmail(email)) nextErrors.push("Enter a valid email address.");
    if (phone.trim() && !isValidPhoneOptional(phone)) {
      nextErrors.push("Enter a valid phone number.");
    }
    if (!message.trim()) nextErrors.push("Message is required.");

    setErrors(nextErrors);
    if (nextErrors.length > 0) return;

    const payload: ContactInquiryLeadSubmission = {
      calculatorType: "contact-inquiry",
      timestamp: new Date().toISOString(),
      lead: {
        fullName: name.trim(),
        company: company.trim(),
        email: email.trim(),
        phone: phone.trim(),
      },
      contactDetails: {
        inquiryType: "existing-client-support",
        message: message.trim(),
        sourcePage: "/starthere",
        submittedAt: new Date().toISOString(),
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
        setSubmitError("Something went wrong. Please try again or email us directly.");
        return;
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-brand-black/80 backdrop-blur-sm" aria-hidden />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${baseId}-title`}
        tabIndex={-1}
        className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/15 bg-brand-surface shadow-[0_0_60px_-15px_rgba(220,38,38,0.45)] ring-1 ring-brand-red/25"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-white/10 bg-brand-surface/95 px-6 py-4 backdrop-blur-sm">
          <h2 id={`${baseId}-title`} className="font-display text-xl font-semibold text-white">
            Contact Support
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-zinc-300 transition-colors hover:text-white"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div
              className="rounded-xl border border-brand-red/35 bg-gradient-to-b from-brand-red/15 to-brand-black/60 p-8 text-center"
              role="status"
              aria-live="polite"
            >
              <p className="text-base font-medium leading-relaxed text-white">
                Thank you. Our team has received your message and will follow up at{" "}
                {SITE.email}.
              </p>
              <Button type="button" size="md" className="mt-6" onClick={handleClose}>
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p className="text-sm text-zinc-300">
                Questions before completing onboarding? Send a note and we will route your
                inquiry to the Claims Ninja team.
              </p>

              {errors.length > 0 ? (
                <div
                  className="mt-5 rounded-lg border border-brand-red/40 bg-brand-red/10 px-4 py-3 text-sm text-red-200"
                  role="alert"
                >
                  <ul className="list-inside list-disc space-y-1">
                    {errors.map((err) => (
                      <li key={err}>{err}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {submitError ? (
                <div className="mt-5 rounded-lg border border-white/20 bg-white/[0.06] px-4 py-3 text-sm text-zinc-200" role="alert">
                  {submitError}{" "}
                  <a href={`mailto:${SITE.email}`} className="text-brand-red-light hover:underline">
                    {SITE.email}
                  </a>
                </div>
              ) : null}

              <div className="mt-6 grid gap-5">
                <div>
                  <label htmlFor={nameId} className={labelClass}>
                    Name
                  </label>
                  <input
                    id={nameId}
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
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
                    Phone{" "}
                    <span className="normal-case tracking-normal text-zinc-500">(optional)</span>
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
                  <label htmlFor={messageId} className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={textareaClass}
                  />
                </div>
              </div>

              <div className="mt-8">
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
