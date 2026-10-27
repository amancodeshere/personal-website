import type { Metadata } from "next";
import { projects } from "../../content/portfolio";
import { ProjectCatalogue } from "../../components/projects/ProjectCatalogue";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software engineering, AI, machine learning, research, cyber security, competition bots, and games by Aman Sharma.",
};

export default function ProjectsPage() {
  return (
    <div className="inner-page frame-x">
      <header className="page-intro">
        <h1>Projects</h1>
        <div className="intro-foot">
          <p>
            Software, AI, machine learning, research, cyber security,
            competitions, and games.
          </p>
          <span>{projects.length} PROJECTS / SYDNEY</span>
        </div>
      </header>
      <ProjectCatalogue projects={projects} />
    </div>
  );
}
