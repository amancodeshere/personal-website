export const projectCategories = [
  "Software engineering",
  "Machine learning",
  "Research",
  "Cyber security",
  "Competitions",
  "Games",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
