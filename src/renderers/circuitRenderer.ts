import type { ThemeRenderer } from './types';

export const circuitRenderer: ThemeRenderer = {
    backgroundColor: '#0f172a',
    drawWall: (ctx, px, py, cellSize, rand) => {
        // PCB Board (Green Motherboard)
        ctx.fillStyle = '#14532d';
        ctx.fillRect(px, py, cellSize, cellSize);

        ctx.fillStyle = '#166534'; // Lighter green circuit patches
        ctx.fillRect(px + cellSize * 0.1, py + cellSize * 0.1, cellSize * 0.8, cellSize * 0.8);

        // Gold/Copper traces
        ctx.fillStyle = '#eab308';
        if (rand < 0.3) {
            // Horizontal trace
            ctx.fillRect(px, py + cellSize * 0.4, cellSize, cellSize * 0.1);
            ctx.fillStyle = '#d97706';
            ctx.beginPath();
            ctx.arc(px + cellSize * 0.5, py + cellSize * 0.45, cellSize * 0.15, 0, Math.PI * 2);
            ctx.fill();
        } else if (rand > 0.7) {
            // Vertical trace
            ctx.fillRect(px + cellSize * 0.6, py, cellSize * 0.1, cellSize);
            ctx.fillStyle = '#94a3b8';
            ctx.beginPath();
            ctx.arc(px + cellSize * 0.65, py + cellSize * 0.3, cellSize * 0.15, 0, Math.PI * 2);
            ctx.fill();
        }

        // Screws
        if (rand > 0.4 && rand < 0.5) {
            ctx.fillStyle = '#cbd5e1'; // Silver screw
            ctx.beginPath();
            ctx.arc(px + cellSize * 0.8, py + cellSize * 0.8, cellSize * 0.12, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#475569';
            ctx.fillRect(px + cellSize * 0.72, py + cellSize * 0.78, cellSize * 0.16, cellSize * 0.04);
        }
    },
    drawPath: (ctx, px, py, cellSize) => {
        // Floor - Clean solid color to avoid visual confusion
        ctx.fillStyle = '#334155';
        ctx.fillRect(px, py, cellSize, cellSize);
    },
    drawEntrance: (ctx, px, py, cellSize) => {
        // Cogwheel (Gear) - Orange/Yellow for Circuit
        const cx = px + cellSize / 2;
        const cy = py + cellSize / 2;
        const r1 = cellSize * 0.35;

        // Draw gear teeth
        ctx.fillStyle = '#f97316';
        for (let i = 0; i < 8; i++) {
            const angle = (i * Math.PI) / 4;
            ctx.beginPath();
            ctx.arc(cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1, cellSize * 0.15, 0, Math.PI * 2);
            ctx.fill();
        }

        // Draw gear body
        ctx.beginPath();
        ctx.arc(cx, cy, r1, 0, Math.PI * 2);
        ctx.fill();

        // Draw hole
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(cx, cy, cellSize * 0.15, 0, Math.PI * 2);
        ctx.fill();
    },
    drawExit: (ctx, px, py, cellSize) => {
        // Glowing Lightbulb (Fixing something!)
        const cx = px + cellSize / 2;
        const cy = py + cellSize / 2;

        // Glow
        ctx.fillStyle = 'rgba(253, 224, 71, 0.4)';
        ctx.beginPath();
        ctx.arc(cx, cy - cellSize * 0.1, cellSize * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // Glass bulb
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(cx, cy - cellSize * 0.15, cellSize * 0.25, 0, Math.PI * 2);
        ctx.fill();

        // Base/Screw thread
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(cx - cellSize * 0.15, cy + cellSize * 0.1, cellSize * 0.3, cellSize * 0.1);
        ctx.fillRect(cx - cellSize * 0.15, cy + cellSize * 0.25, cellSize * 0.3, cellSize * 0.1);

        ctx.fillStyle = '#0f172a';
        ctx.fillRect(cx - cellSize * 0.15, cy + cellSize * 0.2, cellSize * 0.3, cellSize * 0.05);

        // Bottom contact
        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.arc(cx, cy + cellSize * 0.35, cellSize * 0.1, 0, Math.PI, false);
        ctx.fill();
    },
    drawSolution: (ctx, px, py, cellSize) => {
        ctx.fillStyle = 'rgba(234, 179, 8, 0.5)';
        ctx.beginPath();
        ctx.arc(px + cellSize / 2, py + cellSize / 2, cellSize * 0.15, 0, Math.PI * 2);
        ctx.fill();
    }
};
