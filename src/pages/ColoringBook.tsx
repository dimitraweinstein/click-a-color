import React from 'react';
import { useRecordColor } from '../utils/useRecordColor';
import ColorTarget from '../components/ColorTarget';
// import Toolbar from '../components/Toolbar';

function ColoringBook(): JSX.Element {
  // const [activeColor, setActiveColor] = useState('#FFFFFF');
  const { currentColor, redoColor, undoColor, recordColor } = useRecordColor('#FFFFFF')
  // const [history, setHistory] = useState<unknown[]>([]);

  // const handleSelectionHistory = (newColor: unknown) => {
  //   setHistory([...history, newColor])
  // }


  return (
    <div>
      {/* <Toolbar /> */}
      <div>
      <input
          type="color"
          value={currentColor}
          onChange={({ target }) => recordColor(target.value)}
      />
        <button
          onClick={undoColor}
        >Undo</button>
        <button
          onClick={redoColor}
        >Redo</button>
      <select>
        <option>Option 2</option>
      </select>
    </div>
      <div style={{display: 'flex'}}>
        <ColorTarget
          // historyCallback={handleSelectionHistory}
          colorChoice={currentColor}
        />
        <ColorTarget
          // historyCallback={handleSelectionHistory}
          colorChoice={currentColor}
        />
        <ColorTarget
          // historyCallback={handleSelectionHistory}
          colorChoice={currentColor}
        />
        <ColorTarget
          // historyCallback={handleSelectionHistory}
          colorChoice={currentColor}
        />
      </div>
    </div>
  )
  }

export default ColoringBook
