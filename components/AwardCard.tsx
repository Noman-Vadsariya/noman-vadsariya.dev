import type { Award } from "@/content/types";

function AwardIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M17 4H7v5a5 5 0 0 0 10 0V4z" />
      <path d="M21 4h-4v3a4 4 0 0 0 4-3V4z" />
      <path d="M3 4h4v3a4 4 0 0 1-4-3V4z" />
    </svg>
  );
}

export function AwardCard({ award }: { award: Award }) {
  return (
    <article
      className="group relative overflow-hidden rounded-xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[0_6px_20px_-8px_rgba(0,0,0,0.12)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-[0.07] transition-opacity group-hover:opacity-[0.12]"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-accent), transparent)",
        }}
      />

      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/15">
          <AwardIcon className="h-4 w-4" />
        </span>
        <div className="font-mono text-[11px] uppercase tracking-widest text-fg-subtle">
          {award.year}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <h3 className="text-base font-semibold tracking-tight text-fg sm:text-[1.05rem]">
          {award.title}
        </h3>
        {award.count ? (
          <span className="inline-flex items-center rounded-md bg-accent/10 px-1.5 py-0.5 font-mono text-xs font-semibold text-accent ring-1 ring-accent/15">
            ×{award.count}
          </span>
        ) : null}
      </div>
      <div className="mt-1 text-xs font-medium text-fg-muted">
        {award.issuer}
      </div>
      <p className="mt-3 text-sm leading-6 text-fg-muted">
        {award.description}
      </p>
    </article>
  );
}
