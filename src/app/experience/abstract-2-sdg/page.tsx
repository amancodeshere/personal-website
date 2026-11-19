import type { Metadata } from "next";
import Link from "next/link";
import {
  abstractToSdgExperience as experience,
  thesisProjectHref,
  thesisSupervisor,
  thesisTitle,
} from "../../../content/abstract-2-sdg";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${thesisTitle} | Honours Thesis Experience`,
  description:
    "Aman Sharma’s UNSW honours thesis experience researching and evaluating multi-label SDG classification.",
  alternates: { canonical: experience.caseStudyHref },
};

const transferResults = [
  { dataset: "735 held-out SDGi passages", f1: 90.31 },
  { dataset: "43 UNSW research texts", f1: 62.03 },
];

export default function AbstractToSdgExperiencePage() {
  return (
    <article className={`frame-x ${styles.study}`}>
      <Link className="experience-case-link" href="/experience">
        All experience
      </Link>

      <header className={styles.hero}>
        <h1>{thesisTitle}</h1>
        <p className={styles.role}>{experience.role}</p>
        <p className={styles.lede}>
          I set out to see whether a model could read a research abstract and
          identify the Sustainable Development Goals it contributes to. That
          meant building a fair test, then finding out how much of the result
          carried over to real UNSW research.
        </p>
        <p className={styles.byline}>
          {experience.period} · Supervised by {thesisSupervisor}
        </p>
        <Link className="experience-case-link" href={thesisProjectHref}>
          View the project methods and results
        </Link>
      </header>

      <section className={styles.section} aria-labelledby="benchmark-heading">
        <h2 id="benchmark-heading">Rebuilding the benchmark</h2>
        <div>
          <p>
            When I audited the SDGi corpus, I found that almost every passage in
            the original test set came from a report that also appeared in
            training. Two passages from the same report can share terminology
            and context, even when the wording differs.
          </p>
          <p>
            I used the file metadata to reconstruct source report IDs and built
            English-only and multilingual splits that kept those reports
            together. I then fine-tuned six encoder families in both settings
            and established a zero-shot comparison with language models.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="transfer-heading">
        <h2 id="transfer-heading">Taking it beyond SDGi</h2>
        <div>
          <p>
            I evaluated the saved models on a separate set of 35 UNSW research
            abstracts and eight showcase summaries. XLM-RoBERTa led the
            multilingual SDGi benchmark, but its F1 fell by 28.28 percentage
            points on the UNSW set. SciBERT was the strongest encoder on those
            texts, and GPT-4o mini led on F1 overall.
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
            I presented these findings at the Thesis A seminar. One result
            mattered particularly for a public catalogue. Even the model with
            the best exact-match score got the complete set of goals right on
            only 13 of the 43 texts. That gave me a concrete reason to design
            for author review.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="next-phase-heading">
        <h2 id="next-phase-heading">Designing for researcher review</h2>
        <div>
          <p>
            For Thesis B, I proposed a catalogue that imports newly indexed UNSW
            papers from OpenAlex and groups them by SDG for readers. In the
            proposed workflow, the classifier suggests tags and authors can
            confirm them or propose additions and removals. The system would
            keep the original predictions and the reviewed tags so an import or
            model update can preserve the author’s decision.
          </p>
          <p>
            My next research step is to compare SciBERT fine-tuning and
            prompting strategies on more labelled abstracts, using a separate
            set of papers for final evaluation.
          </p>
        </div>
      </section>
    </article>
  );
}
