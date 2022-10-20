import Player from "./Player";
import {useChess} from "contexts/chessContext";
import Stopwatch from "./Stopwatch";
import {useMemo} from "react";
import CapturedPieceGroup from "./CapturedPieceGroup";

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
          {capturedPieces[color].length !== 0 ? (
            <div className="flex">
              {["p", "b", "n", "r", "q"].map((val) => (
                <CapturedPieceGroup
                  type={val}
                  color={color}
                  capturedPieces={capturedPieces[color]}
                  key={`captured-group-${val}`}
                />
              ))}
            </div>
          ) : null}
        </div>
        <Stopwatch color={color} />
      </div>
    </>
  );
};

export default PlayerInfo;
