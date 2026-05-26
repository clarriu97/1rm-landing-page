# 1RM — Landing Page

Static landing page for **1RM**, a mobile app that estimates your one rep max (1RM) instantly and generates automatic percentage-based work tables.

## Stack

- **Vite** + **Vanilla JS**
- **Tailwind CSS v4** (via PostCSS)
- Static deployment → **Cloudflare Pages**
- Forms → **Formspree**

## Setup

```bash
pnpm install
pnpm dev      # local development
pnpm build    # build output → dist/
pnpm preview  # preview production build
```

## Color palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep | `#093C5D` | Main background |
| Ocean | `#3B7597` | Cards, borders, secondary backgrounds |
| Cyan | `#6FD1D7` | Secondary text, icons |
| Neon | `#5DF8D8` | CTA, buttons, highlights |

## Forms

Both forms (Hero and Waitlist section) submit to **Formspree** at `https://formspree.io/f/mlgvpzvo`. No backend code required.

## Deploy (Cloudflare Pages)

1. Push the repo to GitHub
2. In Cloudflare Pages, connect the repo
3. Configure:
   - **Build command:** `pnpm build`
   - **Build output directory:** `dist`
4. Deploy

## Project structure

```
├── index.html
├── postcss.config.js
├── vite.config.js
├── public/
│   ├── favicon.svg       # App icon
│   └── logo.svg          # Logo for header
├── src/
│   ├── main.js           # Entry point (imports CSS)
│   └── styles/
│       └── main.css      # Tailwind + custom styles
```
