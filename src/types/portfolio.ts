import type { ProjectCategory } from "../content/project-categories";

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
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
    | "forge"
    | "trade"
    | "nlp"
    | "medical"
    | "quiz"
    | "recipe"
    | "research"
    | "music"
    | "security"
    | "battlecode"
    | "botfluencer"
    | "block"
    | "pinball";
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
};
