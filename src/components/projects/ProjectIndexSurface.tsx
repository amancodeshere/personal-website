import type { ReactNode } from "react";
import { OceanSurface } from "../visual/OceanSurface";

export function ProjectIndexSurface({ children }: { children: ReactNode }) {
  return <OceanSurface mode="index">{children}</OceanSurface>;
}
