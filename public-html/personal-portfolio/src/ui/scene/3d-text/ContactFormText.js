import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";

export const ContactFormText = () => {
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 2;
  responsiveData.desktopPositionX = -25;
  responsiveData.desktopPositionY = -10;
  responsiveData.desktopPositionZ = -15;

  responsiveData.desktopSubWidth = 20
  responsiveData.desktopSubHeight = 5
  responsiveData.desktopSubPositionX = -16;
  responsiveData.desktopSubPositionY = -9;
  responsiveData.desktopSubPositionZ = -15

  responsiveData.mobileSize = 1;
  responsiveData.mobilePositionX = -5;
  responsiveData.mobilePositionY = -10;
  responsiveData.mobilePositionZ = -15;

  responsiveData.mobileSubWidth = 11
  responsiveData.mobileSubHeight = 2
  responsiveData.mobileSubPositionX = -0.5;
  responsiveData.mobileSubPositionY = -9.5;
  responsiveData.mobileSubPositionZ = -15

  const { size, positionX, positionY, positionZ, subWidth, subHeight, subPositionX, subPositionY, subPositionZ } =
    useResponsive(responsiveData);

  const FontConfig = ({ text, position, rotation }) => {
    const font = useLoader(
      THREE.FontLoader,
      "/Sunmore-Slant-Free-Regular.json"
    );
    const config = useMemo(
      () => ({
        font: font,
        size: size,
        height: 0.2,
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
        <group position={position} rotation={rotation}>
          <mesh ref={mesh}>
            <textGeometry args={[text, config]} />
            <meshBasicMaterial color={"#e20e83"} />
          </mesh>
        </group>
      </>
    );
  };

  const TitleText = () => {
    const [buttonColor, setButtonColor] = useState("#fff");

    //hover cursor change
    const [hovered, setHovered] = useState(false);
    useEffect(
      () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
      [hovered]
    );

    return (
      <>
        <group
          onClick={() => (window.location = "/contact-form")}
          onPointerOver={() => {
            setHovered(true);
            setButtonColor("#24a0ed");
          }}
          onPointerOut={() => {
            setHovered(false);
            setButtonColor("#fff");
          }}
        >
          <FontConfig
            text="Contact Me"
            position={[positionX, positionY, positionZ]}
            // rotation={[0, .75, 0]}
          />
          <mesh //this is the contact form button as a Plane geometry
            position={[
              subPositionX,
              subPositionY,
              subPositionZ,
            ]}
          >
            <planeGeometry
              attach="geometry"
              args={[subWidth, subHeight]}
            />
            <meshBasicMaterial color={buttonColor} attach="material" />
          </mesh>
        </group>
      </>
    );
  };

  return (
    <>
      <TitleText />
    </>
  );
};
