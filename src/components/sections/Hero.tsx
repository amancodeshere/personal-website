import Link from "next/link";
import { OceanField } from "../visual/OceanField";

export function Hero() {
  return (
    <section className="hero frame-x" aria-labelledby="hero-title">
      <div className="hero-art">
        <OceanField />
        <div className="art-index">
          <span>FIELD STUDY / 01</span>
          <span>SYD · 33°52′S</span>
        </div>
        <div className="art-caption">
          <span className="caption-rule" /> SYSTEMS IN MOTION
        </div>
        <div className="art-coordinate">
          -33.8688
          <br />
          151.2093
        </div>
      </div>
      <div className="hero-title-wrap">
        <p className="hero-deck">
          Engineering ideas into useful systems.
          <br />
          From software platforms to applied ML.
        </p>
        <h1 id="hero-title">
          <span>SOFTWARE</span>
          <span className="title-bottom">
            <i>&</i> MACHINE
            <br className="mobile-break" /> LEARNING
          </span>
        </h1>
      </div>
      <div className="hero-meta">
        <span>SOFTWARE ENGINEERING / ML / RESEARCH</span>
        <Link href="/projects">
          EXPLORE THE WORK{" "}
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M3 10h13M10 4l6 6-6 6" />
          </svg>
        </Link>
        <span className="scroll-note">
          SCROLL TO EXPLORE{" "}
          <svg className="down-icon" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M8 2v11M3 8l5 5 5-5" />
          </svg>
        </span>
      </div>
    </section>
  );
}
