import type { Metadata } from 'next';
import { education, profile, skillGroups } from '../../content/portfolio';

export const metadata: Metadata = { title: 'About', description: 'About Aman Sharma, his education, and technical toolkit.' };

export default function AboutPage() {
  return <div className="inner-page frame-x"><header className="page-intro"><h1>Curious by<br/><em>construction.</em></h1><div className="intro-foot"><p>{profile.headline}</p><span>{profile.location}</span></div></header><section className="about-page-copy"><div className="about-stamp"><span>AS</span><i>SOFTWARE<br/>+ ML</i></div><div>{profile.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section><section className="education-section"><h2>Education.</h2><div className="education-list">{education.map((item) => <article key={item.institution}><div><h3>{item.institution}</h3><p>{item.qualification}</p></div><span>{item.location}</span><time>{item.period}</time></article>)}</div></section><section className="skills-section"><h2>Tools of the trade.</h2><div className="skill-groups">{skillGroups.map((group) => <article key={group.label}><h3>{group.label}</h3><div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div></section></div>;
}
