import Link from "next/link";
import { experiences } from "../../content/portfolio";

export function ExperienceSection() {
  return (
    <section className="experience-section frame-x section-pad">
      <div className="section-heading">
        <h2>
          Time spent
          <br />
          building things.
        </h2>
        <Link className="text-link" href="/experience">
          EXPERIENCE & EDUCATION{" "}
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M3 10h13M10 4l6 6-6 6" />
          </svg>
        </Link>
      </div>
      <div className="experience-ribbon">
        {experiences.slice(0, 3).map((item) => (
          <article key={item.company}>
            <span>{item.period}</span>
            <h3>{item.role}</h3>
            <p>{item.company}</p>
            <i>{item.location}</i>
          </article>
        ))}
      </div>
    </section>
  );
}
