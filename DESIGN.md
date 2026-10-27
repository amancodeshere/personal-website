---
name: Aman Sharma Portfolio
description: An ocean-framed portfolio where a moving current leads into software, machine learning, and research work.
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
    fontFamily: "Barlow Condensed, Impact, sans-serif"
    fontSize: "clamp(84px, 17.2vw, 286px)"
    fontWeight: 900
    lineHeight: 0.76
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Barlow Condensed, Impact, sans-serif"
    fontSize: "clamp(45px, 7vw, 92px)"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "-0.035em"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  editorial:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(27px, 3.3vw, 42px)"
    fontWeight: 400
    lineHeight: 1.28
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    letterSpacing: "0.09em"
rounded:
  square: "0px"
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
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.square}"
    padding: "8px 12px"
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

The portfolio opens with a full-width field of animated current lines and Aman's name set as a monumental title strip. A fine frame and ruled bands hold the page together. The ocean palette and compressed lettering give the site a technical, editorial character while leaving the work and its images as the focus.

The current carries into the project stage: a repeated W/O/R/K wall stays behind the scrolling media planes. The homepage shows 11 non-game projects. The shared registry has seven categories, while the default Projects catalogue groups those 11 projects across six non-game categories; its visible Games link opens a dedicated topic with the other two project cards. Competition media includes an actual Battlecode replay board and a capture of the official CTN homepage. These images have no caption bars, and their provenance stays in media metadata and documentation. A compact About panel, four-row experience list, and an expanding radial contact invitation complete the home page.

**Key Characteristics:**

- Deep ocean surfaces, icy text, cyan signals, and thin inset framing.
- Oversized Barlow Condensed lettering balanced by DM Sans and Georgia.
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
- **Fine Rule** (`{colors.line}`): Inset frame and section dividers.
- **Strong Rule** (`{colors.line-strong}`): More prominent section boundaries.

**The Current Accent Rule.** Cyan marks interaction and visual direction; use it sparingly against the ocean palette.

## Typography

**Display Font:** Barlow Condensed (with Impact, sans-serif fallbacks)  
**Body Font:** DM Sans (with Arial, sans-serif fallbacks)  
**Editorial Font:** Georgia (with Times New Roman, serif fallbacks)

**Character:** Barlow Condensed carries the large, tightly set titles. DM Sans keeps navigation and project details compact and clear. Georgia appears in the centered About statement and longer editorial summaries.

### Hierarchy

- **Display** (900, `clamp(84px, 17.2vw, 286px)`, 0.76 line-height): The hero name strip.
- **Headline** (800–900, responsive): Page titles, section names, and project titles; uppercase for the strongest headings.
- **Title** (500–700, 13–25px): Navigation, role names, and small interface headings.
- **Body** (400, 15px, 1.65 line-height): Default reading text in DM Sans.
- **Editorial** (400, `clamp(27px, 3.3vw, 42px)`, 1.28 line-height): Centered About lead.
- **Label** (600, 9–11px, lightly tracked): Categories, dates, and supporting metadata.

## Layout

The site uses a consistent horizontal frame of `clamp(16px, 2.7vw, 42px)` and fluid section padding. A thin fixed outline surrounds the viewport. The desktop header is 72px high; it reduces to 64px on mobile, where the nav becomes a keyboard-operable menu.

The home sequence is a full-width current field, large name strip, centered About panel, scrolling project stage, compact experience list, and radial contact invitation. The W/O/R/K wall is sticky and fills the viewport behind the alternating project media. The seven-category registry feeds a default archive of 11 projects across six non-game categories; a visible Games topic link leads to a separate route with two game cards. Non-game details link and advance within the 11-project collection; game details use the Games breadcrumb and advance within the two-game collection. Below 760px, both archive and home work become a single full-width column, the letter wall becomes static, and images remain in document flow. The layout has a second small-screen adjustment at 390px.

## Elevation & Depth

The site is flat and framed rather than card-stacked. Thin blue-white rules, alternating ocean tones, the full-width current field, and the actual project imagery establish depth. Avoid generic shadows and decorative glow; media uses a restrained frame without bottom caption bars.

## Shapes

The frame, nav, filters, archive, and media use square corners. The contact invitation is the exception: an outlined circle expands into a radial field on hover or keyboard focus, and its orbit rotates. Keep the line weight fine and the viewport frame continuous.

## Components

### Header and Navigation

The header is a clean, ruled band with a compact nameplate, Work/About/Experience/Contact links, and GitHub. Active and hovered links brighten against a quiet cyan-tinted surface. At 760px and below, expose the Menu/Close control and its expanded state; preserve Escape-to-close and visible keyboard focus.

### Hero Current and Name Strip

The SVG current field spans the viewport above a bordered title strip. Its lines drift and respond to pointer movement. Keep the full name as the dominant typographic element; the hero includes a short work link and Sydney location metadata.

The Projects and Games indexes use the shared index surface for a fixed, full-viewport field with brighter cyan currents (43 paths with 33 samples each, updated at roughly 30ms intervals). Its gradient ID is unique per SVG, and the pointer-transparent backdrop leaves filters and project links usable. Opaque ocean panels keep card copy and filters readable; individual project details retain their plain ocean background. The hero's appearance and pointer response remain unchanged.

### About Panel

Center one short statement inside a narrow panel with vertical rules. Use Georgia for the lead, DM Sans for supporting copy, and a single route to the longer About page.

### Work Stage and Project Media

The home stage puts the repeating W/O/R/K wall behind alternating, scroll-linked project media. The default archive uses two columns and square image frames for 11 non-game projects in six categories from the seven-category registry; a visible topic link opens the two-card Games route. Responsive code-authored studies and authentic competition captures extend the main gallery; the two game captures live only in the Games topic; their authored colors stay local to each study and do not change the ocean palette. Detail navigation stays within the same collection as its breadcrumb. Do not render bottom caption or credit bars on gallery, archive, or detail-page images. Keep provenance in the media registry and documentation: JobForge uses sample data, ultrasound uses a repository figure, and recipe food imagery is generated. Authored workflow text remains clearly illustrative. Add new image paths, alt text, and provenance to `src/content/project-media.ts`; an unmapped project falls back to its own summary.

### Experience List

Use four compact ruled rows with period, role, and organization. Keep the row structure direct and unboxed; collapse to two columns on mobile, with supporting details beneath.

### Contact Invitation

“LET’S TALK.” is a large mail link. Hover or keyboard focus expands the pale circular field from the right and turns the lettering ocean blue; the orbit rotates. Keep the public email visible below the invitation: `amancodinghere@gmail.com`.

### Motion and Accessibility

The current SVG updates while visible, pauses when hidden or outside view, and returns to its static path with reduced motion. The Projects and Games index field stays fixed to the viewport while scrolling; it has no pointer-driven effect. Gallery transforms follow scroll position; they are cleared for reduced motion and on mobile. The contact reveal responds to hover and keyboard focus. Keep media in normal document flow and preserve focus outlines, the skip link, and semantic navigation.

## Do's and Don'ts

### Do:

- **Do** use the current ocean, deep, work-stage, panel, ice, and cyan tokens for new surfaces.
- **Do** keep section boundaries and media frames rectangular, ruled, and square-cornered.
- **Do** use real project captures or repository figures where available; retain descriptive alt text and document their source without visible footer bars.
- **Do** label authored interface studies and AI-generated food imagery so they cannot be mistaken for original product screens or outputs.
- **Do** keep scroll and pointer motion optional and retain the reduced-motion behavior.
- **Do** use only `amancodinghere@gmail.com` as the public email address.

### Don't:

- **Don't** invent metrics, model results, patient details, product screenshots, or source links.
- **Don't** add source or deployment links for Job Advertisement Information Extraction or Toohak; those projects are not available to share.
- **Don't** return to generic abstract project diagrams when actual project media or a subject-specific labelled study is available.
- **Don't** soften the framed geometry with pill controls, rounded cards, or generic shadow-heavy surfaces.
- **Don't** remove the reduced-motion treatment or rely on animation to convey essential information.


## Competition media and Games discovery
Use the actual Schooltime board from saved sudo_win Battlecode match 830316 at round 80, exported from the official replay viewer; see the [official match record](https://game.battlecode.au/visualiser?match=830316). The Botfluencer artwork is a real capture of the [official Capture the Narrative homepage](https://capturethenarrative.com/) with UNSW branding. It documents the competition; it is not a Botfluencer dashboard. These are sourced images, not authored interface studies. Preserve complete captures with image-specific aspect ratios and containment. The homepage and default catalogue contain 11 non-game projects across six default categories; the seven-category registry includes Games. A visible Games topic link opens `/projects/games`, where the two game cards live; detail breadcrumbs and next links stay within their collection. Image provenance remains in metadata and docs, without bottom credit bars.
