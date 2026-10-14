import { education, experience, profile, sectionIntros } from "@/data/content";
import { ArrowUpRightIcon } from "./icons";
import { Section, Tags, secondaryButtonClass } from "./ui";

export function Experience() {
  return (
    <Section id="experience" title="Experience" intro={sectionIntros.experience}>
      <ol className="relative">
        {experience.map((job, index) => {
          const isCurrent = index === 0;
          const isLast = index === experience.length - 1;
          return (
            <li key={`${job.company}-${job.start}`} className="relative pb-12 pl-9 last:pb-0">
              {!isLast && (
                <span aria-hidden="true" className="absolute top-3 bottom-0 left-[5px] w-px bg-line" />
              )}
              <span
                aria-hidden="true"
                className={`absolute top-[7px] left-0 size-[11px] rounded-full border-2 border-accent ${
                  isCurrent ? "bg-accent" : "bg-bg"
                }`}
              />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-lg leading-snug font-semibold text-ink">
                  {job.title}{" "}
                  <span className="font-normal text-muted">at</span>{" "}
                  <a
                    href={job.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-baseline gap-0.5 text-ink transition-colors hover:text-accent motion-reduce:transition-none"
                  >
                    {job.company}
                    <ArrowUpRightIcon className="size-3.5 self-center opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 motion-reduce:transition-none" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </h3>
                <p className="shrink-0 font-mono text-xs text-muted">
                  <time>{job.start}</time> – <time>{job.end}</time>
                </p>
              </div>
              <p className="mt-2 max-w-2xl">{job.description}</p>
              <div className="mt-4">
                <Tags items={job.stack} label="Technologies used" />
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-16 flex flex-col gap-8 rounded-xl border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-mono text-xs tracking-[0.14em] text-muted uppercase">Education</h3>
          <ul className="mt-3 space-y-1.5 text-sm">
            {education.map((item) => (
              <li key={item.school}>
                <span className="font-semibold text-ink">{item.school}</span>
                <span className="text-muted"> · {item.detail} · {item.years}</span>
              </li>
            ))}
          </ul>
        </div>
        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noreferrer noopener"
          className={`${secondaryButtonClass} self-start sm:self-auto`}
        >
          View full résumé
          <ArrowUpRightIcon className="size-4" />
        </a>
      </div>
    </Section>
  );
}
