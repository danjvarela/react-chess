import BlackKing from "assets/black_king.svg";
import WhiteKing from "assets/white_king.svg";

const King = ({color, ...props}) => {
  const src = color === "w" ? WhiteKing : BlackKing;
  return <img src={src} {...props} />;
};

export default King;
