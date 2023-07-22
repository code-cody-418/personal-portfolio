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
    description: "Hello, I'm Cody Slama, a passionate software developer dedicated to crafting efficient and innovative solutions. With 2 years of experience in the field, I have developed a strong foundation in software development, honing my skills in JavaScript, data integration, and much more. Before I began my career, I achieved my Bachelors degree, which has given me invaluable skills and techniques to exceed in the workplace. \n \n I thrive on the challenges that come with creating robust software applications, and I'm constantly seeking new ways to expand my knowledge and stay at the forefront of emerging technologies. My expertise lies in full-stack web development. I pride myself on writing clean and maintainable code, ensuring scalability and performance while adhering to best practices. \n \n Thank you for visiting my portfolio. Please take a chance to explore my skills and experiences to gain a deeper understanding of my capabilities. You can also visit my GitHub and LinkedIn page to see my code and learn more about me. If you have any questions or are interested in working with me please don't hesitate to reach out. I look forward to connecting with you.",
    img: "./vivi-logo.jpg",
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
