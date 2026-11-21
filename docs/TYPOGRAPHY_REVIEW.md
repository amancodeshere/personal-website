# Portfolio typography review

21 November 2026

The review covered all 20 public pages and the 404 page. I assessed how quickly a recruiter could identify the work, find the role and technologies, and read the supporting evidence. I also reviewed font loading, heading wraps, reading widths, and the consistency of labels and controls.

| Surface | Finding | Change |
| --- | --- | --- |
| Home and contact | The name and work lettering gave the homepage a clear identity. The engineering tagline read like auxiliary metadata. | Kept the large name and condensed W/O/R/K lettering. Gave the tagline body-sized type and used a true cyan italic for the About statement. |
| Projects and Games | Condensed uppercase page titles and DM Sans category headings felt like different systems. Bright currents competed with the introduction text. | Matched the page, section, and card hierarchy to the rest of the site. Softened the currents directly behind the introductions. |
| About | The biography switched to Georgia. The education and toolkit headings competed with small qualifications and skill names. | Matched the biography to the main reading face and gave education, skills, and supporting details distinct levels. |
| Experience | Condensed role headings and 12–13px descriptions slowed down scanning the timeline. | Matched role headings to project cards, increased descriptions and highlights to 16px, and aligned date numerals. |
| Project details | Long uppercase titles crowded the overview. Role descriptions, tags, and source actions used several small sizes. | Used balanced titles in their written case, readable ledes and metadata, and sentence-case source actions. Gave the action links their own row on mobile. |
| Robotics and thesis case studies | Condensed headings and serif ledes shifted the visual style again. | Used the project reading hierarchy, with a smaller title scale for the split layout and a cyan italic accent. |
| 404 | Condensed lettering made the recovery screen feel disconnected from the rest of the site. | Applied the shared page-title scale and used italic emphasis in the existing heading. |

DM Sans now handles interface and reading text. Body copy uses 16px at the default browser setting, with 1.7 line height and a desktop reading measure typically between 62 and 68ch. Short labels, metadata, and controls use 12px, 13px, and 14px respectively. The portfolio self-hosts six Latin font faces with swap loading. Project screenshots and the text inside authored project illustrations retain their own typography.

## Verification

- Impeccable flagged 34 off-scale font sizes in the original interface styles. The final scan of the shared interface and case-study styles returned zero findings.
- Chromium checked all 21 pages at 320px, 390px, 768px, and 1440px, plus 200% default text size at 640px. These checks found no clipped text in the reviewed interface elements or page-wide horizontal overflow. The longest reviewed project title remained visible and fit at 320px with webfonts blocked.
- On the main solid blue surfaces, the muted text color measured at least 6.3:1 against its background.
- The production build, TypeScript check, formatting check, and all 29 integration tests passed.
