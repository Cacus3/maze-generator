# Maze Generator

A web application built with kids (and parents!) in mind. It allows you to generate completely unique, print-ready mazes in seconds, perfect for solving with a pencil on paper. Built with modern web technologies.

---

## Key Features

- **Infinite Layouts:** Every click generates a structurally perfect maze with exactly one valid path to the finish line, using the *Recursive Backtracker* algorithm.
- **Adjustable Dimensions:** Change the width and height seamlessly – from simple grids (e.g., 10x10) for a quick warmup, to massive, dense puzzles (up to 50x50).
- **Print-Ready Mode:** Designed specifically for home printers (A4 format). When you press `Ctrl+P` (Print), the entire UI (sidebar, backgrounds, buttons) automatically hides, saving you a lot of ink and leaving only a clean maze on the page.
- **8 Unique Thematic Styles:**
  - **Classic:** Minimalist black-and-white layout – perfectly readable and super printer-friendly.
  - **Pixel World:** Gray stone path surrounded by mossy grass blocks, featuring a blocky character and a diamond chest.
  - **Space:** Steel space station walls, flying UFOs, and a wormhole portal at the finish line.
  - **Circuit Board:** Green motherboards, golden solder joints, screws and heavy machinery.
  - **Dinosaurs:** Dense jungle with hidden dinosaur eggs, a giant T-Rex at the start, and ancient fossils at the end.
  - **Ocean:** Underwater retro waves, green seaweed, a yellow submarine, and air bubbles rising from the reef.
  - **Castle:** True Medieval times – thick stone walls, burning torches, a royal red carpet, and a golden crown.
  - **City Racing:** Dark, smooth asphalt and a bird's-eye view of city rooftops featuring roof gardens and blue solar panels.

## Technology Stack

- **Vite + React.js** – For fast state management and UI responsiveness.
- **TypeScript** – Ensuring strict typing, developer experience, and project stability.
- **HTML5 Canvas API** – Every maze block (including complex sprites like gears, dinosaurs, or vines) is drawn dynamically directly on the Canvas context, ensuring smooth performance even with massive maze dimensions.
- **Custom Rendering Engine:** A highly uncoupled structure separating the drawing logic into the `src/renderers` directory.

## Modular Architecture (Add Your Own World!)

The app is highly generic. You don't have to touch any React code to create your own visual "World".
Just look into the `/src/renderers/` directory. To create a new map theme, you only need to implement the `ThemeRenderer` interface, which consists of four simple pixel-drawing functions:
- `drawWall`
- `drawPath`
- `drawEntrance`
- `drawExit`

Register it in `themes.ts` and the app will handle the rest!

## Running Locally

Clone this repository to your computer and enjoy generating your own mazes entirely offline:

```bash
# Clone the project
git clone https://github.com/Cacus3/maze-generator.git

# Navigate into the directory
cd maze-generator

# Install dependencies
npm install

# Start the development server (available at localhost:5173)
npm run dev
```

Open the provided URL in your browser (usually `http://localhost:5173`), pick your child's favorite style, and hit the `Print` button!

> **Note:** This application was proudly generated with the assistance of an advanced AI coding agent!