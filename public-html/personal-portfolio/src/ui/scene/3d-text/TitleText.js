import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontLoader} from "three/examples/jsm/loaders/FontLoader.js"

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

  const FontConfig = ({ text }) => {
    const font = useLoader(FontLoader, "/Saiyan-Sans-Regular.json");
    const config = useMemo(
      () => ({
        font: font,
        size: size,
        height: 0.4,
        curveSegments: 32,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
      }),
      [font]
    );
    const mesh = useRef();

    return (
      <>
        <group>
          <mesh ref={mesh}>
            {/* <textGeometry args={[text, config]} /> */}
            <meshNormalMaterial />
          </mesh>
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
            <FontConfig text="Codys" />
          </group>
          <group position={[positionX, 0, -15]}>
            <FontConfig text="Portfolio" />
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
