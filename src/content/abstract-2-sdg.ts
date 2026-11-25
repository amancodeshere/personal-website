import type { Experience, Project } from "../types/portfolio";
import { projectMedia } from "./project-media";

const slug = "abstract-2-sdg";
export const thesisTitle = "Abstract 2 SDG";
const role = "UNSW Honours Thesis Researcher";
const period = "Sep 2026 – Present";
export const thesisSupervisor = "Dr Aditya Joshi";
export const thesisProjectHref = `/projects/${slug}`;

export const thesisReportHref = "/research/abstract-2-sdg/thesis-a-report.pdf";

export const catalogueDiagrams = [
  {
    title: "Finding one paper under two goals",
    description:
      "A reader browsing Quality Education or Sustainable Cities and Communities would find the Hobart housing paper on either page. Both listings would lead to the same publication, which would count once in the university total.",
    src: "/research/abstract-2-sdg/reader-sequence.webp",
    width: 2342,
    height: 854,
    alt: "Reader sequence showing two goal pages leading to the same publisher record.",
    caption: "Figure 4.1 · Reader sequence",
  },
  {
    title: "Giving authors a say",
    description:
      "When a new paper arrives, the catalogue would suggest goals from its abstract. A verified author could follow a review link to confirm the suggestions, remove a goal or add one the model missed.",
    src: "/research/abstract-2-sdg/author-review.webp",
    width: 1995,
    height: 974,
    alt: "Author review sequence from importing a paper to showing its reviewed goals.",
    caption: "Figure 4.2 · Author review sequence",
  },
  {
    title: "Keeping a correction after an update",
    description:
      "OpenAlex supplies the publication record. The catalogue would keep the model’s suggestions and the author’s decision separately. If a later import updates the title or a new model suggests different goals, readers would still see the author’s reviewed tags.",
    src: "/research/abstract-2-sdg/publication-data-flow.webp",
    width: 1022,
    height: 1308,
    alt: "Data flow tracing a publication from OpenAlex through prediction and author review to the public goal pages.",
    caption: "Figure 4.3 · Publication data flow",
  },
];

const resultsMedia = projectMedia["abstract-2-sdg"];

export const abstractToSdgCover = {
  ...resultsMedia.image,
  width: 1343,
  height: 844,
  caption: resultsMedia.caption,
};

export const abstractToSdgExperience = {
  caseStudyHref: `/experience/${slug}`,
  company: "UNSW Sydney",
  role,
  location: "Sydney, Australia",
  period,
  description:
    "I hand-labelled 43 UNSW research texts and tested whether AI could identify the Sustainable Development Goals each one supports.",
  highlights: [
    "Rebuilt the SDGi benchmark so passages from each inferred source report stayed in one split.",
    "Evaluated 12 fine-tuned encoder variants and zero-shot language models on report passages and a 43-text UNSW evaluation set.",
    "Presented the findings at the Thesis A seminar and designed a proposed workflow for authors to review suggested SDG tags.",
  ],
} satisfies Experience;

const repository = "https://github.com/amancodeshere/multi-label_classify_sdg";

export const abstractToSdgProject = {
  slug,
  title: thesisTitle,
  shortTitle: thesisTitle,
  category: "Research",
  summary:
    "Can a reader find a UNSW paper under every sustainability goal it supports? I tested how well AI could suggest those goals and designed a way for authors to review them.",
  description: [
    "A single paper can contribute to several Sustainable Development Goals. Research on access to public transport, for example, could also address inequality. For my UNSW honours thesis, I’m investigating how to infer the relevant goals from a paper’s abstract so readers can browse research by goal and trace each tag back to the paper.",
    "The first challenge was finding out how much a benchmark on policy reports could tell me about research abstracts. I used the multilingual SDGi corpus to establish baselines, then evaluated the same checkpoints on a separate set of UNSW research texts.",
  ],
  technologies: [
    "Python",
    "PyTorch",
    "Hugging Face Transformers",
    "scikit-learn",
    "Weights & Biases",
    "OpenAlex",
  ],
  highlights: [
    { label: "Supervisor", value: thesisSupervisor },
    {
      label: "Classification scope",
      value: "17 UN Sustainable Development Goals",
    },
    { label: "Benchmark corpus", value: "7,350 SDGi passages" },
    {
      label: "Transfer evaluation",
      value: "35 UNSW paper abstracts and 8 showcase summaries",
    },
  ],
  approach: [
    {
      title: "Split by source report",
      body: "I found that 1,459 of 1,470 passages in the original SDGi test split came from inferred reports that also appeared in training. I reconstructed report IDs from file metadata and kept each report together in an 80/10/10 train, validation and test split. I prepared both all-language and English-only versions.",
    },
    {
      title: "Compare supervised and zero-shot models",
      body: "I fine-tuned six encoder families across both splits, including SciBERT and XLM-RoBERTa. I selected checkpoints on validation loss, then compared them with language models using a fixed zero-shot prompt. I reported sample-averaged F1 for partial label overlap and exact match for getting the entire set of goals right.",
    },
    {
      title: "Test transfer to UNSW research",
      body: "I compared the saved checkpoints on 43 labelled UNSW texts from OpenAlex and the UNSW SDG Showcase. The same all-language XLM-RoBERTa checkpoint went from 90.31% F1 on held-out SDGi passages to 62.03% on the UNSW texts. SciBERT led the encoders on the UNSW set with 69.73% F1, while zero-shot GPT-4o mini reached 75.35%.",
    },
  ],
  takeaways: [
    "The best F1 and the best exact-match score came from different models on the UNSW set. The English-trained XLM-RoBERTa got all the labels right on 13 of 43 texts, one more than GPT-4o mini. The small evaluation set and single-seed encoder runs make these findings a starting point for further testing.",
    "For Thesis B, I plan to test SciBERT with more labelled abstracts, targeted data augmentation and thresholds tuned on development data, alongside few-shot prompts. I also proposed a UNSW catalogue that imports new papers through OpenAlex and lets authors confirm, add or remove suggested tags before those decisions feed back into the public catalogue.",
  ],
  references: [
    {
      label: "Report grouping and dataset preparation",
      href: `${repository}/tree/main/sdgi_report_grouped`,
    },
    {
      label: "SDGi benchmark results",
      href: `${repository}/blob/main/base-lines-sdgi-report-grouped/summary/report_grouped_test_results.md`,
    },
  ],
  githubUrl: repository,
  experienceHref: abstractToSdgExperience.caseStudyHref,
  status: period,
  role,
  visual: "research",
} satisfies Project;
