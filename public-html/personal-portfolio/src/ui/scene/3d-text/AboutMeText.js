import React, { useEffect, useState } from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";
import { useTexture } from "@react-three/drei";
import { useModalStore } from "../../utils/store";

export const AboutMeText = () => {
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 1.5;
  responsiveData.desktopPositionX = -12.5;
  responsiveData.desktopPositionY = -6;
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
  const setModalImg = useModalStore((state) => state.setModalImg)


  //set the modal state when text is clicked
  const handleTextClick = (modalInfo) => {
    setModalTitle(modalInfo.title)
    setModalSubTitle(modalInfo.subTitle)
    setModalDescription(modalInfo.description)
    setModalImg(modalInfo.img)
    handleShow()
  }

  // To change about me Info simply change the modalInfo Object below
  const modalInfo = {
    title: "About Me",
    subTitle: null,
    description: "Hello, I'm Cody Slama, a passionate software developer dedicated to crafting efficient and innovative solutions. With 2 years of experience in the field, I have developed a strong foundation in software development, honing my skills in JavaScript, data integration, and much more. Before I began my career, I achieved my Bachelors degree, which has given me invaluable skills and techniques to exceed in the workplace. \n \n I thrive on the challenges that come with creating robust software applications, and I'm constantly seeking new ways to expand my knowledge and stay at the forefront of emerging technologies. My expertise lies in full-stack web development. I pride myself on writing clean and maintainable code, ensuring scalability and performance while adhering to best practices. \n \n Thank you for visiting my portfolio. Please take a chance to explore my skills and experiences to gain a deeper understanding of my capabilities. You can also visit my GitHub and LinkedIn page to see my code and learn more about me. If you have any questions or are interested in working with me please don't hesitate to reach out. I look forward to connecting with you.",
    img: "./vivi-logo.jpg"
  }

  return (
    <>
      <group
        onClick={() => handleTextClick(modalInfo)}
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
