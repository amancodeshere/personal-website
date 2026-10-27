---
name: Aman Sharma Portfolio
description: A readable ocean-blue portfolio where a moving current leads into software, machine learning, and research work.
colors:
  ocean: "#082f49"
  deep: "#062a41"
  panel: "#0b3b55"
  work-stage: "#0a3853"
  hero-field: "#0a3a55"
  ink: "#e3f3f5"
  ice: "#effafb"
  muted: "#a5c2cb"
  faint: "#759ba8"
  cyan: "#67d4e2"
  line: "rgba(195, 230, 237, 0.23)"
  line-strong: "rgba(195, 230, 237, 0.43)"
typography:
  display:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "clamp(48px, 9.6vw, 148px)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "clamp(30px, 3.5vw, 44px)"
    fontWeight: 700
    lineHeight: 1.15
  project-title:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "clamp(21px, 2.1vw, 28px)"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  editorial:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "clamp(26px, 3.1vw, 38px)"
    fontWeight: 500
    lineHeight: 1.4
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 500
  control:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  square: "0px"
  control: "6px"
  circle: "50%"
spacing:
  frame: "clamp(16px, 2.7vw, 42px)"
  section-y: "clamp(84px, 11vw, 150px)"
  compact: "8px"
  standard: "24px"
components:
  site-header:
    backgroundColor: "{colors.deep}"
    textColor: "{colors.ice}"
    rounded: "{rounded.square}"
    height: "72px"
  filter-chip:
    backgroundColor: "{colors.ocean}"
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
  project-media-frame:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ice}"
    rounded: "{rounded.square}"
    padding: "0"
  contact-invitation:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ice}"
    rounded: "{rounded.square}"
    padding: "20px 0"
---

# Design System: Aman Sharma Portfolio

## Overview

**Creative North Star: “A Current Through the Work.”**

The portfolio opens with a full-width field of animated current lines and Aman's name in open, natural-case lettering. Spacing and a clear type hierarchy hold the page together. The ocean palette keeps a technical character while friendly headings and readable text leave the work and its images as the focus.

The current carries into the project stage: a repeated W/O/R/K wall stays behind the scrolling media planes. The homepage shows 11 non-game projects. The shared registry has seven categories, while the default Projects catalogue groups those 11 projects across six non-game categories; its visible Games link opens a dedicated topic with the other two project cards. Competition media includes an actual Battlecode replay board and a capture of the official CTN homepage. These images have no caption bars, and their provenance stays in media metadata and documentation. A compact About panel, four-row experience list, and an expanding radial contact invitation complete the home page.

**Key Characteristics:**

- Deep ocean surfaces, icy text, and cyan signals without decorative separator bars.
- Friendly DM Sans headings and readable body text; condensed letters remain in decorative artwork and interior editorial headings.
- Current lines and scroll-linked image motion give the page a single sense of movement.
- Real project media and clearly labelled studies carry the subject matter.

## Colors

The palette moves between blue-black ocean surfaces and a brighter blue stage, with icy text and cyan accents.

### Primary

- **Ocean** (`{colors.ocean}`, `#082f49`): Main canvas and primary page surface.
- **Deep** (`{colors.deep}`, `#062a41`): Header, About interstitial, and footer.
- **Work Stage** (`{colors.work-stage}`, `#0a3853`): Scroll-linked project stage behind the W/O/R/K wall.
- **Hero Field** (`{colors.hero-field}`, `#0a3a55`): Current-line artwork background.

### Secondary

- **Panel Blue** (`{colors.panel}`, `#0b3b55`): Contact area and media frames.
- **Current Cyan** (`{colors.cyan}`, `#67d4e2`): Focus, hover, active text, and selected details.

### Neutral

- **Ice** (`{colors.ice}`, `#effafb`): Display titles and high-priority text.
- **Ink** (`{colors.ink}`, `#e3f3f5`): Default text on ocean surfaces.
- **Muted Current** (`{colors.muted}`, `#a5c2cb`): Supporting copy and inactive navigation.
- **Faint Current** (`{colors.faint}`, `#759ba8`): Low-priority labels.
- **Fine Outline** (`{colors.line}`): Controls, metadata chips, and media frames.
- **Strong Outline** (`{colors.line-strong}`): More prominent media and interaction boundaries.

**The Current Accent Rule.** Cyan marks interaction and visual direction; use it sparingly against the ocean palette.

## Typography

**Landing and Gallery Font:** DM Sans (with Arial, sans-serif fallbacks)<br />
**Body Font:** DM Sans (with Arial, sans-serif fallbacks)  
**Editorial Font:** Georgia (with Times New Roman, serif fallbacks)

**Character:** DM Sans gives the landing page and project catalogue an open voice with natural casing and comfortable leading. Barlow Condensed remains in decorative lettering and interior editorial headings; Georgia remains in longer interior summaries.

### Hierarchy

- **Hero** (700, 48–148px, 1.06 leading): Natural-case name with room to wrap.
- **Topic / section** (700, 30–44px, 1.15 leading): Larger than project titles at every breakpoint.
- **Project title** (600, 21–28px, 1.25 leading): Natural case; no compressed mobile override.
- **Controls** (600, 14px, 1.4 leading): Raised surfaces with a minimum 44px target.
- **Body** (400, 16px, 1.7 leading): Landing prose with a 62ch reading measure.
- **About lead** (500, 26–38px, 1.4 leading): Centered DM Sans statement.
- **Metadata** (400–500, 12–13px): Categories, dates, and supporting text.

## Layout

The site uses consistent horizontal spacing of `clamp(16px, 2.7vw, 42px)` and fluid section padding. Whitespace separates sections and list rows. The header uses individually raised links; mobile navigation opens below the header and remains keyboard operable.

The home sequence is a full-width current field, large name strip, centered About panel, scrolling project stage, compact experience list, and radial contact invitation. The W/O/R/K wall is sticky and fills the viewport behind the alternating project media. The seven-category registry feeds a default archive of 11 projects across six non-game categories; a visible Games topic link leads to a separate route with two game cards. Non-game details link and advance within the 11-project collection; game details use the Games breadcrumb and advance within the two-game collection. Below 760px, both archive and home work become a single full-width column, the letter wall becomes static, and images remain in document flow. The landing layout also remains readable at 320px.

## Elevation & Depth

Ocean currents and project imagery establish depth. Controls have a restrained offset soft shadow and inset top highlight; hover lifts them slightly, pressing settles them, and keyboard focus has a cyan outline. Remove decorative page frames and separator bars; retain outlines around controls, media, and factual artwork.

## Shapes

Controls use a gentle 6px corner radius; project media keeps its existing frame. The contact invitation uses an outlined circle that expands into a radial field on hover or keyboard focus, and its orbit rotates.

## Components

### Header and Navigation

The header has a compact nameplate and individually spaced Projects/About/Experience/Contact controls plus GitHub. Active and hovered links brighten against ocean surfaces. At 760px and below, expose the Menu/Close control and its expanded state; preserve Escape-to-close and visible keyboard focus.

### Hero Current and Name Strip

The SVG current field spans the viewport above a readable natural-case name. Its lines drift and respond to pointer movement. Keep the full name as the dominant typographic element; the hero includes a raised work link and Sydney location metadata.

The Projects and Games indexes use a shared ocean surface for a fixed, full-viewport field with brighter cyan currents (43 paths with 33 samples each, updated at roughly 30ms intervals). Topic headings sit directly on the currents; compact ocean backplates fit the project titles instead of filling each card's width. Filters retain their readable surfaces. A quieter shared field runs behind the home About, work, Experience, and Contact sections. Its transparent section surfaces reveal the same current language without adding an animation instance to each section. Individual project details retain their plain ocean background.

### About Panel

Center one short DM Sans statement with comfortable leading and supporting copy. Keep one clear route to the longer About page and use whitespace around the reading measure.

### Work Stage and Project Media

The home stage puts the repeating W/O/R/K wall behind alternating, scroll-linked project media. The default archive uses two columns and square image frames for 11 non-game projects in six categories from the seven-category registry; a visible topic link opens the two-card Games route. Responsive code-authored studies and authentic competition captures extend the main gallery; the two game captures live only in the Games topic; their authored colors stay local to each study and do not change the ocean palette. Detail navigation stays within the same collection as its breadcrumb. Do not render bottom caption or credit bars on gallery, archive, or detail-page images. Keep provenance in the media registry and documentation: JobForge uses sample data, ultrasound uses a repository figure, and recipe food imagery is generated. Authored workflow text remains clearly illustrative. Add new image paths, alt text, and provenance to `src/content/project-media.ts`; an unmapped project falls back to its own summary.

### Experience List

Use four spacious rows with period, role, and organization. Keep them direct and unboxed without separator bars; collapse to two columns on mobile, with supporting details beneath.

### Contact Invitation

“Let’s talk.” is a large mail link. Hover or keyboard focus expands the pale circular field from the right and turns the lettering ocean blue; the orbit rotates. Keep the public email visible below the invitation: `amancodinghere@gmail.com`.

### Motion and Accessibility

The current SVG updates while its surface is visible, pauses when hidden or outside view, and returns to its static path with reduced motion. The index field stays fixed to the viewport; the home field uses a sticky viewport layer below the hero. Both respond to mouse movement through passive observation, leaving links, filters, touch scrolling, and text selection available. Pointer coordinates follow the SVG transform, including the hero's cropped view. Pointer energy fades after leaving the surface, scrolling, or losing focus. Gallery transforms follow scroll position; they are cleared for reduced motion and on mobile. The contact reveal responds to hover and keyboard focus. Keep media in normal document flow and preserve focus outlines, the skip link, and semantic navigation.

## Do's and Don'ts

### Do:

- **Do** use the current ocean, deep, work-stage, panel, ice, and cyan tokens for new surfaces.
- **Do** separate sections with whitespace and keep outlines limited to controls, metadata chips, and media frames.
- **Do** use real project captures or repository figures where available; retain descriptive alt text and document their source without visible footer bars.
- **Do** label authored interface studies and AI-generated food imagery so they cannot be mistaken for original product screens or outputs.
- **Do** keep scroll and pointer motion optional and retain the reduced-motion behavior.
- **Do** use only `amancodinghere@gmail.com` as the public email address.

### Don't:

- **Don't** invent metrics, model results, patient details, product screenshots, or source links.
- **Don't** add source or deployment links for Job Advertisement Information Extraction or Toohak; those projects are not available to share.
- **Don't** return to generic abstract project diagrams when actual project media or a subject-specific labelled study is available.
- **Don't** add separator bars, decorative page frames, pill controls, or heavy shadows. Keep the gentle control radius and subtle depth consistent.
- **Don't** remove the reduced-motion treatment or rely on animation to convey essential information.


## Competition media and Games discovery
Use the actual Schooltime board from saved sudo_win Battlecode match 830316 at round 80, exported from the official replay viewer; see the [official match record](https://game.battlecode.au/visualiser?match=830316). The Botfluencer artwork is a real capture of the [official Capture the Narrative homepage](https://capturethenarrative.com/) with UNSW branding. It documents the competition; it is not a Botfluencer dashboard. These are sourced images, not authored interface studies. Preserve complete captures with image-specific aspect ratios and containment. The homepage and default catalogue contain 11 non-game projects across six default categories; the seven-category registry includes Games. A visible Games topic link opens `/projects/games`, where the two game cards live; detail breadcrumbs and next links stay within their collection. Image provenance remains in metadata and docs, without bottom credit bars.
