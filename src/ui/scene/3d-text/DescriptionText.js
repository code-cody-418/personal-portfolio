import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { Html } from "@react-three/drei";

export const DescriptionText = ({
  textContent,
  desktopPosition,
  textRotation,
  desktopSize,
  containerWidth,
  mobilePosition,
  mobileSize,
}) => {
  //set responsive values
  const responsiveData = new Responsive();
  responsiveData.desktopSize = desktopSize;
  responsiveData.desktopPositionX = desktopPosition[0];
  responsiveData.desktopPositionY = desktopPosition[1];
  responsiveData.desktopPositionZ = desktopPosition[2];

  responsiveData.mobileSize = mobileSize;
  responsiveData.mobilePositionX = mobilePosition[0];
  responsiveData.mobilePositionY = mobilePosition[1];
  responsiveData.mobilePositionZ = mobilePosition[2];

  const { size, positionX, positionY, positionZ } =
    useResponsive(responsiveData);

  const pStyle = {
    transform: `scale(${size * 4})`,
    color: "white",
    width: `${containerWidth}em`,
    backgroundColor: "black",

    fontFamily: "Ariel",
    lineHeight: "1",
    letterSpacing: "0.03em",
  };

  return (
    <>
      <group
        position={[positionX, positionY, positionZ]}
        rotation={textRotation}
      >
        <Html
          zIndexRange={[50, 10]}
          transform
          scale={size}
        >
          <p style={pStyle}>{textContent}</p>
        </Html>
      </group>
    </>
  );
};
