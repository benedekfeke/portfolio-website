export type StyleId = 'editorial' | 'graphite' | 'lowpoly' | 'neon';

export interface SiteStyle {
  id: StyleId;
  name: string;
  description: string;
  portrait: string;
  portraitAlt: string;
}

/**
 * Visual styles of the site, in the order the Bio portrait cycles through them.
 * Each style pairs one portrait with a palette, background animation and
 * decorative treatment (defined in index.css under [data-style="..."]).
 */
export const siteStyles: SiteStyle[] = [
  {
    id: 'editorial',
    name: 'Editorial',
    description: 'Photograph · brutalist grid',
    portrait: '/assets/portraits/editorial.webp',
    portraitAlt: 'Benedek Feke, photo portrait beneath palm trees',
  },
  {
    id: 'graphite',
    name: 'Graphite',
    description: 'Pencil sketch · paper grain',
    portrait: '/assets/portraits/graphite.webp',
    portraitAlt: 'Benedek Feke, graphite pencil portrait beneath palm trees',
  },
  {
    id: 'lowpoly',
    name: 'Low-Poly',
    description: 'Faceted geometry · beach daylight',
    portrait: '/assets/portraits/lowpoly.webp',
    portraitAlt: 'Benedek Feke, low-poly beachside portrait',
  },
  {
    id: 'neon',
    name: 'Neon Glitch',
    description: 'Comic halftone · chromatic glitch',
    portrait: '/assets/portraits/neon.webp',
    portraitAlt: 'Benedek Feke, neon glitch comic portrait by the palms',
  },
];
