"use client";

import { motion } from "motion/react";

export function Eyebrow({ children, className = "" }) {
  return (
    <span
      className={`inline-block text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
}

export function PillTag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground shadow-soft">
      {children}
    </span>
  );
}

export function ButtonLink({ variant = "primary", className = "", children, ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 active:scale-95";
  const variants = {
    primary: "bg-ink text-ink-foreground hover:bg-ink/90 shadow-soft",
    outline:
      "bg-card text-foreground border border-border hover:border-primary/50 hover:shadow-soft",
    ghost:
      "bg-card text-foreground border border-border px-5 py-2 text-[13px] hover:border-primary/50",
  };
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Blob({ className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl opacity-60 ${className}`}
      style={{ background: "var(--gradient-mint)" }}
    />
  );
}
