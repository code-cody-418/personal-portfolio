import React from "react";
import { useResponsive } from "../../../../customHooks/useResponsive";
import { Responsive } from "../../../../constructor/Responsive";
import { FontConfig } from "../FontConfig";
import { useTexture } from "@react-three/drei";

export const TitleDescriptionText = () => {
  //set responsive values
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 0.8;
  responsiveData.desktopPositionX = -10;
  responsiveData.desktopPositionY = -3;

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
            text="Experience with million"
            fontType="/Sunmore-Slant-Free-Regular.json"
            size={size}
            texture={texture02}
          />
        </group>
        <group position={[0, -2, 0]}>
          <FontConfig
            text="dollar full-stack applications"
            fontType="/Sunmore-Slant-Free-Regular.json"
            size={size}
            texture={texture02}
          />
        </group>
        <group position={[0, -4, 0]}>
          <FontConfig
            text="and ETL data integrations"
            fontType="/Sunmore-Slant-Free-Regular.json"
            size={size}
            texture={texture02}
          />
        </group>
      </group>
    </>
  );
};
