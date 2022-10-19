import {Typography} from "@material-tailwind/react";

const Player = ({name}) => {
  return (
    <Typography variant="h6" className="text-gray-300">
      {name}
    </Typography>
  );
};

export default Player;
