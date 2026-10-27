import Link from "next/link";
import { profile } from "../../content/portfolio";

export function AboutSection() {
  return (
    <section
      className="about-section frame-x"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about-copy">
        <h2 id="about-title">About</h2>
        <p className="about-lead">
          I’m a software engineering student at UNSW, building across{" "}
          <em>software and machine learning.</em>
        </p>
        <div className="about-body">
          <p>{profile.biography[2]}</p>
        </div>
        <Link className="text-link" href="/about">
          More about Aman
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M3 10h13M10 4l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
