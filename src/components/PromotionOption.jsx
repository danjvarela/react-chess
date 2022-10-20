import {useChess} from "contexts/chessContext";
import PieceRenderer from "./PieceRenderer";

// this is the component representing each promotion option
const PromotionOption = ({type, color}) => {
  const {chess, pawnPromotion, setPawnPromotion, setSquares, setPossibleMoves} =
    useChess();
  // get where the piece is coming from and where it is to be dropped
  const {from, to} = pawnPromotion ?? {};

  // makes the promotion move
  const makePromotion = () => {
    // promotes pawn based on the clicked piece
    const move = chess.move({from, to, promotion: type});
    if (move) {
      // refresh the squares
      setSquares(chess.board().flat());
      // promotion is done. make it null
      setPawnPromotion(null);
      // remove all possible moves since a move has already been made
      setPossibleMoves([]);
    }
  };

  return (
    <div className="w-full aspect-square bg-white flex justify-center items-center hover:bg-gray-300">
      <div className="scale-125 cursor-pointer" onClick={makePromotion}>
        <PieceRenderer type={type} color={color} />
      </div>
    </div>
  );
};

export default PromotionOption;
