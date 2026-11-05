"use client";

import { m, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const full: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  // Only set delay when given so it doesn't override a parent's stagger timing
  show: (delay?: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease, ...(delay ? { delay } : {}) },
  }),
};

const reduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0 } },
};

const viewport = { once: true, margin: "0px 0px -80px 0px" } as const;

const tags = { div: m.div, ul: m.ul, ol: m.ol, li: m.li };
type Tag = keyof typeof tags;

type Props = { children: ReactNode; className?: string; as?: Tag; delay?: number };

/** Fades and un-blurs its content as it scrolls into view. */
export function Reveal({ children, className, as = "div", delay }: Props) {
  const reduce = useReducedMotion();
  const Comp = tags[as];
  return (
    <Comp
      className={className}
      variants={reduce ? reduced : full}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      custom={delay}
    >
      {children}
    </Comp>
  );
}

/** Container that reveals its <StaggerItem> children one after another. */
export function Stagger({ children, className, as = "div", gap = 0.08 }: Omit<Props, "delay"> & { gap?: number }) {
  const Comp = tags[as];
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({ children, className, as = "div" }: Omit<Props, "delay">) {
  const reduce = useReducedMotion();
  const Comp = tags[as];
  return (
    <Comp className={className} variants={reduce ? reduced : full}>
      {children}
    </Comp>
  );
}
