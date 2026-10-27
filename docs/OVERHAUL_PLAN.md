# Portfolio overhaul plan

Prepared 27 October 2026. This is a source and cached-reference planning pass; the parent agent owns live visual comparison and implementation. No source files were changed by this pass.

## Outcome

Make the site feel like a deliberately composed, moving portfolio rather than a catalogue wearing a technical theme. Follow the reference's actual composition: a full-width interactive line field, monumental display type bounded by small separators, a compact editorial biography, an immersive visual work sequence, and an emphatic interactive contact ending. Keep Aman’s ocean palette, equal software/ML emphasis, all seven projects, all four roles, and two education records. The sole public email is amancodinghere@gmail.com.

The existing docs/IMPLEMENTATION_PLAN.md is historical context. Its suggestion of identical project rows and an abstract ocean graphic does not satisfy the owner's new request. This document supersedes that visual interpretation.

## Visitor findings from current source

1. **The site asks a visitor to read before it demonstrates.** Every homepage project repeats category, index, long summary, four technology chips and a View Project action beside a decorative illustration. Seven identical rows turn discovery into a long scan. A hiring manager cannot recognize a functioning application or ML result from these thumbnails.
2. **Decoration competes with the actual work.** Hero labels include FIELD STUDY / 01, coordinates, SYSTEMS IN MOTION, a separate location, a three-discipline strip, and a scroll instruction. They describe a visual theme rather than Aman. Every project then adds another serial number, invented systems branding, and labels inside its artwork. The reference uses small details as framing for a bold main event; the current site gives every surface equal detail.
3. **The motion is mostly atmospheric.** OceanField translates the complete SVG by roughly 14 by 9 pixels and slowly transforms two groups. The reference deforms individual line points with cursor velocity and spring recovery. The current project rows have no scroll composition, while the reference makes project media move through a full-screen scene.
4. **Content duplicates across sections and pages.** The homepage includes the full seven-row collection, followed by a second three-item experience presentation; /projects repeats the same rows; each detail page repeats The work, How it comes together, and At a glance with largely overlapping facts. This feels longer without supplying more proof.
5. **The current artwork is category-interchangeable.** JobForge orbits, a UBL sheet, NLP words, stylized lesions, recipe rings, quiz geometry and SDG nodes can be understood only after reading their labels. These are branding illustrations, not evidence of the systems. Use product screens, actual model outputs and explicit illustrative examples in the dominant visual area.
6. **The homepage experience selection is editorially odd.** It shows Robotics, Global Exchange and Excel Academics while omitting WuKong; this gives customer service a similar visual weight to present perception engineering and research. Preserve the full record on /experience, but use the homepage for one concise current-work line plus a link to the record.
7. **A visitor sees the same typographic rhythm everywhere.** Large condensed heading, right aside, horizontal rule and two-column content repeats through About, Work and Experience. The reference alternates a landscape line field, a compact central panel, full-screen kinetic media, a personal collage, and a circular contact reveal. Alternating composition matters as much as fonts and color.

## What the cached reference actually does

Evidence files: /tmp/aman-reference.html, /tmp/aman-reference.css, /tmp/aman-reference.js. These are source observations, not a claim that this planner visually tested the live page.

| Feature | Reference evidence | Portfolio translation |
| --- | --- | --- |
| Header | A 6rem-high ruled header; compact logo, console-like microcopy, About / Work / Contact anchors; supplementary social/contrast/availability zones. | Keep an approximately 80–96px ruled bar. Logo/name, one short location or role line, three anchors, compact social links. Move Experience to About and footer. Drop duplicated role/status text. |
| Hero geometry | `.s-hero` fills at least the viewport less the header; wave field grows above a separate giant title strip; title uses Bigger Display at min(15vw,18.5rem), line-height .8; binary separators surround it. | Give the wave field most of the initial upper viewport. Put two balanced full-width role lines underneath: SOFTWARE ENGINEERING / MACHINE LEARNING. Treat both as equal size. Use thin, restrained separators. No side deck squeezing the title. |
| Wave behavior | `a-waves`: vertical paths with points spaced 10px horizontally / 32px vertically; Perlin displacement; cursor velocity adds local spring forces, damped at .925; intersection pauses ticking. | Implement real local deformation and spring recovery rather than shifting the entire texture. Flat ink-like strokes in ice/cyan on navy; no radial glow or grid competing with them. Pause offscreen and disable active animation for reduced motion. |
| Title behavior | Initial clipped word/character reveal; very occasional character rolls toward four directions using duplicate letter content. | One clean reveal on entry and a restrained hover roll or occasional glyph movement. Keep the accessible heading as actual text. Avoid splitting every visible heading into perpetual motion. |
| About | Centered bordered panel, width 39.25rem, with a tiny inverse title bar and large light serif body; ample space around it. The award grid supplies proof specific to the author. | A single centered panel around 620–700px, serif lead and one short factual paragraph. Replace awards with two compact factual lines: current perception work and current NLP thesis. No decorative AS stamp or technology wall here. |
| Work | Sticky viewport stage; narrow tall capsule/grid mask opens; huge stacked W/O/R/K letters; individual actual project videos travel across at different vertical positions and sizes with rotateY and depth. Section height is number of media items × 50lvh. Video plays only while its progress is in view. | Create an accessible kinetic gallery of the seven projects using real evidence. A large WORK word and a simple opening mask establish the reference's character; media planes/captions travel through the stage. Avoid a carousel that hides projects behind unexplained controls. On small screens or reduced motion, render all seven sequentially with no trapping. |
| Project presentation | Plain framed video planes up to 50vw / 50vh on desktop, 80vw / 80vh on mobile; tiny mono-like captions. | Large legible screens/figures, straight edges and concise caption strips. One discipline label, title and one purpose sentence; move tags and implementation details to case studies. |
| Personal/history section | Floating personal photos/objects in a perspective collage around “Coding my way since 1987,” then a dramatic circular CTA. | Do not invent personal imagery or claims. If no personal asset exists, use a small factual present-work/experience bridge; spend visual energy on documented work instead. |
| Contact | Small central GO button expands into a large circular clipped contact composition on hover, with a link emerging. | A circular HELLO / LET’S TALK reveal, plus an always-visible email link and GitHub/LinkedIn. Keyboard focus and touch must expose the same action. The only email is amancodinghere@gmail.com. |

## Proposed homepage composition

1. **Header:** Aman mark/name; Sydney, Australia; About / Work / Contact; GitHub and LinkedIn as compact links. One availability statement at most.
2. **Hero:** full-width reactive wave field, then balanced condensed SOFTWARE ENGINEERING / MACHINE LEARNING title. A single short supporting line can sit in the separator strip: “Aman Sharma — building useful software and applied ML.” One clear Work anchor. Remove field-study labels, coordinates, duplicated disciplines and the side deck.
3. **About:** small inverse title strip, editorial serif lead, 60–90 words total. State UNSW Software Engineering, perception at sUNSWim Robotics, and honours NLP research. Link to the fuller About and Experience pages. Equal SWE/ML positioning comes from the hero and project sequence, not repeated promotional copy.
4. **Work:** one strong heading/transition and all seven visual projects. Interleave SWE and ML: JobForge, Ultrasound Analysis, TradeDocNavigator, Recipe Recommender, Toohak, Job Ad Extraction, Research to SDGs. Keep Research categorized as Research but visually part of the applied-ML side. The stage must have an obvious browsing direction and a visible route to /projects. No homepage filters, tech pills or long project prose.
5. **Experience bridge:** one compact current-work line or two restrained columns for Perception and Research, followed by “Experience & education.” Keep all historical roles and education on their existing pages. Avoid a second large resume grid below a long project presentation.
6. **Contact:** generous space, circle reveal as the distinctive final interaction, always-readable public email, minimal footer.

The /projects route remains the fast, static scan: all seven projects as a two-column visual grid with clear names/purposes; a single-row filter is optional there. It must not duplicate the moving homepage scene. All detail URLs continue to work.

## Visual asset plan for all seven projects

| Project | Dominant evidence visual | Fallback if source cannot supply it | Honest motion |
| --- | --- | --- | --- |
| JobForge | Actual application screen showing candidate profile and ranked roles, ideally one useful match rationale. Crop away infrastructure/debug UI. | Repository screenshot if its provenance is clear. A screenshot of an empty or failed search is not a good hero. | A short actual screen recording of ranking or expanding a result, or slow crop movement across a real screen. |
| TradeDocNavigator | Actual invoice/document table or shipment workflow screen; a second screen may show the UBL detail or tracking view. | Repository screenshot or locally run actual UI if public app is unhealthy. Do not substitute a fake parcel dashboard. | Short actual navigation between document list and detail; restrained card depth on scroll. |
| Ultrasound Analysis | A real grayscale ultrasound alongside its actual ground-truth and/or predicted lesion mask from repository/report, with exact caption explaining which is which. | Real source ultrasound plus a documented ground-truth mask; show “dataset example” if no inference output is available. Never present a drawn synthetic lesion as a model result. | Slider or reveal between real image and real mask; no fictitious changing confidence score. |
| Recipe Recommender | Actual recommendation output from the notebook/report, preferably an input recipe/ingredient selection and named top recommendations; a real evaluation plot can support it. | A clearly labelled “Illustrative recommendation example” using everyday ingredient/recipe text, with no invented score/rank metric. | Highlight shared ingredients and reveal recommendation matches; images only when their provenance is established. |
| Toohak | Genuine archived screen/report if it exists; source/demo unavailable permanently is an accepted constraint. | Purposeful reconstructed host-question / player-answer / leaderboard composition, visibly captioned “Interface concept — source and demo unavailable.” Concrete multiple-choice question and player states make the purpose apparent. | Reveal question, select an answer and progress to score in a short illustrative loop. Do not imply it is a live game or recovered screenshot. |
| Job Ad Extraction | Actual before/after extraction sample from report or notebook if retained. | A clearly labelled “Illustrative extraction example”: readable short ad excerpt with salary/experience spans mapped to a small JSON output. Use invented neutral sample content and no invented quality metric. | Synchronized span highlight and JSON field reveal explains what the pipeline does. This is a concrete demonstration, not a generic model-node diagram. |
| Research to SDGs | Actual research abstract text and verified repository output/label visualization, or a real experiment/result figure if one exists. | A labelled “Research workflow” using a short neutral abstract sample and two plausible illustrative goal assignments; explicitly mark as an example and state ongoing research. Do not claim a measured result. | Highlight abstract phrases then illuminate relevant goal tiles; avoid a generic ring of 17 nodes or fabricated probabilities. |

For product screens and real report figures, use descriptive alt text. For reconstructed examples, the label must be visible and accessible. Keep images readable at mobile widths; do not shrink a full desktop UI into a 300px panel when a purposeful crop tells the story better.

## Detail-page simplification

Use one consistent spine with project-specific evidence: title + concise purpose; large real visual or labelled example; Role / Stack / valid links in a compact row; Problem and Contribution; Evidence or Results with only documented values; next project. Keep source/demo unavailability as one short note for Toohak and Job Ad Extraction. Do not add a GitHub-profile button under an unavailable-source note: it does not resolve the missing project source and adds an unrelated action. Keep all owner facts and existing routes.

Prioritize an actual screenshot/figure over three generic content sections. Preserve documented JobForge retrieval metrics, but do not manufacture numerical outcomes for the other projects. Remove wording such as “The CV describes” from public-facing copy once the fact has been verified in content sources.

## Bounded motion specification

- Hero: an entry reveal under roughly 1.5s for essential text; line field may settle later. Local cursor response, natural recovery, visible motion without touching the pointer.
- Work desktop: sticky stage with one dominant readable project at a time and adjacent incoming/outgoing media; oversized WORK behind it. Progress driven by normal scroll. Approximately 50–65vh travel per project is enough; avoid copying the reference's very long 34-item timeline literally. All seven must be reachable without precise pointer behavior.
- Work mobile: ordinary sequential images and captions, optional small reveal. No horizontal scroll hijack, rotating unreadable UI, hover-only information, or mandatory pinned sequence.
- Contact: circle expand on hover/focus and a direct mail action on touch. Keep the email outside the masked decoration so it is never hidden.
- Reduced motion: static line field, visible title, ordinary project flow, no perspective transforms, no scroll trapping. Effects must not be required to read or navigate.
- Animation lifecycle: one requestAnimationFrame controller per scene at most, IntersectionObserver pause, resize cleanup, and no state update per frame. Animate transforms/CSS variables; only the active SVG path field needs point geometry updates.

## Execution sequence and ownership boundaries

1. **Assets/content:** parent obtains real product screens and repository/report images; record provenance and crop decisions in docs/CONTENT_SOURCES.md. Extend project data with visual kind, asset path, alt text, evidence caption and any explicit illustrative label. Keep facts separate from presentation.
2. **Shell/hero/about/contact:** replace the decorative-heavy composition and establish typography/spacing tokens. Implement the actual local wave deformation. These changes should be judged together at 1440px and 390px before polishing interior pages.
3. **Work system:** build a new visual-first gallery component, then a simpler /projects grid. Integrate the seven evidence assets. Retire the current generic ProjectArtwork markup/CSS once no routes depend on it.
4. **Case studies/interior pages:** simplify shared story spine, add evidence with visible captions, keep all seven routes and complete experience/education content. Make interior headings and navigation agree with the new shell.
5. **Review:** compare reference and new homepage screenshots at matching widths and scroll positions. Check first impression, About compactness, project legibility, stage motion and contact behavior. Then test keyboard navigation, reduced motion, 320px/390px layout, link validity, route/build/privacy checks and production deployment. Review evidence and honesty of every reconstructed visual separately.

Do not split source ownership by overlapping CSS selectors. A shell implementer owns global tokens and shell/hero/about/contact selectors; a work implementer owns gallery/media/detail selectors and requests shared token changes through the parent. Do not let concurrent agents append competing override blocks to globals.css.

## Acceptance bar

- The first viewport visibly resembles the reference's field/title-strip composition while conveying both engineering disciplines equally.
- A visitor recognizes at least JobForge and TradeDocNavigator as real applications and Ultrasound as real computer-vision work before reading their long descriptions.
- All seven projects remain discoverable, and the static project route gives a quick scan.
- Work media, title, About panel and contact have distinct compositions; the page is not seven repeated rows plus repeated section headings.
- Decorative microcopy is substantially reduced; project media is the main visual evidence.
- Motion changes the composition and reacts locally; it is more than slow background translation.
- No illustrative asset is misrepresented as a real screenshot, prediction, benchmark, archived UI or running demo.
- Source/demo unavailable is final for Toohak and Job Ad Extraction; no further owner requests for these assets.
- The email is amancodinghere@gmail.com everywhere; no phone number or alternate private email is introduced.
