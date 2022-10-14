import {useState, useMemo, useEffect} from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import {useChess} from "contexts/chessContext";

const GameOverModal = () => {
  const [open, setOpen] = useState(true);
  const {gameOver, chess} = useChess();

  const {draw, stalemate, threefoldRepetition, insufficientMaterial, winner} = useMemo(
    () => gameOver ?? {},
    [gameOver]
  );

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
      return `${winningPlayer} checkmated ${currentPlayer}`;
    }
    return "";
  }, [gameOver]);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open && !!gameOver} handler={handleOpen} className="bg-gray-900">
        <DialogHeader className="text-gray-100">{title}</DialogHeader>
        <DialogBody className="text-gray-200">{description}</DialogBody>
        <DialogFooter>
          <Button
            variant="filled"
            color="blue-gray"
            onClick={handleOpen}
            className="mr-2"
          >
            <span>Reset Board</span>
          </Button>
          <Button variant="filled" color="green" onClick={handleOpen}>
            <span>New Game</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default GameOverModal;
