import type { ProjectFrontmatter } from "@/content/types";

// Statically registered — order here controls the "Selected Work" grid.
const PROJECT_SLUGS = [
  "d2l-vs-rag",
  "dialect-bias-toxicity",
  "erp-backend",
  "real-time-chat-backend",
  "dense-video-captioning",
  "khudmadad",
] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

async function loadProject(slug: ProjectSlug) {
  const mod = await import(`@/content/projects/${slug}.mdx`);
  const frontmatter = mod.frontmatter as ProjectFrontmatter;
  return { slug, frontmatter, Content: mod.default };
}

export async function getAllProjects() {
  return Promise.all(PROJECT_SLUGS.map((slug) => loadProject(slug)));
}

export async function getProject(slug: string) {
  if (!(PROJECT_SLUGS as readonly string[]).includes(slug)) return null;
  return loadProject(slug as ProjectSlug);
}

export function getAllProjectSlugs(): { slug: string }[] {
  return PROJECT_SLUGS.map((slug) => ({ slug }));
}
