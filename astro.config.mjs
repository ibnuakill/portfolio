import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [mdx(), sitemap()],
  site: 'https://your-domain.vercel.app',
  trailingSlash: 'always',
});