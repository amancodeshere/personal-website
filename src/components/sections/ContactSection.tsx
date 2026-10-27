import { profile } from "../../content/portfolio";

export function ContactSection() {
  return (
    <section className="contact-section frame-x" id="contact">
      <div className="contact-top">
        <span>Contact</span>
        <span>SYDNEY / AUSTRALIA</span>
      </div>
      <a
        className="contact-invitation"
        href={`mailto:${profile.email}`}
        aria-label="Start a conversation by email"
      >
        <h2>Let’s talk.</h2>
        <span className="contact-orbit" aria-hidden="true">
          <svg viewBox="0 0 100 100">
            <path d="M24 76 76 24M25 24h51v51" />
          </svg>
        </span>
      </a>
      <div className="contact-bottom">
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
          <svg viewBox="0 0 28 28" aria-hidden="true">
            <path d="M4 14h19M15 5l9 9-9 9" />
          </svg>
        </a>
        <span>Software, machine learning, research.</span>
      </div>
    </section>
  );
}
