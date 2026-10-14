import Image from "next/image";
import { projects, sectionIntros, type Project } from "@/data/content";
import { ArrowUpRightIcon } from "./icons";
import { Section, Tags, externalProps, isExternal } from "./ui";

const cardClass =
  "group relative overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-accent/50 motion-reduce:transition-none has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-accent";

/** Title link whose ::after stretches over the whole card, making it one click target. */
function CardTitle({ project, size }: { project: Project; size: "lg" | "md" }) {
  return (
    <h3 className={`${size === "lg" ? "text-xl" : "text-base"} font-semibold tracking-tight text-ink`}>
      <a
        href={project.href}
        {...externalProps(project.href)}
        className="inline-flex items-center gap-1 outline-none after:absolute after:inset-0 group-hover:text-accent"
      >
        {project.title}
        <ArrowUpRightIcon className="size-4 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 motion-reduce:transition-none" />
        {isExternal(project.href) && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    </h3>
  );
}

function Meta({ project }: { project: Project }) {
  const parts = [project.status, project.year].filter(Boolean);
  if (parts.length === 0) return null;
  return <p className="font-mono text-xs text-muted">{parts.join(" · ")}</p>;
}

function FeaturedCard({ project }: { project: Project & Required<Pick<Project, "featured">> }) {
  return (
    <article className={`${cardClass} md:grid md:grid-cols-12`}>
      <div className="flex items-center border-b border-line bg-subtle p-5 sm:p-6 md:col-span-5 md:border-r md:border-b-0">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={800}
          height={500}
          className="aspect-[16/10] w-full rounded-lg border border-line object-cover shadow-sm"
        />
      </div>
      <div className="p-6 sm:p-8 md:col-span-7">
        <div className="flex items-center justify-between gap-4">
          <CardTitle project={project} size="lg" />
          <Meta project={project} />
        </div>
        <dl className="mt-5 space-y-4 text-[0.9375rem]">
          <div>
            <dt className="font-mono text-xs tracking-[0.14em] text-accent uppercase">Problem</dt>
            <dd className="mt-1">{project.featured.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs tracking-[0.14em] text-accent uppercase">Approach</dt>
            <dd className="mt-1">{project.featured.approach}</dd>
          </div>
        </dl>
        <div className="mt-6">
          <Tags items={project.tags} label="Technologies and focus" />
        </div>
      </div>
    </article>
  );
}

function CompactCard({ project }: { project: Project }) {
  return (
    <article className={`${cardClass} flex flex-col`}>
      <div className="border-b border-line bg-subtle">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={800}
          height={500}
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <CardTitle project={project} size="md" />
          <Meta project={project} />
        </div>
        <p className="mt-2 flex-1 text-sm">{project.summary}</p>
        <div className="mt-4">
          <Tags items={project.tags} label="Technologies and focus" />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter(
    (p): p is Project & Required<Pick<Project, "featured">> => p.featured !== undefined,
  );
  const others = projects.filter((p) => p.featured === undefined);

  return (
    <Section id="projects" title="Projects" intro={sectionIntros.projects}>
      <ul className="space-y-6">
        {featured.map((project) => (
          <li key={project.title}>
            <FeaturedCard project={project} />
          </li>
        ))}
      </ul>

      {others.length > 0 && (
        <>
          <h3 className="mt-16 font-mono text-xs tracking-[0.14em] text-muted uppercase">
            More projects
          </h3>
          <ul className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project) => (
              <li key={project.title} className="flex">
                <CompactCard project={project} />
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  );
}
