# Brief: Build my personal website

## Who I am

I'm **Joshua (Josh) Park**, a software engineer based in Fort Lee, New Jersey (NYC area). I have about 8.5 years of professional experience, starting in early 2018. My background is strongest in frontend (React, Next.js), with real backend, cloud and infra experience behind it. I'm currently positioning myself for **Forward Deployed Engineer (FDE)** roles: engineers who sit with customers, understand messy real-world problems, and ship AI-powered solutions end to end.

I'm bilingual in **Korean and English** and closely connected to the Korean American community in Bergen County, NJ.

## Experience

| Role | Company | Dates | Highlights |
|---|---|---|---|
| Senior Software Engineer | NBA (National Basketball Association) | Jun 2021 – present | Build and maintain NBA websites and features with design partners; debug and resolve production issues |
| API Engineer (contract) | CVS Health | Aug 2020 – Jun 2021 | REST APIs with Node/Express; integrations across microservices and web tools; code review, testing, deployments |
| Project Lead (contract) | Broadridge | Dec 2019 – Aug 2020 | Built UI in React/JavaScript; led PI planning and delivery for the UI team in an agile org |
| Front-End Developer | JPMorgan Chase | Aug 2018 – Dec 2019 | React/Redux client apps; produced and consumed REST services with Java, Spring Boot, Spring MVC |
| Software Engineer | Fullstack Academy | Feb 2018 – May 2018 | Post-bootcamp engineering role |

**Education:** Fullstack Academy, full-time software engineering immersive (2018); Hunter College, Liberal Arts (2012–2014).

## Skills

- **Frontend:** JavaScript, TypeScript, React, Redux, Next.js, React Native, HTML/CSS, D3, Webpack
- **Backend:** Node.js, Express, Python, Java, Spring Boot, REST APIs, Socket.io, OAuth/Passport
- **Data:** PostgreSQL, Sequelize, PL/SQL
- **Cloud and infra:** AWS, Jenkins, Cloud Foundry, CI/CD
- **AI:** Claude API, Claude Code, MCP, agent architectures (ReAct, reflection, planner-executor), evaluation
- **Other:** C#/Unity (game dev)

## Projects to feature

1. **checkpackage.com.** An EU packaging regulation (PPWR) compliance tool built from the Korean manufacturer/seller's point of view rather than the EU importer's. That perspective drives the UX, the content, and the automatic Declaration of Conformity generation. This is my best example of FDE-style thinking: understanding a specific customer deeply and building around them.
2. **Hermes.** A self-improving research agent for crypto/Bittensor markets. It runs on a Claude API backend and uses Claude Code as its per-cycle reasoning engine. It keeps persistent memory and an always-on scheduler, and it logs BUY/SELL/HOLD recommendations, each with explicit success and failure conditions, so a feedback loop can grade them. It's a research tool, not an auto-trader. This is my lab for agent architecture and evals.
3. **OnChrist.** A community platform web app (in development) designed from the perspective of community owners.
4. **Midas (2018).** A personal finance dashboard using the Plaid API with D3/Victory data visualization (React, Redux, Node, Express, Sequelize).
5. **Unity shooting game (2018).** A first-person shooter built in Unity/C#.

## Links

- GitHub: https://github.com/jiyong1128
- LinkedIn: https://www.linkedin.com/in/joshua-park-7044a7153
- Email: jiyong11281@gmail.com

## What to build

Build my personal portfolio site: a single page, inspired by the **layout and mood of brittanychiang.com**. Match its structure and feel, but write the implementation yourself. Don't clone her repo, copy her code, text, images or assets, or reuse her wording. It should read as my site, not a reskin of hers.

### Stack

Next.js (App Router), TypeScript, Tailwind CSS, Inter font via `next/font`. Fully static, deployable to Vercel. Keep all content (experience, projects, links) in a single typed data file, e.g. `src/data/content.ts`, so I can edit it without touching components.

### Layout (desktop, ≥1024px)

A two-column split, centered, max width around 1280px:

- **Left column: sticky, full viewport height.** From top to bottom:
  - My name, large and bold
  - My title, smaller: "Software Engineer"
  - A one-line tagline in muted text. Draft something like: "I build AI-powered products end to end, from the customer's problem to production."
  - A vertical section nav (About, Experience, Projects). Each item is a small uppercase label with a short horizontal line in front of it. The line for the active section (and on hover) grows wider and brightens. Track the active section with IntersectionObserver as I scroll.
  - Social icons pinned at the bottom: GitHub, LinkedIn, email
- **Right column: scrolls normally** and holds the sections.

### Layout (mobile and tablet)

A single column. Hide the section nav. Each section heading becomes a sticky bar at the top of the screen, with a translucent, blurred background while you're inside that section.

### Sections (right column)

1. **About:** 2–3 short paragraphs in first person, written from the facts above. Cover my path from bootcamp to JPMorgan, CVS, Broadridge, and the NBA; why I'm moving toward FDE / AI engineering work; and my Korean–English bilingual edge. Inline links in the accent color.
2. **Experience:** One entry per role from the table above. Each entry is a row with:
   - Left: the date range in small uppercase muted text
   - Right: "Title · Company" with a small diagonal arrow icon, a 1–2 sentence description, and the tech stack as small rounded pills
   
   End the section with a "View Full Résumé →" link to `/resume.pdf` (I'll add the file).
3. **Projects:** Same row treatment as Experience. The left side is a small thumbnail (leave clearly labeled placeholder images I can replace). The right side has the title with an arrow link, a short problem → approach description, and stack pills. Use the projects listed above, in that order.
4. **Writing (optional, add later):** Scaffold an empty section I can populate with posts (year, thumbnail, title). Hide it while it's empty.
5. **Footer:** One short, muted line on how the site was built (Next.js, Tailwind, Vercel), plus a small credit: "Layout inspired by Brittany Chiang."

### Visual style

- **Colors:** Deep navy/slate background (close to Tailwind `slate-900`), muted slate body text, near-white headings, and a single bright accent color used sparingly for links, hover states and pill text. Pills use a faint tinted background of the accent. Teal is fine, but feel free to propose an accent that feels like mine.
- **Cursor spotlight:** On desktop, a large, very soft radial glow follows the mouse across the background. Disable it on touch devices and for `prefers-reduced-motion`.
- **Hover behavior for Experience and Projects:**
  - The hovered entry gets a subtle card background, a hairline border and a soft shadow, extending slightly past its content edges.
  - All other entries in that list fade to lower opacity.
  - The hovered title turns the accent color, and its arrow nudges up and to the right.
  - The entire entry is one clickable link target.
- **Typography:** Inter throughout, comfortable line height, generous whitespace. The design is restrained: dark, calm, readable. No heavy animations, no gradients beyond the spotlight.

### Quality bar

- Accessibility: a "Skip to content" link, visible focus states, semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, ordered lists for experience), alt text, and good contrast.
- Respect `prefers-reduced-motion`.
- Good SEO and Open Graph metadata (title, description, OG image placeholder) and a favicon (simple "JP" monogram).
- Lighthouse 95+ across the board.

### Content rules

- **Audience:** Hiring managers and recruiters for Forward Deployed Engineer and AI engineer roles. Lead with problems solved and AI work, not technology lists.
- Use only the facts in this brief. Don't invent metrics, employers or results. Where a number would help (users, performance gains, etc.), leave a clearly marked `TODO:` for me to fill in.

### Nice to have (after the main site works)

A Korean/English language toggle, and markdown-based posts for the Writing section.

Start by summarizing the structure and design direction back to me in a few lines, then build it.
