/** Shared building blocks: section shell, tags, buttons and link styles. */

export const textLinkClass =
  "font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent motion-reduce:transition-none";

export const primaryButtonClass =
  "inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85 motion-reduce:transition-none";

export const secondaryButtonClass =
  "inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-muted motion-reduce:transition-none";

export const iconButtonClass =
  "grid size-10 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-muted hover:text-ink motion-reduce:transition-none";

export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line py-20 sm:py-24">
      <h2 id={headingId} className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-3 max-w-2xl text-lg text-muted">{intro}</p>}
      <div className="mt-12">{children}</div>
    </section>
  );
}

export function Tags({ items, label }: { items: string[]; label: string }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-line bg-subtle px-2 py-0.5 font-mono text-xs text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

/** target/rel props for links that leave the site. */
export function externalProps(href: string) {
  return isExternal(href) ? { target: "_blank", rel: "noreferrer noopener" } : {};
}
