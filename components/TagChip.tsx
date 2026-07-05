import type { Discipline } from "@/content/types";

const disciplineStyles: Record<Discipline, string> = {
  SWE: "bg-tag-swe-bg text-tag-swe",
  ML: "bg-tag-ml-bg text-tag-ml",
  "Data-Eng": "bg-tag-data-bg text-tag-data",
};

export function DisciplineChip({ discipline }: { discipline: Discipline }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${disciplineStyles[discipline]}`}
    >
      {discipline}
    </span>
  );
}

export function TechChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-xs text-fg-muted">
      {children}
    </span>
  );
}

export function DisciplineChipRow({
  disciplines,
}: {
  disciplines: Discipline[];
}) {
  if (!disciplines.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {disciplines.map((d) => (
        <DisciplineChip key={d} discipline={d} />
      ))}
    </div>
  );
}
