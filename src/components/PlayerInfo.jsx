import Stopwatch from "./Stopwatch";
import Player from "./Player";
import {useChess} from "contexts/chessContext";
import {useEffect} from "react";

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

  const currentTime = new Date().getTime();
  const targetTime = currentTime + 105000;

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
        {name === "Player1" && chess.turn() === "b" && (
          <Stopwatch
            targetTime={targetTime} //piece="w"
          />
        )}
        {name === "Player2" && chess.turn() !== "w" && <Stopwatch />}
        {name === "Player2" && chess.turn() === "w" && (
          <Stopwatch
            targetTime={targetTime} //piece="b"
          />
        )}
        {name === "Player1" && chess.turn() !== "b" && <Stopwatch />}
      </div>
    </>
  );
};

export default PlayerInfo;
