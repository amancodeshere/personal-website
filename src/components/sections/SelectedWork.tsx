import Link from "next/link";
import {
  portfolioProjects,
  gameProjects,
} from "../../content/project-visibility";
import { ProjectRow } from "../projects/ProjectRow";
import { GalleryMotion } from "../visual/GalleryMotion";

export function SelectedWork() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <header className="section-heading work-heading">
        <h2 id="work-title">Projects</h2>
        <div className="work-heading-links">
          <Link href="/projects">
            All projects
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M3 10h13M10 4l6 6-6 6" />
            </svg>
          </Link>
          <Link href="/projects/games">
            Games <span>{String(gameProjects.length).padStart(2, "0")}</span>
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M3 10h13M10 4l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </header>
      <div className="work-letter-wall" aria-hidden="true">
        {[..."WWWOOORRRKKK"].map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
      <GalleryMotion className="project-list home-project-list">
        {portfolioProjects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </GalleryMotion>
    </section>
  );
}
