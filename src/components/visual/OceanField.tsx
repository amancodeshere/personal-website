'use client';

import { useRef } from 'react';

export function OceanField() {
  const field = useRef<SVGSVGElement>(null);
  function move(event: React.PointerEvent<SVGSVGElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    event.currentTarget.style.setProperty('--pointer-x', `${x * 14}px`);
    event.currentTarget.style.setProperty('--pointer-y', `${y * 9}px`);
  }
  function leave(event: React.PointerEvent<SVGSVGElement>) {
    event.currentTarget.style.setProperty('--pointer-x', '0px');
    event.currentTarget.style.setProperty('--pointer-y', '0px');
  }
  const curves = Array.from({ length: 31 }, (_, i) => {
    const x = 25 + i * 31;
    const amp = 44 + (i % 6) * 12;
    const phase = (i % 9) * 14;
    return `M ${x} -30 C ${x + amp} ${150 + phase}, ${x - amp} ${300 - phase}, ${x} 540 C ${x + amp} 700, ${x - amp} 850, ${x} 1050`;
  });
  return <svg ref={field} className="ocean-field" viewBox="0 0 1000 760" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Abstract flowing ocean current lines" onPointerMove={move} onPointerLeave={leave}>
    <defs><radialGradient id="current-glow"><stop offset="0" stopColor="#39c9de" stopOpacity=".24"/><stop offset="1" stopColor="#39c9de" stopOpacity="0"/></radialGradient><linearGradient id="current-lines" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#89e4ec" stopOpacity=".12"/><stop offset=".48" stopColor="#4fc6d8" stopOpacity=".8"/><stop offset="1" stopColor="#21899f" stopOpacity=".08"/></linearGradient></defs>
    <ellipse cx="540" cy="360" rx="470" ry="370" fill="url(#current-glow)" />
    <g className="current-lines" fill="none" stroke="url(#current-lines)" strokeWidth="1">{curves.map((d, i) => <path key={i} d={d} opacity={.35 + (i % 5) * .12} />)}</g>
    <g className="current-lines-fine" fill="none" stroke="#9deaf0" strokeOpacity=".24" strokeWidth=".6">{curves.filter((_, i) => i % 2 === 0).map((d, i) => <path key={i} d={d} transform={`translate(${(i % 4) * 3} 0)`} />)}</g>
  </svg>;
}
