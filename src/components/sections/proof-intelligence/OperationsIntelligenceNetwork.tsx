"use client";

import { useCallback, useRef, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";

import type { NetworkModule, NetworkModuleId } from "@/lib/homepage-proof-intelligence";
import {
  NETWORK_CORE,
  getNetworkEllipse,
  getNetworkPositions,
  getNeighborIndices,
  getNodeIndex,
  type NetworkLayout,
  type NetworkNodePosition,
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

const LG_MEDIA_QUERY = "(min-width: 1024px)";

function getNetworkLayoutSnapshot(): NetworkLayout {
  return window.matchMedia(LG_MEDIA_QUERY).matches ? "desktop" : "mobile";
}

function subscribeNetworkLayout(onStoreChange: () => void) {
  const mq = window.matchMedia(LG_MEDIA_QUERY);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function useNetworkLayout(): NetworkLayout {
  return useSyncExternalStore(
    subscribeNetworkLayout,
    getNetworkLayoutSnapshot,
    () => "mobile" as NetworkLayout,
  );
}

function NetworkSpokes({
  activeId,
  reduceMotion,
  layout,
  positions,
}: {
  activeId: NetworkModuleId | null;
  reduceMotion: boolean | null;
  layout: NetworkLayout;
  positions: readonly NetworkNodePosition[];
}) {
  const ellipse = getNetworkEllipse(layout);

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <ellipse
        cx={ellipse.cx}
        cy={ellipse.cy}
        rx={ellipse.rx}
        ry={ellipse.ry}
        fill="none"
        stroke="rgba(185, 28, 28, 0.14)"
        strokeWidth="0.35"
      />
      {positions.map((node) => {
        const isActive = activeId === node.id;
        return (
          <line
            key={node.id}
            x1={NETWORK_CORE.xPct}
            y1={NETWORK_CORE.yPct}
            x2={node.xPct}
            y2={node.yPct}
            stroke={isActive ? "rgba(239, 68, 68, 0.62)" : "rgba(185, 28, 28, 0.26)"}
            strokeWidth={isActive ? "0.75" : "0.5"}
            strokeDasharray="3 4"
            className={cn(
              !reduceMotion && isActive && "animate-connector-flow",
              !reduceMotion &&
                !activeId &&
                "max-lg:opacity-25 lg:animate-connector-flow lg:opacity-70",
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
  position,
  index,
  isActive,
  isNeighbor,
  reduceMotion,
  isDesktopLayout,
  onActivate,
  onDeactivate,
  onToggle,
}: {
  module: NetworkModule;
  position: NetworkNodePosition;
  index: number;
  isActive: boolean;
  isNeighbor: boolean;
  reduceMotion: boolean | null;
  isDesktopLayout: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  onToggle: () => void;
}) {
  if (index < 0) return null;

  return (
    <motion.div
      variants={networkNodeReveal}
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${position.xPct}%`, top: `${position.yPct}%` }}
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
          "group rounded-lg border text-left backdrop-blur-sm",
          "border-white/12 bg-brand-black/75",
          "transition-[border-color,box-shadow,background-color] duration-300",
          "hover:border-brand-red/45 hover:bg-brand-elevated/70",
          "focus-visible:border-brand-red/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/30",
          isActive &&
            "border-brand-red/55 bg-brand-elevated/85 shadow-[0_0_32px_-10px_rgba(185,28,28,0.55)]",
          isNeighbor && !isActive && "border-brand-red/30 bg-brand-elevated/55",
          isDesktopLayout
            ? "flex w-[12.5rem] flex-row items-center gap-3 px-4 py-3 xl:w-[13.75rem]"
            : "flex max-w-[9.5rem] flex-col gap-1.5 px-3 py-2.5 sm:max-w-[10.5rem] sm:py-3",
        )}
      >
        {isDesktopLayout ? (
          <>
            <span
              className={cn(
                "h-2 w-2 shrink-0 rounded-full bg-brand-red-light",
                !reduceMotion && (isActive || isNeighbor) && "animate-signal-pulse",
                !isActive && !isNeighbor && "opacity-50",
              )}
              aria-hidden
            />
            <NetworkModuleIcon
              id={module.id}
              className={cn(
                "h-6 w-6 shrink-0 text-brand-red-light/80 transition-all duration-200",
                (isActive || isNeighbor) && "text-brand-red-light drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]",
              )}
            />
            <span className="min-w-0 flex-1 whitespace-normal text-sm font-semibold leading-tight text-white">
              {module.label}
            </span>
          </>
        ) : (
          <>
            <span className="flex items-center gap-2">
              <span
                className={cn(
                  "h-2 w-2 shrink-0 rounded-full bg-brand-red-light",
                  !reduceMotion && (isActive || isNeighbor) && "animate-signal-pulse",
                  !isActive && !isNeighbor && "opacity-50",
                )}
                aria-hidden
              />
              <NetworkModuleIcon
                id={module.id}
                className={cn(
                  "h-5 w-5 text-brand-red-light/80 transition-all duration-200",
                  (isActive || isNeighbor) && "text-brand-red-light drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]",
                )}
              />
            </span>
            <span className="block w-full whitespace-normal break-words text-xs font-semibold leading-snug text-white sm:text-sm">
              {module.label}
            </span>
          </>
        )}
      </button>
    </motion.div>
  );
}

export function OperationsIntelligenceNetwork({
  modules,
}: OperationsIntelligenceNetworkProps) {
  const reduceMotion = useReducedMotion();
  const layout = useNetworkLayout();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<NetworkModuleId | null>(null);

  const positions = getNetworkPositions(layout);
  const isDesktopLayout = layout === "desktop";

  const activeModule = modules.find((m) => m.id === activeId);
  const activeIndex = activeId !== null ? getNodeIndex(activeId, layout) : -1;
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
    <div className="flex min-h-0 flex-1 flex-col">
      <motion.div
        ref={containerRef}
        className="relative h-[300px] w-full flex-1 overflow-visible rounded-2xl border border-white/10 bg-brand-black/40 ring-1 ring-brand-red/15 sm:h-[320px] lg:h-full lg:min-h-[400px]"
        variants={networkPanelReveal}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        onClick={handleContainerClick}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_85%_70%_at_50%_50%,rgba(185,28,28,0.12),transparent_65%)]"
          aria-hidden
        />

        <div className="absolute inset-0 lg:inset-1">
          <NetworkSpokes
            activeId={activeId}
            reduceMotion={reduceMotion}
            layout={layout}
            positions={positions}
          />

          <motion.div
            variants={networkCoreReveal}
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <div
              className={cn(
                "relative flex h-[4.5rem] w-[4.5rem] flex-col items-center justify-center rounded-full border border-brand-red/35 bg-brand-elevated/90 sm:h-20 sm:w-20 lg:h-28 lg:w-28",
                "shadow-[0_0_56px_-6px_rgba(185,28,28,0.7)] ring-1 ring-white/10 backdrop-blur-sm",
                activeId && "border-brand-red/55 shadow-[0_0_64px_-4px_rgba(239,68,68,0.65)]",
              )}
            >
              <span
                className={cn(
                  "absolute -inset-4 rounded-full bg-brand-red/12 blur-xl",
                  !reduceMotion && "animate-signal-pulse",
                  activeId && "bg-brand-red/18",
                )}
                aria-hidden
              />
              <span
                className={cn(
                  "absolute inset-0 rounded-full border border-brand-red/25",
                  !reduceMotion && "animate-signal-pulse",
                )}
                aria-hidden
              />
              <span className="relative text-center text-[10px] font-semibold uppercase leading-tight tracking-[0.12em] text-brand-red-light sm:text-xs lg:text-[11px]">
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
              const index = getNodeIndex(module.id, layout);
              const position = positions[index];
              if (!position) return null;

              return (
                <NetworkModuleNode
                  key={module.id}
                  module={module}
                  position={position}
                  index={index}
                  isActive={activeId === module.id}
                  isNeighbor={neighborIndices.includes(index)}
                  reduceMotion={reduceMotion}
                  isDesktopLayout={isDesktopLayout}
                  onActivate={() => setActiveId(module.id)}
                  onDeactivate={() => setActiveId(null)}
                  onToggle={() =>
                    setActiveId((prev) => (prev === module.id ? null : module.id))
                  }
                />
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      <p
        className={cn(
          "mt-2 min-h-[1.25rem] text-center text-xs text-zinc-500 transition-opacity duration-200 sm:text-sm",
          activeModule ? "opacity-100" : "opacity-0",
        )}
        aria-live="polite"
      >
        {activeModule?.subline ?? ""}
      </p>
    </div>
  );
}
