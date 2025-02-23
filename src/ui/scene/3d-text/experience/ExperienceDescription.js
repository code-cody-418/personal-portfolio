import React from "react";
import { useResponsive } from "../../../../customHooks/useResponsive";
import { Responsive } from "../../../../constructor/Responsive";
import { FontConfig } from "../FontConfig";
import { Plane, useTexture } from "@react-three/drei";

export const ExperienceDescription = ({ description, planeScale, planePosition }) => {
  //set responsive values
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 0.8;

  const { size } = useResponsive(responsiveData);

  let texture02 = useTexture("/textures/white_01_matCap.png");

  return (
    <>
      <Plane scale={planeScale} position={planePosition}>
        <meshBasicMaterial
          color="#000000"
          // color="#FFFFFF" // use for debug
        />
      </Plane>

      <FontConfig
        text={description}
        fontType="/Sunmore-Slant-Free-Regular.json"
        size={size}
        texture={texture02}
        thickness={0.01}
        segments={1}
      />
    </>
  );
};
