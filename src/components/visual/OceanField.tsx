"use client";

import { useEffect, useMemo, useRef } from "react";

const WIDTH = 1200;
const HEIGHT = 430;
const LINE_COUNT = 61;
const SAMPLE_COUNT = 25;

function makePath(
  index: number,
  time: number,
  pointer: { x: number; y: number; active: boolean; energy: number },
) {
  const x = (index / (LINE_COUNT - 1)) * WIDTH;
  const points: string[] = [];
  for (let sample = 0; sample < SAMPLE_COUNT; sample += 1) {
    const y = (sample / (SAMPLE_COUNT - 1)) * HEIGHT;
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

export function OceanField() {
  const root = useRef<SVGSVGElement>(null);
  const paths = useRef<(SVGPathElement | null)[]>([]);
  const pointer = useRef({
    x: WIDTH / 2,
    y: HEIGHT / 2,
    active: false,
    energy: 0,
  });
  const initialPaths = useMemo(
    () =>
      Array.from({ length: LINE_COUNT }, (_, index) =>
        makePath(index, 0, { x: 0, y: 0, active: false, energy: 0 }),
      ),
    [],
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
            path.setAttribute("d", makePath(index, time, pointer.current));
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
  }, []);

  function move(event: React.PointerEvent<SVGSVGElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    pointer.current = {
      x: ((event.clientX - rect.left) / rect.width) * WIDTH,
      y: ((event.clientY - rect.top) / rect.height) * HEIGHT,
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
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      onPointerMove={move}
      onPointerLeave={leave}
    >
      <defs>
        <linearGradient id="current-stroke" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#8fe5ec" stopOpacity=".24" />
          <stop offset=".48" stopColor="#67d4e2" stopOpacity=".84" />
          <stop offset="1" stopColor="#b9f1f4" stopOpacity=".28" />
        </linearGradient>
      </defs>
      <g
        className="current-lines"
        fill="none"
        stroke="url(#current-stroke)"
        strokeWidth="1"
      >
        {initialPaths.map((path, index) => (
          <path
            key={index}
            ref={(element) => {
              paths.current[index] = element;
            }}
            d={path}
            opacity={0.23 + (index % 7) * 0.075}
          />
        ))}
      </g>
    </svg>
  );
}
