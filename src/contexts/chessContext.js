import {createContext, useCallback, useContext, useEffect, useState} from "react";
import {Chess} from "chess.js";

const ChessContext = createContext();

const useChess = () => useContext(ChessContext);

// returns the pgn position of the cell,
// ie. e4, e5, f4, h6 ...
const getPositionFromIndex = (index) => {
  const row = Math.floor(index / 8);
  const col = index % 8;
  const colStr = "abcdefgh";
  return `${colStr[col]}${8 - row}`;
};

// returns the PGN code of a piece
// ie. black king is k, white king is K ...
const getPGNCode = (type, color) => (color === "w" ? type.toUpperCase() : type);

// returns if the square is at the top or bottom row
// ie. e1 is at the bottom row while e8 is at the top row
const isAtTheTop = (square) => square.includes("8");
const isAtTheBottom = (square) => square.includes("1");
const isAtTheLeft = (square) => square.includes("a");

// FEN's for testing:
// Stalemate: "8/6p1/5p2/7K/4k2P/8/8/8 b - - 0 66"
// One move mate (black to move): "rnbqkbnr/pppp1ppp/8/4p3/5PP1/8/PPPPP2P/RNBQKBNR b KQkq g3 0 2"
// Pawn Promotion: "8/PPPPPP1k/8/8/8/8/pppppp1K/8 w - - 0 1"

// main chess context
// this exposes a couple of functions and data from the chess.js library
const ChessProvider = ({children}) => {
  const [chess] = useState(new Chess());
  const [squares, setSquares] = useState(chess.board().flat());
  const [pawnPromotion, setPawnPromotion] = useState(null);
  const [possibleMoves, setPossibleMoves] = useState([]);
  const [gameOver, setGameOver] = useState(null);
  const [kingSquare, setKingSquare] = useState({w: "e1", b: "e8"});
  const [playerRemainingTime, setPlayerRemainingTime] = useState({w: 105000, b: 105000});

  const resetBoard = useCallback(() => {
    chess.reset();
    setSquares(chess.board().flat());
  }, []);

  // gets the winner, returns null if there is none
  const getWinner = useCallback(() => {
    // game is not yet over
    if (!chess.isGameOver()) return null;
    // game is over but it is a draw
    if (chess.isDraw()) return null;
    // one of the players is checkmated
    return chess.turn() === "w" ? "b" : "w";
  }, [squares]);

  useEffect(() => {
    if (chess.isGameOver()) {
      setGameOver({
        winner: getWinner(),
        gameOver: true,
        checkmate: chess.isCheckmate(),
        threefoldRepetition: chess.isThreefoldRepetition(),
        stalemate: chess.isStalemate(),
        draw: chess.isDraw(),
        insufficientMaterial: chess.isInsufficientMaterial(),
      });
    }
  }, [squares]);

  return (
    <ChessContext.Provider
      value={{
        chess,
        getPositionFromIndex,
        getPGNCode,
        setPossibleMoves,
        possibleMoves,
        pawnPromotion,
        setPawnPromotion,
        isAtTheTop,
        isAtTheBottom,
        squares,
        setSquares,
        isAtTheLeft,
        gameOver,
        setGameOver,
        resetBoard,
        kingSquare,
        setKingSquare,
        playerRemainingTime,
        setPlayerRemainingTime,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
};

export {ChessProvider, useChess};
