import { Eyebrow, Reveal, ButtonLink } from "./ui.jsx";

export default function CTASection() {
  return (
    <section className="px-4 py-12">
      <Reveal className="mx-auto max-w-6xl rounded-[28px] bg-mint-soft px-6 py-16 text-center">
        <Eyebrow>Vantage</Eyebrow>
        <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-foreground sm:text-[44px] sm:leading-[1.1]">
          Start exploring
          <br className="hidden sm:block" /> the domains
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Pick a domain, follow the lab notes, and run the tools the way they were actually tested.
        </p>
        <ButtonLink href="/login?mode=signup" className="mt-7">
          Get Started
        </ButtonLink>
      </Reveal>
    </section>
  );
}
