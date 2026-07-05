import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => (
    <h1 className="text-3xl font-semibold tracking-tight text-fg mt-10 mb-4" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-xl font-semibold tracking-tight text-fg mt-8 mb-3" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-lg font-semibold text-fg mt-6 mb-2" {...props} />
  ),
  p: (props) => <p className="text-fg-muted leading-7 my-4" {...props} />,
  ul: (props) => (
    <ul className="list-disc pl-6 space-y-2 text-fg-muted my-4" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 space-y-2 text-fg-muted my-4" {...props} />
  ),
  li: (props) => <li className="leading-7" {...props} />,
  a: (props) => (
    <a
      className="text-accent underline underline-offset-2 hover:no-underline"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold text-fg" {...props} />,
  code: (props) => (
    <code
      className="rounded bg-surface-muted px-1.5 py-0.5 font-mono text-[0.9em]"
      {...props}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
