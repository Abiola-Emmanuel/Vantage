import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Reveal } from "./ui.jsx";

function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min((t - start) / 900, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 4, suffix: "", label: "Domains" },
  { value: 40, suffix: "+", label: "Tools documented" },
  { value: null, label: "Hands-on lab verified" },
];

export default function Stats() {
  return (
    <section className="px-4 py-10">
      <Reveal className="mx-auto grid max-w-3xl grid-cols-1 gap-8 border-y border-border py-8 text-center sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-2xl font-medium tracking-tight text-foreground">
              {s.value === null ? (
                <span className="text-primary-deep">✓</span>
              ) : (
                <>
                  <CountUp to={s.value} suffix={s.suffix} />
                </>
              )}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
