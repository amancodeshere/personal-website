import Link from "next/link";
import { projects } from "../../content/portfolio";
import { ProjectRow } from "../projects/ProjectRow";

export function SelectedWork() {
  return (
    <section className="work-section frame-x section-pad" id="work">
      <div className="section-heading">
        <h2>
          Work in progress
          <br />
          and in the world.
        </h2>
        <div className="section-aside">
          <p>
            Software engineering and machine learning, side by side. A selection
            of projects, prototypes, and research.
          </p>
          <Link className="text-link" href="/projects">
            ALL PROJECTS{" "}
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M3 10h13M10 4l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectRow key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
