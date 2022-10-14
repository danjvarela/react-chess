import {useDroppable} from "@dnd-kit/core";
import PawnPromotionOptions from "./PawnPromotionOptions";

const Cell = ({isBlack, square, piece}) => {
  // make this cell a droppable item for the pieces
  const {isOver, setNodeRef} = useDroppable({
    id: square,
  });

  // conditional styles
  const borderWidth = isOver ? "border-4" : null;
  const cellColor = isBlack ? "bg-yellow-700" : "bg-orange-300";

  return (
    <div
      className={`${cellColor} w-full h-full flex justify-center items-center ${borderWidth} relative`}
      ref={setNodeRef}
    >
      <PawnPromotionOptions square={square} />
      {piece}
    </div>
  );
};

export default Cell;
