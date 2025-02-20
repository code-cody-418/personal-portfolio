import React from "react";
import { useResponsive } from "../../../../customHooks/useResponsive";
import { Responsive } from "../../../../constructor/Responsive";
import { FontConfig } from "../FontConfig";
import { useTexture } from "@react-three/drei";
import { content } from "../content";

export const TitleDescriptionText = () => {
  //set responsive values
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 0.8;
  responsiveData.desktopPositionX = -16;
  responsiveData.desktopPositionY = -4.5;

  responsiveData.mobileSize = 1;
  responsiveData.mobilePositionX = -5;
  responsiveData.mobilePositionY = 6;

  const { size, positionX, positionY } = useResponsive(responsiveData);

  let texture02 = useTexture("/textures/white_01_matCap.png");

  return (
    <>
      <group position={[positionX, positionY, -15]}>
        <group position={[0, 0, 0]}>
          <FontConfig
            text={content.experience[8].description}
            fontType="/Sunmore-Slant-Free-Regular.json"
            size={size}
            texture={texture02}
            thickness={0.01}
            segments={1}
          />
        </group>
      </group>
    </>
  );
};
