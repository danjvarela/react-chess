import {ReactComponent as BlackRook} from "assets/black_rook.svg";
import {ReactComponent as WhiteRook} from "assets/white_rook.svg";

const Rook = ({color, ...props}) => {
  return color === "w" ? <WhiteRook {...props} /> : <BlackRook {...props} />;
};

export default Rook;
