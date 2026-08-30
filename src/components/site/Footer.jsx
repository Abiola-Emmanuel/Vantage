import { ShieldHalf, Github, Globe, Mail } from "lucide-react";

const columns = [
  {
    title: "Domains",
    links: ["OSINT", "Malware Analysis", "Digital Forensics", "Social Engineering"],
  },
  { title: "Resources", links: ["Lab Setup", "About"] },
  { title: "Connect", links: ["GitHub", "Portfolio"] },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                <ShieldHalf className="h-4 w-4 text-ink" />
              </span>
              <span className="text-sm font-semibold text-foreground">Vantage</span>
            </div>
            <p className="mt-4 max-w-[15rem] text-xs leading-relaxed text-muted-foreground">
              A personal reference for security tooling — documented from hands-on lab work.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-medium text-foreground">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#domains"
                      className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-mint-soft px-6 py-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 Vantage</p>
          <div className="flex gap-2">
            {[Github, Globe, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#top"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-card text-primary-deep transition-transform active:scale-95"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
