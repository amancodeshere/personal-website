# Portfolio content guide

The portfolio's structured content lives in `src/content/portfolio.ts` and `src/content/additional-projects.ts`. The shared project category list is in `src/content/project-categories.ts`; project and experience contracts live in `src/types/portfolio.ts`. The two content modules currently provide 13 projects in total.

`projects` in `portfolio.ts` is the combined canonical list of all 13 projects: the original seven followed by six entries imported from `additionalProjects` in `additional-projects.ts`. Keep project facts in these data modules instead of duplicating them in page components.

## Project API

`projects` is the canonical `Project[]` list. Each entry supplies:

- `slug`: stable, URL-friendly identifier used by project detail pages and `getProjectBySlug(slug)`.
- `title` and `shortTitle`: full project name and compact label for navigation or cards.
- `category`: a value from `projectCategories` in `src/content/project-categories.ts` (`Software engineering`, `AI`, `Machine learning`, `Research`, `Cyber security`, `Competitions`, or `Games`). Import the shared type/list rather than creating another category union.
- `summary`: concise overview for project cards and page introductions.
- `description`: paragraphs that explain the problem and scope.
- `technologies`: technologies and methods that are supported by the CV or a verified public source.
- `highlights`: short `{ label, value }` facts for scannable project details.
- `approach`: ordered `{ title, body }` sections for the project page.
- `githubUrl` and `liveUrl`: optional verified public destinations. Leave them unset when there is no shareable public destination.
- `githubNote`: optional user-facing explanation shown when the code link is unavailable or needs context.
- `status`: optional status or date range, only when the source explicitly provides it.
- `role`: the project role as stated in the CV.
- `visual`: a key supported by the project artwork component. Existing keys are `forge`, `trade`, `nlp`, `medical`, `quiz`, `recipe`, and `research`; the six additional projects add `music`, `security`, `battlecode`, `botfluencer`, `block`, and `pinball`.

`getProjectBySlug` returns the matching project or `undefined`. Callers should handle an unknown slug as a missing project rather than assuming a match.

## Adding a project

1. Add one object to the appropriate project array in `src/content/portfolio.ts` or `src/content/additional-projects.ts` and satisfy the `Project` type.
2. Use a unique lowercase hyphenated slug. Do not change an existing slug after a page or link uses it.
3. Write the summary and paragraphs from the source material. Keep claims, metrics, dates, technologies, and role precise; do not fill gaps with assumptions.
4. Add a GitHub or live URL only after confirming that it is public and corresponds to this project. If no link can be shared, omit the URL and give a concise explanation in `githubNote`.
5. Use a `visual` key supported by the artwork component. Add a new key there before referencing it in content.
6. Update `docs/CONTENT_SOURCES.md` to record the source material and any verified repository mapping.
7. Add a matching entry to `src/content/project-media.ts`. Keep its visual title and source provenance separate from project facts. Images intentionally render without bottom caption or credit bars. Set an optional `image` with a local `src` and descriptive `alt` for real captures or repository figures. Use `presentation: "crop-strip"` only for a single wide image that contains separate crops, such as the three recipe examples.
8. If no image is available, keep example content clearly illustrative and retain its provenance in the media metadata and source documentation. If a new slug has no media entry yet, `ProjectArtwork` falls back to the project summary instead of reusing another project's image.

See `docs/PROJECT_MEDIA.md` for current asset sources, credits, and illustrative-image prompts.

Keep the content entry self-contained so adding projects does not require duplicating project facts across page components.

## Other exports

- `profile` holds the name, public contact links, location, headline, and biography.
- `experiences` is an `Experience[]` with company, role, location, period, description, and highlights.
- `education` lists institution, qualification, location, and period.
- `skillGroups` groups skill labels and their associated terms.

When changing any export shape, update `src/types/portfolio.ts` and any callers that consume that shape.
