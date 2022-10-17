import Stopwatch from "./Stopwatch";
import Player from "./Player";
import {useChess} from "contexts/chessContext";

const PlayerInfo = ({name}) => {
  const {chess} = useChess();

  const unicodes = {
    K: "\u2654",
    k: "\u2655",
    Q: "\u2655",
    q: "\u265B",
    R: "\u2656",
    r: "\u265C",
    B: "\u2657",
    b: "\u265D",
    N: "\u2658",
    n: "\u265E",
    P: "\u2659",
    p: "\u265F",
  };

  return (
    <>
      <div className="flex justify-between items-start">
        <div className="flex-col justify-center item-start">
          <Player name={name} />
          <div className="captured-pieces text-3xl flex">
            {name === "Player2" &&
              chess
                .history({verbose: true})
                .map(({captured, color, san}) =>
                  color === "w" ? <div key={san}>{unicodes[captured]}</div> : null
                )}

            {name === "Player1" &&
              chess.history({verbose: true}).map(({captured, color, san}) =>
                color === "b" ? (
                  <div className="text-white" key={san}>
                    {unicodes[captured?.toUpperCase()]}
                  </div>
                ) : null
              )}
          </div>
        </div>
        <Stopwatch />
      </div>
    </>
  );
};

export default PlayerInfo;
