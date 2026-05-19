import Link from "next/link";

import { signOutAction } from "@/app/dashboard/actions";
import { cn } from "@/lib/cn";

type DashboardShellProps = {
  children: React.ReactNode;
  title?: string;
};

const navItems = [{ href: "/dashboard/claims", label: "Claims queue" }];

export function DashboardShell({ children, title }: DashboardShellProps) {
  return (
    <div className="min-h-full bg-brand-black">
      <header className="border-b border-white/10 bg-brand-elevated/80 backdrop-blur-sm lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/dashboard/claims" className="font-display text-lg font-semibold text-white">
            Claims Ninja <span className="text-brand-red-light">Ops</span>
          </Link>
          <form action={signOutAction}>
            <button
              type="submit"
              className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white"
            >
              Sign out
            </button>
          </form>
        </div>
        <nav className="flex gap-2 overflow-x-auto px-4 pb-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-white/15 bg-brand-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:border-brand-red/40 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <div className="lg:flex">
        <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-brand-elevated/50 lg:block">
          <div className="sticky top-0 flex h-screen flex-col p-6">
            <Link href="/dashboard/claims" className="font-display text-xl font-semibold text-white">
              Claims Ninja
              <span className="block text-sm font-medium text-brand-red-light">Operations</span>
            </Link>
            <nav className="mt-10 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition-colors",
                    "hover:bg-white/5 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <form action={signOutAction} className="mt-auto">
              <button
                type="submit"
                className="w-full rounded-lg border border-white/15 px-3 py-2 text-left text-sm text-zinc-400 transition-colors hover:border-white/25 hover:text-white"
              >
                Sign out
              </button>
            </form>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <div className="border-b border-white/10 bg-brand-black/80 px-4 py-6 sm:px-8 lg:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-red-light">
              Command center
            </p>
            {title && (
              <h1 className="mt-1 font-display text-2xl font-semibold text-white sm:text-3xl">
                {title}
              </h1>
            )}
          </div>
          <div className="px-4 py-8 sm:px-8 lg:px-10">{children}</div>
        </main>
      </div>
    </div>
  );
}
