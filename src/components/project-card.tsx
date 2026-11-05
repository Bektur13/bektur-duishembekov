"use client";

import type { PointerEvent } from "react";
import type { Project } from "@/data/content";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
import { ProjectVisual } from "./project-visuals";

// Moves a soft spotlight under the cursor via CSS variables (no re-render).
function trackPointer(e: PointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export function ProjectCard({ project }: { project: Project }) {
  const large = project.size === "large";
  return (
    <article
      onPointerMove={trackPointer}
      className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-card transition-[transform,border-color,background-color] duration-300 hover:border-line-strong hover:bg-card-hover motion-safe:hover:-translate-y-1"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_var(--x,50%)_var(--y,0%),rgb(77_124_255/0.12),transparent_60%)]"
      />

      <div aria-hidden="true" className={`relative flex flex-1 flex-col justify-center p-5 sm:p-6 ${large ? "sm:p-8" : ""}`}>
        <div className={large ? "mx-auto w-full max-w-xl" : ""}>
          <ProjectVisual visual={project.visual} />
        </div>
      </div>

      <div className={`relative border-t border-line p-6 ${large ? "sm:p-8" : ""}`}>
        <h3 className={`font-semibold tracking-tight ${large ? "text-2xl sm:text-3xl" : "text-xl"}`}>
          {project.title}
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-pretty text-muted">{project.pitch}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-fg/75">
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-fg/85 transition-colors hover:text-fg"
            >
              <GitHubIcon width={16} height={16} />
              Code<span className="sr-only"> for {project.title} on GitHub</span>
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-fg/85 transition-colors hover:text-fg"
            >
              Live<span className="sr-only"> demo of {project.title}</span>
              <ArrowUpRightIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
