import React, { useEffect, useState } from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";

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
            <FontConfig text="Codys" fontType="/Saiyan-Sans-Regular.json" size={size} />
          </group>
          <group position={[positionX, 0, -15]}>
            <FontConfig text="Portfolio" fontType="/Saiyan-Sans-Regular.json" size={size} />
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
