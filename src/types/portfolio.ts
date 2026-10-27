export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Software engineering" | "Machine learning" | "Research";
  summary: string;
  description: string[];
  technologies: string[];
  highlights: { label: string; value: string }[];
  approach: { title: string; body: string }[];
  githubUrl?: string;
  githubNote?: string;
  liveUrl?: string;
  status?: string;
  role: string;
  visual:
    "forge" | "trade" | "nlp" | "medical" | "quiz" | "recipe" | "research";
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
};
