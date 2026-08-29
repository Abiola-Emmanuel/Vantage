import { Eyebrow, Reveal } from "./ui.jsx";

const tools = [
  "Autopsy",
  "Ghidra",
  "Wireshark",
  "theHarvester",
  "Shodan",
  "FTK Imager",
  "Volatility",
  "SET",
  "Gophish",
  "Maltego",
  "REMnux",
  "Cuckoo",
  "Burp Suite",
  "Nmap",
  "Sleuth Kit",
  "x64dbg",
  "Recon-ng",
  "KAPE",
];

export default function ToolsStrip() {
  return (
    <section className="px-4 py-14">
      <Reveal className="mx-auto max-w-4xl text-center">
        <Eyebrow>Tools Covered</Eyebrow>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full bg-secondary px-4 py-2 text-xs text-muted-foreground transition-colors duration-200 hover:bg-mint-soft hover:text-primary-deep"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
