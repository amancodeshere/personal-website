"use client";

import { useEffect, useId, useMemo, useRef } from "react";

const WIDTH = 1200;
const HEIGHT = 430;
const LINE_COUNT = 61;
const SAMPLE_COUNT = 25;
const INDEX_WIDTH = 1200;
const INDEX_HEIGHT = 800;
const INDEX_LINE_COUNT = 43;
const INDEX_SAMPLE_COUNT = 33;
const HOME_WIDTH = 1200;
const HOME_HEIGHT = 800;
const HOME_LINE_COUNT = 35;
const HOME_SAMPLE_COUNT = 29;

type OceanFieldMode = "hero" | "index" | "home";

type OceanGeometry = {
  width: number;
  height: number;
  lineCount: number;
  sampleCount: number;
};

function makePath(
  index: number,
  time: number,
  pointer: { x: number; y: number; active: boolean; energy: number },
  geometry: OceanGeometry,
) {
  const { width, height, lineCount, sampleCount } = geometry;
  const x = (index / (lineCount - 1)) * width;
  const points: string[] = [];
  for (let sample = 0; sample < sampleCount; sample += 1) {
    const y = (sample / (sampleCount - 1)) * height;
    const wave =
      Math.sin(sample * 0.42 + index * 0.24 + time) * 16 +
      Math.sin(sample * 0.15 - index * 0.31 + time * 0.63) * 24;
    const dx = x + wave;
    const distance = Math.hypot(dx - pointer.x, y - pointer.y);
    const ripple =
      Math.sin(distance * 0.055 - time * 2.2) *
      Math.exp(-distance / 125) *
      38 *
      pointer.energy;
    const focused =
      Math.exp((-distance * distance) / 14500) *
      (dx - pointer.x) *
      0.12 *
      pointer.energy;
    points.push(
      `${sample === 0 ? "M" : "L"} ${(dx + ripple + focused).toFixed(1)} ${y.toFixed(1)}`,
    );
  }
  return points.join(" ");
}

export function OceanField({ mode = "hero" }: { mode?: OceanFieldMode }) {
  const gradientId = useId().replace(/:/g, "");
  const geometry = useMemo<OceanGeometry>(
    () =>
      mode === "hero"
        ? {
            width: WIDTH,
            height: HEIGHT,
            lineCount: LINE_COUNT,
            sampleCount: SAMPLE_COUNT,
          }
        : mode === "index"
          ? {
              width: INDEX_WIDTH,
              height: INDEX_HEIGHT,
              lineCount: INDEX_LINE_COUNT,
              sampleCount: INDEX_SAMPLE_COUNT,
            }
          : {
              width: HOME_WIDTH,
              height: HOME_HEIGHT,
              lineCount: HOME_LINE_COUNT,
              sampleCount: HOME_SAMPLE_COUNT,
            },
    [mode],
  );
  const root = useRef<SVGSVGElement>(null);
  const paths = useRef<(SVGPathElement | null)[]>([]);
  const pointer = useRef({
    x: geometry.width / 2,
    y: geometry.height / 2,
    active: false,
    energy: 0,
  });
  const initialPaths = useMemo(
    () =>
      Array.from({ length: geometry.lineCount }, (_, index) =>
        makePath(index, 0, { x: 0, y: 0, active: false, energy: 0 }, geometry),
      ),
    [geometry.height, geometry.lineCount, geometry.sampleCount, geometry.width],
  );

  useEffect(() => {
    const svg = root.current;
    if (!svg) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    pointer.current = {
      x: geometry.width / 2,
      y: geometry.height / 2,
      active: false,
      energy: 0,
    };

    let visible = false;
    let frame = 0;
    let lastUpdate = 0;
    const started = performance.now();
    const tick = (now: number) => {
      frame = 0;
      if (!visible || document.hidden || reduced.matches) return;
      if (now - lastUpdate >= 30) {
        lastUpdate = now;
        const time = (now - started) / 1000;
        if (!pointer.current.active) pointer.current.energy *= 0.9;
        if (pointer.current.energy < 0.008) pointer.current.energy = 0;
        paths.current.forEach((path, index) => {
          if (path)
            path.setAttribute(
              "d",
              makePath(index, time, pointer.current, geometry),
            );
        });
      }
      frame = requestAnimationFrame(tick);
    };
    const surface = svg.closest<HTMLElement>("[data-ocean-surface]");
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) pointer.current.active = false;
      if (visible && !frame && !document.hidden && !reduced.matches)
        frame = requestAnimationFrame(tick);
      else if (!visible && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    observer.observe(surface ?? svg);

    const containsPoint = (element: Element, x: number, y: number) => {
      const rect = element.getBoundingClientRect();
      return (
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      );
    };
    const clearPointer = () => {
      pointer.current.active = false;
    };
    const onPointerMove = (event: PointerEvent) => {
      if (
        event.pointerType !== "mouse" ||
        !visible ||
        document.hidden ||
        reduced.matches
      )
        return;
      const x = event.clientX;
      const y = event.clientY;
      if (
        !containsPoint(svg, x, y) ||
        (surface && !containsPoint(surface, x, y))
      ) {
        clearPointer();
        return;
      }
      const matrix = svg.getScreenCTM();
      if (!matrix) {
        clearPointer();
        return;
      }
      const point = new DOMPoint(x, y).matrixTransform(matrix.inverse());
      pointer.current = {
        x: point.x,
        y: point.y,
        active: true,
        energy: 1,
      };
    };
    const onScroll = () => clearPointer();
    const onPointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) clearPointer();
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("blur", clearPointer);
    document.addEventListener("scroll", onScroll, {
      passive: true,
      capture: true,
    });
    const onVisibility = () => {
      if (document.hidden) clearPointer();
      if (document.hidden && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else if (!document.hidden && visible && !frame && !reduced.matches)
        frame = requestAnimationFrame(tick);
    };
    const onMotionPreference = () => {
      if (reduced.matches) {
        pointer.current.active = false;
        pointer.current.energy = 0;
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        paths.current.forEach((path, index) =>
          path?.setAttribute("d", initialPaths[index]),
        );
      } else if (visible && !document.hidden && !frame) {
        frame = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    reduced.addEventListener("change", onMotionPreference);
    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("blur", clearPointer);
      document.removeEventListener("scroll", onScroll, true);
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", onMotionPreference);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [geometry]);

  return (
    <svg
      ref={root}
      className="ocean-field"
      viewBox={`0 0 ${geometry.width} ${geometry.height}`}
      preserveAspectRatio={mode === "index" ? "none" : "xMidYMid slice"}
      data-ocean-mode={mode}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop
            stopColor="#8fe5ec"
            stopOpacity={
              mode === "index" ? ".48" : mode === "home" ? ".3" : ".24"
            }
          />
          <stop
            offset=".48"
            stopColor="#67d4e2"
            stopOpacity={
              mode === "index" ? ".96" : mode === "home" ? ".68" : ".84"
            }
          />
          <stop
            offset="1"
            stopColor="#b9f1f4"
            stopOpacity={
              mode === "index" ? ".52" : mode === "home" ? ".34" : ".28"
            }
          />
        </linearGradient>
      </defs>
      <g
        className="current-lines"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth={mode === "index" ? "1.25" : "1"}
      >
        {initialPaths.map((path, index) => (
          <path
            key={index}
            ref={(element) => {
              paths.current[index] = element;
            }}
            d={path}
            opacity={
              mode === "index"
                ? 0.48 + (index % 7) * 0.065
                : mode === "home"
                  ? 0.18 + (index % 7) * 0.035
                  : 0.23 + (index % 7) * 0.075
            }
          />
        ))}
      </g>
    </svg>
  );
}
