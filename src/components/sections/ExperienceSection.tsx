import Link from "next/link";
import { ExperienceFeatures } from "./ExperienceFeatures";

export function ExperienceSection() {
  return (
    <section className="experience-section frame-x section-pad" id="experience">
      <div className="section-heading">
        <h2>Experience</h2>
        <Link className="text-link" href="/experience">
          Experience &amp; education
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M3 10h13M10 4l6 6-6 6" />
          </svg>
        </Link>
      </div>
      <ExperienceFeatures />
    </section>
  );
}
