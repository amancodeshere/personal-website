import Link from "next/link";
import { OceanField } from "../visual/OceanField";

export function Hero() {
  return (
    <section className="hero frame-x" aria-labelledby="hero-title">
      <div className="hero-art">
        <OceanField />
      </div>
      <div className="hero-title-wrap">
        <h1 id="hero-title">
          <span>Aman Sharma</span>
        </h1>
      </div>
      <div className="hero-meta">
        <span>Software engineering &amp; machine learning</span>
        <Link href="#work">
          Explore work{" "}
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M3 10h13M10 4l6 6-6 6" />
          </svg>
        </Link>
        <span className="scroll-note">
          Sydney, Australia{" "}
          <svg className="down-icon" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M8 2v11M3 8l5 5 5-5" />
          </svg>
        </span>
      </div>
    </section>
  );
}
