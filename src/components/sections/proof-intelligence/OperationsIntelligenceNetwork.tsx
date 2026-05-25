"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import type { NetworkModule, NetworkModuleId } from "@/lib/homepage-proof-intelligence";
import {
  NETWORK_CORE,
  NETWORK_NODE_POSITIONS,
  getNeighborIndices,
  getNodeIndex,
} from "@/lib/operations-network-layout";
import {
  VIEWPORT_ONCE,
  networkCoreReveal,
  networkNodeReveal,
  networkNodesContainer,
  networkPanelReveal,
} from "@/lib/operations-motion";
import { cn } from "@/lib/cn";

import { NetworkModuleIcon } from "./NetworkModuleIcon";

type OperationsIntelligenceNetworkProps = {
  modules: readonly NetworkModule[];
};

function NetworkSpokes({
  activeId,
  reduceMotion,
}: {
  activeId: NetworkModuleId | null;
  reduceMotion: boolean | null;
}) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <circle
        cx={NETWORK_CORE.xPct}
        cy={NETWORK_CORE.yPct}
        r={38}
        fill="none"
        stroke="rgba(185, 28, 28, 0.06)"
        strokeWidth="0.25"
      />
      {NETWORK_NODE_POSITIONS.map((node) => {
        const isActive = activeId === node.id;
        return (
          <line
            key={node.id}
            x1={NETWORK_CORE.xPct}
            y1={NETWORK_CORE.yPct}
            x2={node.xPct}
            y2={node.yPct}
            stroke={isActive ? "rgba(239, 68, 68, 0.4)" : "rgba(185, 28, 28, 0.14)"}
            strokeWidth={isActive ? "0.5" : "0.35"}
            strokeDasharray="2 3"
            className={cn(
              !reduceMotion && isActive && "animate-connector-flow",
              !reduceMotion &&
                !activeId &&
                "max-sm:opacity-25 sm:animate-connector-flow sm:opacity-45",
            )}
            style={
              !reduceMotion
                ? { animationDuration: isActive ? "2s" : "4s" }
                : undefined
            }
          />
        );
      })}
    </svg>
  );
}

function NetworkModuleNode({
  module,
  index,
  isActive,
  isNeighbor,
  reduceMotion,
  onActivate,
  onDeactivate,
  onToggle,
}: {
  module: NetworkModule;
  index: number;
  isActive: boolean;
  isNeighbor: boolean;
  reduceMotion: boolean | null;
  onActivate: () => void;
  onDeactivate: () => void;
  onToggle: () => void;
}) {
  const pos = NETWORK_NODE_POSITIONS[index];
  if (index < 0 || !pos) return null;

  return (
    <motion.div
      variants={networkNodeReveal}
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${pos.xPct}%`, top: `${pos.yPct}%` }}
    >
      <button
        type="button"
        role="button"
        aria-label={module.label}
        aria-pressed={isActive}
        onMouseEnter={onActivate}
        onMouseLeave={onDeactivate}
        onFocus={onActivate}
        onBlur={onDeactivate}
        onClick={onToggle}
        className={cn(
          "group flex max-w-[108px] items-center gap-1.5 rounded-lg border px-2 py-1.5 text-left sm:max-w-[120px] sm:gap-2 sm:px-2.5 sm:py-2",
          "border-white/10 bg-brand-black/70 backdrop-blur-sm",
          "transition-[border-color,box-shadow,background-color] duration-300",
          "hover:border-brand-red/40 hover:bg-brand-elevated/70",
          "focus-visible:border-brand-red/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/30",
          isActive && "border-brand-red/50 bg-brand-elevated/80 shadow-[0_0_20px_-8px_rgba(185,28,28,0.45)]",
          isNeighbor && !isActive && "border-brand-red/25 bg-brand-elevated/50",
        )}
      >
        <span
          className={cn(
            "h-1 w-1 shrink-0 rounded-full bg-brand-red-light",
            !reduceMotion && (isActive || isNeighbor) && "animate-signal-pulse",
            !isActive && !isNeighbor && "opacity-50",
          )}
          aria-hidden
        />
        <NetworkModuleIcon
          id={module.id}
          className={cn(
            "text-brand-red-light/80 transition-all duration-200",
            (isActive || isNeighbor) && "text-brand-red-light drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]",
          )}
        />
        <span className="truncate text-[10px] font-semibold leading-tight text-white sm:text-[11px]">
          {module.label}
        </span>
      </button>
    </motion.div>
  );
}

export function OperationsIntelligenceNetwork({
  modules,
}: OperationsIntelligenceNetworkProps) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<NetworkModuleId | null>(null);

  const activeModule = modules.find((m) => m.id === activeId);
  const activeIndex = activeId !== null ? getNodeIndex(activeId) : -1;
  const neighborIndices: number[] =
    activeIndex >= 0 ? [...getNeighborIndices(activeIndex)] : [];

  const handleContainerClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === containerRef.current) {
        setActiveId(null);
      }
    },
    [],
  );

  return (
    <div className="mt-1">
      <motion.div
        ref={containerRef}
        className="relative mx-auto h-[280px] w-full max-w-md rounded-2xl border border-white/10 bg-brand-black/40 ring-1 ring-white/5 sm:h-[320px] lg:max-w-none"
        variants={networkPanelReveal}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        onClick={handleContainerClick}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(185,28,28,0.08),transparent_65%)]"
          aria-hidden
        />

        <NetworkSpokes activeId={activeId} reduceMotion={reduceMotion} />

        <motion.div
          variants={networkCoreReveal}
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            className={cn(
              "flex h-14 w-14 flex-col items-center justify-center rounded-full border border-brand-red/30 bg-brand-elevated/90 sm:h-16 sm:w-16",
              "shadow-[0_0_32px_-8px_rgba(185,28,28,0.5)] ring-1 ring-white/10 backdrop-blur-sm",
              activeId && "border-brand-red/50 shadow-[0_0_40px_-6px_rgba(239,68,68,0.55)]",
            )}
          >
            <span
              className={cn(
                "absolute inset-0 rounded-full border border-brand-red/20",
                !reduceMotion && "animate-signal-pulse",
              )}
              aria-hidden
            />
            <span className="relative text-center text-[9px] font-semibold uppercase leading-tight tracking-wide text-brand-red-light sm:text-[10px]">
              Claim
              <br />
              Intelligence
              <br />
              Core
            </span>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0"
          variants={networkNodesContainer}
        >
          {modules.map((module) => {
            const index = getNodeIndex(module.id);
            return (
            <NetworkModuleNode
              key={module.id}
              module={module}
              index={index}
              isActive={activeId === module.id}
              isNeighbor={neighborIndices.includes(index)}
              reduceMotion={reduceMotion}
              onActivate={() => setActiveId(module.id)}
              onDeactivate={() => setActiveId(null)}
              onToggle={() =>
                setActiveId((prev) => (prev === module.id ? null : module.id))
              }
            />
            );
          })}
        </motion.div>
      </motion.div>

      <p
        className={cn(
          "mt-3 min-h-[1.25rem] text-center text-xs text-zinc-500 transition-opacity duration-200",
          activeModule ? "opacity-100" : "opacity-0",
        )}
        aria-live="polite"
      >
        {activeModule?.subline ?? ""}
      </p>
    </div>
  );
}
