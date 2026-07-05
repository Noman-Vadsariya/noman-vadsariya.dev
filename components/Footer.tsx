import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-border py-10">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="text-sm text-fg-muted">
          © {year} {profile.shortName}
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="text-fg-muted hover:text-accent"
          >
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted hover:text-accent"
          >
            LinkedIn
          </a>
          {profile.resumeUrl ? (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-accent"
            >
              Resume
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
