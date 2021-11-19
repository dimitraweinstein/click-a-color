import React, {  useState} from 'react'

const Toolbar = () => {
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
