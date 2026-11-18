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
