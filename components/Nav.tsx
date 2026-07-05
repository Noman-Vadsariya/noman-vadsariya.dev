import Link from "next/link";

const navLinks = [
  { href: "/#experience", label: "Experience" },
  { href: "/#education", label: "Education" },
  { href: "/#awards", label: "Awards" },
  { href: "/#work", label: "Work" },
  { href: "/#skills", label: "Skills" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-fg hover:text-accent"
        >
          noman.dev
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-2 py-1.5 text-sm text-fg-muted transition-colors hover:bg-surface-muted hover:text-fg sm:px-3"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
