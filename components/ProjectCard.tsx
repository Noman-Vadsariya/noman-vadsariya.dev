import Link from "next/link";
import Image from "next/image";
import type { ProjectFrontmatter } from "@/content/types";
import { DisciplineChipRow, TechChip } from "./TagChip";

export function ProjectCard({ project }: { project: ProjectFrontmatter }) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-border-strong hover:shadow-sm"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-muted">
        {project.cover ? (
          <Image
            src={project.cover}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, 500px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(135deg, color-mix(in oklab, var(--color-accent) 15%, transparent), color-mix(in oklab, var(--color-tag-ml) 15%, transparent))",
            }}
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-fg group-hover:text-accent">
            {project.title}
          </h3>
          <DisciplineChipRow disciplines={project.disciplines} />
        </div>
        <div className="mb-3 font-mono text-xs text-fg-subtle">
          {project.period}
        </div>
        <p className="mb-4 text-sm leading-6 text-fg-muted">
          {project.summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <TechChip key={t}>{t}</TechChip>
          ))}
        </div>
      </div>
    </Link>
  );
}
