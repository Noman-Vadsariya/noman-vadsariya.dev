import type { ReactNode } from "react";
import { skills } from "@/content/skills";

type CategoryTheme = {
  label: string;
  icon: ReactNode;
  bar: string;
  iconBg: string;
  iconRing: string;
  iconColor: string;
};

function iconClass(className: string) {
  return `h-4 w-4 ${className}`;
}

const CodeIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={iconClass(className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="m9 18-6-6 6-6" />
    <path d="m15 6 6 6-6 6" />
  </svg>
);

const BrainIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={iconClass(className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M12 5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3" />
    <path d="M12 5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3" />
    <path d="M6 8a3 3 0 0 0 0 6" />
    <path d="M18 8a3 3 0 0 1 0 6" />
    <path d="M9 12h6" />
  </svg>
);

const DatabaseIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={iconClass(className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.657 3.582 3 8 3s8-1.343 8-3V5" />
    <path d="M4 11v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
  </svg>
);

const GearIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={iconClass(className)}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M20 7h-9" />
    <path d="M14 17H5" />
    <circle cx="17" cy="17" r="3" />
    <circle cx="7" cy="7" r="3" />
  </svg>
);

const themes: Record<string, CategoryTheme> = {
  "Languages & Frameworks": {
    label: "Languages & Frameworks",
    icon: <CodeIcon />,
    bar: "bg-accent",
    iconBg: "bg-accent/10",
    iconRing: "ring-accent/15",
    iconColor: "text-accent",
  },
  "AI & Machine Learning": {
    label: "AI & Machine Learning",
    icon: <BrainIcon />,
    bar: "bg-tag-ml",
    iconBg: "bg-tag-ml-bg",
    iconRing: "ring-tag-ml/20",
    iconColor: "text-tag-ml",
  },
  "Databases & Analytics": {
    label: "Databases & Analytics",
    icon: <DatabaseIcon />,
    bar: "bg-tag-data",
    iconBg: "bg-tag-data-bg",
    iconRing: "ring-tag-data/20",
    iconColor: "text-tag-data",
  },
  Practices: {
    label: "Practices",
    icon: <GearIcon />,
    bar: "bg-fg-subtle",
    iconBg: "bg-surface-muted",
    iconRing: "ring-border",
    iconColor: "text-fg-muted",
  },
};

function fallbackTheme(label: string): CategoryTheme {
  return {
    label,
    icon: <GearIcon />,
    bar: "bg-fg-subtle",
    iconBg: "bg-surface-muted",
    iconRing: "ring-border",
    iconColor: "text-fg-muted",
  };
}

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {Object.entries(skills).map(([group, items]) => {
        const theme = themes[group] ?? fallbackTheme(group);
        return (
          <div
            key={group}
            className="group relative overflow-hidden rounded-xl border border-border bg-surface transition-all hover:border-border-strong hover:shadow-[0_6px_20px_-8px_rgba(0,0,0,0.10)]"
          >
            <div
              aria-hidden
              className={`absolute inset-x-0 top-0 h-[3px] ${theme.bar}`}
            />
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ${theme.iconBg} ${theme.iconRing} ${theme.iconColor}`}
                  >
                    {theme.icon}
                  </span>
                  <h3 className="text-base font-semibold tracking-tight text-fg">
                    {theme.label}
                  </h3>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-fg-subtle">
                  {items.length} items
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-md border border-border bg-bg px-2.5 py-1 font-mono text-xs text-fg transition-colors hover:border-border-strong hover:bg-surface-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
