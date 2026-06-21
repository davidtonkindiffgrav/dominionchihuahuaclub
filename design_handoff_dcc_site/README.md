# Build Guide — Dominion Chihuahua Club Website

> **Read this first.** This bundle is a complete design reference for building the new Dominion Chihuahua Club (DCC) website. The `design/*.html` files are **design references created in HTML** — they show the intended look, tokens, and behavior. Your job is to **build the real, multi-page website** in a proper framework using these as the source of truth. Do not ship the reference HTML as-is.

## What this site is
The Dominion Chihuahua Club Inc is New Zealand's only South Island Chihuahua specialty club, established 1964, affiliated with Dogs New Zealand. The site is a small content/community site: marketing home page, informational pages, an events list, a blog, and membership info. It is a redesign of an existing Wix site.

## Recommended stack
No codebase exists yet — choose a static-first stack. **Astro** (or Next.js static export / Eleventy) is ideal: content-driven, fast, great for a small org site, easy hosting (Netlify/Vercel/Cloudflare Pages). Use a single global stylesheet of CSS custom properties for the tokens below (or Tailwind with these tokens mapped into the theme). Blog/events content should be Markdown/MDX collections so the club can add posts without code.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, shadows, and hover states are all final and specified below. Recreate the components pixel-accurately.

---

## Design Tokens

### Brand
| Token | Hex |
|---|---|
| Red (primary) | `#C41E1E` |
| Red Dark (hover) | `#9E1515` |
| Red Light (dark-theme primary) | `#E53535` |
| Green (accent) | `#1A6B1A` |
| Green Dark | `#115011` |
| Green Light | `#2A8B2A` |
| Amber (icon accent) | `#F59E0B` |

### Light theme
Background `#FFFFFF` · Bg Alt `#F6F6F6` · Surface 2 `#F0F0F0` · Border `#E2E2E2`
Text `#111111` · Muted `#5A5A5A` · Subtle `#8A8A8A`

### Dark theme
Background `#111111` · Bg Alt `#191919` · Surface `#1C1C1C` · Surface 2 `#242424` · Border `#2E2E2E`
Text `#EDEDED` · Muted `#A0A0A0` · Subtle `#686868`

**Theming:** ship both themes with a nav theme-toggle. Implement via `data-theme` attribute on `<html>` + CSS custom properties; persist choice in `localStorage`; respect `prefers-color-scheme` on first visit.

### Typography
Two families (Google Fonts):
- **Playfair Display** (700) — display headings only (`h1`, section `h2`, hero, big numbers).
- **Inter** (300–700) — all UI and body text.

| Role | Size | Weight | Line-height | Notes |
|---|---|---|---|---|
| H1 Display | 3.5rem | 700 | 1.15 | Playfair |
| H2 Section | 2.6rem | 700 | 1.2 | Playfair |
| H3 Sub | 1.6rem | 700 | 1.3 | Playfair |
| Body Large | 1.1rem | 400 | 1.7 | Inter, color Muted |
| Body | 1rem | 400 | 1.6 | Inter, color Muted |
| UI / Label | 0.875rem | 500 | — | Inter |
| Caption | 0.78rem | 400 | — | Inter, color Subtle |
| Eyebrow | 0.75rem | 700 | — | UPPERCASE, letter-spacing 0.12em, color Red |

### Spacing / shape
Container `max-width: 1160px`, side padding `24px`. Radii: buttons `8px`, cards `16px`, sponsor tiles `10px`, pills `99px`. Card hover shadow `0 8px 28px rgba(0,0,0,0.12)` + `translateY(-3px)`.

---

## Components
Each is fully specified in its reference file under `design/`. Build all as reusable components in the chosen framework.

### Navigation (`design/navigation.html`)
Sticky top bar, height `70px`, white surface, `border-bottom #E2E2E2`, subtle shadow. Left: logo (40×40) + two-line brand ("Dominion Chihuahua Club" / "Inc — Est. 1964"). Center: nav links (Home, About Chihuahuas, Membership, Events, Show Results, Blog, AGM) — `0.875rem`, weight 500, Muted; hover/active = Red on `rgba(196,30,30,0.08)`, radius 8px. Right: circular theme-toggle (38px). Dark variant uses Red Light hover. **Mobile:** hamburger → slide-in panel; links full-width with 3px left accent bar on active, sub-items indented (e.g. "Buying a Chihuahua" under "About Chihuahuas"). Hit targets ≥44px.

### Buttons (`design/buttons.html`)
Base: inline-flex, `padding 0.65rem 1.4rem`, radius 8px, `0.9rem/600`. Variants:
- **Primary** — Red bg, white text, shadow `0 2px 8px rgba(196,30,30,0.3)`; hover → Red Dark, lift 1px, deeper shadow.
- **Secondary** — transparent, `1.5px #E2E2E2` border, Text; hover → Surface 2 bg, Subtle border.
- **Ghost** — transparent, Red text, chevron icon, no padding x.
- **Accent** — Green bg, white text; hover → Green Dark.
- Sizes: sm `0.4rem 0.9rem / 0.8rem`, default, lg `0.85rem 1.8rem / 1rem`.
- Dark mode: primary uses Red Light; secondary border `#3E3E3E`, text `#EDEDED`.

### Cards (`design/cards.html`)
- **Feature card** — radius 16px, padding 28px; tinted icon chip (red/green/amber at 10% alpha); H3 + body + ghost link. Hover: red-tinted border, lift, shadow, and a top gradient accent bar (Red→Green) fades in.
- **Post card (blog)** — image-top optional, body with date + colored tag pill, title, excerpt, "Read More" ghost link.
- **Event card** — horizontal; left date block (Red, Playfair day numeral, month caps); title, description, meta (📍 location, 🕒 time).
- **Info box** — labelled rows with bottom dividers (e.g. Membership Details: Type / Fee / Due date / Since).

### Hero (`design/hero.html`)
Two-column (`1fr 1fr`, gap 64px), padding `80px 40px`, soft gradient bg with faint red/green radial glows. Left: eyebrow (line + caps label), Playfair H1 with the word "Dominion" in Red, lead paragraph, two CTAs (Primary + Secondary), and a stats row (1964 Est. · 5+ Annual Events · $20 Membership) with Playfair numerals in Red above a top border. Right: the DCC logo in a white circle with a slowly-spinning accent ring (`@keyframes spin 20s linear`). Provide a dark variant. Respect `prefers-reduced-motion` (disable the ring spin).

### Footer (`design/footer.html`)
3-col grid (`2fr 1fr 1fr`): brand blurb + contact email; Navigation column; Join Us + Affiliates column. Then a centered **"Proudly sponsored by"** row of white logo tiles (white in both themes), then a copyright bar. Light + dark variants. **The gray "Light Mode"/"Dark Mode" `.label` strips in every reference file are design-system scaffolding — do NOT reproduce them.**

---

## Pages to build
Derived from the nav + content. Compose from the components above.

1. **Home** — Nav, Hero, "What we do" feature-card grid, upcoming Events strip, latest Blog posts grid, sponsors (in footer), Footer.
2. **About Chihuahuas** — informational; section headings + body; sub-page "Buying a Chihuahua".
3. **Membership** — info box ($20/yr, due 1 April), benefits, Join CTA → form or mailto.
4. **Events** — list of event cards; past/upcoming split.
5. **Show Results** — results listings/tables.
6. **Blog** — post-card grid + individual post template (Markdown/MDX collection).
7. **AGM** — notices, nominations, documents.

Real club content (membership fee $20/yr, est. 1964, contact `dominichiclub@gmail.com`, sponsors, sample posts/events) is embedded in the reference files — use it as seed content, but it should become editable Markdown/CMS data.

---

## Assets (`images/`)
- `dcc-logo.png` — club logo (nav, hero, footer).
- `hero-01.jpeg`, `gallery-02.jpg` — photography (use where the design calls for imagery; swap for client-supplied photos).
- `sponsor-petcentral.jpeg` (Kuri), `sponsor-julius-k9-real.png`, `sponsor-kitaco.jpg`, `sponsor-nzchihuahuarescue.jpg` — sponsor logos, sourced from the live DCC site.

Sponsor links: Kuri → https://www.kuri.co.nz/ · Julius-K9 → https://shop.julius-k9.com/en/ · Kitaco → https://www.kitacokennels.com/ · NZ Chihuahua Rescue → http://nzchihuahuarescue.co.nz/

## Accessibility & responsive
- All text on its background must meet WCAG AA. Nav/footer link hover must not rely on color alone where it matters.
- Container collapses gracefully: hero & footer grids → single column below ~720px; card grids 3→2→1.
- Honor `prefers-reduced-motion` (hero ring, card lifts, button transitions).
- Semantic landmarks (`<header><nav>`, `<main>`, `<footer>`), real `<a>`/`<button>` elements, alt text on all images.

## Files in this bundle
- `design/colors.html`, `typography.html`, `buttons.html`, `cards.html`, `navigation.html`, `hero.html`, `footer.html` — the design references. Open any in a browser to see light + dark side by side.
- `images/` — all assets above.
- `CLAUDE.md` — project instructions for Claude Code (mirrors the key rules here).
