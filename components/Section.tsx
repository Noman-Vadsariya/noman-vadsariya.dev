import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mb-8 sm:mb-10">
        {eyebrow ? (
          <div className="mb-2 font-mono text-xs uppercase tracking-widest text-fg-subtle">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
