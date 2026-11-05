"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/content";
import { ButtonLink } from "./button-link";
import { Container } from "./container";
import { CloseIcon, MenuIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="text-[15px] font-semibold tracking-tight">
          {site.shortName}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href={site.resumeUrl} size="sm" target="_blank" rel="noopener noreferrer">
            Resume
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full border border-line-strong text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-line md:hidden"
      >
        <Container>
          <ul className="flex flex-col py-3">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-2 py-3 text-base text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
