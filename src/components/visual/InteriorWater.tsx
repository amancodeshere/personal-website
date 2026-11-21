"use client";

import { usePathname } from "next/navigation";
import { PelagicScene } from "./PelagicScene";

export function InteriorWater() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <div className="interior-water" aria-hidden="true">
      <PelagicScene />
    </div>
  );
}
