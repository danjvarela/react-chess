import Piece from "./Piece";

const Cell = ({variant, piece}) => {
  const cellColor = variant === "white" ? "bg-orange-300" : "bg-yellow-700";

  return (
    <div className={`${cellColor} w-full h-full flex justify-center items-center`}>
      {piece}
    </div>
  );
};

export default Cell;
