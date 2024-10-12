// app/components/EvaluationPanel.tsx
import { Move } from 'chess.js';
import React from 'react';

interface EvaluationPanelProps {
  currentMove: number;
  evaluation: string | null;
  history: Move[];
}

const EvaluationPanel: React.FC<EvaluationPanelProps> = ({ currentMove, evaluation, history }) => {
  return (
    <div className="evaluation-panel" style={{ flex: 1, paddingLeft: '20px' }}>
      <h2>Move {currentMove + 1}</h2>
      <h3>Evaluation: {evaluation}</h3>
      <ul>
        {history.map((move, index) => (
          <li key={index} style={{ color: currentMove === index ? 'blue' : 'black' }}>
            {index + 1}: {move.san}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EvaluationPanel;
