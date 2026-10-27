import type { ReactNode } from "react";
import { OceanField } from "../visual/OceanField";

export function ProjectIndexSurface({ children }: { children: ReactNode }) {
  return (
    <div className="project-index-surface">
      <div className="project-index-backdrop" aria-hidden="true">
        <OceanField mode="index" />
      </div>
      <div className="project-index-content">{children}</div>
    </div>
  );
}
