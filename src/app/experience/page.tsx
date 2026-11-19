import type { Metadata } from "next";
import Link from "next/link";
import {
  education,
  experiences,
  sunswimExperience,
} from "../../content/portfolio";
import { SunSwimFeature } from "../../components/sections/SunSwimFeature";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience and education of Aman Sharma.",
};

export default function ExperiencePage() {
  return (
    <div className="inner-page frame-x">
      <header className="page-intro">
        <h1>Experience</h1>
        <div className="intro-foot">
          <p>
            Software engineering, robotics, research, teaching, and
            customer-facing work.
          </p>
          <span>SYDNEY / REMOTE</span>
        </div>
      </header>
      <section className="experience-feature" aria-label="Featured experience">
        <SunSwimFeature heading="h2" />
      </section>
      <section className="timeline-section">
        <h2>Other experience.</h2>
        <div className="timeline">
          {experiences
            .filter((item) => item !== sunswimExperience)
            .map((item) => (
              <article key={item.company}>
                <div className="timeline-date">{item.period}</div>
                <div className="timeline-main">
                  <h3>{item.role}</h3>
                  <p className="timeline-company">
                    {item.company} <span>·</span> {item.location}
                  </p>
                  <p className="timeline-description">{item.description}</p>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  {item.caseStudyHref && (
                    <Link
                      className="experience-case-link"
                      href={item.caseStudyHref}
                    >
                      Read the case study
                    </Link>
                  )}
                </div>
              </article>
            ))}
        </div>
      </section>
      <section className="education-section">
        <h2>Education.</h2>
        <div className="education-list">
          {education.map((item) => (
            <article key={item.institution}>
              <div>
                <h3>{item.institution}</h3>
                <p>{item.qualification}</p>
              </div>
              <span>{item.location}</span>
              <time>{item.period}</time>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
