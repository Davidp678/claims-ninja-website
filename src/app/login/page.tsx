import { Suspense } from "react";
import type { Metadata } from "next";

import { LoginForm } from "./LoginForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to the Claims Ninja contractor portal.",
  robots: { index: false, follow: false },
};

function getLoginPublicEnvStatus() {
  return {
    urlPresent: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()),
    anonKeyPresent: Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim()),
  };
}

export default function LoginPage() {
  const env = getLoginPublicEnvStatus();
  const envIncomplete = !env.urlPresent || !env.anonKeyPresent;

  return (
    <div className="flex min-h-full flex-col items-center justify-center bg-brand-black px-4 py-16">
      <div className="w-full max-w-md space-y-4">
        {envIncomplete && (
          <div
            className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-100"
            role="status"
          >
            Supabase login env is incomplete on the server. Add{" "}
            {!env.urlPresent && (
              <code className="text-amber-200">NEXT_PUBLIC_SUPABASE_URL</code>
            )}
            {!env.urlPresent && !env.anonKeyPresent && " and "}
            {!env.anonKeyPresent && (
              <code className="text-amber-200">NEXT_PUBLIC_SUPABASE_ANON_KEY</code>
            )}{" "}
            to <code className="text-amber-200">.env.local</code>, then restart{" "}
            <code className="text-amber-200">npm run dev</code>.
          </div>
        )}
        <Suspense fallback={<div className="h-64 animate-pulse rounded-xl bg-brand-surface" />}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
