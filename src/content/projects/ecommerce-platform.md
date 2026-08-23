---
title: "E-Commerce Platform"
description: "Platform e-commerce full-stack dengan fitur keranjang belanja, pembayaran, dan dashboard admin"
image: "/images/projects/ecommerce.svg"
tags: ["Astro", "React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"]
demoUrl: "https://demo-ecommerce.vercel.app"
repoUrl: "https://github.com/yourusername/ecommerce-platform"
featured: true
date: 2024-01-15
---

Platform e-commerce modern yang dibangun dengan arsitektur microservices. Mendukung multi-vendor, inventaris real-time, dan integrasi pembayaran Stripe.

## Fitur Utama

- **Katalog Produk** — Pencarian, filter, dan kategori dengan Algolia
- **Keranjang & Checkout** — Persistent cart, guest checkout, Stripe Payment Intents
- **Dashboard Admin** — Manajemen order, inventaris, analytics real-time
- **Notifikasi** — Email (SendGrid) & push notification untuk status order
- **Multi-currency** — Dukungan IDR, USD, SGD dengan rate real-time

## Arsitektur

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Frontend  │────▶│   API GW    │────▶│  Services   │
│  (Astro/    │     │  (Kong/     │     │  (Node.js/  │
│   React)    │     │   Express)  │     │   Go)       │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                    ┌──────┴──────┐
                    ▼             ▼
              ┌─────────┐   ┌─────────┐
              │PostgreSQL│   │  Redis  │
              └─────────┘   └─────────┘
```

## Teknologi

- **Frontend**: Astro + React Islands untuk interaktivitas
- **Backend**: Node.js (Express) + Go (microservices)
- **Database**: PostgreSQL (primary), Redis (cache/session)
- **Auth**: JWT + Refresh token rotation
- **Payments**: Stripe (Payment Intents, Webhooks)
- **Search**: Algolia InstantSearch
- **Deployment**: Docker + Kubernetes (GKE)
- **CI/CD**: GitHub Actions

## Tantangan & Solusi

### 1. Race Condition pada Inventaris
**Masalah**: Concurrent checkout menyebabkan overselling.
**Solusi**: Optimistic locking dengan `version` column + Redis distributed lock untuk high-contention items.

```sql
UPDATE products 
SET stock = stock - 1, version = version + 1 
WHERE id = $1 AND version = $2 AND stock > 0
```

### 2. SEO untuk Dynamic Routes
**Masalah**: Product pages butuh SEO tapi data dynamic.
**Solusi**: Astro hybrid rendering — `getStaticPaths` untuk produk populer, SSR untuk long-tail.

### 3. Image Optimization
**Masalah**: Ribuan product images membebankan bandwidth.
**Solusi**: Astro Image + Cloudflare Images untuk automatic WebP/AVIF, responsive sizes, dan CDN caching.

## Hasil

- ⚡ **Performance**: Lighthouse 95+ (Performance, Accessibility, Best Practices, SEO)
- 📈 **Conversion**: +23% checkout completion rate setelah optimasi UX
- 💰 **Cost**: 40% pengurangan biaya hosting vs arsitektur monolith sebelumnya
- 👥 **Scale**: Handle 10k+ concurrent users saat flash sale

## Pelajaran

1. **Invest early pada observability** — Logging terstruktur, metrics, tracing menyelamatkan debugging time
2. **Database indexing strategy** — Composite index untuk query pattern spesifik critical untuk performa
3. **Progressive enhancement** — Core commerce flow works tanpa JS, enhanced dengan React islands
4. **Automated testing** — Contract testing (Pact) antar service mencegah breaking changes