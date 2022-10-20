import {useEffect, useState} from "react";

const useCountdown = (targetTime) => {
  const countDownTimer = new Date(targetTime).getTime();
  const [countDown, setCountDown] = useState(countDownTimer - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownTimer - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownTimer]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [minutes, seconds];
};

export {useCountdown};
