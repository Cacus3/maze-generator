import type { ThemeRenderer } from './types';

export const dinoRenderer: ThemeRenderer = {
    backgroundColor: '#78350f', // Dirt background
    drawWall: (ctx, px, py, cellSize, rand) => {
        // Jungle leaves
        ctx.fillStyle = '#14532d'; // Dark green base
        ctx.fillRect(px, py, cellSize, cellSize);

        ctx.fillStyle = '#166534'; // Lighter leaves
        ctx.beginPath(); ctx.arc(px + cellSize * 0.3, py + cellSize * 0.3, cellSize * 0.3, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(px + cellSize * 0.7, py + cellSize * 0.7, cellSize * 0.4, 0, Math.PI * 2); ctx.fill();

        // Vines
        ctx.strokeStyle = '#15803d';
        ctx.lineWidth = Math.max(1, cellSize * 0.05);
        ctx.beginPath();
        ctx.moveTo(px + cellSize * 0.2, py);
        ctx.bezierCurveTo(px + cellSize * 0.4, py + cellSize * 0.5, px, py + cellSize, px + cellSize * 0.5, py + cellSize);
        ctx.stroke();

        // Dino eggs hidden in leaves
        if (rand < 0.05) {
            ctx.fillStyle = '#e2e8f0'; // Egg white
            ctx.beginPath(); ctx.ellipse(px + cellSize * 0.5, py + cellSize * 0.5, cellSize * 0.15, cellSize * 0.2, 0, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = '#16a34a'; // Green spots
            ctx.fillRect(px + cellSize * 0.45, py + cellSize * 0.45, cellSize * 0.05, cellSize * 0.05);
            ctx.fillRect(px + cellSize * 0.5, py + cellSize * 0.55, cellSize * 0.05, cellSize * 0.05);
        }
    },
    drawPath: (ctx, px, py, cellSize) => {
        // Solid dirt path
        ctx.fillStyle = '#92400e';
        ctx.fillRect(px, py, cellSize, cellSize);
    },
    drawEntrance: (ctx, px, py, cellSize) => {
        // T-Rex head
        const s = cellSize * 0.8;
        px += (cellSize - s) / 2;
        py += (cellSize - s) / 2;

        ctx.fillStyle = '#16a34a'; // Green dino
        ctx.fillRect(px, py + s * 0.2, s * 0.6, s * 0.6); // Neck/head back
        ctx.fillRect(px + s * 0.4, py + s * 0.2, s * 0.6, s * 0.3); // Snout
        ctx.fillRect(px + s * 0.4, py + s * 0.6, s * 0.4, s * 0.2); // Lower jaw

        ctx.fillStyle = '#ffffff'; // Eye
        ctx.fillRect(px + s * 0.4, py + s * 0.3, s * 0.1, s * 0.1);
        ctx.fillStyle = '#000000'; // Pupil
        ctx.fillRect(px + s * 0.45, py + s * 0.35, s * 0.05, s * 0.05);

        ctx.fillStyle = '#ffffff'; // Teeth
        ctx.beginPath();
        for (let i = 0; i < 3; i++) {
            ctx.moveTo(px + s * 0.5 + i * s * 0.15, py + s * 0.5);
            ctx.lineTo(px + s * 0.575 + i * s * 0.15, py + s * 0.6);
            ctx.lineTo(px + s * 0.65 + i * s * 0.15, py + s * 0.5);
        }
        ctx.fill();
    },
    drawExit: (ctx, px, py, cellSize) => {
        // Giant Bone / Fossil
        const s = cellSize * 0.8;
        px += (cellSize - s) / 2;
        py += (cellSize - s) / 2;

        ctx.fillStyle = '#f8fafc'; // White bone
        ctx.beginPath(); ctx.arc(px + s * 0.2, py + s * 0.2, s * 0.15, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(px + s * 0.2, py + s * 0.8, s * 0.15, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(px + s * 0.8, py + s * 0.2, s * 0.15, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(px + s * 0.8, py + s * 0.8, s * 0.15, 0, Math.PI * 2); ctx.fill();

        // Bone shaft (diagonal)
        ctx.save();
        ctx.translate(px + s / 2, py + s / 2);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-s * 0.15, -s * 0.4, s * 0.3, s * 0.8);
        ctx.restore();
    },
    drawSolution: (ctx, px, py, cellSize) => {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.beginPath();
        ctx.arc(px + cellSize / 2, py + cellSize / 2, cellSize * 0.15, 0, Math.PI * 2);
        ctx.fill();
    }
};
