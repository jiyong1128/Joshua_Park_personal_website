import { posts, sectionIntros } from "@/data/content";
import { ArrowUpRightIcon } from "./icons";
import { Section, externalProps } from "./ui";

/** Renders nothing until `posts` in content.ts has at least one entry. */
export function Writing() {
  if (posts.length === 0) return null;

  return (
    <Section id="writing" title="Writing" intro={sectionIntros.writing}>
      <ul className="divide-y divide-line border-y border-line">
        {posts.map((post) => (
          <li key={post.href}>
            <a
              href={post.href}
              {...externalProps(post.href)}
              className="group flex items-baseline gap-6 py-5 transition-colors hover:text-accent motion-reduce:transition-none"
            >
              <span className="w-12 shrink-0 font-mono text-xs text-muted">{post.year}</span>
              <span className="flex-1 font-medium text-ink group-hover:text-accent">{post.title}</span>
              <ArrowUpRightIcon className="size-4 shrink-0 self-center text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent motion-reduce:transition-none" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
