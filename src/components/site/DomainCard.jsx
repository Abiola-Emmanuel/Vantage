"use client";

import { motion } from "motion/react";
import { ButtonLink } from "./ui.jsx";

export default function DomainCard({ icon: Icon, title, description, mockup, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group rounded-[24px] border border-border/70 bg-secondary/40 p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-ink transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-xl font-medium tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className="mt-5 overflow-hidden rounded-2xl border border-border/70 bg-card p-3 shadow-soft">
        {mockup}
      </div>

      <ButtonLink variant="ghost" href="#domains" className="mt-5">
        Learn More
      </ButtonLink>
    </motion.article>
  );
}
