import { contact, site } from "@/data/content";
import { ButtonLink } from "./button-link";
import { Container } from "./container";
import { Glow } from "./glow";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { Reveal } from "./reveal";

const socials = [
  { label: "GitHub", href: site.socials.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden py-28 sm:py-40">
      <Glow className="bottom-[-30%] left-1/2 h-[520px] w-[900px] max-w-[160vw] -translate-x-1/2" />
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <p className="mb-6 font-mono text-xs tracking-[0.2em] text-accent-soft uppercase">{contact.eyebrow}</p>
          <h2
            id="contact-title"
            className="text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.95] font-semibold tracking-[-0.05em] text-balance"
          >
            {contact.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-lg text-pretty text-muted">{contact.subtitle}</p>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
          <ButtonLink href={`mailto:${site.email}`}>
            <MailIcon />
            {contact.emailLabel}
          </ButtonLink>
          <ul className="flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-12 items-center justify-center rounded-full border border-line-strong text-fg/85 transition-colors hover:border-fg/30 hover:bg-fg/[0.06] hover:text-fg"
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
