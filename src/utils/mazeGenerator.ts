export type Walls = {
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
};

export type Cell = {
    x: number;
    y: number;
    walls: Walls;
    visited: boolean;
};

export type Maze = Cell[][];

const getUnvisitedNeighbors = (cell: Cell, grid: Maze, width: number, height: number): Cell[] => {
    const neighbors: Cell[] = [];
    const { x, y } = cell;

    if (y > 0 && !grid[y - 1][x].visited) neighbors.push(grid[y - 1][x]); // Top
    if (x < width - 1 && !grid[y][x + 1].visited) neighbors.push(grid[y][x + 1]); // Right
    if (y < height - 1 && !grid[y + 1][x].visited) neighbors.push(grid[y + 1][x]); // Bottom
    if (x > 0 && !grid[y][x - 1].visited) neighbors.push(grid[y][x - 1]); // Left

    return neighbors;
};

const removeWalls = (current: Cell, next: Cell) => {
    const dx = current.x - next.x;
    const dy = current.y - next.y;

    if (dx === 1) {
        current.walls.left = false;
        next.walls.right = false;
    } else if (dx === -1) {
        current.walls.right = false;
        next.walls.left = false;
    }

    if (dy === 1) {
        current.walls.top = false;
        next.walls.bottom = false;
    } else if (dy === -1) {
        current.walls.bottom = false;
        next.walls.top = false;
    }
};

export const generateMaze = (width: number, height: number): Maze => {
    // Initialize grid
    const grid: Maze = [];
    for (let y = 0; y < height; y++) {
        const row: Cell[] = [];
        for (let x = 0; x < width; x++) {
            row.push({
                x,
                y,
                walls: { top: true, right: true, bottom: true, left: true },
                visited: false,
            });
        }
        grid.push(row);
    }

    // Recursive backtracker
    const stack: Cell[] = [];
    const startCell = grid[0][0];
    startCell.visited = true;
    stack.push(startCell);

    while (stack.length > 0) {
        const current = stack.pop()!;
        const neighbors = getUnvisitedNeighbors(current, grid, width, height);

        if (neighbors.length > 0) {
            stack.push(current);
            // Pick random neighbor
            const next = neighbors[Math.floor(Math.random() * neighbors.length)];
            removeWalls(current, next);
            next.visited = true;
            stack.push(next);
        }
    }

    // Open start and end points
    grid[0][0].walls.left = false; // Entrance at top-left
    grid[height - 1][width - 1].walls.right = false; // Exit at bottom-right

    return grid;
};

export const solveMaze = (maze: Maze): Cell[] => {
    if (maze.length === 0 || maze[0].length === 0) return [];

    const height = maze.length;
    const width = maze[0].length;
    const startCell = maze[0][0];
    const endCell = maze[height - 1][width - 1];

    const stack: { cell: Cell; path: Cell[] }[] = [{ cell: startCell, path: [startCell] }];
    const visited = new Set<string>();
    visited.add(`${startCell.x},${startCell.y}`);

    while (stack.length > 0) {
        const { cell, path } = stack.pop()!;

        if (cell.x === endCell.x && cell.y === endCell.y) {
            return path;
        }

        const { x, y } = cell;
        const neighbors: { cell: Cell; wall: keyof Walls }[] = [];

        if (!cell.walls.top && y > 0) neighbors.push({ cell: maze[y - 1][x], wall: 'top' });
        if (!cell.walls.right && x < width - 1) neighbors.push({ cell: maze[y][x + 1], wall: 'right' });
        if (!cell.walls.bottom && y < height - 1) neighbors.push({ cell: maze[y + 1][x], wall: 'bottom' });
        if (!cell.walls.left && x > 0) neighbors.push({ cell: maze[y][x - 1], wall: 'left' });

        for (const neighbor of neighbors) {
            const key = `${neighbor.cell.x},${neighbor.cell.y}`;
            if (!visited.has(key)) {
                visited.add(key);
                stack.push({ cell: neighbor.cell, path: [...path, neighbor.cell] });
            }
        }
    }

    return [];
};
