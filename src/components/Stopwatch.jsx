import {useChess} from "contexts/chessContext";
import {useEffect, useState} from "react";

const getMinutes = (time) => Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const getSeconds = (time) => Math.floor((time % (1000 * 60)) / 1000);

const Stopwatch = ({color}) => {
  const {chess, playerRemainingTime, setPlayerRemainingTime} = useChess();
  const playerCurrentMinutes = getMinutes(playerRemainingTime[color]);
  const playerCurrentSeconds = getSeconds(playerRemainingTime[color]);

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
    return () => {};
  }, [playerRemainingTime]);

  return (
    <div
      className={`${
        chess.turn() === color ? "text-cyan-600 animate-pulse" : ""
      } prose prose-zinc dark:prose-invert prose-2xl bg-zinc-800 px-5 rounded-md`}
    >
      {`${
        playerCurrentMinutes < 10 ? `0${playerCurrentMinutes}` : playerCurrentMinutes
      }:${playerCurrentSeconds < 10 ? `0${playerCurrentSeconds}` : playerCurrentSeconds}`}
    </div>
  );
};

export default Stopwatch;
