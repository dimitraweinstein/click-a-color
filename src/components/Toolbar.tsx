import React, { ChangeEvent, useState } from "react";

function Toolbar(): JSX.Element {
  const [activeColor, setActiveColor] = useState("#FFFFFF");

  const handleColorPickerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActiveColor(e.target.value);
  };

  return (
    <div>
      <input
        type="color"
        value={activeColor}
        onChange={handleColorPickerChange}
      />
      
      <select>
        <option>Option 2</option>
      </select>
    </div>
  );
}

export default Toolbar;
