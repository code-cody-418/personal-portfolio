import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";

export const ProjectsTitleText = () => {
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 5;
    responsiveData.desktopPositionX = -20;
    responsiveData.desktopPositionY = 7;
    responsiveData.desktopPositionZ = 10

    responsiveData.mobileSize = 3.5;
    responsiveData.mobilePositionX = -20;
    responsiveData.mobilePositionY = 11;
    responsiveData.mobilePositionZ = 7.5

    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    const TitleText = () => {
        return (
            <>
                <group
                    position={[positionX, positionY, positionZ]}
                    rotation={[0, 1.570796, 0]}
                >
                    <FontConfig
                        text="Websites"
                        fontType="/Saiyan-Sans-Regular.json"
                        size={size}
                    />
                </group>
            </>
        )
    }

    return (
        <>
            <TitleText />
        </>
    )
}
