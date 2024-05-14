import { useEffect } from "react";

export const Analytics = () => {
  useEffect(() => {
    const timer = setInterval(() => {
        console.log("tick tok")
    }, 5000);
    return () => clearInterval(timer);
  });
  return <></>;
};
