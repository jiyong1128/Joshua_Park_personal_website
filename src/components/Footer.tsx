import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js and Tailwind CSS · Deployed on Vercel</p>
      </div>
    </footer>
  );
}
