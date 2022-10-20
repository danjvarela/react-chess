import {Typography} from "@material-tailwind/react";
import {useChess} from "contexts/chessContext";
import {useEffect, useMemo} from "react";

const getMinutes = (time) => Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const getSeconds = (time) => Math.floor((time % (1000 * 60)) / 1000);

const Stopwatch = ({color}) => {
  const {chess, stopGame, playerRemainingTime, setPlayerRemainingTime, gameOver} =
    useChess();

  const {minutes, seconds} = useMemo(() => {
    if (!playerRemainingTime) return {};
    const minutes = getMinutes(playerRemainingTime[color]);
    const seconds = getSeconds(playerRemainingTime[color]);
    return {minutes, seconds};
  }, [playerRemainingTime]);

  useEffect(() => {
    if (chess.turn() === color && playerRemainingTime && gameOver === null) {
      const id = setTimeout(() => {
        setPlayerRemainingTime((prevTime) => ({
          ...prevTime,
          [color]: prevTime[color] - 100,
        }));
      }, 100);
      return () => clearTimeout(id);
    }
  });

  useEffect(() => {
    if (minutes <= 0 && seconds <= 0) {
      setPlayerRemainingTime((prevTime) => ({
        ...prevTime,
        [color]: 0,
      }));
      stopGame();
    }
  }, [minutes, seconds]);

  const turnStyle =
    chess.turn() === color ? "text-gray-900 bg-gray-100" : "text-gray-700 bg-gray-800";

  if (!playerRemainingTime) return null;
  return (
    <Typography className={`${turnStyle} px-5 rounded-md`} variant="h4">
      {`${minutes}:${String(seconds).padStart(2, "0")}`}
    </Typography>
  );
};

export default Stopwatch;
