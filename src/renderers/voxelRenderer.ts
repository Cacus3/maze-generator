import type { ThemeRenderer } from './types';

export const voxelRenderer: ThemeRenderer = {
    backgroundColor: '#6da742',
    drawWall: (ctx, px, py, cellSize, rand) => {
        // Dirt base
        ctx.fillStyle = '#5c3a21';
        ctx.fillRect(px, py, cellSize, cellSize);

        // Texture noise for dirt
        ctx.fillStyle = '#4a2f1d';
        ctx.fillRect(px + cellSize * 0.1, py + cellSize * 0.1, cellSize * 0.2, cellSize * 0.2);
        ctx.fillRect(px + cellSize * 0.7, py + cellSize * 0.5, cellSize * 0.3, cellSize * 0.2);
        ctx.fillStyle = '#3a2515';
        ctx.fillRect(px + cellSize * 0.4, py + cellSize * 0.7, cellSize * 0.2, cellSize * 0.2);

        // Grass on top
        ctx.fillStyle = '#6da742';
        ctx.fillRect(px, py, cellSize, cellSize * 0.35);
        ctx.fillStyle = '#5ea138';
        ctx.fillRect(px, py + cellSize * 0.35, cellSize, cellSize * 0.1);
        ctx.fillRect(px + cellSize * 0.2, py + cellSize * 0.1, cellSize * 0.2, cellSize * 0.2);

        // Add occasional flowers or tall grass (only if not at the very top to avoid clipping)
        if (py > 0) {
            if (rand < 0.05) {
                // Poppy
                ctx.fillStyle = '#1e681c';
                ctx.fillRect(px + cellSize * 0.45, py - cellSize * 0.3, cellSize * 0.1, cellSize * 0.3);
                ctx.fillStyle = '#d32c2c';
                ctx.fillRect(px + cellSize * 0.3, py - cellSize * 0.5, cellSize * 0.4, cellSize * 0.3);
            } else if (rand > 0.05 && rand < 0.1) {
                // Dandelion
                ctx.fillStyle = '#1e681c';
                ctx.fillRect(px + cellSize * 0.45, py - cellSize * 0.2, cellSize * 0.1, cellSize * 0.2);
                ctx.fillStyle = '#ebd834';
                ctx.fillRect(px + cellSize * 0.35, py - cellSize * 0.4, cellSize * 0.3, cellSize * 0.3);
            } else if (rand > 0.1 && rand < 0.2) {
                // Tall grass
                ctx.fillStyle = '#5ea138';
                ctx.fillRect(px + cellSize * 0.2, py - cellSize * 0.2, cellSize * 0.1, cellSize * 0.2);
                ctx.fillRect(px + cellSize * 0.6, py - cellSize * 0.3, cellSize * 0.1, cellSize * 0.3);
            }
        }
    },
    drawPath: (ctx, px, py, cellSize, rand) => {
        // Stone Path
        ctx.fillStyle = '#7d7d7d';
        ctx.fillRect(px, py, cellSize, cellSize);

        // Texture noise for stone
        ctx.fillStyle = '#6e6e6e';
        ctx.fillRect(px + cellSize * 0.2, py + cellSize * 0.2, cellSize * 0.3, cellSize * 0.3);
        ctx.fillStyle = '#8f8f8f';
        ctx.fillRect(px + cellSize * 0.6, py + cellSize * 0.6, cellSize * 0.2, cellSize * 0.2);

        if (rand > 0.85) {
            // Mossy stone patch
            ctx.fillStyle = '#4c7a36';
            ctx.fillRect(px + cellSize * 0.1, py + cellSize * 0.7, cellSize * 0.3, cellSize * 0.2);
            ctx.fillRect(px + cellSize * 0.2, py + cellSize * 0.5, cellSize * 0.2, cellSize * 0.2);
        } else if (rand < 0.15) {
            // Cracked stone
            ctx.fillStyle = '#4a4a4a';
            ctx.fillRect(px + cellSize * 0.5, py + cellSize * 0.2, cellSize * 0.1, cellSize * 0.4);
            ctx.fillRect(px + cellSize * 0.4, py + cellSize * 0.5, cellSize * 0.2, cellSize * 0.1);
        }
    },
    drawEntrance: (ctx, px, py, cellSize) => {
        // draw Steve
        px = px + cellSize * 0.1;
        py = py + cellSize * 0.1;
        const s = cellSize * 0.8;
        const p = s / 8;

        ctx.fillStyle = '#3a2515';
        ctx.fillRect(px, py, s, p * 2);
        ctx.fillRect(px, py + p * 2, p, p);
        ctx.fillRect(px + s - p, py + p * 2, p, p);

        ctx.fillStyle = '#bca080';
        ctx.fillRect(px + p, py + p * 2, p * 6, p);
        ctx.fillRect(px, py + p * 3, s, p * 5);

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(px + p, py + p * 4, p * 2, p);
        ctx.fillRect(px + p * 5, py + p * 4, p * 2, p);

        ctx.fillStyle = '#5240ce';
        ctx.fillRect(px + p * 2, py + p * 4, p, p);
        ctx.fillRect(px + p * 5, py + p * 4, p, p);

        ctx.fillStyle = '#8c6753';
        ctx.fillRect(px + p * 3, py + p * 5, p * 2, p);

        ctx.fillStyle = '#513a29';
        ctx.fillRect(px + p * 2, py + p * 6, p * 4, p);
    },
    drawExit: (ctx, px, py, cellSize) => {
        // draw Chest
        px = px + cellSize * 0.1;
        py = py + cellSize * 0.1;
        const s = cellSize * 0.8;

        ctx.fillStyle = '#a66a1a';
        ctx.fillRect(px, py, s, s);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = Math.max(1, s * 0.05);
        ctx.strokeRect(px, py, s, s);

        ctx.beginPath();
        ctx.moveTo(px, py + s * 0.4);
        ctx.lineTo(px + s, py + s * 0.4);
        ctx.stroke();

        ctx.strokeStyle = '#6e450f';
        ctx.lineWidth = Math.max(1, s * 0.02);
        ctx.beginPath();
        for (let i = 1; i < 4; i++) {
            ctx.moveTo(px + s * (i / 4), py + s * 0.4);
            ctx.lineTo(px + s * (i / 4), py + s);
        }
        ctx.stroke();

        ctx.fillStyle = '#cccccc';
        const lockS = s * 0.2;
        const lx = px + s / 2 - lockS / 2;
        const ly = py + s * 0.4 - lockS / 2;
        ctx.fillRect(lx, ly, lockS, lockS);

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = Math.max(1, s * 0.03);
        ctx.strokeRect(lx, ly, lockS, lockS);
    },
    drawSolution: (ctx, px, py, cellSize) => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(px + cellSize / 2, py + cellSize / 2, cellSize * 0.15, 0, Math.PI * 2);
        ctx.fill();
    }
};
