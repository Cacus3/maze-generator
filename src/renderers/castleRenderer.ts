import type { ThemeRenderer } from './types';

export const castleRenderer: ThemeRenderer = {
    backgroundColor: '#dc2626', // Red carpet base
    drawWall: (ctx, px, py, cellSize, rand) => {
        // Castle stone bricks
        ctx.fillStyle = '#64748b'; // Gray base
        ctx.fillRect(px, py, cellSize, cellSize);

        // Brick pattern
        ctx.fillStyle = '#475569'; // Darker lines
        ctx.fillRect(px, py + cellSize * 0.5, cellSize, 2);
        ctx.fillRect(px + cellSize * 0.5, py, 2, cellSize * 0.5);
        ctx.fillRect(px + cellSize * 0.25, py + cellSize * 0.5, 2, cellSize * 0.5);

        ctx.fillStyle = '#94a3b8'; // Highlights
        ctx.fillRect(px, py, cellSize, 2);

        // Occasional torches
        if (rand > 0.85) {
            // Wood holder
            ctx.fillStyle = '#78350f';
            ctx.fillRect(px + cellSize * 0.45, py + cellSize * 0.5, cellSize * 0.1, cellSize * 0.3);
            // Fire
            ctx.fillStyle = '#ef4444';
            ctx.beginPath(); ctx.arc(px + cellSize * 0.5, py + cellSize * 0.4, cellSize * 0.15, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#fde047';
            ctx.beginPath(); ctx.arc(px + cellSize * 0.5, py + cellSize * 0.4, cellSize * 0.08, 0, Math.PI * 2); ctx.fill();
        }
    },
    drawPath: (ctx, px, py, cellSize) => {
        // Red carpet
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(px, py, cellSize, cellSize);

        // Gold trim on edges (subtle)
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(px + cellSize * 0.1, py + cellSize * 0.1, 2, 2);
    },
    drawEntrance: (ctx, px, py, cellSize) => {
        // Shield
        const s = cellSize * 0.8;
        px += (cellSize - s) / 2;
        py += (cellSize - s) / 2;

        ctx.fillStyle = '#cbd5e1'; // Silver
        ctx.beginPath();
        ctx.moveTo(px + s * 0.1, py + s * 0.1);
        ctx.lineTo(px + s * 0.9, py + s * 0.1);
        ctx.lineTo(px + s * 0.9, py + s * 0.6);
        ctx.lineTo(px + s * 0.5, py + s * 0.9);
        ctx.lineTo(px + s * 0.1, py + s * 0.6);
        ctx.fill();

        ctx.fillStyle = '#dc2626'; // Red cross
        ctx.fillRect(px + s * 0.4, py + s * 0.2, s * 0.2, s * 0.6);
        ctx.fillRect(px + s * 0.2, py + s * 0.4, s * 0.6, s * 0.2);
    },
    drawExit: (ctx, px, py, cellSize) => {
        // Crown
        const s = cellSize * 0.8;
        px += (cellSize - s) / 2;
        py += (cellSize - s) / 2;

        ctx.fillStyle = '#fbbf24'; // Gold
        ctx.beginPath();
        ctx.moveTo(px + s * 0.1, py + s * 0.8);
        ctx.lineTo(px + s * 0.9, py + s * 0.8);
        ctx.lineTo(px + s * 0.9, py + s * 0.2);
        ctx.lineTo(px + s * 0.7, py + s * 0.5);
        ctx.lineTo(px + s * 0.5, py + s * 0.1);
        ctx.lineTo(px + s * 0.3, py + s * 0.5);
        ctx.lineTo(px + s * 0.1, py + s * 0.2);
        ctx.fill();

        // Jewels
        ctx.fillStyle = '#dc2626'; // Ruby
        ctx.beginPath(); ctx.arc(px + s * 0.5, py + s * 0.4, s * 0.08, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#3b82f6'; // Sapphire
        ctx.beginPath(); ctx.arc(px + s * 0.2, py + s * 0.5, s * 0.08, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(px + s * 0.8, py + s * 0.5, s * 0.08, 0, Math.PI * 2); ctx.fill();
    }
};
