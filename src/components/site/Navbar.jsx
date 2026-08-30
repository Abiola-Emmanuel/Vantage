"use client";

import { useState } from "react";
import { Menu, X, ShieldHalf } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const links = [
  { label: "Home", href: "#top" },
  { label: "Domains", href: "#domains" },
  { label: "Lab Setup", href: "#lab-setup" },
  { label: "About", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-full bg-ink px-4 py-2.5 shadow-lift">
        <a href="#top" className="flex items-center gap-2 pl-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary">
          {/* Add black version of the logo */}
            <ShieldHalf className="h-4 w-4 text-ink" />
            {/* <Image src="/favicon.png" alt="Vantage" width={16} height={16} /> */}
          </span>
          <span className="text-sm font-semibold text-ink-foreground">Redteam Ref</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] text-ink-foreground/70 transition-colors hover:text-ink-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#domains"
            className="hidden rounded-full bg-card px-5 py-2 text-[13px] font-medium text-foreground transition-transform active:scale-95 md:inline-flex"
          >
            Explore
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-card text-foreground md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-lift md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#domains"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-full bg-ink px-4 py-3 text-center text-sm font-medium text-ink-foreground"
            >
              Explore
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
