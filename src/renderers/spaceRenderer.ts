import type { ThemeRenderer } from './types';

export const spaceRenderer: ThemeRenderer = {
    backgroundColor: '#0f172a', // Deep space
    drawWall: (ctx, px, py, cellSize, rand) => {
        // Space Station Metal
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(px, py, cellSize, cellSize);

        ctx.fillStyle = '#334155'; // Inner panel
        ctx.fillRect(px + cellSize * 0.1, py + cellSize * 0.1, cellSize * 0.8, cellSize * 0.8);

        ctx.fillStyle = '#0f172a'; // Rivets / details
        ctx.fillRect(px + cellSize * 0.2, py + cellSize * 0.2, cellSize * 0.1, cellSize * 0.1);
        ctx.fillRect(px + cellSize * 0.7, py + cellSize * 0.7, cellSize * 0.1, cellSize * 0.1);

        // Neon blinking lights
        if (rand < 0.05) {
            ctx.fillStyle = '#38bdf8'; // Blue neon
            ctx.fillRect(px + cellSize * 0.4, py + cellSize * 0.4, cellSize * 0.2, cellSize * 0.2);
        } else if (rand > 0.05 && rand < 0.1) {
            ctx.fillStyle = '#f43f5e'; // Red siren
            ctx.fillRect(px + cellSize * 0.4, py + cellSize * 0.4, cellSize * 0.2, cellSize * 0.2);
        }
    },
    drawPath: (ctx, px, py, cellSize, rand) => {
        // Starry Void
        ctx.fillStyle = '#020617';
        ctx.fillRect(px, py, cellSize, cellSize);

        // Stars
        if (rand > 0.8) {
            ctx.fillStyle = '#e2e8f0'; // White star
            ctx.fillRect(px + cellSize * 0.2, py + cellSize * 0.3, cellSize * 0.05, cellSize * 0.05);
        } else if (rand < 0.1) {
            ctx.fillStyle = '#fde047'; // Yellow star
            ctx.fillRect(px + cellSize * 0.5, py + cellSize * 0.2, cellSize * 0.05, cellSize * 0.05);
        }
    },
    drawEntrance: (ctx, px, py, cellSize) => {
        // Spaceship UFO
        ctx.fillStyle = '#94a3b8'; // Hull
        ctx.beginPath();
        ctx.ellipse(px + cellSize / 2, py + cellSize * 0.6, cellSize * 0.4, cellSize * 0.15, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#38bdf8'; // Glass dome
        ctx.beginPath();
        ctx.ellipse(px + cellSize / 2, py + cellSize * 0.45, cellSize * 0.2, cellSize * 0.2, 0, 0, Math.PI, true);
        ctx.fill();

        ctx.fillStyle = '#fde047'; // Lights
        ctx.fillRect(px + cellSize * 0.2, py + cellSize * 0.6, cellSize * 0.1, cellSize * 0.05);
        ctx.fillRect(px + cellSize * 0.7, py + cellSize * 0.6, cellSize * 0.1, cellSize * 0.05);
    },
    drawExit: (ctx, px, py, cellSize) => {
        // Wormhole Portal
        const cx = px + cellSize / 2;
        const cy = py + cellSize / 2;

        ctx.fillStyle = '#a855f7';
        ctx.beginPath();
        ctx.arc(cx, cy, cellSize * 0.4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.arc(cx, cy, cellSize * 0.25, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#0f172a'; // Dark center
        ctx.beginPath();
        ctx.arc(cx, cy, cellSize * 0.1, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff'; // White sparkles
        ctx.fillRect(cx - cellSize * 0.3, cy, cellSize * 0.05, cellSize * 0.05);
        ctx.fillRect(cx + cellSize * 0.25, cy - cellSize * 0.2, cellSize * 0.05, cellSize * 0.05);
    }
};
