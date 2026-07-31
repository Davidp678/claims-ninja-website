import Link from "next/link";

import { pageMetadata } from "@/lib/metadata";
import {
  TERMS_DISPLAY_TITLE,
  TERMS_EFFECTIVE_LABEL,
  TERMS_VERSION,
  loadPublishedTermsOfServiceText,
  verifyPublishedTermsOfServiceHash,
} from "@/lib/legal/terms-of-service";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Claims Ninja Terms of Service and Consulting Agreement (version 2026-06-10).",
  path: "/terms",
});

export default function TermsOfServicePage() {
  const hash = verifyPublishedTermsOfServiceHash();
  if (!hash.ok) {
    throw new Error(
      `Terms of Service snapshot hash mismatch (expected ${hash.expected}, got ${hash.actual}).`,
    );
  }

  const text = loadPublishedTermsOfServiceText().replaceAll(
    "The Claims Ninja LLC",
    "The Claims Ninja",
  );

  return (
    <main className="bg-brand-black text-zinc-200">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm text-zinc-500">
          Version {TERMS_VERSION} · Effective {TERMS_EFFECTIVE_LABEL}
        </p>
        <h1 className="mt-3 font-display text-3xl text-white md:text-4xl">
          {TERMS_DISPLAY_TITLE}
        </h1>
        <p className="mt-4 text-sm text-zinc-400">
          Consulting Agreement. Questions:{" "}
          <a
            href="mailto:privacy@theclaimsninja.com"
            className="text-brand-red-light hover:underline"
          >
            privacy@theclaimsninja.com
          </a>
          .{" "}
          <Link href="/privacy" className="text-brand-red-light hover:underline">
            Privacy Policy
          </Link>
          .{" "}
          <Link href="/" className="text-brand-red-light hover:underline">
            Back to home
          </Link>
        </p>
        <article className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-zinc-300">
            {text}
          </pre>
        </article>
      </div>
    </main>
  );
}
