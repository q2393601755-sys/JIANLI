"use client";

const grainSvg = `<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='noise'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#noise)'/></svg>`;

const grainDataUri = `url("data:image/svg+xml,${encodeURIComponent(grainSvg)}")`;

export default function FilmGrain() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
      style={{
        backgroundImage: grainDataUri,
        backgroundSize: "200px 200px",
        animation: "grain 0.4s steps(4) infinite",
      }}
    />
  );
}
