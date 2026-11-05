import type { ComponentProps } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-[background-color,border-color,color,transform] duration-200 motion-safe:active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:bg-fg/85",
  secondary: "border border-line-strong bg-fg/[0.03] text-fg hover:border-fg/30 hover:bg-fg/[0.07]",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-[15px]",
};

type Props = ComponentProps<"a"> & { variant?: Variant; size?: keyof typeof sizes };

export function ButtonLink({ variant = "primary", size = "md", className = "", ...props }: Props) {
  return <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
