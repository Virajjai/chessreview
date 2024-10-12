// app/components/GameReview.tsx

import React, { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess,Move } from 'chess.js';
import EvaluationPanel from './EvaluationPanel';
import BoardControls from './BoardControls';

const GameReview: React.FC = () => {
  const [game, setGame] = useState(new Chess());
  const [history, setHistory] = useState<Move[]>([]);
  const [currentMove, setCurrentMove] = useState(0);
  const [evaluation, setEvaluation] = useState<string | null>(null);

  useEffect(() => {
    const history = game.history({ verbose: true });
    setHistory(history);
  }, [game]);

  const onPieceDrop = (sourceSquare: string, targetSquare: string): boolean => {
    const gameCopy = new Chess(game.fen());
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });

    if (move === null) {
      return false;
      console.log(evaluation,setEvaluation)
    } else {
      setGame(gameCopy);
      return true;
    }
  };

  const evaluateMoveQuality = (moveIndex: number) => {
    // Placeholder logic to evaluate the quality of the move.
    const moveEval = ['Good', 'Brilliant', 'Best Move', 'Inaccuracy', 'Mistake', 'Blunder'];
    return moveEval[moveIndex % moveEval.length];
  };

  return (
    <div className="game-review-container " style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="chessboard-container" style={{ flex: 1 }}>
        <Chessboard
          position={game.fen()}
          onPieceDrop={onPieceDrop}
          boardWidth={350}
        />
        <BoardControls
          currentMove={currentMove}
          totalMoves={history.length}
          onPrev={() => {
            if (currentMove > 0) {
              setCurrentMove(currentMove - 1);
              game.undo();
              setGame(new Chess(game.fen()));
            }
          }}
          onNext={() => {
            if (currentMove < history.length) {
              setCurrentMove(currentMove + 1);
              game.move(history[currentMove]);
              setGame(new Chess(game.fen()));
            }
          }}
        />
      </div>
      <EvaluationPanel
        currentMove={currentMove}
        evaluation={evaluateMoveQuality(currentMove)}
        history={history}
      />
    </div>
  );
};

export default GameReview;
