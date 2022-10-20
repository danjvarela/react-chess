import BlackKnight from "assets/black_knight.svg";
import WhiteKnight from "assets/white_knight.svg";

const Knight = ({color, ...props}) => {
  const src = color === "w" ? WhiteKnight : BlackKnight;
  return <img src={src} {...props} />;
};

export default Knight;
