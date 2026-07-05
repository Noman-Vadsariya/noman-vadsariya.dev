import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceList } from "@/components/ExperienceList";
import { AwardCard } from "@/components/AwardCard";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Footer } from "@/components/Footer";
import { getAllProjects } from "@/lib/projects";
import { awards } from "@/content/awards";
import { education } from "@/content/education";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero />

        <Section
          id="experience"
          eyebrow="Experience"
          title="Where I've worked."
        >
          <ExperienceList />
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="Where I've studied."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {education.map((edu) => {
              const [gpaValue, gpaMax] = (edu.gpa ?? "")
                .split("/")
                .map((s) => s.trim());
              return (
              <div
                key={`${edu.school}-${edu.degree}`}
                className="relative rounded-xl border border-border bg-surface p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold tracking-tight text-fg">
                      {edu.degree}
                    </h3>
                    <div className="mt-1 text-sm text-fg-muted">
                      <span className="font-medium text-fg">{edu.school}</span>
                      <span className="text-fg-subtle"> · </span>
                      <span>{edu.location}</span>
                    </div>
                    <div className="mt-1 font-mono text-xs text-fg-subtle">
                      {edu.period}
                    </div>
                  </div>
                  {edu.gpa ? (
                    <div className="flex shrink-0 items-baseline gap-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle">
                        GPA
                      </span>
                      <span className="font-sans text-lg font-semibold leading-none tracking-tight text-fg tabular-nums">
                        {gpaValue}
                      </span>
                      {gpaMax ? (
                        <span className="font-mono text-xs text-fg-subtle tabular-nums">
                          /{gpaMax}
                        </span>
                      ) : null}
                    </div>
                  ) : null}
                </div>
                {edu.coursework?.length ? (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {edu.coursework.map((c) => (
                      <span
                        key={c}
                        className="inline-flex items-center rounded-md border border-border bg-bg px-2 py-0.5 font-mono text-xs text-fg-muted"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
              );
            })}
          </div>
        </Section>

        <Section
          id="awards"
          eyebrow="Recognition"
          title="Awards & honors."
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {awards.map((a) => (
              <AwardCard key={a.title} award={a} />
            ))}
          </div>
        </Section>

        <Section
          id="work"
          eyebrow="Selected work"
          title="Things I've built."
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map(({ slug, frontmatter }) => (
              <ProjectCard key={slug} project={frontmatter} />
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Tools & Skills"
          title="Tools of the trade."
        >
          <SkillsGrid />
        </Section>

        <Footer />
      </main>
    </>
  );
}
