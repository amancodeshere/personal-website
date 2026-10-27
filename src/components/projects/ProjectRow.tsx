import Link from 'next/link';
import type { Project } from '../../types/portfolio';
import { ProjectArtwork } from './ProjectArtwork';

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  return <article className="project-row">
    <Link href={`/projects/${project.slug}`} className="project-visual-link" aria-label={`View ${project.title}`}><ProjectArtwork project={project} compact /></Link>
    <div className="project-row-copy"><div className="project-row-meta"><span>{String(index + 1).padStart(2, '0')}</span><span>{project.category}</span>{project.status && <span>{project.status}</span>}</div><h3><Link href={`/projects/${project.slug}`}>{project.shortTitle}</Link></h3><p>{project.summary}</p><div className="tag-list">{project.technologies.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div><Link className="text-link" href={`/projects/${project.slug}`}>VIEW PROJECT <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M10 4l6 6-6 6" /></svg></Link></div>
  </article>;
}
