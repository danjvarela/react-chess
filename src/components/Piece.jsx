import {ReactComponent as BlackBishop} from "assets/black_bishop.svg";
import {ReactComponent as BlackKing} from "assets/black_king.svg";
import {ReactComponent as BlackKnight} from "assets/black_knight.svg";
import {ReactComponent as BlackPawn} from "assets/black_pawn.svg";
import {ReactComponent as BlackQueen} from "assets/black_queen.svg";
import {ReactComponent as BlackRook} from "assets/black_rook.svg";
import {ReactComponent as WhiteBishop} from "assets/white_bishop.svg";
import {ReactComponent as WhiteKing} from "assets/white_king.svg";
import {ReactComponent as WhiteKnight} from "assets/white_knight.svg";
import {ReactComponent as WhitePawn} from "assets/white_pawn.svg";
import {ReactComponent as WhiteQueen} from "assets/white_queen.svg";
import {ReactComponent as WhiteRook} from "assets/white_rook.svg";

const Piece = ({name, color}) => {
  const pieces = {
    white: {
      bishop: <WhiteBishop />,
      king: <WhiteKing />,
      knight: <WhiteKnight />,
      pawn: <WhitePawn />,
      queen: <WhiteQueen />,
      rook: <WhiteRook />,
    },
    black: {
      bishop: <BlackBishop />,
      king: <BlackKing />,
      knight: <BlackKnight />,
      pawn: <BlackPawn />,
      queen: <BlackQueen />,
      rook: <BlackRook />,
    },
  };

  return <div>{pieces[color][name]}</div>;
};

export default Piece;