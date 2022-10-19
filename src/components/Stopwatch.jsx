import {Typography} from "@material-tailwind/react";
import {useChess} from "contexts/chessContext";
import {useEffect, useMemo} from "react";

const getMinutes = (time) => Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const getSeconds = (time) => Math.floor((time % (1000 * 60)) / 1000);

const Stopwatch = ({color}) => {
  const {chess, playerRemainingTime, setPlayerRemainingTime} = useChess();

  const {minutes, seconds} = useMemo(() => {
    const minutes = getMinutes(playerRemainingTime[color]);
    const seconds = String(getSeconds(playerRemainingTime[color])).padStart(2, "0");
    return {minutes, seconds};
  }, [playerRemainingTime, color]);

  useEffect(() => {
    if (chess.turn() === color) {
      const id = setTimeout(() => {
        setPlayerRemainingTime((prevTime) => ({
          ...prevTime,
          [color]: prevTime[color] - 1000,
        }));
      }, 1000);
      return () => clearTimeout(id);
    }
  }, [playerRemainingTime, color]);

  const turnStyle =
    chess.turn() === color ? "text-gray-900 bg-gray-100" : "text-gray-700 bg-gray-800";

  return (
    <Typography className={`${turnStyle} px-5 rounded-md`} variant="h4">
      {`${minutes}:${seconds}`}
    </Typography>
  );
};

export default Stopwatch;
