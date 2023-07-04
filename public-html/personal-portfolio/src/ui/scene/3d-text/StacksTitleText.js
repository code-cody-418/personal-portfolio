import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";
import { useTexture } from "@react-three/drei";

export const StacksTitleText = () => {
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 5;
    responsiveData.desktopPositionX = -20;
    responsiveData.desktopPositionY = 7;
    responsiveData.desktopPositionZ = 10

    responsiveData.mobileSize = 2;
    responsiveData.mobilePositionX = -20;
    responsiveData.mobilePositionY = 7;
    responsiveData.mobilePositionZ = 7.5

    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    let loadedTexture = useTexture("/textures/purple_08_matCap.png")

    return (
        <>
            <group
                position={[positionX, positionY, positionZ]}
                rotation={[0, 1.570796, 0]}
            >
                <FontConfig
                    text="Stacks"
                    fontType="/Saiyan-Sans-Regular.json"
                    size={size}
                    texture={loadedTexture}
                />
            </group>
        </>
    )
}
