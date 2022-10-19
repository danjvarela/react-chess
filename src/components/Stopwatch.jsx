import {useChess} from "contexts/chessContext";
// import {useCountdown} from "hooks/useCountdown";
import {useEffect, useState} from "react";

const getMinutes = (time) => Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const getSeconds = (time) => Math.floor((time % (1000 * 60)) / 1000);

const Stopwatch = ({color}) => {
  const {chess, playerRemainingTime, setPlayerRemainingTime} = useChess();
  // const [minutes, seconds] = useCountdown(playerRemainingTime[color]);
  // const remainingTime = useMemo(() => {
  //   const time = playerRemainingTime - new Date().getTime();
  // }, [playerRemainingTime]);

  useEffect(() => {
    if (chess.turn() === color) {
      const id = setTimeout(() => {
        setPlayerRemainingTime((prevTime) => ({
          ...prevTime,
          [color]: prevTime[color] - 1000,
        }));
        console.log(playerRemainingTime);
      }, 1000);
      return () => clearTimeout(id);
    }
    return () => {};
    // const time = playerRemainingTime[color] - new Date().getTime();
    // const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((time % (1000 * 60)) / 1000);
    // console.log("minutes", minutes);
    // console.log("seconds", seconds);
  }, [playerRemainingTime]);

  return (
    <div
      className={`${
        chess.turn() === color ? "text-red-500" : ""
      } prose prose-zinc dark:prose-invert prose-2xl bg-zinc-800 px-5 rounded-md`}
    >
      {/* {playerRemainingTime */}
      {/*   ? minutes + seconds <= 0 */}
      {/*     ? "0:00" */}
      {/*     : `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}` */}
      {/*   : "1:45"} */}
      {/* {minutes + seconds <= 0 && Object.assign(chess.turn(), piece)} */}
      {`${getMinutes(playerRemainingTime[color])}:${getSeconds(
        playerRemainingTime[color]
      )}`}
    </div>
  );
};

export default Stopwatch;
