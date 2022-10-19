import Bishop from "./pieces/Bishop";
import Knight from "./pieces/Knight";
import Rook from "./pieces/Rook";
import King from "./pieces/King";
import Queen from "./pieces/Queen";
import Pawn from "./pieces/Pawn";

const pieces = {
  b: (props) => <Bishop color="b" {...props} />,
  B: (props) => <Bishop color="w" {...props} />,
  n: (props) => <Knight color="b" {...props} />,
  N: (props) => <Knight color="w" {...props} />,
  r: (props) => <Rook color="b" {...props} />,
  R: (props) => <Rook color="w" {...props} />,
  q: (props) => <Queen color="b" {...props} />,
  Q: (props) => <Queen color="w" {...props} />,
  k: (props) => <King color="b" {...props} />,
  K: (props) => <King color="w" {...props} />,
  p: (props) => <Pawn color="b" {...props} />,
  P: (props) => <Pawn color="w" {...props} />,
};

const PieceRenderer = ({type, color, props}) => {
  if (!type || !color) return null;
  const Piece = pieces[color === "w" ? type.toUpperCase() : type];
  return <Piece {...(props ?? {})} />;
};

export default PieceRenderer;
