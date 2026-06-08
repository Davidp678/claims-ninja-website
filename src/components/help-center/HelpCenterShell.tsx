"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { HelpArticleBody } from "@/components/help-center/HelpArticleBody";
import { HelpCenterSearch } from "@/components/help-center/HelpCenterSearch";
import { HelpCenterSidebar } from "@/components/help-center/HelpCenterSidebar";
import { HelpRoleSelector } from "@/components/help-center/HelpRoleSelector";
import { cn } from "@/lib/cn";
import { getNav } from "@/lib/help-center/registry";
import type { HelpArticle, HelpPortal, InternalRole } from "@/lib/help-center/types";
import { SITE } from "@/lib/constants";

export function HelpCenterShell({
  portal,
  article,
}: {
  portal: HelpPortal;
  article: HelpArticle;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [role, setRole] = useState<InternalRole>("all");

  const nav = useMemo(() => getNav(portal, portal === "internal" ? role : "all"), [portal, role]);

  const portalTitle = portal === "client" ? "Client Help Center" : "Internal Help Center";
  const portalSubtitle =
    portal === "client"
      ? "Onboarding & documentation for contractor partners"
      : "Operations bible for Claims Ninja team";

  const restricted =
    portal === "internal" &&
    article.roles &&
    !article.roles.includes("all") &&
    role !== "all" &&
    !article.roles.includes(role);

  return (
    <div className="min-h-screen bg-brand-black text-foreground">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Link href={portal === "client" ? "/help" : "/tcnhc"} className="flex shrink-0 items-center">
              <Image src="/logo.png" alt={SITE.name} width={40} height={40} className="h-10 w-10" />
            </Link>
            <div>
              <p className="font-display text-sm font-semibold text-white">{portalTitle}</p>
              <p className="hidden text-xs text-zinc-500 sm:block">{portalSubtitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {portal === "internal" && (
              <div className="hidden md:block">
                <HelpRoleSelector role={role} onRoleChange={setRole} />
              </div>
            )}
            <button
              type="button"
              className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-zinc-300 lg:hidden"
              onClick={() => setMobileNavOpen((v) => !v)}
            >
              {mobileNavOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[280px_1fr]">
        <aside
          className={cn(
            "border-r border-white/8 bg-black/20 lg:sticky lg:top-[57px] lg:h-[calc(100vh-57px)] lg:overflow-y-auto",
            mobileNavOpen ? "block" : "hidden lg:block",
          )}
        >
          <div className="space-y-4 p-4">
            <HelpCenterSearch portal={portal} />
            {portal === "internal" && (
              <div className="md:hidden">
                <HelpRoleSelector role={role} onRoleChange={setRole} />
              </div>
            )}
            <HelpCenterSidebar
              portal={portal}
              nav={nav}
              onNavigate={() => setMobileNavOpen(false)}
            />
          </div>
        </aside>

        <main className="min-w-0 px-4 py-8 sm:px-8 lg:px-10">
          {restricted ? (
            <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-6 text-amber-100">
              <p className="font-semibold">Role-restricted content</p>
              <p className="mt-2 text-sm">
                This article is limited to: {article.roles?.join(", ")}. Switch your role filter to
                view.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8 border-b border-white/8 pb-6">
                <p className="text-xs font-medium uppercase tracking-widest text-brand-red-light/80">
                  {article.sectionSlug.replace(/-/g, " ")}
                </p>
                <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {article.title}
                </h1>
                <p className="mt-3 max-w-2xl text-base text-zinc-400">{article.excerpt}</p>
                {article.roles && !article.roles.includes("all") && (
                  <p className="mt-3 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                    {article.roles.join(" · ")} eyes
                  </p>
                )}
              </div>
              <HelpArticleBody blocks={article.blocks} />
            </>
          )}
        </main>
      </div>
    </div>
  );
}
