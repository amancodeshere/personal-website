"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Media moves through the typographic stage with the visitor's own scrolling. */
export function GalleryMotion({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  const gallery = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = gallery.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cards = Array.from(
      element.querySelectorAll<HTMLElement>(".project-row"),
    );
    const letters = Array.from(
      element
        .closest(".work-section")
        ?.querySelectorAll<HTMLElement>(".work-letter-wall span") ?? [],
    );
    let frame = 0;
    const clear = () => {
      cards.forEach((card) => {
        const link = card.querySelector<HTMLElement>(".project-visual-link");
        [
          "--gallery-tilt",
          "--gallery-lift",
          "--gallery-travel",
          "--gallery-roll",
          "--gallery-scale",
        ].forEach((property) => link?.style.removeProperty(property));
      });
      letters.forEach((letter) => letter.style.removeProperty("transform"));
    };
    const update = () => {
      frame = 0;
      if (reduced.matches || document.hidden) {
        clear();
        return;
      }
      const height = window.innerHeight;
      const bounds = element.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > height) return;
      const progress = (height - bounds.top) / Math.max(height, bounds.height);
      letters.forEach((letter, index) => {
        const row = Math.floor(index / 3);
        const direction = row % 2 ? -1 : 1;
        const x = Math.sin(progress * 4 + row * 0.7) * direction * 42;
        const y = Math.sin(progress * 5 + index * 0.7) * 12;
        letter.style.transform = `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,0)`;
      });
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > height + 100) return;
        const relative = Math.max(
          -1,
          Math.min(1, (rect.top + rect.height * 0.45 - height * 0.5) / height),
        );
        const direction = index % 2 === 0 ? 1 : -1;
        const link = card.querySelector<HTMLElement>(".project-visual-link");
        link?.style.setProperty(
          "--gallery-tilt",
          `${relative * direction * 8}deg`,
        );
        link?.style.setProperty(
          "--gallery-roll",
          `${relative * direction * -2.2}deg`,
        );
        link?.style.setProperty("--gallery-lift", `${relative * -20}px`);
        link?.style.setProperty(
          "--gallery-travel",
          `${relative * direction * 58}px`,
        );
        link?.style.setProperty(
          "--gallery-scale",
          `${1 - Math.abs(relative) * 0.035}`,
        );
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    document.addEventListener("visibilitychange", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
      document.removeEventListener("visibilitychange", schedule);
      if (frame) cancelAnimationFrame(frame);
      clear();
    };
  }, []);

  return (
    <div ref={gallery} className={className}>
      {children}
    </div>
  );
}
