import {useState} from "react";
import Cell from "./Cell";
import Piece from "./Piece";
import {DndContext} from "@dnd-kit/core";
import {useChess} from "contexts/chessContext";

const Chessboard = () => {
  const {chess, getPositionFromIndex, setIsPromoting} = useChess();
  const [cells, setCells] = useState(chess.board().flat());

  // returns true if a cell should be black based on its index
  // index is 0 - 63
  const isBlack = (index) => {
    const col = index % 8;
    const row = Math.floor(index / 8);
    return (col + row) % 2 === 1;
  };

  const isPromoting = (draggedPiece, hoveredCell) => {
    if (draggedPiece.type !== "p") return false;
    if (draggedPiece.color === "b" && hoveredCell.includes("1")) return true;
    if (draggedPiece.color === "w" && hoveredCell.includes("8")) return true;
    return false;
  };

  // handles dropping of pieces
  const handleDragEnd = (event) => {
    // active.id is the piece being dragged
    // over.id is the cell currently the mouse is on
    const {over, active} = event;

    // check if a pawn promotion is occuring
    const draggedPiece = chess.get(active.id);
    if (isPromoting(draggedPiece, over.id)) {
      // return early if a promotion is happening
      setIsPromoting(isPromoting(draggedPiece, over.id));
      return;
    }

    const move = chess.move({
      from: active.id,
      to: over.id,
    });
    // if the move is valid, refresh the cells
    if (move) {
      setCells(chess.board().flat());
    }
  };

  return (
    <div className="grid grid-rows-8 grid-cols-8 justify-items-stretch items-stretch w-full aspect-square">
      <DndContext onDragEnd={handleDragEnd}>
        {cells.map((cell, index) => {
          const pgnPosition = getPositionFromIndex(index);
          const {square, type, color} = cell ?? {
            square: pgnPosition,
            type: null,
            color: null,
          };
          return (
            <Cell
              isBlack={isBlack(index)}
              square={pgnPosition}
              key={pgnPosition}
              piece={<Piece square={square} type={type} color={color} />}
            />
          );
        })}
      </DndContext>
    </div>
  );
};

export default Chessboard;
