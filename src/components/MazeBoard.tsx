import React, { useEffect, useRef } from 'react';
import type { Maze } from '../utils/mazeGenerator';
import { solveMaze } from '../utils/mazeGenerator';
import type { ThemeId } from '../styles/themes';
import { renderers } from '../renderers';

interface MazeBoardProps {
    maze: Maze;
    theme: ThemeId;
    showSolution: boolean;
}

export const MazeBoard: React.FC<MazeBoardProps> = ({ maze, theme, showSolution }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !maze || maze.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const height = maze.length;
        const width = maze[0].length;

        const gridCols = width * 2 + 1;
        const gridRows = height * 2 + 1;

        const MAX_CANVAS_WIDTH = 2000;
        const MAX_CANVAS_HEIGHT = 2800;

        const cellSizeX = Math.floor(MAX_CANVAS_WIDTH / gridCols);
        const cellSizeY = Math.floor(MAX_CANVAS_HEIGHT / gridRows);
        const cellSize = Math.min(cellSizeX, cellSizeY, 80);

        canvas.width = gridCols * cellSize;
        canvas.height = gridRows * cellSize;

        const tileMap = Array(gridRows).fill(null).map(() => Array(gridCols).fill(true));

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const cell = maze[y][x];
                const cx = x * 2 + 1;
                const cy = y * 2 + 1;

                tileMap[cy][cx] = false;
                if (!cell.walls.top) tileMap[cy - 1][cx] = false;
                if (!cell.walls.bottom) tileMap[cy + 1][cx] = false;
                if (!cell.walls.left) tileMap[cy][cx - 1] = false;
                if (!cell.walls.right) tileMap[cy][cx + 1] = false;
            }
        }

        tileMap[1][0] = false;
        tileMap[gridRows - 2][gridCols - 1] = false;

        const renderer = renderers[theme];

        ctx.fillStyle = renderer.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let ry = 0; ry < gridRows; ry++) {
            for (let rx = 0; rx < gridCols; rx++) {
                const isWall = tileMap[ry][rx];
                const px = rx * cellSize;
                const py = ry * cellSize;

                const hash = Math.sin(rx * 12.9898 + ry * 78.233) * 43758.5453;
                const rand = hash - Math.floor(hash);

                if (isWall) {
                    renderer.drawWall(ctx, px, py, cellSize, rand);
                } else {
                    renderer.drawPath(ctx, px, py, cellSize, rand);
                }
            }
        }

        renderer.drawEntrance(ctx, 0 * cellSize, 1 * cellSize, cellSize);
        renderer.drawExit(ctx, (gridCols - 1) * cellSize, (gridRows - 2) * cellSize, cellSize);

        if (showSolution) {
            const path = solveMaze(maze);
            if (path.length > 0) {
                renderer.drawSolution(ctx, 0 * cellSize, 1 * cellSize, cellSize);

                for (let i = 0; i < path.length; i++) {
                    const cell = path[i];
                    const cx = cell.x * 2 + 1;
                    const cy = cell.y * 2 + 1;

                    renderer.drawSolution(ctx, cx * cellSize, cy * cellSize, cellSize);

                    if (i < path.length - 1) {
                        const next = path[i + 1];
                        const midX = (cx + (next.x * 2 + 1)) / 2;
                        const midY = (cy + (next.y * 2 + 1)) / 2;
                        renderer.drawSolution(ctx, midX * cellSize, midY * cellSize, cellSize);
                    } else {
                        // Last cell to Exit
                        renderer.drawSolution(ctx, (gridCols - 1) * cellSize, (gridRows - 2) * cellSize, cellSize);
                    }
                }
            }
        }

    }, [maze, theme, showSolution]);

    return (
        <div className="maze-container">
            <canvas ref={canvasRef} className="maze-canvas" />
        </div>
    );
};
