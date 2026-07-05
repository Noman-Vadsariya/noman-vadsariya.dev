import Image from "next/image";
import { profile } from "@/content/profile";

const affiliations = [
  { label: "USC", tone: "current" as const },
  { label: "Veeam", tone: "current" as const },
  { label: "USC ATRI", tone: "current" as const },
  { label: "ex-Securiti.ai", tone: "past" as const },
  { label: "ex-Motive", tone: "past" as const },
];

export function Hero() {
  return (
    <section className="pt-14 pb-4 sm:pt-20 sm:pb-6">
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:gap-10">
        <div className="flex-1">
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-fg-subtle">
            {profile.location} · MS CS @ USC
          </div>
          <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-fg sm:text-4xl md:text-5xl">
            {profile.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-fg-muted sm:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {affiliations.map((a) => (
              <span
                key={a.label}
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                  a.tone === "current"
                    ? "bg-accent/10 text-accent"
                    : "bg-surface-muted text-fg-muted"
                }`}
              >
                {a.label}
              </span>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-1 rounded-md bg-fg px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-fg/90"
            >
              View work
              <span aria-hidden>→</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-surface-muted"
            >
              LinkedIn
              <span aria-hidden>↗</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-surface-muted"
            >
              GitHub
              <span aria-hidden>↗</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-surface-muted"
            >
              Email
              <span aria-hidden>↗</span>
            </a>
            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/15"
              >
                Resume
                <span aria-hidden>↗</span>
              </a>
            ) : null}
          </div>
        </div>
        <div className="shrink-0">
          <div className="relative h-28 w-28 overflow-hidden rounded-full ring-1 ring-border sm:h-36 sm:w-36">
            <Image
              src="/avatar.jpg"
              alt={profile.name}
              fill
              sizes="144px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
