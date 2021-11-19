import React, { useState } from 'react';
import ColorTarget from '../components/ColorTarget';
// import Toolbar from '../components/Toolbar';

function ColoringBook(): JSX.Element{
  const [activeColor, setActiveColor] = useState('#FFFFFF');
  const [history, setHistory] = useState<unknown[]>([]);

  const handleSelectionHistory = (newColor: unknown) => {
    setHistory([...history, newColor])
  }


  return (
    <div>
      {/* <Toolbar /> */}
      <div>
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setActiveColor(e.target.value)}
      />
      <button>Undo</button>
      <button>Redo</button>
      <select>
        <option>Option 2</option>
      </select>
    </div>
      <div style={{display: 'flex'}}>
        <ColorTarget
          historyCallback={handleSelectionHistory}
          colorChoice={activeColor}
        />
        <ColorTarget
          historyCallback={handleSelectionHistory}
          colorChoice={activeColor}
        />
        <ColorTarget
          historyCallback={handleSelectionHistory}
          colorChoice={activeColor}
        />
        <ColorTarget
          historyCallback={handleSelectionHistory}
          colorChoice={activeColor}
        />
      </div>
    </div>
  )
  }

export default ColoringBook
