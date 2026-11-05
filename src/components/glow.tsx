/** Decorative radial gradient glow. Position it with className. */
export function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 rounded-full bg-[radial-gradient(closest-side,var(--glow-a),var(--glow-b)_55%,transparent)] blur-2xl ${className}`}
    />
  );
}
