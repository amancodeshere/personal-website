import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '../../../content/portfolio';
import { ProjectArtwork } from '../../../components/projects/ProjectArtwork';

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? { title: project.title, description: project.summary } : { title: 'Project not found' };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];
  return <article className="project-detail frame-x">
    <div className="detail-breadcrumb"><Link href="/projects">WORK</Link><span>/</span><span>{project.category}</span><span className="detail-index">{String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span></div>
    <header className="detail-heading"><h1>{project.title}</h1><p className="detail-summary">{project.summary}</p></header>
    <ProjectArtwork project={project} />
    <div className="detail-overview"><div><span className="meta-label">ROLE</span><p>{project.role}</p></div><div><span className="meta-label">TECHNOLOGIES</span><div className="detail-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div><div className="detail-links"><span className="meta-label">LINKS</span>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">OPEN LIVE PROJECT <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" /></svg></a>}{project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer">VIEW SOURCE ON GITHUB <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M5 4h7v7" /></svg></a> : <div className="repository-note"><p>Source unavailable.</p><a href="https://github.com/amancodeshere" target="_blank" rel="noreferrer">GitHub profile</a></div>}</div></div>
    <section className="detail-story"><h2>The work.</h2><div>{project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="approach-section"><h2>How it comes together.</h2><div className="approach-list">{project.approach.map((step, stepIndex) => <article key={step.title}><span>{String(stepIndex + 1).padStart(2, '0')}</span><div><h3>{step.title}</h3><p>{step.body}</p></div></article>)}</div></section>
    {project.highlights.length > 0 && <section className="detail-highlights"><h2>At a glance.</h2><dl>{project.highlights.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl></section>}
    <Link className="next-project" href={`/projects/${next.slug}`}><span>NEXT PROJECT</span><b>{next.shortTitle}</b><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-7-7 7 7-7 7" /></svg></Link>
  </article>;
}
