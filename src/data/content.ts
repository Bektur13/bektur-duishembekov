// All site copy lives here. Edit text, links, and lists without touching components.
// Search for "TODO" to find every placeholder that still needs a real value.

export type NavLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  pitch: string;
  tags: string[];
  links: { github?: string; live?: string };
  /** "large" spans two columns and two rows in the bento grid */
  size: "large" | "small";
  visual: "careertrack" | "pentamind" | "usefy";
};

export type Experience = {
  org: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type Stat = { value: string; label: string };

export const site = {
  name: "Bektur Duishembekov",
  shortName: "Bektur",
  role: "Software Engineer",
  description:
    "Bektur is a Computer Science student at Bellevue College building full-stack and AI-powered apps. Open to software engineering internships.",
  // TODO: replace with your real domain once deployed on Vercel
  url: "https://bektur.vercel.app",
  email: "duyshenbekov2004@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1NghZdb9zXuJpPXiCfjjIfruJmxNFByFm/view?usp=sharing",
  socials: {
    github: "https://github.com/Bektur13",
    linkedin: "https://www.linkedin.com/in/bektur-duishembekov",
  },
};

export const nav: NavLink[] = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Open to SWE internships",
  headline: {
    lead: "I build full-stack apps that people",
    accent: "actually use.",
  },
  subtitle:
    "CS student at Bellevue College, shipping products end to end, from the database schema to the last pixel. Open to software engineering internships.",
  primaryCta: { label: "View projects", href: "#projects" },
  secondaryCta: { label: "Contact me", href: "#contact" },
};

export const techStack: string[] = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "Swift",
  "React",
  "Next.js",
  "Spring Boot",
  "FastAPI",
  "PostgreSQL",
  "Prisma",
  "Tauri",
];

export const projectsSection = {
  eyebrow: "Selected work",
  title: "Things I've built and shipped",
  moreLabel: "More on GitHub",
};

export const projects: Project[] = [
  {
    slug: "careertrack",
    title: "CareerTrack",
    pitch:
      "A full-stack job application tracker that turns a messy spreadsheet into a clear pipeline, from applied to offer.",
    tags: ["Next.js", "TypeScript", "PostgreSQL (Neon)", "Prisma", "Clerk", "Vercel"],
    links: {

      github: "https://github.com/Bektur13/CareerTrack",
      live: "https://career-track-set.vercel.app",
    },
    size: "large",
    visual: "careertrack",
  },
  {
    slug: "pentamind",
    title: "Pentamind",
    pitch:
      "Cross-platform desktop AI orchestrator that routes each prompt to the right LLM by task complexity, with fallback retries, PDF/DOCX ingestion, and speech-to-text.",
    tags: ["Tauri", "React", "FastAPI"],
    links: {
      github: "https://github.com/bshiribaiev/pentamind",
    },
    size: "small",
    visual: "pentamind",
  },
  {
    slug: "usefy",
    title: "Usefy AI Tutor",
    pitch:
      "AI tutoring on a real online learning platform: an assistant grounded in course content, built during the GrowthHungry fellowship.",
    tags: ["Spring Boot", "React", "PostgreSQL"],
    links: {
      live: "https://www.usefy.com",
    },
    size: "small",
    visual: "usefy",
  },
];

export const experienceSection = {
  eyebrow: "Experience",
  title: "Where I've been learning by shipping",
};

export const experience: Experience[] = [
  {
    org: "GrowthHungry Fellowship",
    role: "Software Engineering Fellow",
    period: "Dec 2024 – Dec 2025",
    summary:
      "Built AI tutoring features for Usefy, a live online learning platform used by real students.",
    highlights: [
      "Shipped an AI assistant tied to course content, so answers stay grounded in what students are learning.",
      "Worked across a Spring Boot API, a React front end, and PostgreSQL.",
    ],
  },
  {
    org: "CodePath",
    role: "Technical Interview Prep",
    period: "2025",
    summary:
      "Selective program focused on data structures, algorithms, and technical interview practice.",
    highlights: [
      "Solved weekly problem sets in timed, collaborative sessions.",
    ],
  },
];

export const about = {
  eyebrow: "About",
  title: "A little about me",
  paragraphs: [
    "I'm a Computer Science student at Bellevue College who likes owning a product end to end: designing the data model, building the API, and polishing the interface until it feels right.",
    "Before code, I spent years on the soccer pitch and won three national youth championships in the Kyrgyz Republic. The habits carried over: show up every day, drill the fundamentals, and play for the team.",
  ],
  stats: [] satisfies Stat[],
};

export const contact = {
  eyebrow: "Contact",
  headline: "Let's build something.",
  subtitle:
    "I'm looking for software engineering internships. If you're hiring or building something interesting, my inbox is open.",
  emailLabel: "Email me",
};
