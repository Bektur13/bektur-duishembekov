import type { Project } from "@/data/content";

// Decorative, code-drawn previews for each project card (no images to load).

function CareerTrackVisual() {
  const columns = [
    { name: "Applied", dot: "bg-muted", items: ["SWE Intern", "Backend Intern", "Full-stack Intern", "Mobile Intern"] },
    { name: "Interview", dot: "bg-accent", items: ["Platform Intern", "SWE Intern"] },
    { name: "Offer", dot: "bg-emerald-400", items: ["SWE Intern"] },
  ];
  const metrics = [
    { label: "Applications", value: "24" },
    { label: "Reply rate", value: "38%" },
    { label: "Interviews", value: "5" },
  ];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-3">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-line bg-bg/60 p-3">
            <div className="truncate text-[11px] text-muted">{m.label}</div>
            <div className="mt-1 text-xl font-semibold tracking-tight">{m.value}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {columns.map((col, i) => (
        <div key={col.name} className={`rounded-2xl border border-line bg-bg/60 p-3 ${i === 2 ? "hidden sm:block" : ""}`}>
          <div className="mb-3 flex items-center gap-2 text-xs text-muted">
            <span className={`size-1.5 rounded-full ${col.dot}`} />
            {col.name}
            <span className="ml-auto font-mono">{col.items.length}</span>
          </div>
          <div className="space-y-2">
            {col.items.map((item, i) => (
              <div key={i} className="rounded-xl border border-line bg-card p-2.5">
                <div className="truncate text-xs text-fg/90">{item}</div>
                <div className="mt-2 h-1.5 w-2/3 rounded-full bg-fg/[0.06]" />
              </div>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

function PentamindVisual() {
  const routes = [
    { model: "Fast model", load: "w-1/4", active: false },
    { model: "Reasoning model", load: "w-5/6", active: true },
    { model: "Fallback", load: "w-1/3", active: false },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between rounded-xl border border-line bg-bg/60 px-3 py-2 font-mono text-xs text-muted">
        <span>complexity</span>
        <span className="text-accent-soft">0.82</span>
      </div>
      {routes.map((r) => (
        <div
          key={r.model}
          className={`rounded-xl border px-3 py-2.5 ${r.active ? "border-accent/50 bg-accent/10" : "border-line bg-bg/60"}`}
        >
          <div className="mb-2 text-xs text-fg/90">{r.model}</div>
          <div className="h-1.5 rounded-full bg-fg/[0.06]">
            <div className={`h-full rounded-full ${r.load} ${r.active ? "bg-accent" : "bg-fg/20"}`} />
          </div>
        </div>
      ))}
    </div>
  );
}

function UsefyVisual() {
  return (
    <div className="space-y-3 text-xs">
      <div className="ml-auto w-4/5 rounded-2xl rounded-br-md bg-fg/[0.08] px-3 py-2.5 text-fg/90">
        Why does my recursion never stop?
      </div>
      <div className="w-[90%] rounded-2xl rounded-bl-md border border-accent/30 bg-accent/10 px-3 py-2.5 text-fg/90">
        You&apos;re missing a base case. Lesson 4 covers this: every call should move toward it.
        <div className="mt-2 inline-block rounded-full border border-line px-2 py-0.5 font-mono text-[10px] text-accent-soft">
          Lesson 4 · Recursion
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({ visual }: { visual: Project["visual"] }) {
  switch (visual) {
    case "careertrack":
      return <CareerTrackVisual />;
    case "pentamind":
      return <PentamindVisual />;
    case "usefy":
      return <UsefyVisual />;
  }
}
