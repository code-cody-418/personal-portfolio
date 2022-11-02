import { useEffect, useState } from "react";

// A responsive hook that returns sizes and positions as a number for 3D objects to be mobile Responsive
export const useResponsive = (responsiveData) => {
  //This is the window Width in which responsive behavior will occur
  const breakpoint = 620;

  //setWidth is the current windows width in px
  const [width, setWidth] = useState(window.innerWidth);

  //determines the size of the window
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  const {
    desktopSize,
    desktopPositionX,
    desktopPositionY,
    desktopPositionZ,
    desktopRotationY,

    desktopSubSize,
    desktopSubWidth,
    desktopSubHeight,
    desktopSubPositionX,
    desktopSubPositionY,
    desktopSubPositionZ,

    desktopGroupY,

    mobileSize,
    mobilePositionX,
    mobilePositionY,
    mobilePositionZ,
    mobileRotationY,

    mobileSubSize,
    mobileSubWidth,
    mobileSubHeight,
    mobileSubPositionX,
    mobileSubPositionY,
    mobileSubPositionZ,

    mobileGroupY,
  } = responsiveData;

  const [size, setSize] = useState(desktopSize);
  const [positionX, setPositionX] = useState(desktopPositionX);
  const [positionY, setPositionY] = useState(desktopPositionY);
  const [positionZ, setPositionZ] = useState(desktopPositionZ);
  const [rotationY, setRotationY] = useState(desktopRotationY)

  const [subSize, setSubSize] = useState(desktopSubSize);
  const [subWidth, setSubWidth] = useState(desktopSubWidth);
  const [subHeight, setSubHeight] = useState(desktopSubHeight);
  const [subPositionX, setSubPositionX] = useState(desktopSubPositionX);
  const [subPositionY, setSubPositionY] = useState(desktopSubPositionY);
  const [subPositionZ, setSubPositionZ] = useState(desktopSubPositionZ);

  const [groupY, setGroupY] = useState(desktopGroupY);

  //sets the sizes and positions of 3d objects based on the size of the window, breaking point, and passed values
  useEffect(() => {
    const handleResize = () => {
      if (breakpoint < width) {
        //desktop positioning
        setSize(desktopSize);
        setPositionX(desktopPositionX);
        setPositionY(desktopPositionY);
        setPositionZ(desktopPositionZ);
        setRotationY(desktopRotationY)

        setSubSize(desktopSubSize);
        setSubWidth(desktopSubWidth);
        setSubHeight(desktopSubHeight);
        setSubPositionX(desktopSubPositionX);
        setSubPositionY(desktopSubPositionY);
        setSubPositionZ(desktopSubPositionZ);

        setGroupY(desktopGroupY);
      } else if (breakpoint > width) {
        //mobile positioning
        setSize(mobileSize);
        setPositionX(mobilePositionX);
        setPositionY(mobilePositionY);
        setPositionZ(mobilePositionZ);
        setRotationY(mobileRotationY)

        setSubSize(mobileSubSize);
        setSubWidth(mobileSubWidth);
        setSubHeight(mobileSubHeight);
        setSubPositionX(mobileSubPositionX);
        setSubPositionY(mobileSubPositionY);
        setSubPositionZ(mobileSubPositionZ);

        setGroupY(mobileGroupY);
      }
    };
    handleResize();
  }, [
    width,
    desktopSize,
    desktopPositionX,
    desktopPositionY,
    desktopPositionZ,
    desktopRotationY,

    desktopSubSize,
    desktopSubWidth,
    desktopSubHeight,
    desktopSubPositionX,
    desktopSubPositionY,
    desktopSubPositionZ,

    desktopGroupY,

    mobileSize,
    mobilePositionX,
    mobilePositionY,
    mobilePositionZ,
    mobileRotationY,

    mobileSubSize,
    mobileSubWidth,
    mobileSubHeight,
    mobileSubPositionX,
    mobileSubPositionY,
    mobileSubPositionZ,

    mobileGroupY,
  ]);
  return {
    size,
    positionX,
    positionY,
    positionZ,
    rotationY,

    subSize,
    subWidth,
    subHeight,
    subPositionX,
    subPositionY,
    subPositionZ,

    groupY,
  };
};
