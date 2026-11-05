import { projects, projectsSection, site } from "@/data/content";
import { Container } from "./container";
import { Glow } from "./glow";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
import { ProjectCard } from "./project-card";
import { Stagger, StaggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative isolate py-24 sm:py-32">
      <Glow className="top-1/3 -left-40 h-[500px] w-[500px]" />
      <Container>
        <SectionHeading id="projects-title" eyebrow={projectsSection.eyebrow} title={projectsSection.title} />

        <Stagger as="ul" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
          {projects.map((project) => (
            <StaggerItem
              as="li"
              key={project.slug}
              className={project.size === "large" ? "md:col-span-2 lg:row-span-2" : ""}
            >
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
          <StaggerItem as="li" className="md:col-span-2 lg:col-span-3">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-card border border-line bg-card px-6 py-5 transition-colors hover:border-line-strong hover:bg-card-hover sm:px-8"
            >
              <span className="flex items-center gap-3 text-[15px]">
                <GitHubIcon />
                {projectsSection.moreLabel}
              </span>
              <ArrowUpRightIcon className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
            </a>
          </StaggerItem>
        </Stagger>
      </Container>
    </section>
  );
}
