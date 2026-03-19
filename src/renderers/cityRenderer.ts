import type { ThemeRenderer } from './types';

export const cityRenderer: ThemeRenderer = {
    backgroundColor: '#1e293b', // Asphalt
    drawWall: (ctx, px, py, cellSize, rand) => {
        // Building roof (Top down view)
        ctx.fillStyle = '#475569'; // Roof gray
        ctx.fillRect(px, py, cellSize, cellSize);

        ctx.fillStyle = '#334155'; // Inner border (shadow)
        ctx.fillRect(px + cellSize * 0.1, py + cellSize * 0.1, cellSize * 0.8, cellSize * 0.8);

        // Roof details
        if (rand < 0.3) {
            // AC unit
            ctx.fillStyle = '#94a3b8';
            ctx.fillRect(px + cellSize * 0.2, py + cellSize * 0.2, cellSize * 0.3, cellSize * 0.3);
            ctx.fillStyle = '#0f172a'; // Fan grill
            ctx.beginPath(); ctx.arc(px + cellSize * 0.35, py + cellSize * 0.35, cellSize * 0.1, 0, Math.PI * 2); ctx.fill();
        } else if (rand > 0.95) { // Reduced frequency for Helipad (H)
            // Helipad / H
            ctx.fillStyle = '#e2e8f0';
            ctx.fillRect(px + cellSize * 0.4, py + cellSize * 0.3, cellSize * 0.05, cellSize * 0.4);
            ctx.fillRect(px + cellSize * 0.6, py + cellSize * 0.3, cellSize * 0.05, cellSize * 0.4);
            ctx.fillRect(px + cellSize * 0.4, py + cellSize * 0.45, cellSize * 0.25, cellSize * 0.05);
        } else if (rand > 0.4 && rand < 0.6) {
            // Roof garden / Greenery
            ctx.fillStyle = '#22c55e';
            ctx.beginPath(); ctx.arc(px + cellSize * 0.5, py + cellSize * 0.5, cellSize * 0.2, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.arc(px + cellSize * 0.7, py + cellSize * 0.3, cellSize * 0.15, 0, Math.PI * 2); ctx.fill();
        } else if (rand > 0.7 && rand < 0.8) {
            // Solar panels (to replace too many H's)
            ctx.fillStyle = '#1d4ed8'; // Blue panel
            ctx.fillRect(px + cellSize * 0.3, py + cellSize * 0.2, cellSize * 0.4, cellSize * 0.5);
            ctx.fillStyle = '#60a5fa'; // Reflection
            ctx.fillRect(px + cellSize * 0.35, py + cellSize * 0.25, cellSize * 0.1, cellSize * 0.4);
        }
    },
    drawPath: (ctx, px, py, cellSize) => {
        // Solid Asphalt
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(px, py, cellSize, cellSize);

        // Add minimal road dashes just barely visible to give it a road feel without confusing
        ctx.fillStyle = '#334155';
        ctx.fillRect(px + cellSize * 0.45, py + cellSize * 0.3, cellSize * 0.1, cellSize * 0.4);
    },
    drawEntrance: (ctx, px, py, cellSize) => {
        // Red Race Car (Top View)
        const s = cellSize * 0.8;
        px += (cellSize - s) / 2;
        py += (cellSize - s) / 2;

        // Body
        ctx.fillStyle = '#ef4444';
        if (ctx.roundRect) {
            ctx.beginPath();
            ctx.roundRect(px + s * 0.3, py + s * 0.1, s * 0.4, s * 0.8, 4);
            ctx.fill();
        } else {
            ctx.fillRect(px + s * 0.3, py + s * 0.1, s * 0.4, s * 0.8);
        }

        // Windows
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(px + s * 0.35, py + s * 0.3, s * 0.3, s * 0.15); // Windshield
        ctx.fillRect(px + s * 0.35, py + s * 0.55, s * 0.3, s * 0.1); // Rear window

        // Tires
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(px + s * 0.2, py + s * 0.2, s * 0.1, s * 0.2); // Front left
        ctx.fillRect(px + s * 0.7, py + s * 0.2, s * 0.1, s * 0.2); // Front right
        ctx.fillRect(px + s * 0.2, py + s * 0.6, s * 0.1, s * 0.2); // Rear left
        ctx.fillRect(px + s * 0.7, py + s * 0.6, s * 0.1, s * 0.2); // Rear right
    },
    drawExit: (ctx, px, py, cellSize) => {
        // Checkered Flag
        const s = cellSize * 0.8;
        px += (cellSize - s) / 2;
        py += (cellSize - s) / 2;

        // Flag pole
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(px, py, s * 0.1, s);

        // Flag fabric
        const cols = 4;
        const rows = 3;
        const qW = s * 0.8 / cols;
        const qH = s * 0.6 / rows;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                ctx.fillStyle = (r + c) % 2 === 0 ? '#ffffff' : '#000000';
                ctx.fillRect(px + s * 0.1 + c * qW, py + r * qH, qW, qH);
            }
        }
    }
};
