import type { Metadata } from 'next';
import { education, experiences } from '../../content/portfolio';

export const metadata: Metadata = { title: 'Experience', description: 'Professional experience and education of Aman Sharma.' };

export default function ExperiencePage() {
  return <div className="inner-page frame-x"><header className="page-intro"><h1>Across teams<br/>and <em>disciplines.</em></h1><div className="intro-foot"><p>Engineering, teaching, and customer-facing work have shaped how I approach a problem.</p><span>SYDNEY / REMOTE</span></div></header><section className="timeline-section"><h2>Experience.</h2><div className="timeline">{experiences.map((item) => <article key={item.company}><div className="timeline-date">{item.period}</div><div className="timeline-main"><h3>{item.role}</h3><p className="timeline-company">{item.company} <span>·</span> {item.location}</p><p className="timeline-description">{item.description}</p><ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></article>)}</div></section><section className="education-section"><h2>Education.</h2><div className="education-list">{education.map((item) => <article key={item.institution}><div><h3>{item.institution}</h3><p>{item.qualification}</p></div><span>{item.location}</span><time>{item.period}</time></article>)}</div></section></div>;
}
