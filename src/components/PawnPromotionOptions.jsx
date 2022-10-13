import {useChess} from "contexts/chessContext";
import Piece from "./Piece";
import pieces from "./pieces";

const PromotionOption = ({type, color}) => {
  const {getPGNCode} = useChess();

  return (
    <div className="w-full aspect-square bg-white flex justify-center items-center hover:bg-gray-300">
      <div className="scale-125 cursor-pointer">
        {pieces[getPGNCode(type, color)] ?? null}
      </div>
    </div>
  );
};

const PawnPromotionOptions = ({square}) => {
  const {pawnPromotion} = useChess();

  if (pawnPromotion?.square !== square) return null;

  return (
    <div className="w-full absolute z-10 bottom-0">
      <PromotionOption type="b" color={pawnPromotion.color} />
      <PromotionOption type="r" color={pawnPromotion.color} />
      <PromotionOption type="n" color={pawnPromotion.color} />
      <PromotionOption type="k" color={pawnPromotion.color} />
    </div>
  );
};

export default PawnPromotionOptions;
