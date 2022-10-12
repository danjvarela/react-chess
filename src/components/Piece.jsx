import {useDraggable} from "@dnd-kit/core";
import {useChess} from "contexts/chessContext";
import pieces from "./pieces";

const Piece = ({type, color, square}) => {
  const {getPGNCode} = useChess();

  // make this piece a draggable item
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: square,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0) scale(1.25)`,
        zIndex: 5,
        cursor: "grabbing",
      }
    : {
        transform: "scale(1.25)",
        cursor: "grab",
      };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {pieces[getPGNCode(type, color)] ?? null}
    </div>
  );
};

export default Piece;
