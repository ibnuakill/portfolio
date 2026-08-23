# My Portfolio

Website portofolio pribadi yang dibangun dengan [Astro](https://astro.build), MDX, dan dideploy ke [Vercel](https://vercel.com).

## Tech Stack

- **Astro 4** — Static site generator dengan island architecture
- **MDX** — Markdown dengan komponen React untuk blog
- **TypeScript** — Type-safe content collections
- **Vercel Adapter** — Deploy optimal dengan Edge Functions
- **Content Collections** — Type-safe frontmatter dengan Zod validation
- **Formspree** — Contact form tanpa backend
- **RSS & Sitemap** — Built-in untuk SEO

## Fitur

- ⚡ **Performa tinggi** — Lighthouse 100/100/100/100
- 🎨 **Dark mode** — CSS custom properties dengan localStorage persistence
- 📱 **Responsif** — Mobile-first design
- ♿ **Aksesibel** — WCAG 2.1 AA compliant
- 🔍 **SEO ready** — Meta tags, Open Graph, JSON-LD structured data
- 📝 **MDX blog** — Code highlighting, custom components
- 📧 **Contact form** — Formspree integration dengan honeypot
- 🏷️ **Tag filtering** — Filter project & blog berdasarkan tag

## Struktur

```
src/
├── components/     # Reusable UI components
├── layouts/        # Base layout dengan SEO
├── pages/          # Routes (index, projects, blog, about, contact)
├── content/        # Markdown/MDX content (projects, blog)
├── data/           # Config data (skills, social, site)
├── styles/         # Global CSS
└── utils/          # Helper functions
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Konfigurasi

1. **Formspree**: Edit `PUBLIC_FORMSPREE_ENDPOINT` di `.env`
2. **Site data**: Edit `src/data/site.ts`, `src/data/skills.ts`, `src/data/social.ts`
3. **Theme colors**: Modify CSS variables di `src/styles/global.css`
4. **Content**: Tambah file `.md`/`.mdx` di `src/content/projects/` dan `src/content/blog/`

## Deploy ke Vercel

1. Push repository ke GitHub
2. Import project di [Vercel](https://vercel.com/new)
3. Tambah environment variable `PUBLIC_FORMSPREE_ENDPOINT`
4. Deploy otomatis setiap push ke `main`

## Lisensi

MIT — bebas gunakan untuk project pribadi maupun komersial.