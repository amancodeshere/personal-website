import Image from "next/image";
import styles from "./case-study.module.css";

type CaseStudyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export function CaseStudyFigure({
  figure,
  sizes,
  preload = false,
}: {
  figure: CaseStudyImage;
  sizes: string;
  preload?: boolean;
}) {
  return (
    <figure className={styles.figure}>
      <a href={figure.src} aria-label={`View full image. ${figure.caption}`}>
        <Image
          src={figure.src}
          alt={figure.alt}
          width={figure.width}
          height={figure.height}
          sizes={sizes}
          preload={preload}
        />
      </a>
      <figcaption>{figure.caption}</figcaption>
    </figure>
  );
}
