import Link from 'next/link';
import { profile } from '../../content/portfolio';

export function AboutSection() {
  return <section className="about-section frame-x section-pad" id="about"><div className="section-heading"><h2>A little context.</h2><span>SYDNEY, AUSTRALIA<br/>UNSW / SOFTWARE ENGINEERING</span></div><div className="about-grid"><div className="about-stamp"><span>AS</span><i>ENGINEERING<br/>IN PROGRESS</i></div><div className="about-copy"><p className="about-lead">I build <em>systems</em> that turn complex information into clear, useful experiences.</p><div className="about-body">{profile.biography.map((line) => <p key={line}>{line}</p>)}</div><Link className="text-link" href="/about">MORE ABOUT AMAN <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M10 4l6 6-6 6" /></svg></Link></div></div></section>;
}
