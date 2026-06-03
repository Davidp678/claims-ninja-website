"use client";

import { motion, useReducedMotion } from "framer-motion";

const DOT_TRANSITION = (delay: number) => ({
  duration: 0.9,
  repeat: Infinity,
  ease: "easeInOut" as const,
  delay,
});

function StaticDots() {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className="h-1.5 w-1.5 rounded-full bg-brand-red-light/90"
        />
      ))}
    </div>
  );
}

export function TypingIndicator() {
  const prefersReducedMotion = useReducedMotion();

  const bubble = (
    <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm border border-white/10 bg-brand-surface/90 px-4 py-3 shadow-[0_6px_20px_-14px_rgba(0,0,0,0.85)] ring-1 ring-brand-red-light/20">
      {prefersReducedMotion ? (
        <StaticDots />
      ) : (
        [0, 0.15, 0.3].map((delay) => (
          <motion.span
            key={delay}
            className="h-1.5 w-1.5 rounded-full bg-red-300"
            animate={{ opacity: [0.35, 1, 0.35], y: [0, -2, 0] }}
            transition={DOT_TRANSITION(delay)}
          />
        ))
      )}
    </div>
  );

  if (prefersReducedMotion) {
    return (
      <div
        className="flex justify-start"
        aria-live="polite"
        aria-label="Claims Ninja AI is typing"
      >
        {bubble}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="flex justify-start"
      aria-live="polite"
      aria-label="Claims Ninja AI is typing"
    >
      {bubble}
    </motion.div>
  );
}
