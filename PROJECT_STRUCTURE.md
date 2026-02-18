# Openfields Repo Structure

This repo currently serves GitHub Pages from the repository root (`index.html`).

## Folders

- `site/`: Marketing/landing page source ownership (copy, layout, style direction, UX).
- `data/`: Data integration and map logic (Fused/Mapbox adapters, config, transforms).
- `api/`: Optional backend contracts for future serverless endpoints (if secrets/private data are needed).

## Current Deployment Mode

- Live GitHub Pages files remain at root for now:
  - `index.html`
  - `styles.css`
  - `script.js`
- This avoids breaking production while the team starts splitting responsibilities.

## Team Workflow

1. Design/frontend changes:
   - Work in `site/` and root presentation files.
2. Data/map integration:
   - Add adapters in `data/` and expose stable methods consumed by UI.
3. Secrets/private logic:
   - Define endpoint contracts under `api/` first, then implement on Vercel functions.

## Data Contract (Recommended)

Keep all environment-specific data settings in one place:

- `data/config.js`

This makes it easy for data engineers to update endpoints/layers without touching hero/waitlist UI code.
