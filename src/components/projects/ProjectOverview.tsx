import Link from "next/link";
import type { Project } from "../../types/portfolio";

export function ProjectOverview({ project }: { project: Project }) {
  return (
    <div className="detail-overview">
      <div>
        <span className="meta-label">ROLE</span>
        <p>{project.role}</p>
      </div>
      <div>
        <span className="meta-label">TECHNOLOGIES</span>
        <div className="detail-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
      <div className="detail-links">
        <span className="meta-label">LINKS</span>
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Open live project{" "}
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4 12 12 4M5 4h7v7" />
            </svg>
          </a>
        )}
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            View source on GitHub{" "}
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4 12 12 4M5 4h7v7" />
            </svg>
          </a>
        ) : (
          <div className="repository-note">
            <p>
              {project.githubNote || "Source code is unavailable to share."}
            </p>
          </div>
        )}
        {project.experienceHref && (
          <Link href={project.experienceHref}>Read my research experience</Link>
        )}
      </div>
    </div>
  );
}
