import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "../../types/portfolio";
import { projectMedia, type ProjectMedia } from "../../content/project-media";
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
            fill
            sizes={compact ? "(max-width: 760px) 100vw, 75vw" : "100vw"}
          />
        ) : project.visual === "nlp" && mappedMedia ? (
          <ExtractionStudy />
        ) : project.visual === "recipe" && mappedMedia ? (
          <RecipeStudy photoSrc={media.image?.src} />
        ) : project.visual === "quiz" && mappedMedia ? (
          <QuizStudy />
        ) : project.visual === "research" && mappedMedia ? (
          <ResearchStudy />
        ) : mappedMedia ? (
          <p className={styles.fallback}>{project.summary}</p>
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

function ResearchStudy() {
  return (
    <div className={styles.research}>
      <header>
        <b>Research abstract</b>
        <span>Multi-label classification</span>
      </header>
      <div className={styles.abstract}>
        <small>EXAMPLE ABSTRACT</small>
        <p>
          “This study examines how urban planning can improve access to public
          transport and essential services across growing cities.”
        </p>
      </div>
      <div className={styles.labelFlow}>
        <span>Candidate labels</span>
        <i>→</i>
        <b>UN Sustainable Development Goals</b>
      </div>
      <div className={styles.goalGrid}>
        <Goal code="01" name="No poverty" color="#e5243b" />
        <Goal code="02" name="Zero hunger" color="#dda63a" />
        <Goal code="03" name="Good health" color="#4c9f38" />
        <Goal code="04" name="Quality education" color="#c5192d" />
        <Goal code="05" name="Gender equality" color="#ff3a21" />
        <Goal code="06" name="Clean water" color="#26bde2" />
        <Goal code="07" name="Clean energy" color="#fcc30b" />
        <Goal code="08" name="Decent work" color="#a21942" />
        <Goal code="09" name="Industry & innovation" color="#fd6925" />
        <Goal code="10" name="Reduced inequalities" color="#dd1367" />
        <Goal code="11" name="Sustainable cities" color="#fd9d24" selected />
        <Goal code="12" name="Responsible consumption" color="#bf8b2e" />
        <Goal code="13" name="Climate action" color="#3f7e44" />
        <Goal code="14" name="Life below water" color="#0a97d9" />
        <Goal code="15" name="Life on land" color="#56c02b" />
        <Goal code="16" name="Peace & justice" color="#00689d" />
        <Goal code="17" name="Partnerships" color="#19486a" />
      </div>
      <footer>Example candidate label · Goal 11</footer>
    </div>
  );
}

function Goal({
  code,
  name,
  color,
  selected = false,
}: {
  code: string;
  name: string;
  color: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`${styles.goal} ${selected ? styles.goalSelected : ""}`}
      style={{ "--goal-color": color } as CSSProperties}
    >
      <b>{code}</b>
      <span>{name}</span>
    </div>
  );
}
