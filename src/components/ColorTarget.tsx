import React, { useState } from 'react';

interface ColorTargetProps {
  colorChoice: string;
  // historyCallback: (args: unknown) => void;
}

const ColorTarget = ({ colorChoice }: ColorTargetProps): JSX.Element => {

  const [targetColor, setTargetColor] = useState('#FFFFFF');

  const handleColorSelection = (): void => {
    // historyCallback(targetColor);
    setTargetColor(colorChoice);
  }

  return (
    <div
      className="target"
      onClick={handleColorSelection}
      style={{
      height: '450px',
      width: '500px',
      backgroundColor: targetColor,
      border: '3px solid black',
    }}>
    </div>
  )
}

export default ColorTarget;
