# STRIDE — Shopping Cart

A demo sports store built for the **Shopping Cart** project on The Odin
Project. The interface takes general cues from editorial sportswear
commerce — expressive type, movement photography, high contrast — with an
original brand and visual system.

## Features

- Three routes: home (`/`), shop (`/shop`) and cart (`/cart`).
- **Spanish / English** language switch in the header, Spanish by default,
  persisted between visits.
- Shared navigation with a real-time unit counter.
- Product catalog with manual quantity, increment and decrement.
- Cart with merging of repeated items, editing, removal and clearing.
- Instant subtotal, shipping and total calculation.
- Safe `localStorage` persistence, synced across tabs.
- Responsive design and keyboard-accessible navigation.
- Checkout explicitly marked as a demo, no real payments.

## Stack

React 19, TypeScript, Vite 8 and React Router. No backend or database: the
catalog is bundled with the app and renders instantly, no network
round-trip required. Builds to a static site (`dist/`) deployable to any
host.

## Product photography

Every product photo is a real, static photograph — no AI-generated renders,
no action shots — sourced from [Unsplash](https://unsplash.com) and used
under the [Unsplash License](https://unsplash.com/license) (free for
commercial use, no attribution required). This is an educational demo, not
a real store, so a few photos show real footwear as it was actually
photographed; nothing here is presented as an original STRIDE-manufactured
product.

## Development

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

## Validation

```bash
npm test
npm run lint
npm run build
```

Tests use React Testing Library, Vitest and `user-event`: 15 cases covering
the cart reducer, persistence, the product catalog, navigation, quantities,
the cart counter, filters, totals, item removal and the language switch.

## Deployment

The app builds to static files with `npm run build` (output in `dist/`)
and isn't tied to any particular host.

- **Netlify / Vercel:** import the GitHub repo directly; both auto-detect
  Vite and use the included `netlify.toml` / `vercel.json` — zero extra
  config.
- **GitHub Pages / Cloudflare Pages / any static host:** upload the
  contents of `dist/` after running `npm run build`. For a GitHub Pages
  project site (`user.github.io/repo`), build with
  `VITE_BASE_PATH=/repo/ npm run build`.

Live: <https://stride-shopping.netlify.app/>
