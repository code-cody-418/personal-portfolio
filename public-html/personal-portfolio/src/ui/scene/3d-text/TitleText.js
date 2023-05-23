import React, { useEffect, useState } from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { Text3D } from "@react-three/drei";

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

  const FontConfig = ({ text, fontType }) => {
    return (
      <>
        <group>
          <Text3D font={fontType} size={size}
            height={0.4}
            curveSegments={32}
            bevelEnabled={true}
            bevelThickness={0.03}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}>
            {text}
            <meshNormalMaterial />
          </Text3D>
        </group>
      </>
    );
  };

  const PortfolioText = () => {
    //hover cursor change
    const [hovered] = useState(false);
    useEffect(
      () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
      [hovered]
    );
    return (
      <>
        <group position={[0, groupY, 0]}>
          <group position={[positionX, positionY, -15]}>
            <FontConfig text="Codys" fontType="/Saiyan-Sans-Regular.json" />
          </group>
          <group position={[positionX, 0, -15]}>
            <FontConfig text="Portfolio" fontType="/Saiyan-Sans-Regular.json" />
          </group>
        </group>
      </>
    );
  };
  return (
    <>
      <PortfolioText />
    </>
  );
};
