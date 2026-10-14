import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

// Set NEXT_PUBLIC_SITE_URL once you have a custom domain. On Vercel the
// production URL is picked up automatically.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = `${profile.name} · ${profile.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.description,
  authors: [{ name: profile.name }],
  keywords: [
    "Joshua Park",
    "Josh Park",
    "Software Engineer",
    "Forward Deployed Engineer",
    "AI Engineer",
    "React",
    "Next.js",
    "Claude",
    "New Jersey",
    "New York",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description: profile.description,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0d" },
  ],
};

// Runs before paint so the saved/system theme applies without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans leading-relaxed antialiased">{children}</body>
    </html>
  );
}
