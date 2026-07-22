# XpertDrop — Marketing Website

A premium Next.js marketing site for XpertDrop, an Amazon & eBay eCommerce growth
consultancy.

## Tech stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion (animations)
- lucide-react (icons)
- Self-hosted Poppins / Inter fonts via `@fontsource`

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx          Root layout: fonts, SEO metadata, JSON-LD, theme provider
  page.tsx             Home page — assembles all sections
  globals.css          Design tokens (color, type), light/dark theme variables
  privacy-policy/      Placeholder legal page
  terms/               Placeholder legal page
  sitemap.ts           Auto-generated sitemap
  robots.ts            Auto-generated robots.txt

components/
  layout/              Navbar, Footer, BackToTop, WhatsAppButton, Logo
  sections/            One component per homepage section (Hero, About, Services, …)
  ui/                  Reusable primitives (Button, SectionHeading, Reveal, AnimatedCounter, GrowthLine)

hooks/
  use-theme.tsx         Dark/light mode context (persists to localStorage)

lib/
  constants.ts          All site copy/data: nav links, services, FAQs, socials, contact info
```

## Content you should update before launch

- **Logo**: `components/layout/logo.tsx` uses a text/monogram placeholder ("X" mark).
  Swap in a real logo file when ready.
- **Founder photo**: `components/sections/hero.tsx` has a labeled silhouette
  placeholder in the hero visual — replace with an actual photo.
- **Social links**: `lib/constants.ts` → `SOCIALS` (Facebook, LinkedIn, Upwork, Fiverr)
  are placeholder `#` links.
- **Success Stories & Testimonials**: intentionally left as clearly labeled
  placeholders (no fabricated client names, quotes, or stats) — populate these once
  you have real, client-approved case studies and reviews.
- **Google Maps**: `components/sections/contact.tsx` has a placeholder map block —
  swap in an embedded map once you have a physical/office address to show.
- **Contact form**: currently a front-end-only form (shows a success state on
  submit). Wire it up to your email service or CRM of choice (e.g. Resend, Formspree,
  or a custom API route) before going live.
- **Legal pages**: `/privacy-policy` and `/terms` are structural placeholders —
  replace with your finalized policies.

## Design tokens

| Token | Value |
|---|---|
| Primary | `#081C2D` |
| Secondary | `#2563EB` |
| Accent | `#38BDF8` |
| Heading font | Poppins |
| Body font | Inter |

Dark mode is toggled via a `.dark` class on `<html>` and persisted to
`localStorage`. All tokens are defined in `app/globals.css`.
