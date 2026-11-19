import type { Metadata } from "next";
import Link from "next/link";
import {
  abstractToSdgExperience as experience,
  thesisProjectHref,
  thesisSupervisor,
  thesisTitle,
} from "../../../content/abstract-2-sdg";
import { profile } from "../../../content/portfolio";
import { projectMedia } from "../../../content/project-media";
import { CaseStudyFigure } from "../CaseStudyFigure";
import layout from "../case-study.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${thesisTitle} | Honours Thesis Experience`,
  description:
    "Aman Sharma’s UNSW honours thesis, from the literature review and SDG classification experiments to a proposed catalogue with researcher review.",
  alternates: { canonical: experience.caseStudyHref },
};

const resultsMedia = projectMedia["abstract-2-sdg"];
const cover = {
  ...resultsMedia.image,
  width: 1343,
  height: 844,
  caption: resultsMedia.caption,
};

const chapters = [
  ["literature-review", "Literature review"],
  ["benchmark", "Building the benchmark"],
  ["experiments", "Running the experiments"],
  ["unsw-evaluation", "Testing on UNSW research"],
  ["thesis-b", "Thesis B plan"],
];

const transferResults = [
  { dataset: "735 held-out SDGi passages", f1: 90.31 },
  { dataset: "43 UNSW research texts", f1: 62.03 },
];

export default function AbstractToSdgExperiencePage() {
  return (
    <article className={layout.study}>
      <div className={layout.container}>
        <Link className={layout.back} href="/experience">
          Experience
        </Link>
        <header className={layout.hero}>
          <div className={layout.heroCopy}>
            <h1>
              Abstract <span>2 SDG</span>
            </h1>
            <p className={layout.lede}>
              How reliably can a model read a research abstract and identify the
              UN Sustainable Development Goals the paper contributes to? I
              wanted readers to be able to browse UNSW research by goal and
              trace a suggested tag back to the paper.
            </p>
            <p className={layout.byline}>
              {profile.name} <span>·</span> {experience.period}
            </p>
            <p className={layout.role}>{experience.role}</p>
            <p className={layout.role}>Supervised by {thesisSupervisor}</p>
          </div>
          <CaseStudyFigure
            figure={cover}
            sizes="(max-width: 760px) 94vw, (max-width: 1374px) 46vw, 604px"
            preload
          />
        </header>

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
              <h2 id="literature-heading">Starting with the literature</h2>
              <p>
                I began by looking at how other researchers assigned SDGs to
                scientific abstracts and policy text. The SwissText MeHuBe study
                gave me a reason to include SciBERT and check how it transferred
                to UNSW papers. Fankhauser and Clematide’s work on
                instruction-tuned models led me to ask what a language model
                could do with a fixed prompt and no examples of how to label the
                text.
              </p>
              <p>
                Spokoyny and colleagues’ work on national climate plans helped
                shape how I scored predictions. A paper can contribute to
                several goals. If the model finds two of three, that is
                meaningful overlap, and the missing goal matters to someone
                browsing the catalogue. I wanted to measure both.
              </p>
            </section>

            <section id="benchmark" aria-labelledby="benchmark-heading">
              <h2 id="benchmark-heading">
                Building a test around unseen reports
              </h2>
              <p>
                I chose SDGi as a starting benchmark because it covered all 17
                goals and supported multiple labels per passage. It contained
                7,350 passages from national and local sustainability reports in
                English, French and Spanish.
              </p>
              <p>
                When I traced the passages back to their sources, I found that
                1,459 of the 1,470 original test passages came from reports that
                also appeared in training. Passages from the same report can
                share wording and context. I reconstructed report IDs from file
                metadata and rebuilt the 80/10/10 train, validation and test
                splits so each inferred report stayed together. I prepared both
                multilingual and English-only versions.
              </p>
            </section>

            <section id="experiments" aria-labelledby="experiments-heading">
              <h2 id="experiments-heading">Running the baseline experiments</h2>
              <p>
                I fine-tuned six encoder families in both settings, giving me 12
                checkpoints to compare. I selected checkpoints using validation
                loss and gave each zero-shot language model the same prompt. I
                reported sample-averaged F1 to measure overlap with the
                reference labels and exact match to see how often a model got
                the entire set right.
              </p>
              <p>
                XLM-RoBERTa led the multilingual SDGi test at 90.31% F1 and
                82.72% exact match. GPT-4o mini led the zero-shot models on the
                same 735 passages at 69.78% F1. The next question was whether
                XLM-RoBERTa would still lead when the text came from research
                papers.
              </p>
            </section>

            <section id="unsw-evaluation" aria-labelledby="transfer-heading">
              <h2 id="transfer-heading">Testing on UNSW research</h2>
              <p>
                I evaluated the saved checkpoints on 35 UNSW research abstracts
                from OpenAlex and eight summaries from the UNSW SDG Showcase.
                Thirty-two of the 43 texts had multiple reference labels. The
                same multilingual XLM-RoBERTa checkpoint lost 28.28 percentage
                points of F1 when it moved from SDGi report passages to the UNSW
                texts.
              </p>
              <figure className={styles.comparison}>
                <figcaption>
                  All-language XLM-RoBERTa · Sample-averaged F1
                </figcaption>
                <dl>
                  {transferResults.map(({ dataset, f1 }) => (
                    <div key={dataset}>
                      <dt>{dataset}</dt>
                      <dd>
                        {f1}%
                        <span className={styles.track} aria-hidden="true">
                          <span style={{ width: `${f1}%` }} />
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </figure>
              <p>
                SciBERT led the encoders on the UNSW set at 69.73% F1. Zero-shot
                GPT-4o mini reached 75.35% F1, the highest in this comparison.
                The English-trained XLM-RoBERTa led on exact match and still got
                every label right on only 13 of the 43 texts. The sample was
                small, and the change in rankings showed why I needed to test
                with the kind of text the catalogue would actually use.
              </p>
              <p>
                At my Thesis A seminar, I showed a paper on evaluating
                retrieval-augmented generation for specialist documents. Both
                SciBERT variants picked up SDG 16, Peace, Justice and Strong
                Institutions. Both missed SDG 9, Industry, Innovation and
                Infrastructure, which was in the reference labels. In a
                catalogue, that missed tag would keep the paper out of the SDG 9
                listing.
              </p>
            </section>

            <section id="thesis-b" aria-labelledby="next-phase-heading">
              <h2 id="next-phase-heading">
                What I’m building toward in Thesis B
              </h2>
              <p>
                My next step is to label more UNSW abstracts across disciplines
                and reserve a fresh test set before tuning. Bolz and colleagues’
                work on synthetic abstracts gave me a way to add examples for
                underrepresented goals. I plan to compare training on real
                abstracts, repeating real examples and adding generated ones,
                including examples aimed at the errors I saw in Thesis A.
              </p>
              <p>
                I’ll test how many SciBERT layers to fine-tune, choose tagging
                thresholds on development data, and compare the tuned model with
                prompts that use fixed or retrieved examples. On the reserved
                papers, I’ll compare label overlap, complete label sets and
                inference cost.
              </p>
              <p>
                In parallel, I plan to build a public UNSW research catalogue.
                Readers would browse papers by goal and follow each entry back
                to its source. Authors would get a chance to review suggested
                tags for their own work.
              </p>
              <ol
                className={layout.flow}
                aria-label="Proposed researcher review workflow"
              >
                <li>
                  <strong>Import</strong>
                  <span>Fetch newly indexed UNSW papers from OpenAlex</span>
                </li>
                <li>
                  <strong>Suggest</strong>
                  <span>Predict SDG tags and record the model version</span>
                </li>
                <li>
                  <strong>Review</strong>
                  <span>Invite authors to confirm, add or remove tags</span>
                </li>
              </ol>
              <p>
                I want the catalogue to show which tags have been reviewed and
                keep an author’s corrections when a paper is reimported or
                reclassified. Before a researcher pilot, I plan to test that
                handoff in staging from the first import to the updated public
                listing.
              </p>
            </section>
          </div>
        </div>
        <footer className={layout.footer}>
          <Link className={layout.back} href="/experience">
            All experience
          </Link>
          <Link className={layout.back} href={thesisProjectHref}>
            View the project methods and results
          </Link>
        </footer>
      </div>
    </article>
  );
}
