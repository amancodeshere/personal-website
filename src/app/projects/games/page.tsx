import type { Metadata } from "next";
import Link from "next/link";
import { ProjectRow } from "../../../components/projects/ProjectRow";
import { gameProjects } from "../../../content/project-visibility";
import { projects } from "../../../content/portfolio";

export const metadata: Metadata = {
  title: "Games",
  description: "Arcade and multiplayer game projects by Aman Sharma.",
};

export default function GamesPage() {
  return (
    <div className="inner-page frame-x">
      <header className="page-intro">
        <h1>Games</h1>
        <div className="intro-foot">
          <p>
            Arcade simulation and online multiplayer strategy.{" "}
            <Link href="/projects">Back to Projects →</Link>
          </p>
          <span>{gameProjects.length} PROJECTS / SYDNEY</span>
        </div>
      </header>
      <section className="catalogue-group" aria-label="Game projects">
        <div className="project-list catalogue-list">
          {gameProjects.map((project) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={projects.indexOf(project)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
