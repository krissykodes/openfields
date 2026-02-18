# API Layer (Optional)

Use this folder to define backend contracts when browser-only calls are not enough.

Typical reasons to add endpoints:

- Provider requires secret API keys
- Request signing/auth is required
- You need server-side filtering or joins
- You want rate limiting/caching

Recommended deploy target:

- Vercel Serverless Functions (or equivalent)
