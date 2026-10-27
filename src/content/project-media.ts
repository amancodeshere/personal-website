/**
 * Visual direction and provenance for project artwork. These source notes are
 * not rendered as caption bars; imagery remains separate from portfolio facts.
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
    aspectRatio?: string;
    fit?: "cover" | "contain";
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
      aspectRatio: "16 / 9",
      fit: "contain",
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
  "music-rec": {
    kind: "interface-study",
    title: "Illustrative lyric-based music recommendation profile",
    caption:
      "Authored study of topic profiles and content-based recommendations",
    source:
      "Music-Rec notebook and README; sample names and weights are illustrative",
  },
  "data-exfiltration-prevention": {
    kind: "interface-study",
    title: "Illustrative packet monitoring and suspicious activity review",
    caption: "Authored network monitoring study with synthetic events",
    source: "AwesomeDEP public README and packet monitoring source",
  },
  "sudo-win": {
    kind: "workflow-study",
    title: "Illustrative remembered map and body-aware Battlecode route",
    caption: "Authored gameplay study of map memory and safe routing",
    source: "sudo_win public strategy documentation; not a match replay",
  },
  botfluencer: {
    kind: "interface-study",
    title:
      "Illustrative Botfluencer fixture observation ledger in replay and no-op mode",
    caption: "Authored fixture-run observation study",
    source:
      "Botfluencer public architecture and README; no live publishing shown",
  },
  "spin-the-block": {
    kind: "repository-figure",
    title: "Spin the Block multiplayer game board",
    caption: "Repository gameplay capture",
    source: "Public game-audit desktop gameplay evidence",
    image: {
      src: "/projects/spin-the-block.webp",
      alt: "Spin the Block gameplay with an isometric city board, player crews, property squares, and turn controls",
    },
  },
  "midnight-run": {
    kind: "repository-figure",
    title: "Midnight Run original pinball table",
    caption: "Local capture of the public pinball frontend",
    source:
      "Public pinball frontend rendered locally without the score service",
    image: {
      src: "/projects/midnight-run.webp",
      alt: "Midnight Run pinball with its amber score display, orange ramps, chrome wireforms, illustrated playfield, and keyboard controls",
    },
  },
} satisfies Record<string, ProjectMedia>;
