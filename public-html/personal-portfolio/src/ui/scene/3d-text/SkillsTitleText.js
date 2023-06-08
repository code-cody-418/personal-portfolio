import React, { useState } from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";

export const SkillsTitleText = () => {
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 5;
    responsiveData.desktopPositionX = 20;
    responsiveData.desktopPositionY = 7;
    responsiveData.desktopPositionZ = -15

    responsiveData.mobileSize = 2;
    responsiveData.mobilePositionX = 20;
    responsiveData.mobilePositionY = 7;
    responsiveData.mobilePositionZ = -6

    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    const [color, setColor] = useState("#e20e83")

    const TitleText = () => {
        return (
            <>
                <group
                    onClick={() => setColor("#0000ff")}
                    position={[positionX, positionY, positionZ]}
                    rotation={[0, -1.570796, 0]}
                >
                    <FontConfig
                        text="Tech Skills"
                        color={color}
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



