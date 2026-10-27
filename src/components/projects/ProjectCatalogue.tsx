"use client";

import { useState } from "react";
import type { Project } from "../../types/portfolio";
import { projectCategories } from "../../content/project-categories";
import { ProjectRow } from "./ProjectRow";

const filters = ["All", ...projectCategories] as const;
type Filter = (typeof filters)[number];

export function ProjectCatalogue({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("All");
  const groups = projectCategories
    .map((category) => ({
      category,
      projects: projects.filter((project) => project.category === category),
    }))
    .filter((group) => group.projects.length > 0);
  const visibleGroups =
    active === "All"
      ? groups
      : groups.filter((group) => group.category === active);
  const visibleCount = visibleGroups.reduce(
    (count, group) => count + group.projects.length,
    0,
  );

  return (
    <>
      <div
        className="filter-bar"
        role="group"
        aria-label="Filter projects by discipline"
      >
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            aria-controls="project-catalogue"
          >
            {filter}
            <span>
              {filter === "All"
                ? projects.length
                : projects.filter((project) => project.category === filter)
                    .length}
            </span>
          </button>
        ))}
      </div>
      <p className="visually-hidden" role="status">
        {visibleCount} projects shown
        {active === "All" ? " across all disciplines" : ` in ${active}`}.
      </p>
      <div id="project-catalogue">
        {visibleGroups.map((group) => {
          const sectionId = `projects-${group.category.toLowerCase().replaceAll(" ", "-")}`;
          return (
            <section
              className="catalogue-group"
              key={group.category}
              aria-labelledby={sectionId}
            >
              <h2 className="catalogue-heading" id={sectionId}>
                {group.category}
              </h2>
              <div className="project-list catalogue-list">
                {group.projects.map((project) => (
                  <ProjectRow
                    key={project.slug}
                    project={project}
                    index={projects.indexOf(project)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
