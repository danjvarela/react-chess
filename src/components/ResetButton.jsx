import {Button} from "@material-tailwind/react";
import {useChess} from "contexts/chessContext";

const ResetButton = ({onClick}) => {
  const {gameOver, setGameOver, resetBoard} = useChess();

  const reset = () => {
    setGameOver(null);
    resetBoard();
  };

  if (!gameOver) return null;

  return (
    <Button variant="filled" color="green" onClick={reset || onClick} className="w-full">
      <span>Reset Board</span>
    </Button>
  );
};

export default ResetButton;
