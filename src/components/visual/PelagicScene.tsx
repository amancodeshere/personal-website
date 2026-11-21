"use client";

import { useEffect, useRef } from "react";

function drawFish(ctx: CanvasRenderingContext2D, tailPhase: number) {
  ctx.beginPath();
  ctx.moveTo(12, 0);
  ctx.quadraticCurveTo(4, -6, -7, -1);
  const tail = 3 + Math.sin(tailPhase) * 1.5;
  ctx.lineTo(-14, -tail);
  ctx.lineTo(-12, tail);
  ctx.lineTo(-7, 1);
  ctx.quadraticCurveTo(4, 5, 12, 0);
  ctx.fill();
}

// Each fish keeps its own course as the canvas resizes or resumes.
const roamers = Array.from({ length: 24 }, (_, i) => ({
  start: (0.13 + i * 0.618034) % 1,
  depth: (0.41 + i * 0.754878) % 1,
  speed: 9 + ((i * 17) % 25),
  size: 0.55 + ((i * 7) % 13) / 12,
  direction: i % 3 === 0 ? -1 : 1,
  phase: i * 2.39996,
}));

function drawScene(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
  lanes: { schools: number[]; ray: number } | null,
) {
  ctx.clearRect(0, 0, w, h);
  // Suspended particles drift at different depths.
  for (let i = 0; i < 68; i++) {
    const x = ((i * 0.618034 + t * 0.002) % 1) * w;
    const y = ((i * 0.4137 + t * 0.0014) % 1) * h;
    ctx.fillStyle = i % 7 === 0 ? "#9adfff" : "#377ca6";
    ctx.beginPath();
    ctx.arc(x, y, i % 3 === 0 ? 1.3 : 0.75, 0, Math.PI * 2);
    ctx.fill();
  }
  const count = Math.min(roamers.length, Math.max(12, Math.round(w / 56)));
  for (let i = 0; i < count; i++) {
    const fish = roamers[i];
    const span = w + 64;
    const distance = (fish.start * span + t * fish.speed) % span;
    const x = fish.direction > 0 ? distance - 32 : w + 32 - distance;
    const drift = t * (0.12 + fish.size * 0.09) + fish.phase;
    const y = h * (0.06 + 0.88 * fish.depth) + Math.sin(drift) * 15;
    const scale = fish.size * Math.min(1, w / 760 + 0.2);
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(fish.direction * scale, scale);
    ctx.rotate(Math.cos(drift) * 0.16);
    ctx.fillStyle = fish.size > 1 ? "#518bb0" : "#2e6182";
    drawFish(ctx, t * (3 + fish.size) + fish.phase);
    ctx.restore();
  }
  // Two loosely spaced schools cross at different speeds and depths.
  for (let school = 0; school < 2; school++) {
    if (lanes && school >= lanes.schools.length) continue;
    const scale =
      Math.min(1.35, Math.max(0.65, w / 1000)) * (school ? 0.65 : 1);
    for (let i = 0; i < (lanes && w <= 760 ? 10 : 22); i++) {
      const phase = i * 2.39996;
      const span = w + 480 * scale;
      const position =
        ((t * (school ? 15 : 23) +
          w * (school ? 0.88 : 0.26) +
          i * 17 * scale) %
          span) -
        200 * scale;
      const x = school ? w - position : position;
      const y =
        (lanes ? lanes.schools[school] : h * (school ? 0.62 : 0.25)) +
        scale *
          (Math.sin(phase) * (lanes ? 7 : 48) +
            Math.sin(t * 0.45 + i * 0.3) * (lanes ? 3 : 14));
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(school ? -scale : scale, scale);
      ctx.rotate(Math.cos(t * 0.45 + i * 0.3) * 0.09);
      ctx.fillStyle = school ? "#25618d" : "#5193ba";
      drawFish(ctx, t * 5 + phase);
      ctx.restore();
    }
  }
  // A ray banks through the foreground, its wing tips rising out of phase.
  if (lanes && (lanes.ray < -80 || lanes.ray > h + 80)) return;
  const size = Math.min(1.7, Math.max(0.72, w / 950));
  ctx.save();
  ctx.translate(
    ((w * 0.79 + t * 16) % (w + 340 * size)) - 120 * size,
    (lanes ? lanes.ray : h * 0.8) + Math.sin(t * 0.23) * (lanes ? 4 : 18),
  );
  ctx.scale(size, size);
  ctx.rotate(-0.24 + Math.sin(t * 0.25) * 0.09);
  const wing = Math.sin(t * 1.1) * 14;
  const skin = ctx.createLinearGradient(0, -52, 0, 48);
  skin.addColorStop(0, "#65a8cb");
  skin.addColorStop(0.48, "#296b99");
  skin.addColorStop(1, "#144571");
  ctx.fillStyle = skin;
  ctx.beginPath();
  ctx.moveTo(31, -4);
  ctx.bezierCurveTo(14, -8, -8, -41, -33, -54 + wing);
  ctx.quadraticCurveTo(-13, -25, -24, -5);
  ctx.quadraticCurveTo(-55, -1, -104, 8 + wing * 0.45);
  ctx.quadraticCurveTo(-53, 3, -23, 2);
  ctx.quadraticCurveTo(-12, 17, -38, 49 - wing);
  ctx.bezierCurveTo(-6, 39, 12, 10, 30, 6);
  ctx.quadraticCurveTo(37, 11, 38, 7);
  ctx.quadraticCurveTo(28, 1, 37, -5);
  ctx.quadraticCurveTo(39, -9, 31, -4);
  ctx.fill();
  ctx.restore();
}

export function PelagicScene() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false,
      frame = 0,
      elapsed = 0,
      last = 0;
    let width = 0,
      height = 0;
    const gallery = canvas.closest(".marine-gallery");
    const heading = gallery?.querySelector("#experience .section-heading");
    const list = gallery?.querySelector(".home-project-list");
    const rows = Array.from(list?.querySelectorAll(".project-row") ?? []);
    let lanes: { schools: number[]; ray: number } | null = null;
    // Measure real row gaps on layout or scroll, independently of the swim loop.
    const placeMarineLife = () => {
      if (!gallery || !heading || !list) return;
      const top = canvas.getBoundingClientRect().top;
      const headingBox = heading.getBoundingClientRect();
      const ray =
        headingBox.bottom -
        top +
        parseFloat(getComputedStyle(heading).marginBottom) / 2;
      const schools: number[] = [];
      const columns = width <= 760 ? 1 : 2;
      for (let i = columns; i < rows.length; i += columns) {
        const gap =
          (rows[i].getBoundingClientRect().top +
            rows[i - columns].getBoundingClientRect().bottom) /
            2 -
          top;
        if (gap >= 0 && gap <= height) schools.push(gap);
      }
      lanes = { schools, ray };
      if (motion.matches) drawScene(ctx, width, height, elapsed, lanes);
    };
    const tick = (now: number) => {
      if (now - last >= 32) {
        elapsed += last ? Math.min(now - last, 100) / 1000 : 0;
        last = now;
        drawScene(ctx, width, height, elapsed, lanes);
      }
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      last = 0;
      drawScene(ctx, width, height, elapsed, lanes);
      if (visible && !motion.matches && !document.hidden)
        frame = requestAnimationFrame(tick);
    };
    const resize = new ResizeObserver(() => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const ratio = Math.min(devicePixelRatio, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      placeMarineLife();
      sync();
    });
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    resize.observe(canvas);
    if (list) resize.observe(list);
    if (gallery)
      window.addEventListener("scroll", placeMarineLife, { passive: true });
    observer.observe(canvas);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", placeMarineLife);
      resize.disconnect();
      observer.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);
  return <canvas ref={ref} className="pelagic-scene" aria-hidden="true" />;
}
