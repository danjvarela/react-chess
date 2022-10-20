import {useState, useMemo} from "react";
import {Dialog, DialogBody, DialogFooter, DialogHeader} from "@material-tailwind/react";
import {useChess} from "contexts/chessContext";
import ResetButton from "./ResetButton";

const GameOverModal = () => {
  const [open, setOpen] = useState(true);
  const {gameOver, setGameOver, chess, resetBoard} = useChess();

  const {draw, stalemate, threefoldRepetition, insufficientMaterial, winner, timeRanOut} =
    useMemo(() => gameOver ?? {}, [gameOver]);

  const currentPlayer = useMemo(
    () => (chess.turn() === "w" ? "White" : "Black"),
    [gameOver]
  );

  const winningPlayer = useMemo(() => (winner === "w" ? "White" : "Black"), [winner]);

  const title = useMemo(() => {
    if (draw) return "Draw!";
    if (winner) return `${winningPlayer} wins!`;
    return "";
  }, [gameOver]);

  const description = useMemo(() => {
    if (draw) {
      if (stalemate)
        return `Stalemate: There is no check but there is also no available moves for ${currentPlayer}.`;
      if (threefoldRepetition) return "The same move has been repeated 3 times.";
      if (insufficientMaterial)
        return "There is an insufficient amount of material on the board to cause a checkmate.";
      return "";
    }
    if (winner) {
      if (timeRanOut) return `${currentPlayer} ran out of time.`;
      return `${winningPlayer} checkmated ${currentPlayer}`;
    }
    return "";
  }, [gameOver]);

  const handleReset = () => {
    setOpen(!open);
    setGameOver(null);
    resetBoard();
  };

  return (
    <>
      <Dialog
        open={open && !!gameOver}
        handler={() => setOpen(!open)}
        className="bg-gray-900"
      >
        <DialogHeader className="text-gray-100">{title}</DialogHeader>
        <DialogBody className="text-gray-200">{description}</DialogBody>
        <DialogFooter>
          <ResetButton onClick={handleReset} />
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default GameOverModal;
