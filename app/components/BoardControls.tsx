// app/components/BoardControls.tsx

import React from 'react';

interface BoardControlsProps {
  currentMove: number;
  totalMoves: number;
  onPrev: () => void;
  onNext: () => void;
}

const BoardControls: React.FC<BoardControlsProps> = ({ currentMove, totalMoves, onPrev, onNext }) => {
  return (
    <div className="board-controls" style={{ marginTop: '10px' }}>
      <button onClick={onPrev} disabled={currentMove === 0}>
        Previous
      </button>
      <button onClick={onNext} disabled={currentMove === totalMoves}>
        Next
      </button>
    </div>
  );
};

export default BoardControls;
