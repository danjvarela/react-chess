import Player from "./Player";
import {useChess} from "contexts/chessContext";
import Stopwatch from "./Stopwatch";
import CapturedPiece from "./CapturedPiece";
import {useMemo} from "react";

const PlayerInfo = ({name, color}) => {
  const {chess, history} = useChess();

  const capturedPieces = useMemo(() => {
    const history = chess.history({verbose: true});

    const pieces = history
      .filter((move) => move.captured) // filter all moves that involves a capture
      .reduce(
        // transform it into {w: [black captured pieces], b: [white captured pieces]}
        (acc, move) => {
          acc[move.color] = [...acc[move.color], move.captured];
          return acc;
        },
        {w: [], b: []}
      );
    return pieces;
  }, [history]);

  return (
    <>
      <div className="flex justify-between items-start">
        <div className="flex-col justify-center item-start">
          <Player name={name} />
          <div className="captured-pieces text-3xl flex">
            {capturedPieces[color].map((piece, index) => (
              <CapturedPiece
                type={piece}
                color={color === "w" ? "b" : "w"}
                key={`captured-${color}-${index}`}
              />
            ))}
          </div>
        </div>
        <Stopwatch color={color} />
      </div>
    </>
  );
};

export default PlayerInfo;
