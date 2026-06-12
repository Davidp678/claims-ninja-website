"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import type { NetworkModule, NetworkModuleId } from "@/lib/homepage-proof-intelligence";
import {
  VIEWPORT_ONCE,
  networkCoreReveal,
  networkNodeReveal,
  networkNodesContainer,
  networkPanelReveal,
} from "@/lib/operations-motion";
import { cn } from "@/lib/cn";

import { NetworkModuleIcon } from "./NetworkModuleIcon";

type OperationsNetworkMobileProps = {
  modules: readonly NetworkModule[];
};

export function OperationsNetworkMobile({ modules }: OperationsNetworkMobileProps) {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<NetworkModuleId | null>(null);
  const activeModule = modules.find((m) => m.id === activeId);

  return (
    <div className="flex flex-col">
      <motion.div
        className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-brand-black/40 p-4 ring-1 ring-brand-red/25"
        variants={networkPanelReveal}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(220,38,38,0.18),transparent_70%)]"
          aria-hidden
        />

        <motion.div
          variants={networkCoreReveal}
          className={cn(
            "relative flex items-center gap-3 rounded-xl border-2 border-brand-red/45 bg-brand-elevated/90 px-4 py-3.5",
            "shadow-[0_0_40px_-8px_rgba(220,38,38,0.6)] ring-1 ring-brand-red/30 backdrop-blur-sm",
          )}
        >
          <span
            className={cn(
              "absolute -inset-2 -z-10 rounded-2xl bg-brand-red/12 blur-xl",
              !reduceMotion && "animate-signal-pulse",
            )}
            aria-hidden
          />
          <span
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-red/40 bg-brand-black/60",
            )}
            aria-hidden
          >
            <span
              className={cn(
                "h-2.5 w-2.5 rounded-full bg-brand-red-light",
                !reduceMotion && "animate-signal-pulse",
              )}
            />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-red-light">
              Claim Intelligence Core
            </span>
            <span className="mt-0.5 block text-sm leading-snug text-zinc-300">
              The intelligence layer connecting every supporting function
            </span>
          </span>
        </motion.div>

        <motion.div
          className="relative mt-4 grid grid-cols-2 gap-3"
          variants={networkNodesContainer}
        >
          {modules.map((module) => {
            const isActive = activeId === module.id;
            return (
              <motion.button
                key={module.id}
                type="button"
                variants={networkNodeReveal}
                aria-label={module.label}
                aria-pressed={isActive}
                onClick={() =>
                  setActiveId((prev) => (prev === module.id ? null : module.id))
                }
                className={cn(
                  "group flex min-w-0 flex-col gap-2 rounded-lg border px-3 py-3 text-left backdrop-blur-sm",
                  "border-white/12 bg-brand-black/75",
                  "transition-[border-color,box-shadow,background-color] duration-300",
                  "hover:border-brand-red/45 hover:bg-brand-elevated/70",
                  "focus-visible:border-brand-red/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/30",
                  isActive &&
                    "border-brand-red/55 bg-brand-elevated/85 shadow-[0_0_32px_-10px_rgba(220,38,38,0.58)]",
                )}
              >
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "h-2 w-2 shrink-0 rounded-full bg-brand-red-light",
                      !reduceMotion && isActive && "animate-signal-pulse",
                      !isActive && "opacity-50",
                    )}
                    aria-hidden
                  />
                  <NetworkModuleIcon
                    id={module.id}
                    className={cn(
                      "h-5 w-5 text-brand-red-light/80 transition-all duration-200",
                      isActive &&
                        "text-brand-red-light drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]",
                    )}
                  />
                </span>
                <span className="block w-full whitespace-normal break-words text-xs font-semibold leading-snug text-white">
                  {module.label}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>

      <p
        className={cn(
          "mt-2 min-h-[1.25rem] text-center text-xs text-zinc-400 transition-opacity duration-200",
          activeModule ? "opacity-100" : "opacity-0",
        )}
        aria-live="polite"
      >
        {activeModule?.subline ?? ""}
      </p>
    </div>
  );
}
