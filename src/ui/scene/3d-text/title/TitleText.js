import React from "react";
import { useResponsive } from "../../../../customHooks/useResponsive";
import { Responsive } from "../../../../constructor/Responsive";
import { FontConfig } from "../FontConfig";
import { useTexture } from "@react-three/drei";

export const TitleText = () => {
  //set responsive values
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 1.5;
  responsiveData.desktopPositionX = -7;
  responsiveData.desktopPositionY = 4;
  responsiveData.desktopGroupY = 0;

  responsiveData.mobileSize = 1.5;
  responsiveData.mobilePositionX = -5;
  responsiveData.mobilePositionY = 4;
  responsiveData.mobileGroupY = 5;

  const { size, positionX, positionY, groupY } = useResponsive(responsiveData);

  let loadedTexture = useTexture("/textures/purple_08_matCap.png")
  
  return (
    <>
      <group position={[0, groupY, 0]}>
        <group position={[positionX, positionY, -15]}>
          <FontConfig
            text="Cody's Portfolio"
            fontType="title"
            size={size}
            texture={loadedTexture}
          />
        </group>
      </group>
    </>
  );
};
