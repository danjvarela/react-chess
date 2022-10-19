import BlackPawn from "assets/black_pawn.svg";
import WhitePawn from "assets/white_pawn.svg";

const Pawn = ({color, ...props}) => {
  const src = color === "w" ? WhitePawn : BlackPawn;
  return <img src={src} {...props} />;
};

export default Pawn;
