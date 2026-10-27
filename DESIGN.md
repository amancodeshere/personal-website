---
name: Aman Sharma Portfolio
description: An ocean-blue editorial portfolio for software engineering, machine learning, and research.
colors:
  ink: "#d7edf2"
  muted: "#86aab5"
  faint: "#587b87"
  ocean: "#062838"
  deep: "#041d2a"
  panel: "#082f40"
  panel-hi: "#0b3d50"
  line: "rgba(164,214,225,.18)"
  line-strong: "rgba(164,214,225,.38)"
  cyan: "#54cede"
  ice: "#e8f7f8"
  availability: "#83dab8"
typography:
  display:
    fontFamily: "Barlow Condensed, Impact, sans-serif"
    fontSize: "clamp(74px, 15vw, 250px)"
    fontWeight: 900
    lineHeight: 0.75
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Barlow Condensed, Impact, sans-serif"
    fontSize: "clamp(46px, 7.4vw, 100px)"
    fontWeight: 800
    lineHeight: 0.87
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  editorial:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(29px, 4vw, 54px)"
    fontWeight: 400
    lineHeight: 1.2
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "9px"
    fontWeight: 600
    letterSpacing: "0.13em"
rounded:
  square: "0px"
  circle: "50%"
spacing:
  frame: "clamp(18px, 4.2vw, 68px)"
  section-y: "clamp(86px, 12vw, 176px)"
  compact: "8px"
  standard: "24px"
components:
  filter-chip:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.square}"
    padding: "10px 14px"
  filter-chip-active:
    backgroundColor: "{colors.panel-hi}"
    textColor: "{colors.ice}"
    rounded: "{rounded.square}"
    padding: "10px 14px"
  project-artwork:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ice}"
    rounded: "{rounded.square}"
---

# Design System: Aman Sharma Portfolio

## Overview

**Creative North Star: “Current in Motion.”**

This is an editorial portfolio set in a deep ocean palette. A fine coordinate grid, precise rules, oversized condensed typography, and flowing current lines give the work a sense of motion while keeping the reading structure calm. The visual language takes cues from wodniack.dev, then expresses them through Aman's own identity, writing, and abstract artwork.

The interface is a frame for projects and research: high contrast headlines establish hierarchy; DM Sans keeps details clear; Georgia adds an editorial voice to introductions and longer passages. Project art is drawn with SVG and CSS as abstract diagrams. It is illustrative, not a screenshot or a claim about a model's output.

**Key Characteristics:**

- Dark ocean blues, icy text, and restrained cyan accents.
- Large Barlow Condensed display type balanced by readable DM Sans and Georgia.
- Thin grid and section rules with generous editorial spacing.
- Flowing SVG current artwork and abstract project diagrams.

## Colors

The palette moves from near-black deep water to lighter blue-green surfaces; pale icy text carries the page, while cyan marks interaction and detail.

### Primary
- **Current Cyan** (`{colors.cyan}`): Focus outlines, active filters, small labels, arrow strokes, and line-art highlights. Keep it as a signal color.

### Secondary
- **Ocean Field** (`{colors.ocean}`): Main page canvas and primary work sections.
- **Deep Water** (`{colors.deep}`): Header, footer, and alternating editorial sections.
- **Panel Blue** (`{colors.panel}`): Project artwork and contained visual surfaces.
- **Panel Tide** (`{colors.panel-hi}`): Selected filter and interactive surface state.

### Neutral
- **Ice** (`{colors.ice}`): Main headlines and high-priority text.
- **Ink** (`{colors.ink}`): Default body text.
- **Muted Current** (`{colors.muted}`): Supporting copy and inactive navigation.
- **Faint Current** (`{colors.faint}`): Low-priority metadata.
- **Fine Rule** (`{colors.line}`): Quiet grid and divider lines.
- **Strong Rule** (`{colors.line-strong}`): Section boundaries and stronger frames.
- **Availability Green** (`{colors.availability}`): Small status indicator only.

**The Signal Color Rule.** Cyan marks a state, path, or point of attention; it does not become a large decorative fill.

## Typography

**Display Font:** Barlow Condensed (with Impact, sans-serif fallbacks)  
**Body Font:** DM Sans (with Arial, sans-serif fallbacks)  
**Editorial Font:** Georgia (with Times New Roman, serif fallbacks)

**Character:** Condensed, heavy display lettering gives the work scale and momentum. DM Sans is direct and compact for navigation, project facts, and body copy; Georgia adds contrast and a more reflective voice to short introductions.

### Hierarchy
- **Display** (900, responsive 74–250px, 0.75 line-height): Oversized uppercase hero title; reduce fluidly on narrower screens.
- **Headline** (800, responsive 46–100px, 0.87 line-height): Section and page titles.
- **Title** (700–800, responsive): Project names, timeline roles, and compact section labels in Barlow Condensed.
- **Body** (400, 15px, 1.65 line-height): Default reading text in DM Sans.
- **Editorial** (400 italic, responsive 29–54px, 1.2 line-height): Lead statements and section introductions in Georgia.
- **Label** (600, 9px, 0.13em tracking, often uppercase): Navigation metadata, categories, indices, and figure captions.

**The Three-Voice Rule.** Use Barlow Condensed for hierarchy, DM Sans for utility and reading, and Georgia for editorial emphasis; do not add a fourth display voice.

## Layout

The site uses a wide editorial frame with consistent responsive side gutters. The frame grows from 18px on narrow screens to 68px on wide screens. Sections alternate between the ocean and deep-water backgrounds, separated by thin horizontal rules. Desktop project rows use an artwork column beside project details; detail and timeline pages use asymmetric two-column layouts. At narrower widths the project catalogue, about content, and timelines collapse to a single column, and navigation becomes a menu. The main layout breakpoints are 1080px, 760px, and 390px. Section padding is fluid rather than tied to a rigid spacing grid.

## Elevation & Depth

The interface is mostly flat. Alternating blue surfaces, fine rules, translucent grid lines, and radial color fields create depth without floating card shadows. Localized cyan glow is reserved for abstract diagrams and current artwork; it should not be added to ordinary text or content rows.

## Shapes

Frames, filter controls, and project panels use square corners. Circles belong to diagram nodes, orbits, and small status marks. Borders are thin and cool-toned; artwork panels clip their contents to a precise rectangular frame. Avoid pill-shaped UI or soft card stacks.

## Components

### Navigation

The header is a dark, ruled band. The monogram and wordmark share a compact left area; navigation links are separated by vertical rules. Active and hovered links receive a quiet cyan-tinted surface and brighter text. Below the mobile breakpoint, a menu button opens a full-width vertical list. Keep the skip link and visible keyboard focus treatment.

### Filter Chips

Filters are square, outlined text buttons with a small cyan count. The selected or hovered state fills with the panel-tide surface and brighter text. Preserve `aria-pressed` state semantics and keep the count visible.

### Project Rows and Artwork

Each catalogue row pairs a framed abstract project diagram with a title, category, summary, technology tags, and a text link. The artwork is a distinct SVG/CSS illustration for its project subject, not a product screenshot. On mobile the artwork stacks above the copy.

When a project needs a new illustration, first reuse one of the existing visual keys in `src/types/portfolio.ts` and `src/components/projects/ProjectArtwork.tsx`. If a new key is necessary, extend the `Project` visual union, the artwork label map and renderer, and the matching art styles together. Keep project facts in the typed content module; the artwork remains a symbolic interpretation.

### Text Links

Calls to action are compact uppercase DM Sans links, not filled buttons. A small cyan arrow shifts horizontally on hover; keep a clear focus outline for keyboard use.

### Contact

The contact section is a single large typographic invitation on a brighter ocean surface with a faint coordinate grid. Its email link is the one public address approved by the owner: `amancodinghere@gmail.com`.

### Motion and Accessibility

Current lines drift slowly; pointer movement adds a small offset to the hero field. Short color and arrow transitions support hover. Respect `prefers-reduced-motion`: remove drifting and parallax, and reduce transition durations. Keep focus visible, use semantic links and buttons, and retain the skip-to-content link.

## Do's and Don'ts

### Do:
- **Do** keep the deep ocean field, icy text, and restrained cyan as the recurring color relationship.
- **Do** build new project art from abstract SVG or CSS diagrams that represent the subject.
- **Do** use the typed portfolio content as the source of project labels and facts.
- **Do** preserve reduced-motion behavior, keyboard focus, and the public contact address `amancodinghere@gmail.com`.

### Don't:
- **Don't** add product screenshots or model-output imagery; the visual system uses abstract authored illustrations.
- **Don't** reintroduce the private CV email or add another public email address.
- **Don't** add source or deployment links for Job Advertisement Information Extraction or Toohak; those destinations are no longer available to share.
- **Don't** replace the fine rules and square frames with rounded cards, pills, or generic shadow-heavy panels.
- **Don't** remove the reduced-motion treatment or rely on animation to convey essential information.
