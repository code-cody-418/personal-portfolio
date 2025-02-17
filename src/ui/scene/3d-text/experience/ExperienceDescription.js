import React from "react";
import { useResponsive } from "../../../../customHooks/useResponsive";
import { Responsive } from "../../../../constructor/Responsive";
import { FontConfig } from "../FontConfig";
import { useTexture } from "@react-three/drei";

export const ExperienceDescription = ({ description }) => {
  //set responsive values
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 0.8;
  responsiveData.desktopPositionX = 20;
  responsiveData.desktopPositionY = -9;
  responsiveData.desktopPositionZ = -23;

  responsiveData.mobileSize = 1;
  responsiveData.mobilePositionX = -5;
  responsiveData.mobilePositionY = 6;

  const { size, positionX, positionY, positionZ } =
    useResponsive(responsiveData);

  let texture02 = useTexture("/textures/white_01_matCap.png");

  return (
    <>
      <group
        position={[positionX, positionY, positionZ]}
        rotation={[0, -1.570796, 0]}
      >
        <group position={[0, 0, 0]}>
          <FontConfig
            text={description}
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
