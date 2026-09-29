# Portfolio Minimalista — Miguel Angel Villegas

A modern, minimalist developer portfolio built with **Astro 7 + Tailwind CSS 4**,
fully **bilingual (Spanish by default, English on demand)**.
Designed after the Vercel aesthetic: neutral palette, generous whitespace, subtle
motion, and a single indigo accent color.

**Goals:** clarity, performance, and a strong presentation of skills and projects
to help land a developer job.

---

## Quick start

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:4321
```

### Other scripts

| Command              | Description                                                     |
| -------------------- | --------------------------------------------------------------- |
| `npm run dev`        | Start the dev server with hot reload                            |
| `npm run build`      | Build the production site into `./dist`                          |
| `npm run preview`    | Preview the production build locally                             |
| `npm run check`      | Run the Astro + TypeScript type checker                          |
| `npm run check:i18n` | Verify every rendered key exists in **both** ES and EN (needs `npm run build` first) |

> Requires **Node.js 20+** (tested on Node 24).

---

## Project structure

```
portfolio-minimalista/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── About.astro          # Section 1 — summary, tagline, quick facts
│   │   ├── Skills.astro         # Section 2 — grouped tech cards
│   │   ├── Projects.astro       # Section 3 — project grid (data-driven)
│   │   ├── ProjectCard.astro    #   ↳ reusable project card component
│   │   ├── Experience.astro     # Section 4 — timeline of roles
│   │   ├── Contact.astro        # Section 5 — email / GitHub / LinkedIn
│   │   ├── Header.astro         # Sticky tabs + language & theme switchers
│   │   ├── LanguageSwitcher.astro # ES / EN toggle (persisted)
│   │   ├── ThemeToggle.astro    # Dark/light switch (persisted)
│   │   ├── T.astro              # Translatable text node (getText wrapper)
│   │   ├── SectionHeading.astro # Shared heading pattern for all sections
│   │   └── Footer.astro
│   ├── i18n/
│   │   ├── index.ts             # Dictionaries + getText(lang, key)
│   │   ├── dom.ts               # Client-side applyLanguage()
│   │   └── types.ts             # Lang = 'es' | 'en', Localized
│   ├── locales/
│   │   ├── es.json              # UI copy — Spanish (default)
│   │   └── en.json              # UI copy — English
│   ├── data/
│   │   ├── site.ts              # Facts: name, location, email, links, nav
│   │   ├── skills.ts            # Skill groups (localized fields)
│   │   ├── projects.ts          # ← add new projects here
│   │   └── experience.ts        # ← add new roles here
│   ├── layouts/
│   │   └── BaseLayout.astro     # <head>, SEO, JSON-LD, theme bootstrap
│   ├── pages/
│   │   └── index.astro          # Composes the sections
│   └── styles/
│       └── global.css           # Tailwind v4 theme tokens + utilities
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Internationalization (ES / EN)

Spanish is the default: the HTML is **rendered in Spanish at build time**, so the
first paint, the meta tags and everything a crawler sees is Spanish.

Switching to English happens **entirely on the client — no reload, no scroll jump**,
and the choice is stored in `localStorage` (`lang`). Dark/light mode is independent
and keeps working.

### How it works

1. `src/locales/es.json` + `src/locales/en.json` hold the UI copy
   (headings, labels, meta title/description…).
2. Records in `src/data/*.ts` declare their text as `{ es, en }` pairs.
3. `src/i18n/index.ts` merges both sources into one lookup tree per language and
   exposes the helper:

   ```ts
   getText(lang, 'sections.skills.title')
   getText(lang, 'projects.0.description')
   ```

4. Components render the default language through `<T>`:

   ```astro
   <h2 class="text-4xl"><T k="sections.skills.title" /></h2>
   ```

   which outputs `<span data-i18n="sections.skills.title">…</span>`.
5. `src/i18n/dom.ts` walks every `[data-i18n]` / `[data-i18n-aria]` node on toggle,
   swaps the text, updates `<html lang>`, `<title>` and the meta description, and
   restores the previous scroll offset.

Missing keys fall back to Spanish and log a warning during `npm run dev`.

### Adding text in both languages

```astro
---
import T from './T.astro';
---
<p><T k="about.myNewCopy" /></p>
```

```jsonc
// es.json  →  "about": { "myNewCopy": "Texto en español." }
// en.json  →  "about": { "myNewCopy": "English copy." }
```

---

## Editing your content

| What                                                | File                            |
| --------------------------------------------------- | ------------------------------- |
| Name, location, email, GitHub/LinkedIn URLs, nav    | `src/data/site.ts`              |
| Skill groups and technologies                       | `src/data/skills.ts`            |
| Projects                                            | `src/data/projects.ts`          |
| Work experience                                     | `src/data/experience.ts`        |
| All UI copy + meta tags (ES)                        | `src/locales/es.json`           |
| All UI copy + meta tags (EN)                        | `src/locales/en.json`           |

### Adding a project

Append one object to the `projects` array in `src/data/projects.ts`:

```ts
{
  title: { es: 'Mi nueva app', en: 'My New App' },
  description: {
    es: 'Una o dos frases sobre el problema que resuelve.',
    en: 'One or two sentences about the problem it solves.',
  },
  tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
  demo: 'https://myapp.example.com',
  github: 'https://github.com/miguelvillegas/my-app',
  tag: { es: 'Destacado', en: 'Featured' }, // optional
},
```

The grid renders it automatically — no component changes required.

---

## Features

- **Bilingual UI** — Spanish default, ES/EN toggle in the navbar, persisted in
  `localStorage`, instant swap with no page reload and scroll position preserved.
- **No hero section** — content starts directly with *Sobre mí* for fast scanning.
- **Sticky tab navigation** with an IntersectionObserver-driven active indicator
  and horizontal scroll on mobile.
- **Dark / light theme** — preference persisted, applied before first paint
  (no flash of wrong theme), respects the OS setting by default.
- **Smooth scrolling** with `scroll-margin-top` so anchors clear the sticky header.
- **Fade-in animations** via IntersectionObserver, with a stagger for above-the-fold
  elements and full `prefers-reduced-motion` support.
- **SEO**: Spanish title/description by default, canonical, Open Graph, Twitter card
  and `Person` JSON-LD; title and meta description are updated when the user
  switches to English.
- **Semantic, accessible HTML**: landmarks, labelled sections, skip link,
  focus-visible rings, `aria-current` on active tabs, `aria-pressed` on the
  language switch.
- **Performance**: zero client-side framework, one CSS bundle, only one external
  stylesheet (Google Fonts, preconnected + `display=swap`).

> **Note on SEO and languages:** the site ships a single URL whose static HTML is
> Spanish; English is applied client-side. If you later need English pages indexed
> separately, add `/en/` routes with `astro:i18n` or the `@astrojs/sitemap` +
> `hreflang` alternates — the dictionaries and `getText` helper are already
> structured for that.

---

## Customization

- **Accent color** — edit the `--color-accent-*` tokens in `src/styles/global.css`.
- **Site URL** — change `site` in `astro.config.mjs` (used for the canonical URL).
- **Fonts** — swap the `<link>` in `src/layouts/BaseLayout.astro` and the
  `--font-sans` / `--font-mono` tokens in `global.css`.
- **Placeholder content** — replace the example email, GitHub and LinkedIn handles
  in `src/data/site.ts` with your real ones before deploying.

## Deploy

Any static host works (Netlify, Vercel, GitHub Pages, Cloudflare Pages):

```bash
npm run build   # output in ./dist
```

Build command: `npm run build` · Publish directory: `dist`
