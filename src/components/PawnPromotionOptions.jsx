import {useChess} from "contexts/chessContext";
import PromotionOption from "./PromotionOption";

// this is the piece options for when the pawn is to be promoted
const PawnPromotionOptions = ({square}) => {
  const {pawnPromotion} = useChess();
  const position = pawnPromotion?.color === "b" ? "bottom-0" : "top-0";

  // return nothing if there is no promotion
  if (pawnPromotion?.square !== square) return null;

  return (
    <div className={`w-full absolute z-10 ${position}`}>
      <PromotionOption type="b" color={pawnPromotion.color} />
      <PromotionOption type="n" color={pawnPromotion.color} />
      <PromotionOption type="r" color={pawnPromotion.color} />
      <PromotionOption type="q" color={pawnPromotion.color} />
    </div>
  );
};

export default PawnPromotionOptions;
