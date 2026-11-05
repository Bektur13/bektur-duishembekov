import { Reveal } from "./reveal";

type Props = { id: string; eyebrow: string; title: string; className?: string };

export function SectionHeading({ id, eyebrow, title, className = "" }: Props) {
  return (
    <Reveal className={`mb-12 max-w-2xl sm:mb-16 ${className}`}>
      <p className="mb-4 font-mono text-xs tracking-[0.2em] text-accent-soft uppercase">{eyebrow}</p>
      <h2 id={id} className="text-4xl font-semibold tracking-[-0.04em] text-balance sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
