import { useEffect, useState } from "react";
import { useStore } from "../utils/store";

export const Analytics = () => {
  const [secondsPassed, setSecondsPassed] = useState(0);
  
  // number of seconds till state is set for analytics
  const ticker = 5

  // analytics store
  const setSessionTime = useStore((state) => state.setSessionTime)

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsPassed(secondsPassed => secondsPassed + ticker);
      setSessionTime(secondsPassed)
    }, ticker * 1000);
    return () => clearInterval(timer);
  });
  return <></>;
};
