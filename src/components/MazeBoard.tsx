import React, { useEffect, useRef } from 'react';
import type { Maze } from '../utils/mazeGenerator';
import type { ThemeId } from '../styles/themes';
import { renderers } from '../renderers';

interface MazeBoardProps {
    maze: Maze;
    theme: ThemeId;
}

export const MazeBoard: React.FC<MazeBoardProps> = ({ maze, theme }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !maze || maze.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const height = maze.length;
        const width = maze[0].length;

        // We convert the line-based maze into a block-based tilemap
        const gridCols = width * 2 + 1;
        const gridRows = height * 2 + 1;

        // High-res logical dimensions for good print quality
        const MAX_CANVAS_WIDTH = 2000;
        const MAX_CANVAS_HEIGHT = 2800; // Roughly A4 proportions

        const cellSizeX = Math.floor(MAX_CANVAS_WIDTH / gridCols);
        const cellSizeY = Math.floor(MAX_CANVAS_HEIGHT / gridRows);
        const cellSize = Math.min(cellSizeX, cellSizeY, 80);

        canvas.width = gridCols * cellSize;
        canvas.height = gridRows * cellSize;

        // Convert maze to a tile map: true = wall, false = path
        const tileMap = Array(gridRows).fill(null).map(() => Array(gridCols).fill(true));

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const cell = maze[y][x];
                const cx = x * 2 + 1;
                const cy = y * 2 + 1;

                tileMap[cy][cx] = false; // center is always path

                // carve paths if there are no walls
                if (!cell.walls.top) tileMap[cy - 1][cx] = false;
                if (!cell.walls.bottom) tileMap[cy + 1][cx] = false;
                if (!cell.walls.left) tileMap[cy][cx - 1] = false;
                if (!cell.walls.right) tileMap[cy][cx + 1] = false;
            }
        }

        // Open entrance and exit in tile map
        tileMap[1][0] = false;
        tileMap[gridRows - 2][gridCols - 1] = false;

        // Retrieve active renderer
        const renderer = renderers[theme];

        // Background clearing
        ctx.fillStyle = renderer.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw the main maze blocks
        for (let ry = 0; ry < gridRows; ry++) {
            for (let rx = 0; rx < gridCols; rx++) {
                const isWall = tileMap[ry][rx];
                const px = rx * cellSize;
                const py = ry * cellSize;

                // Seeded random for consistent detail generation
                const hash = Math.sin(rx * 12.9898 + ry * 78.233) * 43758.5453;
                const rand = hash - Math.floor(hash);

                if (isWall) {
                    renderer.drawWall(ctx, px, py, cellSize, rand);
                } else {
                    renderer.drawPath(ctx, px, py, cellSize, rand);
                }
            }
        }

        // Draw entrance and exit markers
        renderer.drawEntrance(ctx, 0 * cellSize, 1 * cellSize, cellSize);
        renderer.drawExit(ctx, (gridCols - 1) * cellSize, (gridRows - 2) * cellSize, cellSize);

    }, [maze, theme]);

    return (
        <div className="maze-container">
            <canvas ref={canvasRef} className="maze-canvas" />
        </div>
    );
};
