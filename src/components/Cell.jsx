import {useDroppable} from "@dnd-kit/core";
import {useChess} from "contexts/chessContext";
import {useEffect, useState} from "react";
import PawnPromotionOptions from "./PawnPromotionOptions";

const Cell = ({isBlack, square, piece}) => {
  const {possibleMoves, pawnPromotion} = useChess();
  const [isPossibleMove, setIsPossibleMove] = useState(false);

  useEffect(() => {
    setIsPossibleMove(possibleMoves.includes(square));
  }, [possibleMoves]);

  // make this cell a droppable item for the pieces
  const {isOver, setNodeRef} = useDroppable({
    id: square,
  });

  // conditional styles
  const borderWidth = isOver ? "border-4" : null;
  const cellColor = isBlack ? "bg-yellow-800" : "bg-amber-100";
  // add styling to possible moves exccept for when there is a promotion
  const backDrop =
    isPossibleMove && !pawnPromotion?.square ? `border-2 animate-pulse ` : null;

  return (
    <div
      className={`${cellColor} w-full h-full flex justify-center items-center ${borderWidth} ${backDrop} relative`}
      ref={setNodeRef}
    >
      <PawnPromotionOptions square={square} />
      {piece}
    </div>
  );
};

export default Cell;
