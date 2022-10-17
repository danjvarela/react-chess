import {useDroppable} from "@dnd-kit/core";
import {useChess} from "contexts/chessContext";
import PawnPromotionOptions from "./PawnPromotionOptions";
import PhantomCell from "./PhantomCell";

const Cell = ({isBlack, square, piece}) => {
  const {isAtTheLeft, isAtTheBottom} = useChess();

  // make this cell a droppable item for the pieces
  const {isOver, setNodeRef} = useDroppable({
    id: square,
  });

  const cellColor = isBlack ? "bg-yellow-800" : "bg-amber-100";

  return (
    <div
      className={`${cellColor} w-full h-full flex justify-center items-center relative`}
      ref={setNodeRef}
    >
      <PhantomCell square={square} isOver={isOver} />
      <PawnPromotionOptions square={square} />
      <span className="absolute top-0 left-1">{isAtTheLeft(square) && square[1]}</span>
      {piece}
      <span className="absolute bottom-0 right-1">
        {isAtTheBottom(square) && square[0]}
      </span>
    </div>
  );
};

export default Cell;
