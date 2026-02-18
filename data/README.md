# Data Layer

Use this folder for all data-specific implementation:

- Fused/Mapbox adapters
- Field-boundary and crop-type data transforms
- Data config and layer metadata

## Suggested ownership

- Data engineers own `data/config.js` and provider adapters.
- Frontend engineers consume stable methods/events from this folder.

## Rule of thumb

- Public/read-only data calls can run in browser.
- Any secret keys or private joins should move behind a backend endpoint.
