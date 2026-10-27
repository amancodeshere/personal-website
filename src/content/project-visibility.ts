import { projects } from "./portfolio";

/** Projects shown in the homepage and the default projects catalogue. */
export const portfolioProjects = projects.filter(
  (project) => project.category !== "Games",
);

/** Game projects are available from their dedicated opt-in topic route. */
export const gameProjects = projects.filter(
  (project) => project.category === "Games",
);
