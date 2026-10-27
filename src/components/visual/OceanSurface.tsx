import type { ReactNode } from "react";
import { OceanField } from "./OceanField";
import styles from "./OceanSurface.module.css";

type OceanSurfaceMode = "index" | "home";

export function OceanSurface({
  mode,
  children,
}: {
  mode: OceanSurfaceMode;
  children: ReactNode;
}) {
  const index = mode === "index";

  return (
    <div
      className={`${styles.surface}${index ? " project-index-surface" : ""}`}
      data-ocean-surface={mode}
    >
      <div
        className={`${styles.backdrop}${index ? " project-index-backdrop" : ""}`}
        aria-hidden="true"
      >
        <OceanField mode={mode} />
      </div>
      <div
        className={`${styles.content}${index ? " project-index-content" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
