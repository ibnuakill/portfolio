# Portfolio Project

Personal portfolio site built with **Astro 7** (static output) + MDX, deployed on **Vercel** via GitHub (`ibnuakill/portfolio`, branch `master` auto-deploys).

## Local Skills (`.agents/skills/`)

Read and apply these skill files before related work — they carry the user's preferred conventions:

- `.agents/skills/portofolio/SKILL.md` — **Read before writing/editing any project case study or portfolio content.** Defines the 6-section case study structure (Problem, Solution, Architecture, Tech Stack, Challenges, Result), voice rules, card format, and cross-site consistency checklist.
- `.agents/skills/frontend-design/SKILL.md` — **Read before building or reshaping UI/visual design.** Distinctive aesthetic direction; avoid templated defaults; plan tokens (palette/type/layout/signature) before coding.
- `.agents/skills/motion-design/SKILL.md` — **Read before adding any animation/transition.** Motion must communicate state; animate only `transform`/`opacity`; respect `prefers-reduced-motion`.
- `.agents/skills/accessibility/SKILL.md` — **Read before touching markup/components.** Semantic HTML, ARIA, keyboard navigation standards.

## Commands

```bash
npm run dev       # dev server (background mode: astro dev --background; manage with astro dev stop/status/logs)
npm run build     # production build to dist/
npm run preview   # preview built output
```

Always run `npm run build` after changes — it is the source of truth for errors.

## Architecture

- `src/content.config.ts` — Zod schemas for `projects` and `blog` collections (Astro v5+ Content Layer API with `glob` loaders)
- `src/layouts/Layout.astro` — base layout: SEO meta, Open Graph, JSON-LD, theme bootstrap. Imports `global.css`
- `src/components/` — Header, Footer, ThemeToggle, ProjectCard, BlogPostCard, SkillTag, ContactForm
- `src/pages/` — index, about, contact, projects/[slug], blog/[slug], rss.xml.ts
- `src/data/` — `site.ts` (name/url/description), `skills.ts`, `social.ts` — placeholder data awaiting user's real info
- `src/styles/global.css` — design tokens as CSS variables, light/dark themes via `[data-theme]`
- `src/utils/helpers.ts` — formatDate (id-ID), readingTime, slugify, getAllTags
- `src/content/projects/*.md`, `src/content/blog/*.mdx` — content entries

## Critical Gotchas (Astro 7 / Content Layer)

- Entries have `entry.id` (slug), **not** `entry.slug`
- Render content with `const { Content } = await render(entry)` using `render` imported from `'astro:content'` — `entry.render()` does not exist
- `getCollection()` returns full entry objects — pass `post.data` (not the entry) to helpers like `getAllTags`
- CSS files must be explicitly imported (e.g., in Layout frontmatter) or they will not load
- Relative imports: pages use `../layouts/…`, nested pages use `../../layouts/…`

## Deployment

- Push to `master` → Vercel builds automatically (framework preset Astro, config in `vercel.json`)
- Commit email must match a GitHub account (use the user's global git config; do not override with `-c user.email`)
- Env var `PUBLIC_FORMSPREE_ENDPOINT` (optional) sets the contact form endpoint; falls back to a Formspree placeholder

## Documentation

Full docs: https://docs.astro.build

Relevant guides:

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)
