import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";
import { useTexture } from "@react-three/drei";

export const TitleText = () => {
  //set responsive values
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 3;
  responsiveData.desktopPositionX = -11;
  responsiveData.desktopPositionY = 6;
  responsiveData.desktopGroupY = 0;

  responsiveData.mobileSize = 1.5;
  responsiveData.mobilePositionX = -5;
  responsiveData.mobilePositionY = 4;
  responsiveData.mobileGroupY = 5;

  const { size, positionX, positionY, groupY, isMobile } = useResponsive(responsiveData);

  let loadedTexture = useTexture("/textures/purple_08_matCap.png")

  let titleAdjustment = 0
  // adjustment to center the title on desktop but not mobile
  if (isMobile) {
    titleAdjustment = 0
  } else {
    titleAdjustment = 3.5
  }
  
  return (
    <>
      <group position={[0, groupY, 0]}>
        <group position={[positionX + titleAdjustment, positionY, -15]}>
          <FontConfig
            text="CODY'S"
            fontType="title"
            size={size}
            texture={loadedTexture}
          />
        </group>
        <group position={[positionX, 2, -15]}>
          <FontConfig
            text="PORTFOLIO"
            fontType="title"
            size={size}
            texture={loadedTexture}
          />
        </group>
      </group>
    </>
  );
};
