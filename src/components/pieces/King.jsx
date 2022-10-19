import {ReactComponent as BlackKing} from "assets/black_king.svg";
import {ReactComponent as WhiteKing} from "assets/white_king.svg";

const King = ({color, ...props}) => {
  return color === "w" ? <WhiteKing {...props} /> : <BlackKing {...props} />;
};

export default King;
