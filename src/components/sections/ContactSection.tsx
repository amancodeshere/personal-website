import { profile } from "../../content/portfolio";

export function ContactSection() {
  return (
    <section className="contact-section frame-x" id="contact">
      <div className="contact-top">
        <span>Contact</span>
        <span>SYDNEY / AUSTRALIA</span>
      </div>
      <h2>LET’S TALK.</h2>
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
