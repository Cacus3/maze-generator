import type { ThemeRenderer } from './types';

export const classicRenderer: ThemeRenderer = {
    backgroundColor: '#ffffff',
    drawWall: (ctx, px, py, cellSize) => {
        ctx.fillStyle = '#000000';
        ctx.fillRect(px, py, cellSize, cellSize);
    },
    drawPath: (ctx, px, py, cellSize) => {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(px, py, cellSize, cellSize);
    },
    drawEntrance: (ctx, px, py, cellSize) => {
        ctx.fillStyle = '#10B981'; // Green
        ctx.fillRect(px, py, cellSize, cellSize);
    },
    drawExit: (ctx, px, py, cellSize) => {
        ctx.fillStyle = '#EF4444'; // Red
        ctx.fillRect(px, py, cellSize, cellSize);
    },
    drawSolution: (ctx, px, py, cellSize) => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.beginPath();
        ctx.arc(px + cellSize / 2, py + cellSize / 2, cellSize * 0.2, 0, Math.PI * 2);
        ctx.fill();
    }
};
