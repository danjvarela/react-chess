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

const ChessProvider = ({children}) => {
  const [chess] = useState(new Chess());
  const [history, setHistory] = useState(chess.history());

  return (
    <ChessContext.Provider
      value={{
        chess,
        getPositionFromIndex,
        getPGNCode,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
};

export {ChessProvider, useChess};
