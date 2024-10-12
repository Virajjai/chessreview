// app/utils/stockfishAPI.ts

type StockfishResponse = {
    bestmove: string;
    evaluation: number;
    mate: number | null;
    continuation: string;
  };
  
  export const fetchStockfishEvaluation = async (fen: string, depth: number = 16): Promise<StockfishResponse> => {
    const response = await fetch(
      `https://stockfish.online/api/s/v2.php?fen=${encodeURIComponent(fen)}&depth=${depth}`
    );
  
    const data = await response.json();
  
    if (!data.success) {
      throw new Error('Stockfish API error');
    }
  
    return {
      bestmove: data.bestmove,
      evaluation: data.evaluation,
      mate: data.mate,
      continuation: data.continuation,
    };
  };
  