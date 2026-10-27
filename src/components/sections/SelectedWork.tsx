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
      <div className="work-letter-wall" aria-hidden="true">
        {[..."WWWOOORRRKKK"].map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
      <div className="work-heading">
        <h2 id="work-title" className="visually-hidden">
          Work
        </h2>
        <Link href="/projects">
          Projects
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
      <GalleryMotion className="project-list home-project-list">
        {portfolioProjects.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </GalleryMotion>
    </section>
  );
}
