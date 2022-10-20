import Cell from "./Cell";
import Piece from "./Piece";
import {DndContext} from "@dnd-kit/core";
import {useChess} from "contexts/chessContext";
import {snapCenterToCursor} from "lib/dnd-kit/modifiers";
import {useCallback} from "react";

// returns true if a cell should be black based on its index
// index is 0 - 63
const isBlack = (index) => {
  const col = index % 8;
  const row = Math.floor(index / 8);
  return (col + row) % 2 === 1;
};

const Chessboard = () => {
  const {
    chess,
    getPositionFromIndex,
    setPawnPromotion,
    isAtTheBottom,
    isAtTheTop,
    squares,
    setSquares,
    setPossibleMoves,
    setKingSquare,
    setPlayerRemainingTime,
  } = useChess();

  const isPromoting = useCallback(
    (draggedPiece, hoveredCell) => {
      if (draggedPiece.type !== "p") return false;
      if (draggedPiece.color !== chess.turn()) return false;
      if (draggedPiece.color === "b" && isAtTheBottom(hoveredCell)) return true;
      if (draggedPiece.color === "w" && isAtTheTop(hoveredCell)) return true;
      return false;
    },
    [chess.turn()]
  );
  // handles dropping of pieces
  const handleDragEnd = (event) => {
    // active.id is the piece being dragged
    // over.id is the cell currently the mouse is on
    const {over, active} = event;

    if (!over) return;

    // check if a pawn promotion is occuring
    const draggedPiece = chess.get(active.id);
    if (isPromoting(draggedPiece, over.id)) {
      // return early if a promotion is happening
      setPawnPromotion({
        square: over.id,
        color: chess.turn(),
        from: active.id,
        to: over.id,
      });
      return;
    }

    const move = chess.move({
      from: active.id,
      to: over.id,
    });
    // if the move is valid, refresh the cells
    if (move) {
      // if the king is moved, update its position
      if (draggedPiece.type === "k")
        setKingSquare((prev) => ({...prev, [draggedPiece.color]: over.id}));

      setSquares(chess.board().flat());
    }
    setPossibleMoves([]);
  };

  const handleDragStart = (event) => {
    setPossibleMoves(
      chess.moves({square: event.active?.id, verbose: true}).map((value) => value.to)
    );
  };

  return (
    <div className="grid grid-rows-8 grid-cols-8 justify-items-stretch items-stretch w-full aspect-square">
      <DndContext
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        modifiers={[snapCenterToCursor]}
      >
        {squares.map((value, index) => {
          const pgnPosition = getPositionFromIndex(index);
          const {square, type, color} = value ?? {
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
