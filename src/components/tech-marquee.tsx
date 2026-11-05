import { techStack } from "@/data/content";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-3 pr-3">
      {techStack.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-line bg-card px-5 py-2.5 text-sm whitespace-nowrap text-fg/80"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee() {
  return (
    <section aria-label="Tech stack" className="py-10">
      <p className="mb-6 text-center font-mono text-xs tracking-[0.2em] text-muted uppercase">Tools I work with</p>
      <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
