import {useChess} from "contexts/chessContext";
import {useCountdown} from "hooks/useCountdown";

const Stopwatch = ({
  targetTime,
  //piece
}) => {
  const {chess} = useChess();
  const [minutes, seconds] = useCountdown(targetTime);
  return (
    <div
      className={`${
        targetTime ? "text-red-500" : ""
      } prose prose-zinc dark:prose-invert prose-2xl bg-zinc-800 px-5 rounded-md`}
    >
      {targetTime
        ? minutes + seconds <= 0
          ? "0:00"
          : `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
        : "1:45"}
      {/* {minutes + seconds <= 0 && Object.assign(chess.turn(), piece)} */}
    </div>
  );
};

export default Stopwatch;
