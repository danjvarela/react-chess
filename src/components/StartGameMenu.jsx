import {Menu, MenuHandler, MenuList, MenuItem, Button} from "@material-tailwind/react";
import {useChess} from "contexts/chessContext";

const oneMinute = 1000 * 60;

const StartGameMenu = () => {
  const {playerRemainingTime, setPlayerRemainingTime} = useChess();

  const startGame = (time) => () => {
    setPlayerRemainingTime({w: time, b: time});
  };

  const styles = {
    color: !playerRemainingTime ? "green" : "gray",
    className: !playerRemainingTime ? "pointer-events-auto" : "pointer-events-none",
  };

  return (
    <Menu placement="right-start">
      <MenuHandler>
        <Button {...styles}>Start Game</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={startGame((1 / 6) * oneMinute)}>10 seconds</MenuItem>
        <MenuItem onClick={startGame(10 * oneMinute)}>10 mins</MenuItem>
        <MenuItem onClick={startGame(15 * oneMinute)}>15 mins</MenuItem>
        <MenuItem onClick={startGame(30 * oneMinute)}>30 mins</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default StartGameMenu;
