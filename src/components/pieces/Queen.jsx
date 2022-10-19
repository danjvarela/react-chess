import BlackQueen from "assets/black_queen.svg";
import WhiteQueen from "assets/white_queen.svg";

const Queen = ({color, ...props}) => {
  const src = color === "w" ? WhiteQueen : BlackQueen;
  return <img src={src} {...props} />;
};

export default Queen;
