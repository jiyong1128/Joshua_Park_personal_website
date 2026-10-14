import { about, sectionIntros, toolkit, type RichText } from "@/data/content";
import { Section, externalProps, textLinkClass } from "./ui";

function Paragraph({ parts }: { parts: RichText }) {
  return (
    <p>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          part
        ) : (
          <a key={i} href={part.href} {...externalProps(part.href)} className={textLinkClass}>
            {part.text}
          </a>
        ),
      )}
    </p>
  );
}

export function About() {
  return (
    <Section id="about" title="About" intro={sectionIntros.about}>
      <div className="max-w-3xl space-y-5 text-[1.0625rem]">
        {about.map((parts, i) => (
          <Paragraph key={i} parts={parts} />
        ))}
      </div>

      <h3 className="mt-16 font-mono text-xs tracking-[0.14em] text-muted uppercase">Toolkit</h3>
      <dl className="mt-5 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {toolkit.map(({ group, items }) => (
          <div key={group} className="bg-surface p-5">
            <dt className="text-sm font-semibold text-ink">{group}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{items.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
