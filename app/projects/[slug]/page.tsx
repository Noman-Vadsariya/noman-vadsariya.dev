import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { DisciplineChipRow, TechChip } from "@/components/TagChip";
import { getAllProjectSlugs, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjectSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.summary,
    openGraph: {
      title: project.frontmatter.title,
      description: project.frontmatter.summary,
      images: project.frontmatter.cover ? [project.frontmatter.cover] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();
  const { frontmatter, Content } = project;

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="pt-10 pb-6">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1 font-mono text-xs text-fg-subtle hover:text-accent"
          >
            <span aria-hidden>←</span> Back to work
          </Link>
        </div>

        <article>
          <header className="pb-8">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <DisciplineChipRow disciplines={frontmatter.disciplines} />
              <span className="font-mono text-xs text-fg-subtle">
                · {frontmatter.period}
              </span>
            </div>
            <h1 className="text-3xl font-semibold leading-[1.15] tracking-tight text-fg sm:text-4xl">
              {frontmatter.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-fg-muted">
              {frontmatter.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {frontmatter.tech.map((t) => (
                <TechChip key={t}>{t}</TechChip>
              ))}
            </div>
            {frontmatter.links?.length ? (
              <div className="mt-5 flex flex-wrap items-center gap-4">
                {frontmatter.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent hover:text-accent-hover"
                  >
                    {l.label} <span aria-hidden>↗</span>
                  </a>
                ))}
              </div>
            ) : null}
          </header>

          {frontmatter.cover ? (
            <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-surface-muted">
              <Image
                src={frontmatter.cover}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          ) : null}

          <div className="pb-16">
            <Content />
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
