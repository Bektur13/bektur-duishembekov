import { hero } from "@/data/content";
import { ButtonLink } from "./button-link";
import { Container } from "./container";
import { Glow } from "./glow";

// The hero uses CSS keyframes (not JS) so the headline paints before hydration, keeping LCP fast.
const fade = "motion-safe:animate-fade-up";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-36 sm:pb-28">
      <Glow className="top-[-10%] left-1/2 h-[560px] w-[900px] max-w-[160vw] -translate-x-1/2" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--grid)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />
      <Container className="flex flex-col items-center text-center">
        <p
          className={`${fade} mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-fg/[0.03] px-4 py-1.5 text-sm text-muted`}
        >
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          {hero.eyebrow}
        </p>

        <h1
          id="hero-title"
          className={`${fade} max-w-5xl text-[clamp(3rem,8vw,6rem)] leading-[0.95] font-semibold tracking-[-0.055em] text-balance [animation-delay:80ms]`}
        >
          {hero.headline.lead}{" "}
          <span className="bg-gradient-to-r from-accent-soft via-accent to-violet-400 bg-clip-text text-transparent">
            {hero.headline.accent}
          </span>
        </h1>

        <p className={`${fade} mt-8 max-w-xl text-lg text-pretty text-muted [animation-delay:160ms]`}>
          {hero.subtitle}
        </p>

        <div className={`${fade} mt-10 flex flex-col gap-3 sm:flex-row [animation-delay:240ms]`}>
          <ButtonLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ButtonLink>
          <ButtonLink href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
