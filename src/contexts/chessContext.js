import {createContext, useContext, useEffect, useState} from "react";
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

// main chess context
// this exposes a couple of functions and data from the chess.js library
const ChessProvider = ({children}) => {
  const [chess] = useState(new Chess("2k5/8/8/8/8/8/1p4Q1/7K b - - 0 1"));
  const [pawnPromotion, setPawnPromotion] = useState(null);

  useEffect(() => {
    console.log(pawnPromotion);
  }, [pawnPromotion]);

  return (
    <ChessContext.Provider
      value={{
        chess,
        getPositionFromIndex,
        getPGNCode,
        pawnPromotion,
        setPawnPromotion,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
};

export {ChessProvider, useChess};
