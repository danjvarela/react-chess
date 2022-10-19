import BlackRook from "assets/black_rook.svg";
import WhiteRook from "assets/white_rook.svg";

const Rook = ({color, ...props}) => {
  const src = color === "w" ? WhiteRook : BlackRook;
  return <img src={src} {...props} />;
};

export default Rook;
