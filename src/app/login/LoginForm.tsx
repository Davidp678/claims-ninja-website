"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import {
  createSupabaseBrowserClient,
  logSupabaseBrowserEnvForDev,
  SupabaseBrowserConfigError,
} from "@/lib/supabase/browser";

const inputClass =
  "mt-2 block w-full rounded-lg border border-white/22 bg-brand-black/60 px-4 h-12 text-base text-white placeholder-zinc-500 focus:border-brand-red/60 focus:outline-none focus:ring-2 focus:ring-brand-red/40";

function logLoginError(err: unknown) {
  if (process.env.NODE_ENV !== "development") return;
  if (err instanceof Error) {
    console.error("[login]", err.name, err.message);
    if (/fetch failed|Failed to fetch|network/i.test(err.message)) {
      logSupabaseBrowserEnvForDev("login error");
    }
  } else {
    console.error("[login]", String(err));
  }
}

function messageForLoginCatch(err: unknown): string {
  if (err instanceof SupabaseBrowserConfigError) {
    return err.message;
  }

  if (err instanceof Error) {
    if (
      err instanceof TypeError &&
      /fetch failed/i.test(err.message)
    ) {
      return "Cannot reach Supabase. Check your connection and restart the dev server after updating .env.local.";
    }
    if (/fetch failed|network|Failed to fetch/i.test(err.message)) {
      return "Cannot reach Supabase. Check your connection and restart the dev server after updating .env.local.";
    }
    return "Sign-in failed. Please try again.";
  }

  return "Sign-in failed. Please try again.";
}

function messageForSignInError(message: string): string {
  const lower = message.toLowerCase();
  if (
    lower.includes("invalid login credentials") ||
    lower.includes("invalid email or password")
  ) {
    return "Invalid email or password.";
  }
  return message;
}

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") ?? "/dashboard/claims";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    logSupabaseBrowserEnvForDev("login page mount");
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const supabase = createSupabaseBrowserClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (signInError) {
        if (
          process.env.NODE_ENV === "development" &&
          /fetch failed|Failed to fetch|network/i.test(signInError.message)
        ) {
          logSupabaseBrowserEnvForDev("signInWithPassword error");
        }
        setError(messageForSignInError(signInError.message));
        return;
      }

      router.push(nextPath);
      router.refresh();
    } catch (err) {
      logLoginError(err);
      setError(messageForLoginCatch(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-white/12 bg-brand-surface p-8 shadow-2xl shadow-black/50 ring-1 ring-brand-red/30"
      noValidate
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
        Internal access
      </p>
      <h1 className="mt-2 font-display text-2xl font-semibold text-white">
        Claims Ninja Ops
      </h1>
      <p className="mt-2 text-sm text-zinc-400">
        Sign in to review AI claim submissions.
      </p>

      {error && (
        <p
          className="mt-5 rounded-lg border border-brand-red/40 bg-brand-red/10 px-4 py-3 text-sm text-red-200"
          role="alert"
        >
          {error}
        </p>
      )}

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-8">
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Signing in…" : "Sign in"}
        </Button>
      </div>
    </form>
  );
}
