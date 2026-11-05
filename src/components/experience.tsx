import { experience, experienceSection } from "@/data/content";
import { Container } from "./container";
import { Stagger, StaggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading id="experience-title" eyebrow={experienceSection.eyebrow} title={experienceSection.title} />

        <Stagger as="ol" gap={0.12} className="relative ml-1.5 border-l border-line">
          {experience.map((item) => (
            <StaggerItem as="li" key={item.org} className="relative pb-14 pl-8 last:pb-0 sm:pl-12">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[5px] size-[9px] rounded-full bg-accent shadow-[0_0_0_4px_var(--color-bg),0_0_16px_2px_rgb(77_124_255/0.6)]"
              />
              <div className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-10">
                <p className="font-mono text-sm text-muted">{item.period}</p>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{item.org}</h3>
                  <p className="mt-1 text-accent-soft">{item.role}</p>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted">{item.summary}</p>
                  {item.highlights.length > 0 && (
                    <ul className="mt-4 max-w-2xl space-y-2">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex gap-3 leading-relaxed text-fg/80">
                          <span aria-hidden="true" className="mt-[0.6em] size-1 shrink-0 rounded-full bg-muted" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
