import Image from "next/image";
import portrait from "@/assets/bk.jpeg";
import { about, site } from "@/data/content";
import { Container } from "./container";
import { Glow } from "./glow";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative isolate py-24 sm:py-32">
      <Glow className="top-0 right-[-10%] h-[480px] w-[640px]" />
      <Container>
        <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} />

        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,340px)] md:gap-16">
          <Reveal className="order-2 max-w-3xl space-y-6 text-lg leading-relaxed text-pretty text-fg/80 sm:text-xl md:order-1">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="order-1 md:order-2">
            <div className="relative mx-auto w-full max-w-[280px] md:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[32px] bg-[radial-gradient(closest-side,var(--glow-a),transparent)] blur-xl"
              />
              <Image
                src={portrait}
                alt={`Portrait of ${site.name}`}
                placeholder="blur"
                sizes="(min-width: 768px) 340px, 280px"
                className="aspect-square w-full rounded-card border border-line object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Stagger as="ul" className="mt-16 grid gap-4 sm:grid-cols-3">
          {about.stats.map((stat) => (
            <StaggerItem
              as="li"
              key={stat.label}
              className="rounded-card border border-line bg-card p-6 transition-[transform,border-color] duration-300 hover:border-line-strong motion-safe:hover:-translate-y-1 sm:p-8"
            >
              <p className="text-5xl font-semibold tracking-[-0.04em]">{stat.value}</p>
              <p className="mt-3 text-[15px] text-muted">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
