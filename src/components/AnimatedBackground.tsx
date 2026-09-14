import { useMemo, type CSSProperties } from 'react';
import { useTheme } from '../theme/ThemeContext';

type Vars = CSSProperties & Record<`--${string}`, string>;

/** Fixed, decorative background layer; its artwork follows the active site style. */
export function AnimatedBackground() {
  const { style } = useTheme();

  return (
    <div className="site-bg" aria-hidden="true">
      {style.id === 'editorial' && <EditorialBackground />}
      {style.id === 'graphite' && <GraphiteBackground />}
      {style.id === 'lowpoly' && <LowPolyBackground />}
      {style.id === 'neon' && <NeonBackground />}
    </div>
  );
}

function EditorialBackground() {
  return (
    <>
      <div className="bg-orb" style={{ top: '-22vmax', right: '-18vmax', '--orb-color': 'var(--accent)' } as Vars} />
      <div
        className="bg-orb"
        style={{
          bottom: '-32vmax',
          left: '-12vmax',
          '--orb-color': 'var(--accent-2)',
          '--orb-alpha': '5%',
          '--orb-duration': '48s',
          animationDirection: 'alternate-reverse',
        } as Vars}
      />
      <div className="bg-grid-mask">
        <div className="bg-grid" />
      </div>
      <div className="bg-scan" />
    </>
  );
}

const PALM_PATHS = [
  'M292 600 C 286 500, 276 400, 252 236',
  'M318 600 C 310 500, 298 400, 266 238',
  'M258 232 C 214 196, 160 196, 96 236',
  'M258 232 C 230 170, 186 138, 128 128',
  'M258 232 C 252 172, 262 118, 296 76',
  'M258 232 C 296 180, 344 166, 392 186',
  'M258 232 C 306 222, 350 252, 378 312',
  'M258 232 C 232 250, 196 290, 180 348',
  'M170 204 L 150 228 M196 198 L 182 224 M222 204 L 214 228',
  'M300 190 L 318 168 M330 178 L 346 158 M352 176 L 366 156',
  'M40 596 C 160 586, 300 604, 400 592',
];

function Palm({ style, delayOffset = 0 }: { style: CSSProperties; delayOffset?: number }) {
  return (
    <svg className="sketch" style={style} viewBox="0 0 400 600" preserveAspectRatio="xMidYMax meet">
      {PALM_PATHS.map((d, i) => (
        <path key={i} d={d} pathLength={1} style={{ '--draw-delay': `${delayOffset + i * 0.35}s` } as Vars} />
      ))}
    </svg>
  );
}

function GraphiteBackground() {
  return (
    <>
      <div className="bg-paper" />
      <div className="bg-hatch" style={{ top: '-12vmax', right: '-14vmax' }} />
      <div
        className="bg-hatch"
        style={{
          bottom: '-20vmax',
          left: '-14vmax',
          '--hatch-angle': '52deg',
          '--hatch-duration': '56s',
          animationDirection: 'alternate-reverse',
        } as Vars}
      />
      <div
        className="bg-hatch"
        style={{ top: '38%', left: '42%', width: '36vmax', height: '36vmax', '--hatch-angle': '-62deg', '--hatch-duration': '64s' } as Vars}
      />
      <Palm style={{ right: '-3vw', bottom: 0, height: '80vh' }} />
      <Palm style={{ left: '-6vw', bottom: 0, height: '48vh', transform: 'scaleX(-1)' }} delayOffset={8} />
    </>
  );
}

function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Facet {
  points: string;
  fill: string;
  opacity: number;
  delay: number | null;
}

/** Deterministic jittered triangle mesh: sky tones up top, sand below, a few palm greens. */
function buildFacets(): Facet[] {
  const rand = mulberry32(7);
  const cols = 12;
  const rows = 8;
  const width = 1200;
  const height = 800;
  const cw = width / cols;
  const ch = height / rows;

  const grid: [number, number][][] = [];
  for (let r = 0; r <= rows; r++) {
    const row: [number, number][] = [];
    for (let c = 0; c <= cols; c++) {
      const edge = r === 0 || r === rows || c === 0 || c === cols;
      const jx = edge ? 0 : (rand() - 0.5) * cw * 0.7;
      const jy = edge ? 0 : (rand() - 0.5) * ch * 0.7;
      row.push([c * cw + jx, r * ch + jy]);
    }
    grid.push(row);
  }

  const facets: Facet[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const a = grid[r][c];
      const b = grid[r][c + 1];
      const d = grid[r + 1][c];
      const e = grid[r + 1][c + 1];
      const triangles = (r + c) % 2 === 0 ? [[a, b, e], [a, e, d]] : [[a, b, d], [b, e, d]];

      for (const tri of triangles) {
        const depth = (tri[0][1] + tri[1][1] + tri[2][1]) / 3 / height;
        const roll = rand();
        const fill =
          roll < 0.1 ? 'var(--accent-2)' : roll < depth * 0.9 + 0.1 ? 'var(--accent-3)' : 'var(--accent)';
        facets.push({
          points: tri.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' '),
          fill,
          opacity: 0.02 + rand() * 0.08,
          delay: rand() < 0.2 ? rand() * -9 : null,
        });
      }
    }
  }
  return facets;
}

function Cloud({ style }: { style: Vars }) {
  return (
    <svg className="lp-cloud" style={style} viewBox="0 0 200 70">
      <polygon points="0,62 22,34 58,30 78,8 118,4 146,26 178,30 200,62" style={{ fill: 'var(--cloud)' }} />
      <polygon points="0,62 58,30 118,40 178,30 200,62" style={{ fill: 'var(--cloud-shade)' }} />
    </svg>
  );
}

function LowPolyBackground() {
  const facets = useMemo(buildFacets, []);

  return (
    <>
      <div className="bg-sky" />
      <svg className="facet-field" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {facets.map((f, i) => (
          <polygon
            key={i}
            points={f.points}
            className={f.delay === null ? 'facet-poly' : 'facet-poly facet-pulse'}
            style={{ fill: f.fill, fillOpacity: f.opacity, animationDelay: f.delay === null ? undefined : `${f.delay}s` }}
          />
        ))}
      </svg>
      <Cloud style={{ top: '9vh', width: '220px', '--cloud-duration': '140s', '--cloud-delay': '-40s' }} />
      <Cloud style={{ top: '26vh', width: '150px', '--cloud-duration': '190s', '--cloud-delay': '-120s' }} />
      <Cloud style={{ top: '64vh', width: '120px', '--cloud-duration': '230s', '--cloud-delay': '-60s' }} />
    </>
  );
}

const STREAKS = [
  { top: '30%', c: 'var(--accent)', h: '3px', d: '12s', delay: '0s' },
  { top: '58%', c: 'var(--accent-2)', h: '2px', d: '15s', delay: '-5s' },
  { top: '84%', c: 'var(--accent-3)', h: '4px', d: '18s', delay: '-9s' },
];

const GLITCH_BARS: { top: string; left?: string; right?: string; w: string; h: string; c: string; d: string; delay: string }[] = [
  { top: '14%', left: '0', w: '7vw', h: '5px', c: 'var(--accent)', d: '5.5s', delay: '0s' },
  { top: '15.4%', left: '0', w: '4vw', h: '3px', c: 'var(--accent-2)', d: '5.5s', delay: '0.08s' },
  { top: '41%', right: '0', w: '12vw', h: '6px', c: 'var(--accent-2)', d: '7s', delay: '-2s' },
  { top: '63%', left: '30%', w: '18vw', h: '2px', c: 'var(--accent)', d: '9s', delay: '-4s' },
  { top: '80%', right: '8%', w: '6vw', h: '8px', c: 'var(--accent-3)', d: '6.5s', delay: '-1s' },
  { top: '90%', left: '0', w: '10vw', h: '4px', c: 'var(--accent)', d: '8s', delay: '-6s' },
];

function NeonBackground() {
  return (
    <>
      <div className="bg-orb" style={{ top: '-25vmax', left: '-20vmax', '--orb-color': 'var(--accent)' } as Vars} />
      <div
        className="bg-orb"
        style={{ top: '10vh', right: '-30vmax', '--orb-color': 'var(--accent-2)', '--orb-duration': '44s', animationDirection: 'alternate-reverse' } as Vars}
      />
      <div
        className="bg-orb"
        style={{ bottom: '-40vmax', left: '20vw', '--orb-color': 'var(--accent-3)', '--orb-alpha': '10%', '--orb-duration': '52s' } as Vars}
      />
      <div className="neon-halftone-mask">
        <div className="neon-halftone" />
      </div>
      <div className="neon-scanlines" />
      {STREAKS.map((s, i) => (
        <div key={i} className="neon-streak" style={{ top: s.top, '--c': s.c, '--h': s.h, '--d': s.d, '--delay': s.delay } as Vars} />
      ))}
      {GLITCH_BARS.map((g, i) => (
        <div
          key={i}
          className="glitch-bar"
          style={{ top: g.top, left: g.left, right: g.right, '--w': g.w, '--h': g.h, '--c': g.c, '--d': g.d, '--delay': g.delay } as Vars}
        />
      ))}
    </>
  );
}
