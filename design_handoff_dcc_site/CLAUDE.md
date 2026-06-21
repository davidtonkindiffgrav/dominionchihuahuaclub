# Dominion Chihuahua Club — Website

You are building the new website for the Dominion Chihuahua Club Inc (NZ South Island Chihuahua specialty club, est. 1964).

## Source of truth
`design/*.html` are **design references** — recreate them faithfully in the chosen framework; do not ship them as-is. `README.md` is the full build guide: tokens, components, pages. Read it before starting.

## Stack
No code exists yet. Use **Astro** (or Next static / Eleventy) — static-first, Markdown/MDX content collections for blog + events. Tokens as CSS custom properties (or Tailwind theme). Two themes (light/dark) via `data-theme` on `<html>`, toggle in nav, persisted to `localStorage`, defaulting to `prefers-color-scheme`.

## Key tokens
Red `#C41E1E` (hover `#9E1515`, dark `#E53535`), Green `#1A6B1A`. Light: bg `#FFFFFF`/`#F6F6F6`, border `#E2E2E2`, text `#111`/`#5A5A5A`/`#8A8A8A`. Dark: bg `#111`/`#191919`, surface `#1C1C1C`, border `#2E2E2E`, text `#EDEDED`/`#A0A0A0`/`#686868`. Fonts: Playfair Display (headings) + Inter (UI/body). Container 1160px, radii btn 8 / card 16.

## Build order
1. Tokens + global styles + theme toggle. 2. Layout (Nav + Footer). 3. Buttons, Cards, Hero components. 4. Pages: Home, About Chihuahuas (+ Buying a Chihuahua), Membership, Events, Show Results, Blog (+ post template), AGM.

## Rules
- Do NOT reproduce the gray "Light Mode"/"Dark Mode" label strips from the reference files — they're scaffolding.
- Honor `prefers-reduced-motion` (hero ring spin, hovers).
- Semantic HTML, WCAG AA contrast, ≥44px mobile hit targets, alt text on images.
- Club content in the references (fees, dates, posts, sponsors) is seed data → make it editable Markdown/CMS content.
