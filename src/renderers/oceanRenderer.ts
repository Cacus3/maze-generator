import type { ThemeRenderer } from './types';

export const oceanRenderer: ThemeRenderer = {
    backgroundColor: '#0284c7',
    drawWall: (ctx, px, py, cellSize, rand) => {
        // Clear, bright water
        ctx.fillStyle = '#0ea5e9';
        ctx.fillRect(px, py, cellSize, cellSize);

        // Simple, clean wave pattern (retro style blocky waves)
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(px, py + cellSize * 0.4, cellSize, cellSize * 0.2);

        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(px, py + cellSize * 0.2, cellSize, cellSize * 0.1);

        // Simple, non-messy elements
        if (rand < 0.1) {
            // Little fish (Simple Orange block fish)
            ctx.fillStyle = '#f97316';
            ctx.fillRect(px + cellSize * 0.3, py + cellSize * 0.4, cellSize * 0.4, cellSize * 0.2);
            ctx.fillRect(px + cellSize * 0.7, py + cellSize * 0.3, cellSize * 0.1, cellSize * 0.4);

            ctx.fillStyle = '#ffffff';
            ctx.fillRect(px + cellSize * 0.4, py + cellSize * 0.45, cellSize * 0.05, cellSize * 0.05);

        } else if (rand > 0.1 && rand < 0.25) {
            // Seaweed (Clean green stalks)
            ctx.fillStyle = '#16a34a';
            ctx.fillRect(px + cellSize * 0.3, py + cellSize * 0.2, cellSize * 0.15, cellSize * 0.8);
            ctx.fillRect(px + cellSize * 0.6, py + cellSize * 0.4, cellSize * 0.15, cellSize * 0.6);
            ctx.fillStyle = '#22c55e';
            ctx.fillRect(px + cellSize * 0.3, py + cellSize * 0.2, cellSize * 0.05, cellSize * 0.8);
            ctx.fillRect(px + cellSize * 0.6, py + cellSize * 0.4, cellSize * 0.05, cellSize * 0.6);

        } else if (rand > 0.8) {
            // Bubbles (Clean white circles)
            ctx.fillStyle = '#ffffff';
            ctx.beginPath(); ctx.arc(px + cellSize * 0.4, py + cellSize * 0.3, cellSize * 0.08, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.arc(px + cellSize * 0.7, py + cellSize * 0.6, cellSize * 0.05, 0, Math.PI * 2); ctx.fill();
        }
    },
    drawPath: (ctx, px, py, cellSize) => {
        // Clean Sand path (Solid color to avoid visual confusion)
        ctx.fillStyle = '#fde047';
        ctx.fillRect(px, py, cellSize, cellSize);
    },
    drawEntrance: (ctx, px, py, cellSize) => {
        // Anchor (Simple and iconic)
        const s = cellSize * 0.8;
        px += (cellSize - s) / 2;
        py += (cellSize - s) / 2;

        ctx.fillStyle = '#475569';

        // Ring
        ctx.beginPath(); ctx.arc(px + s * 0.5, py + s * 0.2, s * 0.15, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#fde047';
        ctx.beginPath(); ctx.arc(px + s * 0.5, py + s * 0.2, s * 0.05, 0, Math.PI * 2); ctx.fill();

        // Shank (vertical)
        ctx.fillStyle = '#475569';
        ctx.fillRect(px + s * 0.45, py + s * 0.35, s * 0.1, s * 0.45);

        // Stock (horizontal)
        ctx.fillRect(px + s * 0.2, py + s * 0.4, s * 0.6, s * 0.1);

        // Crown/Arm (bottom curve)
        ctx.beginPath(); ctx.arc(px + s * 0.5, py + s * 0.8, s * 0.3, 0, Math.PI, false);
        ctx.lineWidth = s * 0.1; ctx.strokeStyle = '#475569'; ctx.stroke();
    },
    drawExit: (ctx, px, py, cellSize) => {
        // Treasure Chest (Simple Pixel style)
        const s = cellSize * 0.8;
        px += (cellSize - s) / 2;
        py += (cellSize - s) / 2;

        ctx.fillStyle = '#b45309';
        ctx.fillRect(px + s * 0.1, py + s * 0.2, s * 0.8, s * 0.6);

        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(px + s * 0.1, py + s * 0.2, s * 0.8, s * 0.1);
        ctx.fillRect(px + s * 0.1, py + s * 0.7, s * 0.8, s * 0.1);
        ctx.fillRect(px + s * 0.1, py + s * 0.2, s * 0.1, s * 0.6);
        ctx.fillRect(px + s * 0.8, py + s * 0.2, s * 0.1, s * 0.6);

        // Lock
        ctx.fillStyle = '#e2e8f0';
        ctx.fillRect(px + s * 0.35, py + s * 0.35, s * 0.3, s * 0.3);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(px + s * 0.45, py + s * 0.45, s * 0.1, s * 0.1);
    },
    drawSolution: (ctx, px, py, cellSize) => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.arc(px + cellSize / 2, py + cellSize / 2, cellSize * 0.15, 0, Math.PI * 2);
        ctx.fill();
    }
};
