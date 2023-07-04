import React, { useState } from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";
import { useTexture } from "@react-three/drei";

export const SkillsTitleText = () => {
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 5;
    responsiveData.desktopPositionX = 15;
    responsiveData.desktopPositionY = 7;
    responsiveData.desktopPositionZ = 20;

    responsiveData.mobileSize = 2;
    responsiveData.mobilePositionX = 6;
    responsiveData.mobilePositionY = 7;
    responsiveData.mobilePositionZ = 20;

    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    const [color, setColor] = useState("#e20e83")

    let loadedTexture = useTexture("/textures/purple_08_matCap.png")

    const TitleText = () => {
        return (
            <>
                <group
                    onClick={() => setColor("#0000ff")}
                    position={[positionX, positionY, positionZ]}
                    rotation={[0, Math.PI, 0]}
                >
                    <FontConfig
                        text="Tech Skills"
                        color={color}
                        fontType="/Saiyan-Sans-Regular.json"
                        size={size}
                        texture={loadedTexture}
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



