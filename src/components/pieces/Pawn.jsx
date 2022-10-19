import {ReactComponent as BlackPawn} from "assets/black_pawn.svg";
import {ReactComponent as WhitePawn} from "assets/white_pawn.svg";

const Pawn = ({color, ...props}) => {
  return color === "w" ? <WhitePawn {...props} /> : <BlackPawn {...props} />;
};

export default Pawn;
