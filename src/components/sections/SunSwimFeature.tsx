import Image from "next/image";
import Link from "next/link";
import { sunswim } from "../../content/sunswim";
import styles from "./SunSwimFeature.module.css";

export function SunSwimFeature({ heading = "h3" }: { heading?: "h2" | "h3" }) {
  const { title, cover, experience } = sunswim;
  const Heading = heading;

  return (
    <Link className={styles.feature} href={experience.caseStudyHref}>
      <div className={styles.copy}>
        <Heading className={styles.title}>{title}</Heading>
        <p className={styles.role}>
          {experience.role} · {experience.period}
        </p>
        <p className={styles.summary}>
          Underwater object detection, mission software and the dashboard we
          built to see what the robot was doing.
        </p>
        <span className={styles.action}>
          Read the case study
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M3 10h13M10 4l6 6-6 6" />
          </svg>
        </span>
      </div>
      <div className={styles.artwork}>
        <Image
          src={cover.src}
          alt=""
          width={cover.width}
          height={cover.height}
          sizes="(max-width: 640px) 100vw, 480px"
        />
      </div>
    </Link>
  );
}
