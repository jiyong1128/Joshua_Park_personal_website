// All site content lives here. Edit this file; components read from it.
// Search for "TODO:" to find the spots that still need your input.

export type InlineLink = { text: string; href: string };
export type RichText = Array<string | InlineLink>;

export type Experience = {
  start: string;
  end: string;
  title: string;
  company: string;
  href: string;
  description: string;
  stack: string[];
};

export type Project = {
  title: string;
  year?: string;
  status?: string;
  href: string;
  /** Path under /public. Placeholders live in /public/projects. */
  image: string;
  imageAlt: string;
  /** One or two sentences, shown on compact cards. */
  summary: string;
  /** Featured projects show a Problem / Approach breakdown instead of the summary. */
  featured?: { problem: string; approach: string };
  tags: string[];
};

export type Post = {
  year: string;
  title: string;
  href: string;
};

export const profile = {
  name: "Joshua Park",
  shortName: "Josh Park",
  initials: "JP",
  title: "Software Engineer",
  location: "Fort Lee, NJ · NYC area",
  tagline:
    "I build AI-powered products end to end, from the customer's problem to production.",
  availability: "Open to Forward Deployed and AI Engineer roles",
  description:
    "Joshua (Josh) Park is a software engineer in the NYC area with 8+ years of experience across frontend, backend and cloud, now focused on Forward Deployed and AI engineering.",
  resumeHref: "/resume.pdf", // TODO: add public/resume.pdf
};

export const links = {
  github: "https://github.com/jiyong1128",
  linkedin: "https://www.linkedin.com/in/joshua-park-7044a7153",
  emailAddress: "jiyong11281@gmail.com",
  email: "mailto:jiyong11281@gmail.com",
};

/** Three quick facts under the intro. */
export const highlights = [
  { value: "8+ years", label: "Shipping production software since 2018" },
  { value: "NBA", label: "Senior Software Engineer, 2021 to present" },
  { value: "Korean · English", label: "Bilingual, working across both languages" },
];

export const sectionIntros = {
  about: "From a bootcamp in 2018 to the NBA, and now closer to the customer.",
  experience: "Eight years of production work across sports, healthcare and finance.",
  projects: "Things I've built around a specific user and a real problem.",
  writing: "Notes on building with AI and working with customers.",
  contact:
    "I'm looking for Forward Deployed and AI engineering roles where I work directly with customers. Email is the fastest way to reach me.",
};

export const about: RichText[] = [
  [
    "I got into software through ",
    { text: "Fullstack Academy", href: "https://www.fullstackacademy.com" },
    "'s full-time immersive in 2018, and I've spent the years since shipping production software for large organizations. I started at JPMorgan Chase building React/Redux apps on top of Java and Spring Boot services, led UI delivery as a project lead at Broadridge, and built REST APIs in Node and Express for CVS Health. Since 2021 I've been a senior engineer at the ",
    { text: "NBA", href: "https://www.nba.com" },
    ", building the league's websites and features with design partners and keeping them healthy in production.",
  ],
  [
    "These days I'm moving toward Forward Deployed and AI engineering work: sitting close to a customer, understanding a messy real-world problem, and shipping the whole solution. I built ",
    { text: "checkpackage.com", href: "https://checkpackage.com" },
    " around one specific customer, Korean manufacturers facing new EU packaging rules. My research agent ",
    { text: "Hermes", href: "#projects" },
    " is where I work on agent architecture, memory and evals with the Claude API and Claude Code.",
  ],
  [
    "I'm bilingual in Korean and English and closely connected to the Korean American community in Bergen County, NJ. That means I can work directly with Korean-speaking customers and teams, and carry both the language and the context between them and engineering.",
  ],
];

/** Grouped skills. AI first: that's the work I'm leading with. */
export const toolkit = [
  {
    group: "AI",
    items: ["Claude API", "Claude Code", "MCP", "Agent architectures (ReAct, reflection, planner-executor)", "Evaluation"],
  },
  {
    group: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Redux", "React Native", "HTML/CSS", "D3", "Webpack"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Python", "Java", "Spring Boot", "REST APIs", "Socket.io", "OAuth/Passport"],
  },
  { group: "Data", items: ["PostgreSQL", "Sequelize", "PL/SQL"] },
  { group: "Cloud & infra", items: ["AWS", "Jenkins", "Cloud Foundry", "CI/CD"] },
  { group: "Other", items: ["C# / Unity"] },
];

// Ordered most recent first.
export const experience: Experience[] = [
  {
    start: "Jun 2021",
    end: "Present",
    title: "Senior Software Engineer",
    company: "NBA",
    href: "https://www.nba.com",
    description:
      "Build and maintain NBA websites and features in close partnership with design, and debug and resolve production issues when they surface.",
    // TODO: confirm the stack you use at the NBA. Add a metric if you can (e.g. traffic served, features shipped).
    stack: ["JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    start: "Aug 2020",
    end: "Jun 2021",
    title: "API Engineer (Contract)",
    company: "CVS Health",
    href: "https://www.cvshealth.com",
    description:
      "Built REST APIs with Node.js and Express and integrated them across microservices and internal web tools. Owned code review, testing and deployments.",
    stack: ["Node.js", "Express", "REST APIs", "Microservices"],
  },
  {
    start: "Dec 2019",
    end: "Aug 2020",
    title: "Project Lead (Contract)",
    company: "Broadridge",
    href: "https://www.broadridge.com",
    description:
      "Built UI in React and JavaScript, and led PI planning and delivery for the UI team in an agile organization.",
    stack: ["React", "JavaScript", "Agile", "PI Planning"],
  },
  {
    start: "Aug 2018",
    end: "Dec 2019",
    title: "Front-End Developer",
    company: "JPMorgan Chase",
    href: "https://www.jpmorganchase.com",
    description:
      "Built React/Redux client applications, and produced and consumed REST services with Java, Spring Boot and Spring MVC.",
    stack: ["React", "Redux", "Java", "Spring Boot", "Spring MVC"],
  },
  {
    start: "Feb 2018",
    end: "May 2018",
    title: "Software Engineer",
    company: "Fullstack Academy",
    href: "https://www.fullstackacademy.com",
    // TODO: add one sentence on what you built or owned in this role.
    description:
      "Joined Fullstack Academy as a software engineer after completing its full-time immersive program.",
    // TODO: confirm stack
    stack: ["JavaScript", "Node.js", "React"],
  },
];

export const education = [
  { school: "Fullstack Academy", detail: "Software Engineering Immersive", years: "2018" },
  { school: "Hunter College", detail: "Liberal Arts", years: "2012 – 2014" },
];

export const projects: Project[] = [
  {
    title: "OnChrist",
    status: "In development",
    href: "https://onchrist.net/",
    image: "/projects/onchrist.svg",
    imageAlt: "Screenshot placeholder for OnChrist",
    summary:
      "A community platform web app designed from the perspective of the people who run communities.",
    // TODO: sharpen these with specifics (who the owners are, what they struggled with, what you built for them).
    featured: {
      problem:
        "Community platforms are usually designed around members. The people who run a community, who organize it and keep it going, are left working around tools that weren't built for them.",
      approach:
        "I'm designing OnChrist from the community owner's perspective first, so the product starts from the work of running a community rather than just joining one.",
    },
    // TODO: add the tech stack
    tags: ["Web app", "Community platform"],
  },
  {
    title: "checkpackage.com",
    href: "https://checkpackage.com",
    image: "/projects/checkpackage.svg",
    imageAlt: "Screenshot placeholder for checkpackage.com",
    summary:
      "An EU packaging-regulation (PPWR) compliance tool built from the Korean manufacturer's point of view.",
    featured: {
      problem:
        "Tools for the EU's new packaging regulation (PPWR) are written for the EU importer. The Korean manufacturers and sellers who supply them are left working through requirements that weren't written with them in mind.",
      // TODO: add a usage number if you have one (sellers onboarded, declarations generated).
      approach:
        "I built the tool from the Korean seller's side. The UX, the content and automatic Declaration of Conformity generation all follow how they actually work.",
    },
    // TODO: add the tech stack
    tags: ["EU PPWR", "Korean / English", "Doc generation"],
  },
  {
    title: "Hermes",
    href: "https://github.com/jiyong1128", // TODO: link the repo or a write-up
    image: "/projects/hermes.svg",
    imageAlt: "Screenshot placeholder for the Hermes research agent",
    summary: "A self-improving research agent for crypto/Bittensor markets.",
    featured: {
      problem:
        "I wanted a research agent for crypto/Bittensor markets whose calls could actually be graded, so it could improve over time instead of just sounding confident.",
      approach:
        "Claude Code is the per-cycle reasoning engine on a Claude API backend, with persistent memory and an always-on scheduler. Every BUY/SELL/HOLD recommendation is logged with explicit success and failure conditions that a feedback loop grades. It's a research tool, not an auto-trader, and my lab for agent architecture and evals.",
    },
    tags: ["Claude API", "Claude Code", "Agents", "Memory", "Evals"],
  },
  {
    title: "Midas",
    year: "2018",
    href: "https://github.com/jiyong1128", // TODO: link the repo
    image: "/projects/midas.svg",
    imageAlt: "Screenshot placeholder for the Midas finance dashboard",
    summary:
      "A personal finance dashboard that pulls account data through the Plaid API into interactive D3/Victory charts.",
    tags: ["React", "Redux", "Node.js", "Express", "Sequelize", "Plaid", "D3"],
  },
  {
    title: "Unity Shooter",
    year: "2018",
    href: "https://github.com/jiyong1128", // TODO: link the repo or a gameplay video
    image: "/projects/unity-shooter.svg",
    imageAlt: "Screenshot placeholder for the Unity first-person shooter",
    summary: "A first-person shooter built in Unity with C#.",
    tags: ["Unity", "C#"],
  },
];

// Writing stays hidden (and out of the nav) until this has at least one entry.
export const posts: Post[] = [];
