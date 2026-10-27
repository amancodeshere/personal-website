import Link from "next/link";
import type { Project } from "../../types/portfolio";
import { ProjectArtwork } from "./ProjectArtwork";

export function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-row">
      <Link
        href={`/projects/${project.slug}`}
        className="project-visual-link"
        aria-label={`View ${project.title}`}
      >
        <ProjectArtwork project={project} compact />
      </Link>
      <div className="project-row-copy">
        <div className="project-row-meta">
          <span>{project.category}</span>
          {project.status && <span>{project.status}</span>}
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.shortTitle}</Link>
        </h3>
      </div>
    </article>
  );
}
