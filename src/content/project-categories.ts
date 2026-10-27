export const projectCategories = [
  "Full stack",
  "AI",
  "Machine learning",
  "Research",
  "Cyber security",
  "Competitions",
  "Games",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
