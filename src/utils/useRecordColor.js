import { useState } from 'react';

export const useRecordColor = (initialColor) => {
  const [ currentColor, setCurrentColor ] = useState(initialColor);
  const [ history, setHistory ] = useState([ initialColor ]);
  const [ currentIndex, setCurrentIndex ] = useState(0);

  const recordColor = (brandNewColor) => {
    const Index = currentIndex + 1;
    history.splice(Index, 0, brandNewColor);
    setCurrentIndex(Index);
    setCurrentColor(brandNewColor);
    setHistory(history);
  };

  const undoColor = () => {
    if (currentIndex > 0) {
      const previousColor = history[ currentIndex - 1 ];
      setCurrentColor(previousColor);
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  }

  const redoColor = () => {
    const previousHistory = history.slice();
    if (currentIndex < (previousHistory.length - 1)) {
      const target = history[ currentIndex + 1 ];
      setCurrentColor(target);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  }

  return { currentColor, undoColor, redoColor, recordColor };
};