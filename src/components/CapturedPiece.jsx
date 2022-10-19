import PieceRenderer from "./PieceRenderer";

const CapturedPiece = ({type, color, ...props}) => {
  return (
    <PieceRenderer
      type={type}
      color={color}
      style={{width: 25, height: 25}}
      {...(props ?? {})}
    />
  );
};

export default CapturedPiece;
