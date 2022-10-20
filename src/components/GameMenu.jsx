import {Button} from "@material-tailwind/react";
import {useChess} from "contexts/chessContext";
import StartGameMenu from "./StartGameMenu";

const GameMenu = () => {
  const {resetBoard, setPlayerRemainingTime} = useChess();

  return (
    <div className="absolute left-full top-0 px-10 pt-9 w-1/2 flex flex-col gap-4">
      <StartGameMenu />
      <Button className="w-full" color="green" onClick={resetBoard}>
        Reset Board
      </Button>
    </div>
  );
};

export default GameMenu;
