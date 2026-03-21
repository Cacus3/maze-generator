export interface ThemeRenderer {
    backgroundColor: string;
    drawWall: (ctx: CanvasRenderingContext2D, px: number, py: number, cellSize: number, rand: number) => void;
    drawPath: (ctx: CanvasRenderingContext2D, px: number, py: number, cellSize: number, rand: number) => void;
    drawEntrance: (ctx: CanvasRenderingContext2D, px: number, py: number, cellSize: number) => void;
    drawExit: (ctx: CanvasRenderingContext2D, px: number, py: number, cellSize: number) => void;
    drawSolution: (ctx: CanvasRenderingContext2D, px: number, py: number, cellSize: number) => void;
}
