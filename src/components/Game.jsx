import Chessboard from "components/Chessboard";
import PlayerInfo from "./PlayerInfo";

const Game = () => {
  return (
    <div className="w-11/12 md:w-4/5 max-w-lg h-auto flex flex-col gap-3">
      <PlayerInfo name="Player1" />
      <Chessboard />
      <PlayerInfo name="Player2" />
    </div>
  );
};

export default Game;
