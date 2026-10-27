# Production verification

Verified on 27 October 2026 (Australia/Sydney).

- Public URL: https://portfolio-production-e5eb.up.railway.app
- Railway project: `aman-sharma-portfolio` (`1659a361-c52a-4856-a732-3fa14675fce1`).
- Service: `portfolio` (`576f18f7-170b-4e28-80b5-0015051d4ce2`), production environment.
- Official Railway CLI 5.71.0 used to create the dedicated project/service, configure its domain, apply typed infrastructure, and upload source.
- TypeScript SDK infrastructure is tracked in `.railway/railway.ts`. Variables remain unmanaged, so applying infrastructure preserves the configured public URL and port.
- The container uses Node 24, standalone Next.js output, self-hosted fonts, a non-root runtime, port 3000, and the homepage health check.

## Checks completed

- Strict TypeScript and production build passed; every project route is generated from typed content.
- Prettier verification and Git whitespace checks passed.
- All 14 HTTP checks passed against production: core pages, all seven direct project routes, source-sharing restrictions, correct public contact links, and unknown-project 404.
- Homepage, 10 referenced JavaScript/CSS/favicon assets, and a self-hosted WOFF2 font returned HTTP 200.
- Sitemap contains all 11 public content routes with the correct HTTPS origin; robots points to that sitemap.
- Browser checks confirmed seven home project entries, the correct document title, and only the owner-approved public contact address in all mailto links.
- Mobile menu open/close and three-result ML filtering were verified. Desktop and mobile screenshots were reviewed independently, including the corrected 320px research title.
- All publishable local branch commits were audited to exclude private CV contact details before any proposed GitHub publication.

The independent implementation/design review passed with no open material findings. Original PDFs are not published. Toohak and Job Ad Extraction intentionally have descriptions without source or demo links, per the owner's instruction.

## Redeploy

Use Node 24, install dependencies, authenticate the Railway CLI, and link to this project. Review infrastructure with `railway config plan` before `railway config apply --yes`, then upload with `railway up --service portfolio --detach`. Check deployment status and HTTPS routes before considering a release complete. GitHub automatic deployment is not configured.
