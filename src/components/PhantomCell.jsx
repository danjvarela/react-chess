import {useChess} from "contexts/chessContext";
import {useEffect, useMemo, useState} from "react";

// all cell hover styling will be done here
const PhantomCell = ({square, isOver}) => {
  const {possibleMoves, pawnPromotion, kingSquare, chess, squares} = useChess();
  const [isPossibleMove, setIsPossibleMove] = useState(false);

  useEffect(() => {
    setIsPossibleMove(possibleMoves.includes(square));
  }, [possibleMoves]);

  const styles = useMemo(() => {
    let style = "";
    // adds the className if it does not exist
    const addClass = (...classNames) => {
      classNames.forEach((val) => {
        if (!style.includes(val)) style += ` ${val} `;
      });
    };
    // removes a className
    const removeClass = (...classNames) => {
      classNames.forEach((val) => {
        style.replace(` ${val} `, "");
      });
    };

    // Conditional styles here
    if (isOver) addClass("border-gray-100", "border-4");
    if (isPossibleMove && !pawnPromotion?.square)
      addClass("animate-pulse", "bg-light-green-500", "opacity-30");
    if (square === kingSquare[chess.turn()] && chess.isCheck()) {
      removeClass("bg-light-green-500");
      addClass("bg-deep-orange-900 opacity-60");
    }

    return style;
  }, [isPossibleMove, pawnPromotion, isOver, kingSquare, squares]);

  return <div className={`${styles} z-[1] w-full h-full absolute`}></div>;
};

export default PhantomCell;
