# Aman Sharma — Portfolio

A modular Next.js / React portfolio in TypeScript, with an ocean-blue visual system inspired by wodniack.dev. It includes 13 project case studies across seven registered categories. The homepage and default Projects catalogue show 11 projects across six non-game categories; a visible Games link opens a dedicated topic route with the other two projects. It also includes experience, education, and contact.

## Development

Use Node 24 LTS (Node 22.13+ supported).

```sh
npm ci
npm run dev
```

Visit http://localhost:3000. For production:

```sh
npm run typecheck
npm run format:check
npm run build
npm start
```

The Docker image runs Next's standalone `server.js` as a non-root user. To reproduce that mode locally after building:

```sh
mkdir -p .next/standalone/public .next/standalone/.next/static
cp -R public/. .next/standalone/public/
cp -R .next/static/. .next/standalone/.next/static/
HOSTNAME=0.0.0.0 PORT=3000 node .next/standalone/server.js
```

## Editing content and adding pages

- `src/content/portfolio.ts`: canonical project list, profile, experience, education, and skills.
- `src/content/additional-projects.ts`: repository-backed project additions.
- `src/content/project-categories.ts`: the ordered seven-category registry and shared category type.
- `src/content/project-visibility.ts`: 11 default portfolio entries and two opt-in game entries.
- `src/types/portfolio.ts`: shared content types.
- `src/app/projects/[slug]/page.tsx`: one reusable detail template generates every project route.
- `src/components/`: shared layout, home sections, project catalogue, artwork, and ocean field.
- `src/content/project-media.ts`: image sources, alt text, and documentary provenance; images have no bottom caption bars.
- `src/components/visual/`: per-path ocean animation and scroll-linked gallery transforms, with reduced-motion fallbacks.
- `src/components/projects/ProjectIndexSurface.tsx`: fixed ocean-current backdrop for catalogue routes, with opaque reading panels; individual project routes stay plain.
- `src/app/globals.css`: shared color, typography, spacing, responsive, and reduced-motion rules.

To add a project, add one typed record to the canonical project data in `src/content/portfolio.ts` or `src/content/additional-projects.ts`. Non-game projects appear on the homepage and default catalogue; Games projects appear on `/projects/games`, which is linked from both. Detail-page breadcrumbs and next-project links stay within the project's collection, while the sitemap and static detail routes retain all 13 canonical projects. See [content guide](docs/CONTENT_GUIDE.md) for field definitions and source rules. Add a new standalone route with `src/app/<route>/page.tsx`, then link it in the shared header where appropriate.

Only `amancodinghere@gmail.com` may be used for public contact. Do not copy contact information from source CVs. Job Ad Extraction and Toohak intentionally have no source or demo link; Job Ad Extraction uses confidential SEEK datasets, and Toohak code cannot be shared due to UNSW policy, as confirmed by the owner. Project media includes public application captures, a repository ultrasound figure, and clearly labelled illustrative studies. Recipe imagery is AI-generated illustration; no study artwork is presented as an original application screenshot or measured model output. See [media provenance](docs/PROJECT_MEDIA.md).

## Verification

Start the production server, then run:

```sh
npm test
# Or check the deployed version:
TEST_BASE_URL=https://portfolio-production-e5eb.up.railway.app npm test
```

The route checks cover all 13 project detail routes, the Games topic route, core pages, CV evidence, the owner's public email, restricted project sources, and real 404 responses. Browser QA checks the 11-project default catalogue, six default categories, Games opt-in navigation, menu behavior, long titles, desktop/mobile layouts, and visible contact details. Content provenance is recorded in [source notes](docs/CONTENT_SOURCES.md).

## Railway

Production: https://portfolio-production-e5eb.up.railway.app

The dedicated `aman-sharma-portfolio` project contains the `portfolio` service. `.railway/railway.ts` declares the Docker builder and homepage health check using Railway's TypeScript infrastructure SDK. `PORT` is injected by Railway; the server binds to `0.0.0.0`.

Set `NEXT_PUBLIC_SITE_URL` to the public HTTPS origin before building (Railway build argument and runtime environment). This supplies social metadata, robots, and sitemap origins. Update it when adding a custom domain, then rebuild.

```sh
railway login
railway link --project 1659a361-c52a-4856-a732-3fa14675fce1 --service portfolio
railway config plan
railway config apply --yes
railway up --service portfolio --detach
railway deployment list --service portfolio --json
```

Deployments are uploaded through the CLI. GitHub auto-deployment is not configured. No database or application secrets are needed.
