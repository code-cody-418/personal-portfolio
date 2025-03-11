import React from "react";
import { useResponsive } from "../../../../customHooks/useResponsive";
import { Responsive } from "../../../../constructor/Responsive";
import { FontConfig } from "../FontConfig";
import { useTexture } from "@react-three/drei";

export const TitleText = ({
  text,
  desktopSize,
  desktopPosition,
  mobileSize,
  mobilePosition,
  rotation,
  texture,
  font,
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

  let loadedTexture = useTexture(texture);

  return (
    <>
      <group rotation={rotation} position={[positionX, positionY, positionZ]}>
        <FontConfig
          text={text}
          font={font}
          size={size}
          texture={loadedTexture}
        />
      </group>
    </>
  );
};
