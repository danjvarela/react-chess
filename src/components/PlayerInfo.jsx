import Stopwatch from "./Stopwatch";
import Player from "./Player";

const PlayerInfo = ({name}) => {
  return (
    <div className="flex justify-between items-start">
      <Player name={name} />
      <Stopwatch />
    </div>
  );
};

export default PlayerInfo;
