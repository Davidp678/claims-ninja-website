import Link from "next/link";

import { pageMetadata } from "@/lib/metadata";
import {
  PRIVACY_EFFECTIVE_LABEL,
  PRIVACY_VERSION,
  loadPublishedPrivacyPolicyText,
  verifyPublishedPrivacyPolicyHash,
} from "@/lib/legal/privacy-policy";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Claims Ninja U.S. Privacy Policy and State Privacy Rights Addendum.",
  path: "/privacy",
});

export default function PrivacyPolicyPage() {
  const hash = verifyPublishedPrivacyPolicyHash();
  if (!hash.ok) {
    throw new Error(
      `Privacy Policy snapshot hash mismatch (expected ${hash.expected}, got ${hash.actual}).`,
    );
  }

  const text = loadPublishedPrivacyPolicyText();

  return (
    <main className="bg-brand-black text-zinc-200">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-24">
        <p className="text-sm text-zinc-500">
          Version {PRIVACY_VERSION} · Effective {PRIVACY_EFFECTIVE_LABEL}
        </p>
        <h1 className="mt-3 font-display text-3xl text-white md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-zinc-400">
          Questions:{" "}
          <a
            href="mailto:privacy@theclaimsninja.com"
            className="text-brand-red-light hover:underline"
          >
            privacy@theclaimsninja.com
          </a>
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
