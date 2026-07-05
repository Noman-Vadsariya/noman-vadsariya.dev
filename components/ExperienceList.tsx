import { experience } from "@/content/experience";
import { DisciplineChipRow } from "./TagChip";

export function ExperienceList() {
  return (
    <div className="relative border-l border-border pl-6 sm:pl-8">
      {experience.map((role) => (
        <div
          key={`${role.company}-${role.role}`}
          className="relative pb-10 last:pb-0"
        >
          <span
            aria-hidden
            className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent sm:-left-[9px]"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="text-base font-semibold tracking-tight text-fg sm:text-lg">
              {role.role}
            </h3>
            <div className="font-mono text-xs text-fg-subtle">
              {role.period}
            </div>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-fg-muted">
            <span className="font-medium text-fg">{role.company}</span>
            <span className="text-fg-subtle">·</span>
            <span>{role.location}</span>
            {role.disciplines.length > 0 && (
              <>
                <span className="text-fg-subtle">·</span>
                <DisciplineChipRow disciplines={role.disciplines} />
              </>
            )}
          </div>
          <ul className="mt-3 list-none space-y-2 pl-0 text-sm leading-6 text-fg-muted">
            {role.highlights.map((h, i) => (
              <li key={i} className="grid grid-cols-[0.375rem_1fr] gap-x-3">
                <span
                  aria-hidden
                  className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-fg-subtle"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
