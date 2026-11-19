import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "../../../content/portfolio";
import { sunswim } from "../../../content/sunswim";
import { CaseStudyFigure } from "../CaseStudyFigure";
import styles from "../case-study.module.css";

const {
  experience,
  title,
  summary,
  cover,
  dashboard,
  diagnostics,
  evaluation,
  chapters,
} = sunswim;

const dashboardImageSizes =
  "(max-width: 900px) 94vw, (max-width: 1290px) 76vw, 980px";

export const metadata: Metadata = {
  title,
  description:
    "Aman Sharma’s sUNSWim Robotics field notes on underwater object detection, ROS 2 mission control and the qualifier operator dashboard.",
  alternates: { canonical: experience.caseStudyHref },
};

export default function SunSwimPage() {
  return (
    <article className={styles.study}>
      <div className={styles.container}>
        <Link className={styles.back} href="/experience">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M17 10H4m6-6-6 6 6 6" />
          </svg>
          Experience
        </Link>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1>
              sUNSWim <span>Robotics</span>
            </h1>
            <p className={styles.lede}>{summary}</p>
            <p className={styles.byline}>
              {profile.name} <span>·</span> {experience.period}
            </p>
            <p className={styles.role}>
              {experience.role} at {title}
            </p>
          </div>
          <CaseStudyFigure
            figure={cover}
            sizes="(max-width: 760px) 94vw, (max-width: 1290px) 46vw, 600px"
            preload
          />
        </header>

        <div className={styles.editorial}>
          <nav className={styles.contents} aria-label="In this case study">
            <p>In this article</p>
            {chapters.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className={styles.story}>
            <section id="perception" aria-labelledby="perception-heading">
              <h2 id="perception-heading">Seeing underwater</h2>
              <p>
                I joined sUNSWim to work on perception for our autonomous
                underwater vehicle. My first problem was getting a detector to
                recognise competition targets such as gates and flares through
                changing light, reflections and the grid of a pool floor.
              </p>
              <p>
                I consolidated datasets, remapped classes, and trained YOLO
                models with augmented underwater images. Looking through
                validation frames helped me see where a target’s distance or
                angle changed the result. On the NVIDIA Jetson, I also had to
                weigh detection quality against how quickly the rest of the
                robot could receive an update.
              </p>
              <div className={styles.evaluation}>
                {evaluation.map((figure) => (
                  <CaseStudyFigure
                    key={figure.src}
                    figure={figure}
                    sizes="(max-width: 580px) 94vw, (max-width: 1000px) 44vw, 440px"
                  />
                ))}
              </div>
              <p className={styles.figureNote}>
                Selected predictions from the saved YOLO26s checkpoint on
                validation images. The scores shown are per-detection confidence
                values.
              </p>
            </section>

            <section id="mission-control" aria-labelledby="mission-heading">
              <h2 id="mission-heading">From detection to motion</h2>
              <p>
                I worked on the ROS 2 and C++ integration that connects
                perception to mission logic and control. For the qualifier, I
                helped connect the mission’s velocity commands to the controller
                and worked through the handoff to the flight controller.
              </p>
              <ol
                className={styles.flow}
                aria-label="From perception to vehicle control"
              >
                <li>
                  <strong>Perception</strong>
                  <span>Detect and locate a target</span>
                </li>
                <li>
                  <strong>Mission</strong>
                  <span>Seek, align or approach</span>
                </li>
                <li>
                  <strong>Control</strong>
                  <span>Execute the motion request</span>
                </li>
              </ol>
              <p>
                On the flare task, I wired seeking and approach into the mission
                behaviour tree and connected the approach logic to shared
                detections and odometry. I used mock action servers to exercise
                cancellation and restart paths. That made it possible to check
                what happened when a task was interrupted or immediately run
                again.
              </p>
            </section>

            <section id="dashboard" aria-labelledby="dashboard-heading">
              <h2 id="dashboard-heading">What the surface team sees</h2>
              <p>
                I helped build the qualifier dashboard with the team so we could
                follow the mission from a laptop at the surface. My work
                included redesigning the live camera and diagnostics views. The
                overview brings together mission phase, depth, vehicle health,
                camera detections and position estimates. Saved-run replay lets
                us revisit what the operator saw at a specific point in a test.
              </p>
              <CaseStudyFigure figure={dashboard} sizes={dashboardImageSizes} />
              <p>
                One of the details I care most about is showing where an
                estimate comes from. When camera tracking drops out, the
                position view can show an estimate based on motion commands. The
                warning in this capture tells the operator when that fallback is
                in use.
              </p>
              <p>
                In diagnostics, I can check which thrusters the flight
                controller is commanding and use the timestamped qualifier log
                to trace the mission state machine. In this sample run, the log
                shows when the vehicle switched from searching for the gate to
                aligning with it and then approaching it.
              </p>
              <CaseStudyFigure
                figure={diagnostics}
                sizes={dashboardImageSizes}
              />
            </section>

            <section
              className={styles.reflections}
              id="reflections"
              aria-labelledby="reflections-heading"
            >
              <h2 id="reflections-heading">What I’m taking forward</h2>
              <p>
                I now think about a detection in terms of the decision it
                enables. If a frame arrives late or a target disappears, the
                mission needs enough context to decide whether to keep moving,
                look again or stop.
              </p>
              <p>
                I want to make that chain easier to inspect on future tests. A
                useful run record should let us line up the camera frame,
                mission transition and motion request, then point to the moment
                the robot began behaving differently from what we expected.
              </p>
            </section>
          </div>
        </div>
        <footer className={styles.footer}>
          <Link className={styles.back} href="/experience">
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M17 10H4m6-6-6 6 6 6" />
            </svg>
            All experience
          </Link>
          <Link className={styles.back} href="/projects">
            Browse projects
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M3 10h13M10 4l6 6-6 6" />
            </svg>
          </Link>
        </footer>
      </div>
    </article>
  );
}
