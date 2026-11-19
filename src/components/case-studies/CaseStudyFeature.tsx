import Image from "next/image";
import Link from "next/link";
import styles from "./CaseStudyFeature.module.css";

export function CaseStudyFeature({
  title,
  href,
  role,
  period,
  summary,
  cover,
  heading: Heading = "h3",
}: {
  title: string;
  href: string;
  role: string;
  period: string;
  summary: string;
  cover: {
    src: string;
    width: number;
    height: number;
    fit?: "cover" | "contain";
  };
  heading?: "h2" | "h3";
}) {
  return (
    <Link
      className={styles.feature}
      href={href}
      aria-label={`Read the ${title} case study`}
    >
      <div className={styles.copy}>
        <Heading className={styles.title}>{title}</Heading>
        <p className={styles.role}>
          {role} · {period}
        </p>
        <p className={styles.summary}>{summary}</p>
        <span className={styles.action}>
          Read the case study
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M3 10h13M10 4l6 6-6 6" />
          </svg>
        </span>
      </div>
      <div className={styles.artwork} data-fit={cover.fit}>
        <Image
          src={cover.src}
          alt=""
          width={cover.width}
          height={cover.height}
          sizes="(max-width: 640px) 100vw, 530px"
        />
      </div>
    </Link>
  );
}
