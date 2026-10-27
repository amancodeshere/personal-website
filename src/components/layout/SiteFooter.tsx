import { profile } from "../../content/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer frame-x">
      <span>© {new Date().getFullYear()} Aman Sharma · Sydney, Australia</span>
      <nav className="footer-links" aria-label="Social links">
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
      </nav>
    </footer>
  );
}
