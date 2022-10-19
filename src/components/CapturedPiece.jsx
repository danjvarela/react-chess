import PieceRenderer from "./PieceRenderer";

const CapturedPiece = ({type, color}) => {
  return (
    <PieceRenderer type={type} color={color} width={25} height={25} viewBox="0 0 45 45" />
  );
};

export default CapturedPiece;
