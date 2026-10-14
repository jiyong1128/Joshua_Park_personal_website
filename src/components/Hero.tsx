import { highlights, links, profile } from "@/data/content";
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { iconButtonClass, primaryButtonClass, secondaryButtonClass } from "./ui";

export function Hero() {
  return (
    <section id="top" aria-labelledby="intro-heading" className="pt-16 pb-20 sm:pt-24 sm:pb-24">
      <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
        {profile.title} · {profile.location}
      </p>
      <h1
        id="intro-heading"
        className="mt-5 text-5xl font-semibold tracking-tight text-ink sm:text-7xl"
      >
        {profile.name}
      </h1>
      <p className="mt-6 max-w-3xl text-xl leading-snug text-fg sm:text-2xl sm:leading-snug">
        {profile.tagline}
      </p>

      <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-fg">
        <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
        {profile.availability}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href={links.email} className={primaryButtonClass}>
          <MailIcon className="size-4" />
          Email me
        </a>
        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noreferrer noopener"
          className={secondaryButtonClass}
        >
          Résumé
          <ArrowUpRightIcon className="size-4" />
        </a>
        <span className="flex gap-3">
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
            className={iconButtonClass}
          >
            <GitHubIcon className="size-[18px]" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
            title="LinkedIn"
            className={iconButtonClass}
          >
            <LinkedInIcon className="size-[18px]" />
          </a>
        </span>
      </div>

      <dl className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.value} className="flex flex-col-reverse bg-surface px-5 py-5">
            <dt className="mt-1 text-sm text-muted">{item.label}</dt>
            <dd className="text-lg font-semibold tracking-tight text-ink">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
