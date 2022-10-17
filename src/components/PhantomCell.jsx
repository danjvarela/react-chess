import {useChess} from "contexts/chessContext";
import {useEffect, useMemo, useState} from "react";

// all cell hover styling will be done here
const PhantomCell = ({square, isOver}) => {
  const {possibleMoves, pawnPromotion} = useChess();
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

    // Conditional styles here
    if (isOver) addClass("border-gray-100", "border-4");
    if (isPossibleMove && !pawnPromotion?.square)
      addClass("animate-pulse", "bg-light-green-500", "opacity-30");

    return style;
  }, [isPossibleMove, pawnPromotion, isOver]);

  return <div className={`${styles} z-[1] w-full h-full absolute`}></div>;
};

export default PhantomCell;
