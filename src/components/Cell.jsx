import {useDroppable} from "@dnd-kit/core";
import {Typography} from "@material-tailwind/react";
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
      <Typography className="absolute top-0 left-1" variant="h6">
        {isAtTheLeft(square) && square[1]}
      </Typography>
      {piece}
      <Typography className="absolute bottom-0 right-1" variant="h6">
        {isAtTheBottom(square) && square[0]}
      </Typography>
    </div>
  );
};

export default Cell;
