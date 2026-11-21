import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "../../types/portfolio";
import { projectMedia, type ProjectMedia } from "../../content/project-media";
import { AdditionalProjectArtwork } from "./AdditionalProjectArtwork";
import styles from "./ProjectArtwork.module.css";

export function ProjectArtwork({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const mappedMedia = projectMedia[
    project.slug as keyof typeof projectMedia
  ] as ProjectMedia | undefined;
  const media = mappedMedia ?? {
    kind: "interface-study" as const,
    title: project.shortTitle,
    caption: project.summary,
  };

  return (
    <figure
      className={`project-art ${styles.artwork} ${compact ? styles.compact : ""} ${project.visual === "medical" && media.image ? styles.medicalArt : ""}`}
      style={{ aspectRatio: media.image?.aspectRatio }}
      aria-label={media.title}
      data-visual={project.visual}
      data-authored-study={
        mappedMedia &&
        (!media.image || media.image.presentation === "crop-strip")
          ? project.visual
          : undefined
      }
    >
      <div
        className={`${styles.canvas} ${media.image?.presentation === "crop-strip" ? styles.recipeCanvas : ""}`}
        aria-hidden={!media.image || media.image.presentation === "crop-strip"}
      >
        {media.image && media.image.presentation !== "crop-strip" ? (
          <Image
            className={
              project.visual === "medical"
                ? styles.ultrasound
                : styles.liveCapture
            }
            src={media.image.src}
            alt={media.image.alt}
            style={{ objectFit: media.image.fit }}
            fill
            sizes={
              compact
                ? "(max-width: 760px) 100vw, 50vw"
                : "(max-width: 999px) 100vw, 62vw"
            }
          />
        ) : project.visual === "nlp" && mappedMedia ? (
          <ExtractionStudy />
        ) : project.visual === "recipe" && mappedMedia ? (
          <RecipeStudy photoSrc={media.image?.src} />
        ) : project.visual === "quiz" && mappedMedia ? (
          <QuizStudy />
        ) : mappedMedia ? (
          <AdditionalProjectArtwork visual={project.visual} />
        ) : (
          <p className={styles.fallback}>{project.summary}</p>
        )}
      </div>
    </figure>
  );
}

function ExtractionStudy() {
  return (
    <div className={styles.extraction}>
      <div className={styles.extractPanel}>
        <header>
          <b>Job advertisement</b>
          <span>HTML source</span>
        </header>
        <p>
          <mark>Senior engineer</mark> to build and maintain web services.
          Applicants should have a degree in computer science and experience
          with distributed systems.
        </p>
        <footer>
          <span>Raw listing text</span>
          <b>Extract fields</b>
        </footer>
      </div>
      <div className={styles.extractArrow}>→</div>
      <div className={styles.fieldsPanel}>
        <header>
          <b>Structured fields</b>
          <span>JSON</span>
        </header>
        <div>
          <span>role</span>
          <b>Senior engineer</b>
        </div>
        <div>
          <span>education</span>
          <b>Computer science degree</b>
        </div>
        <div>
          <span>experience</span>
          <b>Distributed systems</b>
        </div>
        <div>
          <span>salary</span>
          <b className={styles.muted}>Not stated in source</b>
        </div>
        <footer>Values shown are illustrative</footer>
      </div>
    </div>
  );
}

function QuizStudy() {
  return (
    <div className={styles.quiz}>
      <header>
        <b>TOOHAK</b>
        <span>Live game · Player view</span>
        <i>Connected</i>
      </header>
      <div className={styles.question}>
        <small>QUESTION</small>
        <h3>Which tool keeps a live quiz in sync?</h3>
      </div>
      <div className={styles.answers}>
        <div>
          <b>A</b>
          <span>WebSocket events</span>
        </div>
        <div>
          <b>B</b>
          <span>Page refreshes</span>
        </div>
        <div>
          <b>C</b>
          <span>Local storage</span>
        </div>
        <div>
          <b>D</b>
          <span>Static files</span>
        </div>
      </div>
      <footer>
        <span>Answer selected on player device</span>
        <b>Waiting for host</b>
      </footer>
    </div>
  );
}

function RecipeStudy({ photoSrc }: { photoSrc?: string }) {
  return (
    <div className={styles.recipe}>
      <header>
        <b>Recipe finder</b>
        <span>Hybrid recommendations</span>
        <i>Preferences</i>
      </header>
      <div className={styles.recipeIntro}>
        <div>
          <small>BASED ON YOUR INGREDIENTS</small>
          <h3>Ideas for your next meal</h3>
        </div>
        <span>Content match + community ratings</span>
      </div>
      <div className={styles.recipeCards}>
        <article>
          <div
            className={`${styles.recipePhoto} ${styles.tomato}`}
            style={
              { "--photo-source": `url("${photoSrc ?? ""}")` } as CSSProperties
            }
          />
          <b>Tomato & lentil stew</b>
          <p>Tomato · lentils · cumin</p>
          <small>Similar ingredients</small>
        </article>
        <article>
          <div
            className={`${styles.recipePhoto} ${styles.greens}`}
            style={
              { "--photo-source": `url("${photoSrc ?? ""}")` } as CSSProperties
            }
          />
          <b>Spinach chickpea curry</b>
          <p>Spinach · chickpeas · ginger</p>
          <small>Similar ingredients</small>
        </article>
        <article>
          <div
            className={`${styles.recipePhoto} ${styles.noodles}`}
            style={
              { "--photo-source": `url("${photoSrc ?? ""}")` } as CSSProperties
            }
          />
          <b>Sesame vegetable noodles</b>
          <p>Noodles · greens · sesame</p>
          <small>Shared reader signals</small>
        </article>
      </div>
    </div>
  );
}
