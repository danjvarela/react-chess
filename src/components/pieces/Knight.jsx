import {ReactComponent as BlackKnight} from "assets/black_knight.svg";
import {ReactComponent as WhiteKnight} from "assets/white_knight.svg";

const Knight = ({color, ...props}) => {
  return color === "w" ? <WhiteKnight {...props} /> : <BlackKnight {...props} />;
};

export default Knight;
