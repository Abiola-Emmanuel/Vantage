import { Server, Disc3, TriangleAlert } from "lucide-react";
import { Eyebrow, Reveal, ButtonLink } from "./ui.jsx";

const items = [
  {
    icon: Server,
    title: "Hypervisor Setup",
    text: "VirtualBox or VMware, host-only networking and snapshots before the first detonation.",
  },
  {
    icon: Disc3,
    title: "Lab OS Images",
    text: "Kali, REMnux, SIFT and Metasploitable2 — what each one is actually for.",
  },
  {
    icon: TriangleAlert,
    title: "Common Gotchas",
    text: "Networking modes, disk space creep and migrating VMs between machines.",
  },
];

export default function LabSetupCallout() {
  return (
    <section id="lab-setup" className="px-4 py-12">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-mint-soft px-5 py-14 text-center sm:px-10">
        <Eyebrow>Get Started</Eyebrow>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-foreground sm:text-[42px]">
          Set up your lab before you start
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
          Isolation keeps your host safe and keeps your work legal. Build the environment first,
          then break things inside it.
        </p>
        <ButtonLink href="#lab-setup" className="mt-7">
          View Full Guide
        </ButtonLink>

        <div className="mt-12 grid gap-4 rounded-[24px] bg-card/60 p-6 sm:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="group px-3 py-2">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-ink transition-transform duration-300 group-hover:scale-110">
                <it.icon className="h-4 w-4" />
              </span>
              <h3 className="mt-4 text-base font-medium text-foreground">{it.title}</h3>
              <p className="mx-auto mt-2 max-w-[16rem] text-xs leading-relaxed text-muted-foreground">
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
