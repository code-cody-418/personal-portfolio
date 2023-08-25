import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { PortfolioText } from "./PortfolioText";

export const ContactFormText = () => {
  const responsiveData = new Responsive();
  responsiveData.desktopSize = 1.5;
  responsiveData.desktopPositionX = -12.5;
  responsiveData.desktopPositionY = -8;
  responsiveData.desktopPositionZ = -15;

  responsiveData.mobileSize = 1;
  responsiveData.mobilePositionX = -5;
  responsiveData.mobilePositionY = -10;
  responsiveData.mobilePositionZ = -15;

  const { size, positionX, positionY, positionZ } =
    useResponsive(responsiveData);

  const modalInfo = {
    title: "Contact Me",
    subTitle: null,
    description: "",
    img: "/code-icon-10.png",
    contactForm: true
  }
  
  return (
    <>
      <group position={[positionX, positionY, positionZ]} >
        <PortfolioText
          text={modalInfo.title}
          xPosition={0}
          yPosition={0}
          zPosition={0}
          yRotation={0}
          size={size}
          modalInfo={modalInfo}
          arrowRotation={[-1.57, -2.355, Math.PI]}
          sectionType="contactMe"
          arrowHide={true}
          selectionSize={[12, 1.2]}
        />
      </group>
    </>
  );
};
