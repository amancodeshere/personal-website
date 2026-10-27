import Link from "next/link";
import { profile } from "../../content/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer frame-x">
      <Link className="footer-mark" href="/" aria-label="Back to top">
        AS
      </Link>
      <span>
        © {new Date().getFullYear()} Aman Sharma
        <br />
        Sydney, Australia
      </span>
      <div className="footer-links">
        <a href={profile.githubUrl} target="_blank" rel="noreferrer">
          GitHub{" "}
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 12 12 4M5 4h7v7" />
          </svg>
        </a>
        <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn{" "}
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 12 12 4M5 4h7v7" />
          </svg>
        </a>
        <a href={`mailto:${profile.email}`}>
          Email{" "}
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M4 12 12 4M5 4h7v7" />
          </svg>
        </a>
      </div>
      <a className="back-top" href="#main-content">
        BACK TO TOP{" "}
        <svg viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 13V3M3 8l5-5 5 5" />
        </svg>
      </a>
    </footer>
  );
}
