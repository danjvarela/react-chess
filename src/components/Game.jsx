import Chessboard from "components/Chessboard";
import PlayerInfo from "./PlayerInfo";
import {ChessProvider} from "contexts/chessContext";
import GameOverModal from "./GameOverModal";
import ResetButton from "./ResetButton";
import GameMenu from "./GameMenu";

const Game = () => {
  return (
    <ChessProvider>
      <div className="w-11/12 md:w-4/5 max-w-lg h-auto flex flex-col gap-3 relative">
        <GameMenu />
        <GameOverModal />
        <PlayerInfo name="Player1" color="b" />
        <Chessboard />
        <PlayerInfo name="Player2" color="w" />
        <div className="flex justify-end">
          <ResetButton />
        </div>
      </div>
    </ChessProvider>
  );
};

export default Game;
