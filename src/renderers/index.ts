import type { ThemeId } from '../styles/themes';
import type { ThemeRenderer } from './types';
import { classicRenderer } from './classicRenderer';
import { voxelRenderer } from './voxelRenderer';
import { spaceRenderer } from './spaceRenderer';
import { circuitRenderer } from './circuitRenderer';
import { dinoRenderer } from './dinoRenderer';
import { oceanRenderer } from './oceanRenderer';
import { castleRenderer } from './castleRenderer';
import { cityRenderer } from './cityRenderer';

export const renderers: Record<ThemeId, ThemeRenderer> = {
    classic: classicRenderer,
    voxel: voxelRenderer,
    space: spaceRenderer,
    circuit: circuitRenderer,
    dino: dinoRenderer,
    ocean: oceanRenderer,
    castle: castleRenderer,
    city: cityRenderer
};
