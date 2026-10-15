# HDmovies4u — Vercel deployment

This package contains your directory, uploaded logo, and favicon. The logo is bundled locally, so it does not depend on Lovable asset hosting.

## Deploy through Vercel
1. Extract this ZIP.
2. Upload the extracted files to a GitHub repository (keep the files at the repository root).
3. In Vercel, choose **Add New → Project**, then import that repository.
4. Choose **Other** for the framework and **22.x** for the Node.js version. The included vercel.json supplies the install/build commands and output directory.
5. Click **Deploy**.

Alternatively, run `bunx vercel` from the extracted folder and follow the prompts.

No private API keys are required. Optional public settings:
- `VITE_HDMOVIES4U_SITEURL` — full-site destination; default https://hdmovies4u.fun
- `VITE_TELEGRAM_HDMOVIES4U` — Telegram destination; default https://t.me/movies4u

Pages: `/` and `/hdmovies4u`. `/movies4u` redirects to `/hdmovies4u`.

## Local preview
Use Node.js 22 and Bun. Run `bun install --frozen-lockfile`, then `bun run dev`.

The source includes the Vercel deployment configuration. A real deployment to your Vercel account has not been performed or verified.
