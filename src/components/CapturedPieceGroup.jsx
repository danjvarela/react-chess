import {useCallback} from "react";
import CapturedPiece from "./CapturedPiece";

const CapturedPieceGroup = ({type, color, capturedPieces}) => {
  const piecesOfType = useCallback(
    (type) => {
      if (!capturedPieces || capturedPieces.length === 0) return null;
      const pieces = capturedPieces.filter((val) => val === type);
      return pieces.length === 0 ? null : pieces;
    },
    [capturedPieces, type]
  );

  if (!piecesOfType(type)) return null;

  return (
    <div className="flex">
      {piecesOfType(type).map((value, index) => {
        return (
          <CapturedPiece
            type={value}
            color={color === "w" ? "b" : "w"}
            key={`captured-${color}-${index}`}
          />
        );
      })}
    </div>
  );
};

export default CapturedPieceGroup;
