import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { PortfolioText } from "./PortfolioText";
import { content } from "./content";

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

  const modalInfo = content.contact
  
  return (
    <>
      <group position={[positionX, positionY, positionZ]} >
        <PortfolioText
          text={"Contact Me"}
          xPosition={0}
          yPosition={0}
          zPosition={0}
          yRotation={0}
          size={size}
          modalInfo={modalInfo}
          allListItems={modalInfo}
          arrowRotation={[-1.57, -2.355, Math.PI]}
          sectionType="contactMe"
          arrowHide={true}
          selectionSize={[12, 1.2]}
        />
      </group>
    </>
  );
};
