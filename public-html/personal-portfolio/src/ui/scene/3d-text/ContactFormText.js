import React, { useEffect, useState } from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";
import { useTexture } from "@react-three/drei";

export const ContactFormText = () => {
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 1.5;
  responsiveData.desktopPositionX = 2;
  responsiveData.desktopPositionY = -6;
  responsiveData.desktopPositionZ = -15;

  responsiveData.desktopSubWidth = 15
  responsiveData.desktopSubHeight = 3
  responsiveData.desktopSubPositionX = 10;
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

  let loadedTexture = useTexture("/textures/purple_08_matCap.png")
  let defaultButtonTexture = useTexture("/textures/blue_03_matCap.png")
  let selectedButtonTexture = useTexture("/textures/purple_09_matCap.png")

  const [buttonColor, setButtonColor] = useState(defaultButtonTexture);

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
          setButtonColor(selectedButtonTexture);
        }}
        onPointerOut={() => {
          setHovered(false);
          setButtonColor(defaultButtonTexture);
        }}
      >
        <group position={[positionX, positionY, positionZ]} >
          <FontConfig
            text="Contact Me"
            fontType="/Sunmore-Slant-Free-Regular.json"
            size={size}
            texture={loadedTexture}
          />
        </group>
        {/* <mesh //this is the contact form button as a Plane geometry
          position={[
            subPositionX,
            subPositionY,
            subPositionZ,
          ]}
        >
          <planeGeometry
            args={[subWidth, subHeight]}
          />
          <meshMatcapMaterial matcap={buttonColor} />
        </mesh> */}
      </group>
    </>
  );
};
