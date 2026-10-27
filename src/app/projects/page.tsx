import type { Metadata } from "next";
import {
  portfolioProjects,
  gameProjects,
} from "../../content/project-visibility";
import { ProjectCatalogue } from "../../components/projects/ProjectCatalogue";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software engineering, AI, machine learning, research, cyber security, and competition bots by Aman Sharma.",
};

export default function ProjectsPage() {
  return (
    <div className="inner-page frame-x">
      <header className="page-intro">
        <h1>Projects</h1>
        <div className="intro-foot">
          <p>
            Software, AI, machine learning, research, cyber security, and
            competitions.
          </p>
          <span>{portfolioProjects.length} PROJECTS / SYDNEY</span>
        </div>
      </header>
      <ProjectCatalogue
        projects={portfolioProjects}
        gameCount={gameProjects.length}
      />
    </div>
  );
}
