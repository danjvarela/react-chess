import {useDroppable} from "@dnd-kit/core";
import {useChess} from "contexts/chessContext";
import {useEffect, useState} from "react";
import PawnPromotionOptions from "./PawnPromotionOptions";

const Cell = ({isBlack, square, piece}) => {
  const {possibleMoves, pawnPromotion, isAtTheLeft, isAtTheBottom} = useChess();
  const [isPossibleMove, setIsPossibleMove] = useState(false);

  useEffect(() => {
    setIsPossibleMove(possibleMoves.includes(square));
  }, [possibleMoves]);

  // make this cell a droppable item for the pieces
  const {isOver, setNodeRef} = useDroppable({
    id: square,
  });

  // conditional styles
  const borderColor = !isOver ? "border-transparent" : "";
  const cellColor = isBlack ? "bg-yellow-800" : "bg-amber-100";

  // add styling to possible moves except for when there is a promotion
  const backDrop =
    isPossibleMove && !pawnPromotion?.square ? `border-white animate-pulse ` : "";

  return (
    <div
      className={`${cellColor} w-full h-full flex justify-center items-center border-2 ${borderColor} ${backDrop} relative`}
      ref={setNodeRef}
    >
      <PawnPromotionOptions square={square} />
      <span className="absolute top-0 left-0"> {isAtTheLeft(square) && square[1]} </span>
      {piece}
      <span className="absolute bottom-0 right-0">
        {" "}
        {isAtTheBottom(square) && square[0]}{" "}
      </span>
    </div>
  );
};

export default Cell;
