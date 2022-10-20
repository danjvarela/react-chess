import BlackBishop from "assets/black_bishop.svg";
import WhiteBishop from "assets/white_bishop.svg";

const Bishop = ({color, ...props}) => {
  const src = color === "w" ? WhiteBishop : BlackBishop;
  return <img src={src} {...props} />;
};

export default Bishop;
