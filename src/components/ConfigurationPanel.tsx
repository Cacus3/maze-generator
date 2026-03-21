import React from 'react';
import { themes } from '../styles/themes';
import type { ThemeId } from '../styles/themes';

interface ConfigurationPanelProps {
    width: number;
    height: number;
    theme: ThemeId;
    showSolution: boolean;
    onWidthChange: (w: number) => void;
    onHeightChange: (h: number) => void;
    onThemeChange: (t: ThemeId) => void;
    onSolutionToggle: (s: boolean) => void;
    onGenerate: () => void;
    onPrint: () => void;
}

export const ConfigurationPanel: React.FC<ConfigurationPanelProps> = ({
    width, height, theme, showSolution, onWidthChange, onHeightChange, onThemeChange, onSolutionToggle, onGenerate, onPrint
}) => {
    return (
        <div className="config-panel no-print">
            <h2>Configuration</h2>
            <div className="form-group">
                <label>Width (columns): {width}</label>
                <input type="range" min="5" max="50" value={width} onChange={e => onWidthChange(Number(e.target.value))} />
            </div>
            <div className="form-group">
                <label>Height (rows): {height}</label>
                <input type="range" min="5" max="50" value={height} onChange={e => onHeightChange(Number(e.target.value))} />
            </div>
            <div className="form-group">
                <label>Theme:</label>
                <select value={theme} onChange={e => onThemeChange(e.target.value as ThemeId)}>
                    {Object.values(themes).map(t => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                    ))}
                </select>
            </div>
            <div className="form-group checkbox-group">
                <label>
                    <input 
                        type="checkbox" 
                        checked={showSolution} 
                        onChange={e => onSolutionToggle(e.target.checked)} 
                    />
                    Show solution
                </label>
            </div>
            <div className="button-group">
                <button onClick={onGenerate} className="btn-primary">Generate New</button>
                <button onClick={onPrint} className="btn-secondary">Print / Save PDF</button>
            </div>
        </div>
    );
};
