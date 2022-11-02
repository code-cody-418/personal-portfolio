import { useEffect, useState } from "react";

// A responsive hook that returns sizes and positions as a number for 3D objects to be mobile Responsive
export const useResponsive3d = () => {
  //This is the window Width in which responsive behavior will occur
  const breakpoint = 620;

  //setWidth is the current windows width in px
  const [width, setWidth] = useState(window.innerWidth);

  const xr = navigator.xr;

  //determines if 3d-mouse or 3d-finger or VR Headset should be visible
  const [mouseVisible, setMouseVisible] = useState(true);
  const [fingerVisible, setFingerVisible] = useState(false);
  const [headsetVisible, setHeadsetVisible] = useState(false);

  //This determines the size of the window
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  //this sets the sizes and positions of 3d objects based on the size of the window and a breaking point
  useEffect(() => {
    const handleResize = () => {
      if (xr !== undefined || null) {
        setFingerVisible(false);
        setMouseVisible(false);
        setHeadsetVisible(true);
      } else if (breakpoint < width) {
        setFingerVisible(false);
        setMouseVisible(true);
        setHeadsetVisible(false);
      } else if (breakpoint > width) {
        setFingerVisible(true);
        setMouseVisible(false);
        setHeadsetVisible(false);
      }
    };
    handleResize();
    // return () => handleResize
  }, [width, xr]);

  return {
    mouseVisible,
    fingerVisible,
    headsetVisible,
  };
};
