import React, {  useState} from 'react'

function Toolbar(): JSX.Element {
  const [activeColor, setActiveColor] = useState('#FFFFFF');

  return (
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
  )
}

export default Toolbar
