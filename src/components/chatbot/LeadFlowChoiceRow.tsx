"use client";

import { cn } from "@/lib/cn";
import type { LeadFlowChoice } from "./chat-lead-types";

type LeadFlowChoiceRowProps = {
  choices: LeadFlowChoice[];
  onSelect: (value: string) => void;
  disabled?: boolean;
  className?: string;
};

export function LeadFlowChoiceRow({
  choices,
  onSelect,
  disabled = false,
  className,
}: LeadFlowChoiceRowProps) {
  if (choices.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-nowrap gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:flex-wrap sm:overflow-visible [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {choices.map((choice) => {
        const isCancel = choice.value === "__cancel__";
        const isRestart = choice.value === "__restart__";

        return (
          <button
            key={choice.id}
            type="button"
            disabled={disabled}
            onClick={() => onSelect(choice.value)}
            className={cn(
              "inline-flex shrink-0 items-center rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-elevated disabled:cursor-not-allowed disabled:opacity-50",
              isCancel || isRestart
                ? "border-white/18 bg-white/8 text-zinc-300 hover:border-white/30 hover:bg-white/13"
                : "border-brand-red/50 bg-brand-red/16 text-white font-semibold hover:border-brand-red/62 hover:bg-brand-red/24",
            )}
          >
            {choice.label}
          </button>
        );
      })}
    </div>
  );
}
