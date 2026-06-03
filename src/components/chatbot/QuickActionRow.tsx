"use client";

import { cn } from "@/lib/cn";
import { getQuickAction, isExternalAction } from "./quick-actions";
import type { QuickAction, QuickActionId } from "./types";

const CONVERSION_ACTIONS = new Set<QuickActionId>(["get-started", "talk-to-team"]);

type QuickActionRowProps = {
  actionIds: QuickActionId[];
  onSelect: (action: QuickAction) => void;
  className?: string;
};

export function QuickActionRow({
  actionIds,
  onSelect,
  className,
}: QuickActionRowProps) {
  if (actionIds.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-nowrap gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {actionIds.map((id) => {
        const action = getQuickAction(id);
        if (!action) {
          return null;
        }
        const isExternal = isExternalAction(action);
        const isConversion = CONVERSION_ACTIONS.has(action.id);
        const isInternalLink = Boolean(action.href) && !isExternal;

        return (
          <button
            key={action.id}
            type="button"
            onClick={() => onSelect(action)}
            className={cn(
              "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-elevated",
              isConversion
                ? "border-brand-red-light/55 bg-brand-red-light/18 text-white hover:border-brand-red-light/70 hover:bg-brand-red-light/28"
                : "border-white/15 bg-white/5 text-zinc-200 hover:border-white/30 hover:bg-white/10 hover:text-white",
            )}
          >
            {action.label}
            {isExternal && (
              <svg
                aria-hidden
                viewBox="0 0 16 16"
                className="h-3 w-3 opacity-80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 3.5h6.5V10" />
                <path d="M12.5 3.5 4 12" />
              </svg>
            )}
            {isInternalLink && (
              <svg
                aria-hidden
                viewBox="0 0 16 16"
                className="h-3 w-3 opacity-70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 12h6.5V5.5" />
                <path d="M12.5 5.5 4 14" />
              </svg>
            )}
          </button>
        );
      })}
    </div>
  );
}
