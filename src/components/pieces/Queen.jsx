import {ReactComponent as BlackQueen} from "assets/black_queen.svg";
import {ReactComponent as WhiteQueen} from "assets/white_queen.svg";

const Queen = ({color, ...props}) => {
  return color === "w" ? <WhiteQueen {...props} /> : <BlackQueen {...props} />;
};

export default Queen;
