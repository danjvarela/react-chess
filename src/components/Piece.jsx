import {useDraggable} from "@dnd-kit/core";
import {useChess} from "contexts/chessContext";
import pieces from "./pieces";

// type can be one of r, b, n, k, q, p (lowercase)
// color can be w or b
// square is the position of the piece, ie. e4, f6, h1 ...
const Piece = ({type, color, square}) => {
  const {getPGNCode} = useChess();

  // make this piece a draggable item
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    // unique identifier for this piece
    id: square,
  });

  // conditional styling
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(1.25)`,
        zIndex: 10,
        cursor: "grabbing",
      }
    : {
        cursor: "grab",
        zIndex: 5,
      };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {pieces[getPGNCode(type, color)] ?? null}
    </div>
  );
};

export default Piece;
