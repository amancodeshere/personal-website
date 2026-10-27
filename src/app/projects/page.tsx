import type { Metadata } from "next";
import { projects } from "../../content/portfolio";
import { ProjectCatalogue } from "../../components/projects/ProjectCatalogue";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software engineering, machine learning, and research projects by Aman Sharma.",
};

export default function ProjectsPage() {
  return (
    <div className="inner-page frame-x">
      <header className="page-intro">
        <h1>
          Ideas made
          <br />
          <em>tangible.</em>
        </h1>
        <div className="intro-foot">
          <p>
            Platforms, models, and experiments. Browse the work by discipline.
          </p>
          <span>{projects.length} PROJECTS / SYDNEY</span>
        </div>
      </header>
      <ProjectCatalogue projects={projects} />
    </div>
  );
}
