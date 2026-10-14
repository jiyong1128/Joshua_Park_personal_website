import { links, sectionIntros } from "@/data/content";
import { LinkedInIcon, MailIcon } from "./icons";
import { Section, primaryButtonClass, secondaryButtonClass } from "./ui";

export function Contact() {
  return (
    <Section id="contact" title="Get in touch" intro={sectionIntros.contact}>
      <div className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
        <a
          href={links.email}
          className="font-mono text-base break-all text-ink underline decoration-line underline-offset-8 transition-colors hover:text-accent hover:decoration-accent motion-reduce:transition-none sm:text-lg"
        >
          {links.emailAddress}
        </a>
        <div className="flex flex-wrap gap-3">
          <a href={links.email} className={primaryButtonClass}>
            <MailIcon className="size-4" />
            Send an email
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className={secondaryButtonClass}
          >
            <LinkedInIcon className="size-4" />
            LinkedIn
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
