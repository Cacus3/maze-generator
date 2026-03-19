export type ThemeId = 'classic' | 'voxel' | 'space' | 'circuit' | 'dino' | 'ocean' | 'castle' | 'city';

export interface Theme {
  id: ThemeId;
  name: string;
  wallColor: string;
  pathColor: string;
  backgroundColor: string;
  entranceColor: string;
  exitColor: string;
}

export const themes: Record<ThemeId, Theme> = {
  classic: {
    id: 'classic',
    name: 'Classic (Printable)',
    wallColor: '#000000',
    pathColor: '#ffffff',
    backgroundColor: '#ffffff',
    entranceColor: '#10B981', // green
    exitColor: '#EF4444', // red
  },
  voxel: {
    id: 'voxel',
    name: 'Pixel World (Blocks)',
    wallColor: '#4d3017', // Dirt brown
    pathColor: '#6da742', // Grass green
    backgroundColor: '#6da742',
    entranceColor: '#fbbf24', // Gold
    exitColor: '#3b82f6', // Diamond
  },
  space: {
    id: 'space',
    name: 'Space',
    wallColor: '#93c5fd', // Light blue neon
    pathColor: '#0f172a', // Dark space
    backgroundColor: '#0f172a',
    entranceColor: '#34d399',
    exitColor: '#f43f5e',
  },
  circuit: {
    id: 'circuit',
    name: 'Circuit Board (Lab)',
    wallColor: '#14532d',
    pathColor: '#334155',
    backgroundColor: '#0f172a',
    entranceColor: '#f97316',
    exitColor: '#fef08a',
  },
  dino: {
    id: 'dino',
    name: 'Lost World (Dinosaurs)',
    wallColor: '#14532d',
    pathColor: '#92400e',
    backgroundColor: '#78350f',
    entranceColor: '#16a34a',
    exitColor: '#f8fafc',
  },
  ocean: {
    id: 'ocean',
    name: 'Ocean Depths',
    wallColor: '#0369a1',
    pathColor: '#fde047',
    backgroundColor: '#0284c7',
    entranceColor: '#eab308',
    exitColor: '#fbbf24',
  },
  castle: {
    id: 'castle',
    name: 'Medieval Castle',
    wallColor: '#64748b',
    pathColor: '#dc2626',
    backgroundColor: '#dc2626',
    entranceColor: '#cbd5e1',
    exitColor: '#fbbf24',
  },
  city: {
    id: 'city',
    name: 'City Racing',
    wallColor: '#475569',
    pathColor: '#1e293b',
    backgroundColor: '#1e293b',
    entranceColor: '#ef4444',
    exitColor: '#ffffff',
  }
};
