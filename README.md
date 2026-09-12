# apphimalaya.com

Marketing site for apphimalaya — a software company in Kathmandu, Nepal. Five
static pages: landing, capabilities, products, about, and a contact page with a
booking form that hands off to email or WhatsApp.

Built with Next.js 16 (App Router), React 19 and Tailwind CSS v4. Every page is
prerendered as static content.

## Requirements

- **Node.js 20.9 or newer** (Next.js 16 refuses to build below this)
- **pnpm 12.3.4** — pinned in `package.json` via `packageManager`

If you have Corepack, `corepack enable` will pick up the pinned pnpm version
automatically. Otherwise install it with `npm i -g pnpm@12.3.4`.

## Setup

```bash
pnpm install
pnpm dev
```

The dev server runs on http://localhost:3000. Pass `-p` to change the port:
`pnpm dev -p 3001`.

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Development server with hot reload |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build (run `pnpm build` first) |
| `npx tsc --noEmit` | Type-check — see the warning below |

### Type errors do not fail the build

`next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so `pnpm build`
will happily succeed with broken types. Run `npx tsc --noEmit` separately before
you push, or you will find out in production.

## Changing contact details

All of them live in one file: **`lib/site.ts`**. The email, the WhatsApp number,
the display phone number and the location are read from there by the header,
footer, booking form, `tel:` links and the floating "Talk to us" bubble.

```ts
export const site = {
  name: 'apphimalaya.com',
  email: 'hello@apphimalaya.com',
  whatsapp: '9779849779958',   // digits only — wa.me rejects '+' and spaces
  phone: '+977 9849779958',    // display form
  location: 'Kathmandu, Nepal',
}
```

> **`email` is still a placeholder.** Mail sent to `hello@apphimalaya.com` will
> bounce. Replace it before launch.

The same file holds the nav links and the list of industries shown on the
landing and capabilities pages.

## Project structure

```
app/
  layout.tsx        Fonts (Geist / Geist Mono) and metadata
  globals.css       Theme tokens, type scale, all animation keyframes
  page.tsx          Landing page
  services/         Capabilities
  products/         Products (coming soon)
  about/            About
  contact/          Booking form + WhatsApp hand-off
components/
  site-header.tsx   Banner strip, nav, mobile menu
  site-footer.tsx   Shared footer
  hero-headline.tsx Per-letter headline animation used on every page
  ridgeline.tsx     The contour line under the hero
  reveal.tsx        Scroll-triggered section reveals
  service-grid.tsx  Selectable capability cards on the landing page
  whatsapp-link.tsx WhatsApp button, glyph and floating bubble
  ui/               shadcn primitives
lib/site.ts         Contact details, nav, industries
```

## Theme

Colours are CSS custom properties in `app/globals.css` under `:root`, written in
`oklch`, and exposed to Tailwind through the `@theme inline` block. The palette
is a single green system — spruce ink background, evergreen slabs, cool snow for
light sections, and a leaf-green accent.

To change a colour, edit the custom property, not the Tailwind classes:

```css
--background: oklch(0.155 0.02 162);  /* spruce ink */
--primary:    oklch(0.955 0.008 168); /* snow — the light slab sections */
--deep:       oklch(0.325 0.068 158); /* evergreen slab */
--accent:     oklch(0.8 0.155 140);   /* leaf green */
```

The site is dark-only by design; there is no light-mode variant.

### Animation

The headline entrance is pure CSS — `HeroHeadline` splits text into per-letter
spans carrying a stagger index, and `globals.css` does the rest. There is no
animation library. The full stop flies in last and then settles into a slow
5-second orbit that runs indefinitely.

All motion is cancelled under `prefers-reduced-motion: reduce`.

## Deploying

The build output is fully static, so any host that runs a Node process works —
Vercel needs no configuration beyond connecting the repo.

```bash
pnpm build
pnpm start
```

Before the first deploy:

1. Replace `email` in `lib/site.ts`
2. Replace `public/icon.svg` — it is still the stock Next.js mark
