import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Eyebrow, Reveal, Blob } from "./ui.jsx";

const faqs = [
  {
    q: "What is this site for?",
    a: "It's a personal, continuously updated reference of the tools and techniques I use in my own lab — written so I (and anyone else) can pick a tool back up months later without relearning it.",
  },
  {
    q: "Is this focused on offensive or defensive security?",
    a: "Both. OSINT and social engineering lean offensive, forensics leans defensive, and malware analysis sits in the middle. The point is understanding both sides of the same event.",
  },
  {
    q: "Are these tools safe to run outside a lab environment?",
    a: "Several are not. Anything involving live samples belongs in an isolated VM with host-only networking and snapshots. The lab setup guide covers exactly how to build that.",
  },
  {
    q: "How often is new content added?",
    a: "Whenever a new tool gets used in real lab work. Entries are added after they've been tested end to end, not as placeholders.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative overflow-hidden px-4 py-16">
      <Blob className="-left-40 bottom-0 h-[420px] w-[420px] opacity-40" />
      <div className="relative mx-auto max-w-2xl">
        <Reveal className="text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-foreground sm:text-[42px]">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            The things people ask before digging in.
          </p>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-border/70 bg-secondary/50">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-medium text-foreground">{f.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
