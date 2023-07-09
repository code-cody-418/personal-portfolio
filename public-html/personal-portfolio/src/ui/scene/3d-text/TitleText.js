import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";
import { useTexture } from "@react-three/drei";
import helvetiket from "three/examples/fonts/helvetiker_bold.typeface.json"

export const TitleText = () => {
  //set responsive values
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 5;
  responsiveData.desktopPositionX = -9;
  responsiveData.desktopPositionY = 6;

  responsiveData.desktopGroupY = 0;

  responsiveData.mobileSize = 3;
  responsiveData.mobilePositionX = -5;
  responsiveData.mobilePositionY = 3;

  responsiveData.mobileGroupY = 5;

  const { size, positionX, positionY, groupY } = useResponsive(responsiveData);

  let loadedTexture = useTexture("/textures/purple_08_matCap.png")

  return (
    <>
      <group position={[0, groupY, 0]}>
        <group position={[positionX + 2, positionY, -15]}>
          <FontConfig
            text="CODY'S"
            fontType="title"
            size={size}
            texture={loadedTexture}
          />
        </group>
        <group position={[positionX, 0, -15]}>
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
