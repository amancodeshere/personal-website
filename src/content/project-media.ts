/**
 * Visual direction and captions for project artwork. Kept separate from the
 * portfolio copy so imagery can be replaced or credited without changing facts.
 */
export type ProjectMedia = {
  kind:
    | "live-capture"
    | "repository-figure"
    | "interface-study"
    | "workflow-study"
    | "research-study";
  title: string;
  caption: string;
  source?: string;
  image?: {
    src: string;
    alt: string;
    presentation?: "frame" | "crop-strip";
  };
};

export const projectMedia = {
  jobforge: {
    kind: "live-capture",
    title: "Job search and match review",
    caption: "Live demo · sample data",
    source: "Scores are demonstration values · public demo capture",
    image: {
      src: "/projects/jobforge-results.webp",
      alt: "JobForge sample opportunity results with demonstration match scores",
    },
  },
  "trade-doc-navigator": {
    kind: "live-capture",
    title: "Trade document workspace",
    caption: "Live website · documents and tracking",
    source: "Public TradeDocNavigator site capture",
    image: {
      src: "/projects/tradedocnavigator-live.webp",
      alt: "TradeDocNavigator public landing page describing invoices, despatch advice, and shipment tracking",
    },
  },
  "job-advertisement-extraction": {
    kind: "workflow-study",
    title: "Job-ad text to structured fields",
    caption: "Illustrative workflow · HTML to structured fields",
  },
  "breast-cancer-ultrasound": {
    kind: "repository-figure",
    title: "Ultrasound classification and segmentation",
    caption: "Project figure · ultrasound samples and ground-truth masks",
    source: "Public Null Pointers project repository",
    image: {
      src: "/projects/ultrasound-segmentation-examples.png",
      alt: "Examples of normal, benign, and malignant breast ultrasound images alongside ground-truth masks",
    },
  },
  "hybrid-recipe-recommender": {
    kind: "interface-study",
    title: "Recipe recommendations",
    caption: "Interface study · AI-generated food illustration",
    source: "Recipe examples and recommendation signals are illustrative",
    image: {
      src: "/projects/recipe-food.webp",
      alt: "AI-generated overhead illustration of tomato lentil stew, spinach chickpea curry, and vegetable noodles",
      presentation: "crop-strip",
    },
  },
  toohak: {
    kind: "interface-study",
    title: "Live quiz player",
    caption: "Interface study · synchronized quiz player",
  },
  "unsw-sdg-research-classification": {
    kind: "research-study",
    title: "Research abstract classification",
    caption: "Research study · example abstract mapped across the 17 UN SDGs",
    source: "Goal names and colors · UN Sustainable Development Goals",
  },
} satisfies Record<string, ProjectMedia>;
