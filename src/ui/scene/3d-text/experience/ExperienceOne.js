import React from "react";
import { useResponsive } from "../../../../customHooks/useResponsive";
import { Responsive } from "../../../../constructor/Responsive";
import { FontConfig } from "../FontConfig";
import { useTexture } from "@react-three/drei";

export const ExperienceOne = () => {
  //set responsive values
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 0.8;
  responsiveData.desktopPositionX = 20;
  responsiveData.desktopPositionY = 7;
  responsiveData.desktopPositionZ = -5

  responsiveData.mobileSize = 1;
  responsiveData.mobilePositionX = -5;
  responsiveData.mobilePositionY = 6;

  const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

  let texture02 = useTexture("/textures/white_01_matCap.png");

  return (
    <>
      <group position={[positionX, positionY, positionZ]} rotation={[0, -1.570796, 0]}>
        <group position={[0, 0, 0]}>
          <FontConfig
            text="Experience building web applications"
            fontType="/Sunmore-Slant-Free-Regular.json"
            size={size}
            texture={texture02}
            thickness={0.01}
          />
        </group>
        <group position={[0, -2, 0]}>
          <FontConfig
            text="utilizing forms connected"
            fontType="/Sunmore-Slant-Free-Regular.json"
            size={size}
            texture={texture02}
            thickness={0.01}
          />
        </group>
        <group position={[0, -4, 0]}>
          <FontConfig
            text="to api's."
            fontType="/Sunmore-Slant-Free-Regular.json"
            size={size}
            texture={texture02}
            thickness={0.01}
          />
        </group>
      </group>
    </>
  );
};
