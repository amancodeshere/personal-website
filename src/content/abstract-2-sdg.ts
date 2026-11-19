import type { Experience, Project } from "../types/portfolio";

const slug = "abstract-2-sdg";
export const thesisTitle = "Abstract 2 SDG";
const role = "UNSW Honours Thesis Researcher";
const period = "Sep 2026 – Present";
export const thesisSupervisor = "Dr Aditya Joshi";
export const thesisProjectHref = `/projects/${slug}`;

export const abstractToSdgExperience = {
  caseStudyHref: `/experience/${slug}`,
  company: "UNSW Sydney",
  role,
  location: "Sydney, Australia",
  period,
  description:
    "Abstract 2 SDG investigates how research abstracts can be mapped to one or more of the 17 UN Sustainable Development Goals.",
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
    "A multi-label NLP system for mapping UNSW research abstracts to the United Nations Sustainable Development Goals.",
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
