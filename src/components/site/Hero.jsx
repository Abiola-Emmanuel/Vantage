"use client";

import { motion } from "motion/react";
import { Search, Bug, Fingerprint, VenetianMask, Terminal } from "lucide-react";
import { ButtonLink, PillTag, Blob } from "./ui.jsx";

const sidebarIcons = [Search, Bug, Fingerprint, VenetianMask];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-16 pb-10">
      <Blob className="-top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2" />
      <Blob className="top-40 -left-40 h-[380px] w-[380px] opacity-40" />

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PillTag>Personal Security Lab</PillTag>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 text-[38px] font-medium leading-[1.08] tracking-[-0.03em] text-foreground sm:text-5xl md:text-[56px]"
        >
          Your reference for offensive &amp; defensive security
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          A growing, hands-on library of tools across OSINT, malware analysis, digital forensics and
          social engineering — every entry documented from real lab work, not copied from a manual.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <ButtonLink href="/login?mode=signup">Get Started</ButtonLink>
          <ButtonLink variant="outline" href="#lab-setup">
            Lab Setup Guide
          </ButtonLink>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-14 max-w-4xl"
      >
        <div className="overflow-hidden rounded-[24px] border border-border/70 bg-card shadow-lift">
          <div className="flex">
            {/* sidebar */}
            <div className="flex w-14 flex-col items-center gap-3 border-r border-border/70 bg-secondary/60 py-5">
              {sidebarIcons.map((Icon, i) => (
                <span
                  key={i}
                  className={`flex h-8 w-8 items-center justify-center rounded-xl transition-colors ${
                    i === 0 ? "bg-primary text-ink" : "bg-card text-muted-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>

            {/* main */}
            <div className="flex-1 p-4 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="h-8 flex-1 rounded-full bg-secondary/80" />
                <span className="rounded-full bg-mint-soft px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-primary-deep">
                  Quick Reference
                </span>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_1fr]">
                <div className="rounded-2xl border border-border/70 bg-secondary/40 p-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-primary-deep" />
                    <p className="text-sm font-medium text-foreground">theHarvester</p>
                  </div>
                  <div className="mt-3 space-y-2 font-mono text-[11px] text-muted-foreground">
                    <p>$ theHarvester -d target.tld -b all</p>
                    <p>[*] 42 hosts · 18 emails found</p>
                    <p>$ export --json recon.json</p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    {["OSINT", "Recon", "Passive"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-card px-2.5 py-1 text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border/70 bg-card p-4">
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    Coverage
                  </p>
                  <div className="mt-4 flex h-24 items-end gap-1.5">
                    {[40, 62, 35, 80, 55, 92, 48, 70, 60, 88].map((h, i) => (
                      <motion.span
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.7, delay: 0.5 + i * 0.05 }}
                        className="flex-1 rounded-t-md"
                        style={{ background: "var(--gradient-bar)" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
