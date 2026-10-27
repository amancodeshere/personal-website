# Portfolio content guide

The portfolio's structured content lives in `src/content/portfolio.ts`; its project and experience contracts live in `src/types/portfolio.ts`. Keep page content in this module so portfolio pages can render from one consistent source.

## Project API

`projects` is the canonical `Project[]` list. Each entry supplies:

- `slug`: stable, URL-friendly identifier used by project detail pages and `getProjectBySlug(slug)`.
- `title` and `shortTitle`: full project name and compact label for navigation or cards.
- `category`: one of `Software engineering`, `Machine learning`, or `Research`.
- `summary`: concise overview for project cards and page introductions.
- `description`: paragraphs that explain the problem and scope.
- `technologies`: technologies and methods that are supported by the CV or a verified public source.
- `highlights`: short `{ label, value }` facts for scannable project details.
- `approach`: ordered `{ title, body }` sections for the project page.
- `githubUrl` and `liveUrl`: optional verified public destinations. Leave them unset when there is no shareable public destination.
- `githubNote`: optional user-facing explanation shown when the code link is unavailable or needs context.
- `status`: optional status or date range, only when the source explicitly provides it.
- `role`: the project role as stated in the CV.
- `visual`: one of the existing visual keys (`forge`, `trade`, `nlp`, `medical`, `quiz`, `recipe`, `research`).

`getProjectBySlug` returns the matching project or `undefined`. Callers should handle an unknown slug as a missing project rather than assuming a match.

## Adding a project

1. Add one object to `projects` in `src/content/portfolio.ts` and satisfy the `Project` type.
2. Use a unique lowercase hyphenated slug. Do not change an existing slug after a page or link uses it.
3. Write the summary and paragraphs from the source material. Keep claims, metrics, dates, technologies, and role precise; do not fill gaps with assumptions.
4. Add a GitHub or live URL only after confirming that it is public and corresponds to this project. If no link can be shared, omit the URL and give a concise explanation in `githubNote`.
5. Choose an existing `visual` key unless the UI has been separately updated to support another one.
6. Update `docs/CONTENT_SOURCES.md` to record the source material and any verified repository mapping.
7. Add a matching entry to `src/content/project-media.ts`. Keep its visual title, short card caption, and source credit separate from project facts. Set an optional `image` with a local `src` and descriptive `alt` for real captures or repository figures. Use `presentation: "crop-strip"` only for a single wide image that contains separate crops, such as the three recipe examples.
8. If no image is available, keep the authored interface or workflow study explicitly labelled in its caption. If a new slug has no media entry yet, `ProjectArtwork` falls back to the project summary instead of reusing another project's image.

See `docs/PROJECT_MEDIA.md` for current asset sources, credits, and illustrative-image prompts.

Keep the content entry self-contained so adding projects does not require duplicating project facts across page components.

## Other exports

- `profile` holds the name, public contact links, location, headline, and biography.
- `experiences` is an `Experience[]` with company, role, location, period, description, and highlights.
- `education` lists institution, qualification, location, and period.
- `skillGroups` groups skill labels and their associated terms.

When changing any export shape, update `src/types/portfolio.ts` and any callers that consume that shape.
