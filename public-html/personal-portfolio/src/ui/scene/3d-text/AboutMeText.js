import React, { useEffect, useState } from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";
import { useTexture } from "@react-three/drei";
import { useModalStore } from "../../utils/store";

export const AboutMeText = () => {
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 1.5;
  responsiveData.desktopPositionX = -15.5;
  responsiveData.desktopPositionY = -9.7;
  responsiveData.desktopPositionZ = -15;

  responsiveData.desktopSubWidth = 15
  responsiveData.desktopSubHeight = 3
  responsiveData.desktopSubPositionX = -10;
  responsiveData.desktopSubPositionY = -9;
  responsiveData.desktopSubPositionZ = -15

  responsiveData.mobileSize = 1;
  responsiveData.mobilePositionX = -5;
  responsiveData.mobilePositionY = -7;
  responsiveData.mobilePositionZ = -15;

  responsiveData.mobileSubWidth = 11
  responsiveData.mobileSubHeight = 2
  responsiveData.mobileSubPositionX = -0.5;
  responsiveData.mobileSubPositionY = -6.5;
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

   //Modal functions to show modal and to set state of what to display
   const handleShow = useModalStore((state) => state.showModal)
   const setModalTitle = useModalStore((state) => state.setModalTitle)
   const setModalSubTitle = useModalStore((state) => state.setModalSubTitle)
   const setModalDescription = useModalStore((state) => state.setModalDescription)

   //set the modal state when text is clicked
   const handleTextClick = (modalTitle, modalSubTitle, modalDescription) => {
       setModalTitle(modalTitle)
       setModalSubTitle(modalSubTitle)
       setModalDescription(modalDescription)
       handleShow()
   }

   // To change about me Info simply change the modalInfo Object below
   const modalInfo = {
      title: "About Me",
      subTitle: "Preparing Data for New Systems",
      description: "Navajo Nation millions of Documents with meta-data transferred. Gesture thousand of customer data transferred. CNM assistant instructor data prepared for student CapStones"
   }

  return (
    <>
      <group
        onClick={() => handleTextClick(modalInfo.title, modalInfo.subTitle, modalInfo.description)}
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
            text="About Me"
            fontType="/Sunmore-Slant-Free-Regular.json"
            size={size}
            texture={loadedTexture}
          />
        </group>
        <mesh //this is the contact form button as a Plane geometry
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
        </mesh>
      </group>
    </>
  );
};
