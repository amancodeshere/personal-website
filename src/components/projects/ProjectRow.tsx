import Link from "next/link";
import type { Project } from "../../types/portfolio";
import { ProjectArtwork } from "./ProjectArtwork";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project-row">
      <Link
        href={`/projects/${project.slug}`}
        className="project-visual-link"
        aria-label={`Read the ${project.title} case study`}
      >
        <ProjectArtwork project={project} compact />
      </Link>
      <div className="project-row-copy">
        <div className="project-row-meta">
          <span>{project.category}</span>
          {project.status && <span>{project.status}</span>}
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>
            {project.shortTitle}{" "}
            <svg
              className="project-arrow"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M4 16 16 4M5 4h11v11" />
            </svg>
          </Link>
        </h3>
      </div>
    </article>
  );
}
