// app/types/chessboard.d.ts

declare module 'react-chessboard' {
    import { FC } from 'react';
  
    interface ChessboardProps {
      position?: string;
      onPieceDrop?: (sourceSquare: string, targetSquare: string, piece?: string) => boolean;
      boardWidth?: number;
    }
  
    export const Chessboard: FC<ChessboardProps>;
  }
  