# Build my personal portfolio website

## Goal
A personal portfolio site for Bektur, a Computer Science student at Bellevue College
targeting software engineering internships. It should feel premium and modern, inspired by
framer.com's visual style (NOT a copy: no Framer logos, text, or assets).

## Tech stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Motion (framer-motion) for animations
- Deploy target: Vercel
- All content in one file: `src/data/content.ts` so I can edit text without touching components

## Design direction (Framer-inspired)
- Near-black background (#0a0a0a), white text, muted gray secondary text (#8a8a8a)
- One accent color for highlights and glows (electric blue or violet)
- Font: Inter or Geist; HUGE bold hero headline (clamp ~48px to 96px), tight letter-spacing
- Pill-shaped buttons: primary = white bg / black text, secondary = subtle outline
- Cards: dark gray (#141414), 1px border rgba(255,255,255,0.08), large rounded corners (24px)
- Bento grid layout for projects (mixed card sizes)
- Subtle radial gradient glows behind key sections
- Animations: fade-up + slight blur-in on scroll, staggered children, smooth hover lift on cards,
  an infinite horizontal marquee for the tech stack
- Generous whitespace, centered max-width container (~1200px)
- Fully responsive (mobile-first), respects prefers-reduced-motion

## Sections
1. **Navbar**: sticky, blurred translucent background, name on left, links (Projects, About,
   Experience, Contact), "Resume" pill button on right
2. **Hero**: big headline (e.g. "I build full-stack apps that people actually use."),
   one-line subtitle (CS student @ Bellevue College, open to SWE internships),
   two buttons: "View projects" and "Contact me"
3. **Tech marquee**: Java, Python, JavaScript, TypeScript, Swift, React, Next.js,
   Spring Boot, FastAPI, PostgreSQL, Prisma, Tauri
4. **Projects (bento grid)**: each card has title, one-line pitch, stack tags, GitHub + live links
   - **CareerTrack** (large card): full-stack job application tracker. Next.js, TypeScript,
     PostgreSQL (Neon), Prisma, Clerk auth, deployed on Vercel
   - **Pentamind**: cross-platform desktop AI orchestrator that routes prompts across multiple
     LLMs by task complexity. Async routing engine with fallback retries, PDF/DOCX ingestion,
     speech-to-text. Tauri, React, FastAPI
   - **Usefy AI Tutor**: AI tutoring features on a real online learning platform, built during
     the GrowthHungry fellowship. AI assistant tied to course content. Spring Boot, React, PostgreSQL
5. **Experience**: timeline style — GrowthHungry Fellowship (Dec 2024 – Dec 2025), CodePath
6. **About**: short personal paragraph + a stat row of 3 cards
   (e.g. "3× national youth soccer champion – Kyrgyz Republic", "4+ languages", "3 shipped projects")
7. **Contact**: big CTA headline ("Let's build something."), email button, GitHub/LinkedIn icons
8. **Footer**: minimal, name + year

## Requirements
- Lighthouse 95+ on performance and accessibility
- SEO metadata + Open Graph image
- Semantic HTML, keyboard-accessible, good color contrast
- Placeholder links marked with TODO comments so I can find them
- Keep components small and in `src/components/`

## Process
Build step by step: scaffold → layout + navbar → hero → each section → animations → responsive
polish → run build and fix any errors. Show me the result after each major section.