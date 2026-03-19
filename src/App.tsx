import { useState, useCallback, useEffect } from 'react';
import { ConfigurationPanel } from './components/ConfigurationPanel';
import { MazeBoard } from './components/MazeBoard';
import { generateMaze } from './utils/mazeGenerator';
import type { Maze } from './utils/mazeGenerator';
import type { ThemeId } from './styles/themes';
import './index.css';

function App() {
  const [width, setWidth] = useState(15);
  const [height, setHeight] = useState(15);
  const [theme, setTheme] = useState<ThemeId>('voxel');
  const [maze, setMaze] = useState<Maze | null>(null);

  const handleGenerate = useCallback(() => {
    setMaze(generateMaze(width, height));
  }, [width, height]);

  // Initial generation
  useEffect(() => {
    handleGenerate();
  }, [handleGenerate]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      <header className="app-header no-print">
        <h1>Maze Generator</h1>
        <p>Create, customize, and print a maze for your child!</p>
      </header>

      <main className="app-content">
        <aside className="sidebar no-print">
          <ConfigurationPanel
            width={width}
            height={height}
            theme={theme}
            onWidthChange={setWidth}
            onHeightChange={setHeight}
            onThemeChange={setTheme}
            onGenerate={handleGenerate}
            onPrint={handlePrint}
          />
        </aside>

        <section className="maze-section">
          {maze && <MazeBoard maze={maze} theme={theme} />}
        </section>
      </main>
    </div>
  );
}

export default App;
