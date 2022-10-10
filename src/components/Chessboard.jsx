import Cell from "./Cell";
import Piece from "./Piece";

const Chessboard = () => {
  const getCellVariant = (index) => {
    const col = index % 8;
    const row = Math.floor(index / 8);
    const oddNumberedRow = "bwbwbwbw";
    const evenNumberedRow = "wbwbwbwb";
    return row % 2 === 0 ? evenNumberedRow[col] : oddNumberedRow[col];
  };

  return (
    <div className="grid grid-rows-8 grid-cols-8 justify-items-stretch items-stretch w-full aspect-square">
      {[...Array(64)].map((_, index) => (
        <Cell
          variant={getCellVariant(index) === "w" ? "white" : "black"}
          key={index}
          piece={<Piece name="king" color="black" />}
        />
      ))}
    </div>
  );
};

export default Chessboard;
