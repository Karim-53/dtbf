# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages static website for the **"Forum Économique Tuniso-Allemand Essen 2026"** (Deutsch-Tunesisches Business Forum 2026) — a bilateral business forum on September 17–18, 2026 at Rathaus Essen, Germany.

The site has not been built yet. The README.md contains the full product specification. When implementing, refer to it as the source of truth.

## Deployment

This is a plain GitHub Pages site — no build step, no framework, no package manager. Push HTML/CSS/JS directly to the `main` branch and GitHub Pages serves it. There are no build, lint, or test commands.

## Architecture to Implement

### Pages
- `index.html` — Main page (hero with time/location icons → register button → quick nav → forum abstract → Essen Meister → Tunisian ambassador in NRW → program link → location/full address)
- `program.html` — Responsive program/schedule view + PDF download links (both languages)
- `team.html` — Under construction placeholder
- `inscription.html` — Under construction placeholder + external registration link
- `contact.html` — Under construction placeholder + external contact link

### Bilingual Support (DE / FR)
- **Default language**: German (`de`)
- **Auto-detection**: Silently infer from the user's IP/timezone (francophone country → FR, German-speaking country → DE). No browser permission banners — if detection fails, fall back to German silently.
- All user-visible strings must be defined in both languages and toggled via a language switcher in the nav.

### Assets already in the repo
- `icon.png` — Event logo/icon (use as favicon and hero image)
- `pdfs/` — Four PDF documents (two in French, two in German); link from the Program page for download in both languages

### Key UI Requirements
- Fully responsive: phone, tablet, desktop
- Share button: import an existing library (e.g., AddToAny or native Web Share API) — do not build from scratch
- Under-construction pages: display the clipart image at `https://www.clipartmax.com/png/small/224-2249125_under-construction-page-is-under-construction-png.png`
