import { ProjectOverview } from "../../../components/projects/ProjectOverview";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "../../../content/portfolio";
import {
  gameProjects,
  portfolioProjects,
} from "../../../content/project-visibility";
import { ProjectArtwork } from "../../../components/projects/ProjectArtwork";
import { AbstractToSdgCaseStudy } from "../../../components/case-studies/AbstractToSdgCaseStudy";
import { abstractToSdgProject } from "../../../content/abstract-2-sdg";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project
    ? { title: project.title, description: project.summary }
    : { title: "Project not found" };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const isGame = project.category === "Games";
  const navigationProjects = isGame ? gameProjects : portfolioProjects;
  const index = navigationProjects.findIndex((item) => item.slug === slug);
  const next = navigationProjects[(index + 1) % navigationProjects.length];
  const nextProject = (
    <Link className="next-project" href={`/projects/${next.slug}`}>
      <span>NEXT PROJECT</span>
      <b>{next.shortTitle}</b>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 12h16m-7-7 7 7-7 7" />
      </svg>
    </Link>
  );

  if (slug === abstractToSdgProject.slug) {
    return (
      <AbstractToSdgCaseStudy section="projects" nextProject={nextProject} />
    );
  }

  return (
    <article className="project-detail frame-x">
      <div className="detail-breadcrumb">
        <Link href={isGame ? "/projects/games" : "/projects"}>
          {isGame ? "GAMES" : "WORK"}
        </Link>
        <span>/</span>
        <span>{project.category}</span>
        <span className="detail-index">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(navigationProjects.length).padStart(2, "0")}
        </span>
      </div>
      <div className="project-opening">
        <header className="detail-heading">
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.summary}</p>
        </header>
        <ProjectArtwork project={project} />
      </div>
      <ProjectOverview project={project} />
      <section className="detail-story">
        <h2>Why it was built</h2>
        <div>
          {project.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="approach-section">
        <h2>How it came together</h2>
        <div className="approach-list">
          {project.approach.map((step, stepIndex) => (
            <article key={step.title}>
              <span>{String(stepIndex + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="detail-story">
        <h2>What I took forward</h2>
        <div>
          {project.takeaways.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {project.references && (
            <ul className="detail-references" aria-label="Project references">
              {project.references.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noreferrer">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      {project.highlights.length > 0 && (
        <section className="detail-highlights">
          <h2>Details</h2>
          <dl>
            {project.highlights.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
      {nextProject}
    </article>
  );
}
