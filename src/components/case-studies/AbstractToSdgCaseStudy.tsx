import Link from "next/link";
import { ProjectOverview } from "../projects/ProjectOverview";
import type { ReactNode } from "react";
import {
  abstractToSdgCover,
  abstractToSdgExperience as experience,
  abstractToSdgProject as project,
  thesisProjectHref,
  thesisSupervisor,
  thesisReportHref,
  catalogueDiagrams,
} from "../../content/abstract-2-sdg";
import { profile } from "../../content/portfolio";
import { CaseStudyFigure } from "./CaseStudyFigure";
import layout from "./case-study.module.css";
import styles from "./AbstractToSdgCaseStudy.module.css";

const chapters = [
  ["literature-review", "The research question"],
  ["unsw-evaluation", "What the tests showed"],
  ["thesis-b", "Inside the proposed catalogue"],
  ["research-materials", "Research materials"],
];

const transferResults = [
  { dataset: "735 held-out SDGi passages", f1: 90.31 },
  { dataset: "43 UNSW research texts", f1: 62.03 },
];

export function AbstractToSdgCaseStudy({
  section,
  nextProject,
}: {
  section: "experience" | "projects";
  nextProject?: ReactNode;
}) {
  const isProject = section === "projects";
  const indexHref = isProject ? "/projects" : "/experience";
  const indexLabel = isProject ? "Projects" : "Experience";

  return (
    <article className={layout.study}>
      <div className={layout.container}>
        <Link className={layout.back} href={indexHref}>
          {indexLabel}
        </Link>
        <header className={layout.hero}>
          <div className={layout.heroCopy}>
            <h1>
              Abstract <span>2 SDG</span>
            </h1>
            <p className={layout.lede}>
              {isProject
                ? "A study of teacher housing in Hobart belongs under both education and sustainable cities. I designed a research catalogue where readers could find that paper from either goal."
                : "For my UNSW honours thesis, I investigated whether AI could read a research abstract and suggest the UN Sustainable Development Goals it supports. I started by labelling 43 research texts by hand."}
            </p>
            <p className={layout.byline}>
              {profile.name} <span>·</span> {experience.period}
            </p>
            <p className={layout.role}>{experience.role}</p>
            <p className={layout.role}>Supervised by {thesisSupervisor}</p>
            <a className={styles.reportLink} href={thesisReportHref}>
              Read the full Thesis A report <span>PDF ↗</span>
            </a>
          </div>
          <CaseStudyFigure
            figure={abstractToSdgCover}
            sizes="(max-width: 760px) 94vw, (max-width: 1374px) 46vw, 604px"
            preload
          />
        </header>

        {isProject && <ProjectOverview project={project} />}

        <div className={layout.editorial}>
          <nav className={layout.contents} aria-label="In this case study">
            <p>In this article</p>
            {chapters.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className={layout.story}>
            <section
              id="literature-review"
              aria-labelledby="literature-heading"
            >
              <h2 id="literature-heading">How many goals fit one paper?</h2>
              <p>
                I read 35 UNSW journal abstracts and eight summaries from the
                university’s sustainability showcase. For each text, I recorded
                which of the 17 UN goals it supported and why. I wrote down
                those reasons before looking at any model’s answer, so I could
                come back to the evidence when we disagreed.
              </p>
              <p>
                One Western NSW study tested a solar-powered unit for treating
                wastewater. Clean Water was an obvious fit. I also tagged it
                under Clean Energy because the authors compared solar power with
                mains power and measured a 27% power saving. Across the
                collection, 32 of the 43 texts had evidence for more than one
                goal.
              </p>
            </section>
            <section id="benchmark" aria-labelledby="benchmark-heading">
              <h2 id="benchmark-heading">Testing on unfamiliar reports</h2>
              <p>
                I started with 7,350 passages from sustainability reports in
                English, French and Spanish. Nearly every passage in the
                original test set came from a report the models could also see
                during training. Two chapters of the same annual report can use
                familiar language even when they describe different work. I
                traced passages back to their source reports and kept each
                report together. That gave me a way to test the models on
                writing from reports they had never trained on.
              </p>
            </section>
            <section id="experiments" aria-labelledby="experiments-heading">
              <h2 id="experiments-heading">From reports to research papers</h2>
              <p>
                I compared two ways to suggest goals. First, I trained six
                families of models on labelled report passages, once using
                English alone and once using all three languages. Then I gave
                nine language models the same written instructions and asked
                them to assign goals without showing them any examples.
              </p>
              <p>
                I took the two strongest language models from that first test
                and compared them with the trained models on the same 43 UNSW
                texts. For each paper, I checked which of my tags a model found,
                which it missed and which extra goals it suggested.
              </p>
            </section>
            <section id="unsw-evaluation" aria-labelledby="transfer-heading">
              <h2 id="transfer-heading">
                The strongest report model struggled on papers
              </h2>
              <p>
                XLM-RoBERTa led on the reports. Its score fell when I gave it
                UNSW research instead. The chart uses F1, a score that gives
                credit for finding some of a paper’s goals and accounts for
                extra or missing tags.
              </p>
              <figure className={styles.comparison}>
                <figcaption>
                  How closely XLM-RoBERTa matched the hand-assigned goals
                </figcaption>
                <dl>
                  {transferResults.map(({ dataset, f1 }) => (
                    <div key={dataset}>
                      <dt>{dataset}</dt>
                      <dd>
                        {`${f1}%`}
                        <span className={styles.track} aria-hidden="true">
                          <span style={{ width: `${`${f1}%`}` }} />
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </figure>
              <p>
                On the UNSW texts, SciBERT scored 69.73% and GPT-4o mini reached
                75.35%. Each suggested the complete set of goals for just 12 of
                the 43 texts.
              </p>
              <p>
                The Hobart teacher housing paper showed what a missed tag would
                mean for a reader. All three multilingual models I examined for
                that paper recognised its link to education. Only one also
                picked up Sustainable Cities and Communities. In the catalogue,
                someone browsing by that goal could miss the paper entirely.
                That’s why I designed the author review to let researchers add a
                missing goal as easily as remove a mistaken one.
              </p>
            </section>
            <section id="thesis-b" aria-labelledby="next-phase-heading">
              <h2 id="next-phase-heading">Inside the proposed catalogue</h2>
              <p>
                For Thesis B, I plan to expand the hand-labelled collection to
                150 texts and reserve 38 fresh papers for the final test. These
                three diagrams from my report show how the suggestions would
                reach readers and where an author could change them.
              </p>
              {catalogueDiagrams.map((diagram) => (
                <div key={diagram.src} className={styles.diagram}>
                  <h3>{diagram.title}</h3>
                  <p>{diagram.description}</p>
                  <CaseStudyFigure
                    figure={{
                      ...diagram,
                      caption:
                        diagram.caption + " · Select the diagram to enlarge",
                    }}
                    sizes={
                      diagram.height > diagram.width
                        ? "(max-width: 640px) 92vw, 640px"
                        : "(max-width: 900px) 92vw, 960px"
                    }
                  />
                </div>
              ))}
            </section>

            <section
              id="research-materials"
              className={styles.resources}
              aria-labelledby="research-materials-heading"
            >
              <h2 id="research-materials-heading">Research materials</h2>
              <div className="detail-tags">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <ul className="detail-references" aria-label="Project references">
                <li>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    Thesis repository
                  </a>
                </li>
                {project.references.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        <footer className={layout.footer}>
          <Link className={layout.back} href={indexHref}>
            All {indexLabel.toLowerCase()}
          </Link>
          <Link
            className={layout.back}
            href={isProject ? experience.caseStudyHref : thesisProjectHref}
          >
            {isProject ? "View in Experience" : "View in Projects"}
          </Link>
        </footer>
        {nextProject}
      </div>
    </article>
  );
}
