import Stopwatch from "./Stopwatch";
import Player from "./Player";
import {useChess} from "contexts/chessContext";
import pieces from "./pieces";

const PlayerInfo = ({name}) => {
  const {chess} = useChess();

  return (
    <>
      <div className="flex justify-between items-start">
        <Player name={name} />
        <Stopwatch />
      </div>
      <div className="captured-pieces ml-8 -mt-6 flex">
        {name === "Player2" &&
          chess.history({verbose: true}).map(
            ({captured, color, san}) =>
              color === "w" && (
                <div className="-ml-5" key={san}>
                  {" "}
                  {pieces[captured]}{" "}
                </div>
              )
          )}

        {name === "Player1" &&
          chess.history({verbose: true}).map(
            ({captured, color, san}) =>
              color === "b" && (
                <div className="-ml-5" key={san}>
                  {" "}
                  {pieces[captured?.toUpperCase()]}{" "}
                </div>
              )
          )}
      </div>
    </>
  );
};

export default PlayerInfo;
