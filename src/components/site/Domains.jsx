"use client";

import { Search, Bug, Fingerprint, VenetianMask } from "lucide-react";
import { Eyebrow, Reveal, Blob } from "./ui.jsx";
import DomainCard from "./DomainCard.jsx";

function OsintMock() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 rounded-lg bg-secondary/70 px-2 py-1.5">
        <Search className="h-3 w-3 text-primary-deep" />
        <span className="font-mono text-[10px] text-muted-foreground">target.tld</span>
      </div>
      {["mail.target.tld", "vpn.target.tld", "dev.target.tld"].map((h) => (
        <div key={h} className="flex items-center justify-between px-2">
          <span className="font-mono text-[10px] text-muted-foreground">{h}</span>
          <span className="h-1.5 w-10 rounded-full bg-primary/60" />
        </div>
      ))}
    </div>
  );
}

function MalwareMock() {
  return (
    <div className="space-y-1 font-mono text-[10px] text-muted-foreground">
      {[
        "004010 4D5A 9000 0300 0000  MZ..",
        "004020 B800 0000 0E1F BA0E  ....",
        "004030 CD21 B801 4CCD 2154  .!..",
      ].map((l) => (
        <p key={l} className="truncate rounded bg-secondary/60 px-2 py-1">
          {l}
        </p>
      ))}
    </div>
  );
}

function ForensicsMock() {
  return (
    <div className="space-y-1.5 font-mono text-[10px] text-muted-foreground">
      <p className="text-foreground">/case-01.dd</p>
      {["├─ /Users/admin", "│  ├─ NTUSER.DAT", "└─ $MFT (recovered)"].map((l) => (
        <p key={l} className="pl-1">
          {l}
        </p>
      ))}
    </div>
  );
}

function SocialMock() {
  return (
    <div className="space-y-2">
      <div className="rounded-lg bg-secondary/70 px-2 py-1.5 text-[10px] text-muted-foreground">
        Campaign: Q3 awareness
      </div>
      <div className="flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-[38%] rounded-full bg-primary" />
        </div>
        <span className="text-[10px] text-muted-foreground">38% click</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-[12%] rounded-full bg-primary-deep" />
        </div>
        <span className="text-[10px] text-muted-foreground">12% creds</span>
      </div>
    </div>
  );
}

const domains = [
  {
    icon: Search,
    title: "OSINT",
    description:
      "Passive reconnaissance workflows — mapping infrastructure, people and exposure before touching a target.",
    mockup: <OsintMock />,
  },
  {
    icon: Bug,
    title: "Malware Analysis",
    description:
      "Static and dynamic triage: unpacking samples, reading disassembly and capturing behaviour safely.",
    mockup: <MalwareMock />,
  },
  {
    icon: Fingerprint,
    title: "Digital Forensics",
    description:
      "Imaging, timeline building and artifact recovery from disks and memory with defensible process.",
    mockup: <ForensicsMock />,
  },
  {
    icon: VenetianMask,
    title: "Social Engineering",
    description:
      "Pretext design, phishing simulation and payload delivery testing — plus how to defend against it.",
    mockup: <SocialMock />,
  },
];

export default function Domains() {
  return (
    <section id="domains" className="relative overflow-hidden px-4 py-16">
      <Blob className="-right-40 top-20 h-[420px] w-[420px] opacity-40" />
      <div className="relative mx-auto max-w-5xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Explore</Eyebrow>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-foreground sm:text-[42px] sm:leading-[1.1]">
            Four domains, one connected workflow
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Recon feeds the pretext, the pretext delivers the sample, the sample leaves artifacts —
            each domain picks up where the last one ends.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {domains.map((d, i) => (
            <DomainCard key={d.title} {...d} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
