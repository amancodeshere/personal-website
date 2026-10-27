# Aman Sharma — Portfolio

A modular Next.js / React portfolio in TypeScript, with an ocean-blue visual system inspired by wodniack.dev. It includes seven CV-backed project case studies, a filterable archive, experience, education, and contact.

## Development

Use Node 24 LTS (Node 22.13+ supported).

```sh
npm ci
npm run dev
```

Visit http://localhost:3000. For production:

```sh
npm run typecheck
npm run build
npm start
```

The Docker image runs Next's standalone `server.js` as a non-root user. To reproduce that mode locally after building:

```sh
cp -R public .next/standalone/public
cp -R .next/static .next/standalone/.next/static
HOSTNAME=0.0.0.0 PORT=3000 node .next/standalone/server.js
```

## Editing content and adding pages

- `src/content/portfolio.ts`: all project, profile, experience, education, and skills content.
- `src/types/portfolio.ts`: shared content types.
- `src/app/projects/[slug]/page.tsx`: one reusable detail template generates every project route.
- `src/components/`: shared layout, home sections, project catalogue, artwork, and ocean field.
- `src/app/globals.css`: shared color, typography, spacing, responsive, and reduced-motion rules.

To add a project, add one typed record to `projects`. The homepage, filters, detail route, next-project navigation, and sitemap update automatically. See [content guide](docs/CONTENT_GUIDE.md) for field definitions and source rules. Add a new standalone route with `src/app/<route>/page.tsx`, then link it in the shared header where appropriate.

Only `amancodinghere@gmail.com` may be used for public contact. Do not copy contact information from source CVs. Job Ad Extraction and Toohak intentionally have no source or demo link; the owner confirmed they are no longer shareable. Artwork is an abstract visual interpretation, not application screenshots or measured model outputs.

## Verification

Start the production server, then run:

```sh
npm test
# Or check the deployed version:
TEST_BASE_URL=https://portfolio-production-e5eb.up.railway.app npm test
```

The route checks cover all seven projects, core pages, CV evidence, the owner's public email, restricted project sources, and real 404 responses. Browser QA checks filters, menu behavior, long titles, desktop/mobile layouts, and visible contact details. Content provenance is recorded in [source notes](docs/CONTENT_SOURCES.md).

## Railway

Production: https://portfolio-production-e5eb.up.railway.app

The dedicated `aman-sharma-portfolio` project contains the `portfolio` service. `railway.toml` selects the multi-stage Docker build and homepage health check. `PORT` is injected by Railway; the server binds to `0.0.0.0`.

Set `NEXT_PUBLIC_SITE_URL` to the public HTTPS origin before building (Railway build argument and runtime environment). This supplies social metadata, robots, and sitemap origins. Update it when adding a custom domain, then rebuild.

```sh
railway login
railway link --project 1659a361-c52a-4856-a732-3fa14675fce1 --service portfolio
railway up --service portfolio --detach
railway deployment list --service portfolio --json
```

Deployments are uploaded through the CLI. GitHub auto-deployment is not configured. No database or application secrets are needed.
