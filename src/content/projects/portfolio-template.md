---
title: "Developer Portfolio Template"
description: "Template portofolio developer modern dengan Astro, MDX, dark mode, dan deploy otomatis ke Vercel"
image: "/images/projects/portfolio-template.svg"
tags: ["Astro", "TypeScript", "MDX", "Tailwind CSS", "Vercel"]
demoUrl: "https://astro-portfolio-template.vercel.app"
repoUrl: "https://github.com/yourusername/astro-portfolio-template"
featured: false
date: 2024-03-10
---

Template portofolio developer yang saya bangun dan gunakan untuk situs ini. Dirancang untuk performa, accessibility, dan kemudahan kustomisasi.

## Fitur

- ⚡ **Astro Islands** — Hydration selektif, zero-JS by default
- 📝 **MDX Support** — Blog dengan komponen React di markdown
- 🌙 **Dark Mode** — CSS custom properties + localStorage persistence
- 🏷️ **Content Collections** — Type-safe frontmatter dengan Zod
- 🔍 **SEO Ready** — Meta tags, Open Graph, JSON-LD, Sitemap, RSS
- ♿ **Accessible** — Semantic HTML, ARIA, keyboard navigation
- 🎨 **Minimalist Design** — CSS variables, responsive, print stylesheet
- 🚀 **Vercel Optimized** — Edge functions, ISR, analytics

## Quick Start

```bash
# Clone & install
git clone https://github.com/yourusername/astro-portfolio-template
cd astro-portfolio-template
npm install

# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

## Struktur Project

```
src/
├── components/     # UI components (Header, Footer, Cards, etc.)
├── layouts/        # Base layout dengan SEO
├── pages/          # Routes (index, projects, blog, about, contact)
├── content/        # Markdown/MDX files (projects, blog)
├── data/           # Config data (skills, social, site)
├── styles/         # Global CSS dengan CSS variables
└── utils/          # Helper functions
```

## Kustomisasi

1. **Data situs**: Edit `src/data/site.ts`
2. **Skills**: Update `src/data/skills.ts`
3. **Social links**: Edit `src/data/social.ts`
4. **Theme colors**: Modify CSS variables di `src/styles/global.css`
5. **Content**: Tambah file `.md` di `src/content/projects/` dan `src/content/blog/`

## Deploy ke Vercel

1. Push ke GitHub
2. Import di Vercel
3. Tambah env var `PUBLIC_FORMSPREE_ENDPOINT` untuk contact form
4. Deploy!

## Performance

- **Lighthouse**: 100/100/100/100
- **Bundle size**: ~15KB JS (homepage)
- **FCP**: <800ms di 3G
- **CLS**: 0

## Lisensi

MIT — bebas gunakan untuk project pribadi maupun komersial.