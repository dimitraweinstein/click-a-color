import React from 'react';
import ColorTarget from '../components/ColorTarget';
import Toolbar from '../components/Toolbar';

const ColoringBook = () => {
  return (
    <div>
      <Toolbar />
      <div style={{display: 'flex'}}>
        <ColorTarget />
        <ColorTarget />
        <ColorTarget />
        <ColorTarget />
      </div>
    </div>
  )
}

export default ColoringBook
