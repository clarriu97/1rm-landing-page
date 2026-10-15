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

Iron & chalk, the same tokens as the app (`lib/ui/theme/app_colors.dart`), defined in `src/styles/main.css`.

| Color | Hex | Usage |
|-------|-----|-------|
| Iron | `#0E0F11` | Background |
| Surface | `#17191C` | Cards, panels |
| Outline | `#33373D` | Borders, dividers |
| Chalk | `#F2EFE8` | Text |
| Accent | `#FFC21A` | Safety yellow: numbers, CTA, hazard stripes |

## App screens

`public/screens/` holds the app's real screens as WebP (480 and 720 px wide), made from the goldens of `1rm-mobile-app`:

```bash
G=../1rm-mobile-app/test/goldens/goldens; S=$G/store/app_store/en-US
for w in 480 720; do
  for n in home add_entry detail history; do cwebp -q 80 -resize $w 0 $G/$n.iphone_pro.png -o public/screens/$n-$w.webp; done
  cwebp -q 80 -crop 106 492 1108 2376 -resize $w 0 $S/02_working_weights.png -o public/screens/working_weights-$w.webp
  cwebp -q 80 -crop 106 492 1108 2376 -resize $w 0 $S/04_new_pr.png -o public/screens/new_pr-$w.webp
done
```

The working weights and new PR screens are cropped from the store screenshots, since no plain golden shows them.

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
│   ├── screens/          # App screens (WebP)
│   ├── favicon.svg       # App icon
│   └── logo.svg          # Logo for header
├── src/
│   ├── main.js           # Entry point: CSS, header, count-up, scroll story
│   └── styles/
│       └── main.css      # Tailwind + custom styles
```
