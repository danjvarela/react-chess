import {ReactComponent as BlackBishop} from "assets/black_bishop.svg";
import {ReactComponent as WhiteBishop} from "assets/white_bishop.svg";

const Bishop = ({color, ...props}) => {
  return color === "w" ? <WhiteBishop {...props} /> : <BlackBishop {...props} />;
};

export default Bishop;
