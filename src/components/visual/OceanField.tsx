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

type OceanFieldMode = "hero" | "index";

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
      mode === "index"
        ? {
            width: INDEX_WIDTH,
            height: INDEX_HEIGHT,
            lineCount: INDEX_LINE_COUNT,
            sampleCount: INDEX_SAMPLE_COUNT,
          }
        : {
            width: WIDTH,
            height: HEIGHT,
            lineCount: LINE_COUNT,
            sampleCount: SAMPLE_COUNT,
          },
    [mode],
  );
  const interactive = mode === "hero";
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
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !frame && !document.hidden && !reduced.matches)
        frame = requestAnimationFrame(tick);
      else if (!visible && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    });
    observer.observe(svg);
    const onVisibility = () => {
      if (document.hidden && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else if (!document.hidden && visible && !frame && !reduced.matches)
        frame = requestAnimationFrame(tick);
    };
    const onMotionPreference = () => {
      if (reduced.matches) {
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
      document.removeEventListener("visibilitychange", onVisibility);
      reduced.removeEventListener("change", onMotionPreference);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [geometry]);

  function move(event: React.PointerEvent<SVGSVGElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointer.current = {
      x: ((event.clientX - rect.left) / rect.width) * geometry.width,
      y: ((event.clientY - rect.top) / rect.height) * geometry.height,
      active: true,
      energy: 1,
    };
  }

  function leave() {
    pointer.current.active = false;
  }

  return (
    <svg
      ref={root}
      className="ocean-field"
      viewBox={`0 0 ${geometry.width} ${geometry.height}`}
      preserveAspectRatio={mode === "index" ? "none" : "xMidYMid slice"}
      data-ocean-mode={mode}
      aria-hidden="true"
      onPointerMove={interactive ? move : undefined}
      onPointerLeave={interactive ? leave : undefined}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop
            stopColor="#8fe5ec"
            stopOpacity={mode === "index" ? ".48" : ".24"}
          />
          <stop
            offset=".48"
            stopColor="#67d4e2"
            stopOpacity={mode === "index" ? ".96" : ".84"}
          />
          <stop
            offset="1"
            stopColor="#b9f1f4"
            stopOpacity={mode === "index" ? ".52" : ".28"}
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
                : 0.23 + (index % 7) * 0.075
            }
          />
        ))}
      </g>
    </svg>
  );
}
