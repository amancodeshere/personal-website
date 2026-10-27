# Project media

Project artwork has its own captions and visual direction in
`src/content/project-media.ts`. This mapping is separate from portfolio facts.
Interface and workflow studies are authored examples; captions identify them so
they are not mistaken for screenshots of the original applications.

## Assets and treatments

| Project                                                 | Media                                                                                                                                              | Source / attribution                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| JobForge                                                | Actual public demo results view, with sample-data and demonstration-score captions.                                                                | `public/projects/jobforge-results.webp`, captured from the [public JobForge demo](https://jobforge-prod.up.railway.app) on 27 Oct 2026. The app labels its content as sample data.                                                                                                                                                                                                              |
| TradeDocNavigator                                       | Actual public landing page showing the product name and invoice, despatch, and tracking workflows.                                                 | `public/projects/tradedocnavigator-live.webp`, captured from the [public TradeDocNavigator site](https://tradedocnavigator.up.railway.app) on 27 Oct 2026.                                                                                                                                                                                                                                      |
| Job Advertisement Information Extraction                | Example listing text mapped to role, education, experience, and salary fields. The absent salary stays marked as not stated.                       | Authored illustrative workflow; the original source and deployment are unavailable to share.                                                                                                                                                                                                                                                                                                    |
| Breast Cancer Classification and Segmentation           | Actual ultrasound examples and corresponding ground-truth masks from the public project figure.                                                    | `public/projects/ultrasound-segmentation-examples.png`, copied from [`images/markdown_image_000.png`](https://github.com/amancodeshere/Breast-Cancer-Classification-and-Segmentation-Using-Deep-Learning-on-Ultrasound-Images/blob/HEAD/images/markdown_image_000.png) in the project repository. The figure shows de-identified example images and masks; no patient identifiers are included. |
| Hybrid Recipe Recommendation System                     | Recipe cards with ingredients and content / rating recommendation signals, using an AI-generated food illustration.                                | `public/projects/recipe-food.webp`; this is illustrative food imagery, not a photo of actual recommender output.                                                                                                                                                                                                                                                                                |
| Toohak                                                  | Live player question, answer choices, and host synchronization state.                                                                              | Authored interface study; no original source or deployment is linked.                                                                                                                                                                                                                                                                                                                           |
| Multi-Label NLP Classification of Research Publications | Clearly labelled example abstract shown alongside the complete set of 17 UN SDG names; Goal 11 is highlighted as one illustrative candidate label. | Authored research study. Goal names and colors follow the [UN Sustainable Development Goals](https://sdgs.un.org/goals).                                                                                                                                                                                                                                                                        |

Do not remove the `Interface study`, `Illustrative workflow`, or `Research study`
captions when changing the authored examples. They clarify which visuals are
designed representations rather than captures of an original application or
research result.

## Food illustration prompt

The recipe image was generated with this prompt: “Overhead editorial food
photograph of three separate ceramic bowls arranged side by side on a warm stone
table: tomato lentil stew on the left, spinach chickpea curry in the center,
vegetable noodles on the right; natural window light, tactile ingredients,
realistic food photography, wide 3:1 landscape frame, no legible text, no labels,
no branding.”
