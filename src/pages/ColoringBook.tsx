import React, { useState } from 'react';
import Magician from '../assets/Magician';
import Toolbar from '../components/Toolbar';
import { useRecordColor }from '../utils/useRecordColor';

function ColoringBook(): JSX.Element {
  
  const [selectedColor, setSelectedColor] = useState('#FFFFFF');
  const [pathFill, setPathFill] = useState('#FFFFFF')
  const { currentColor, undoColor, redoColor, recordColor } = useRecordColor();

  const handleColorClick = () => {
    setSelectedColor('#ff0000');
    setPathFill(selectedColor);
  }


  return (
    <div>
      <Toolbar />
      <div style={{display: 'flex'}}>
        <Magician
          handleColorClick={handleColorClick}
          pathColor={pathFill}
        />
      </div>
    </div>
  )
  }

export default ColoringBook
