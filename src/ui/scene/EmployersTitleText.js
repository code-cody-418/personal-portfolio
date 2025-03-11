import React from "react";
import { useResponsive } from "../../customHooks/useResponsive";
import { Responsive } from "../../constructor/Responsive";
import { FontConfig } from "./3d-text/FontConfig";
import { useTexture } from "@react-three/drei";

export const EmployersTitleText = ({font}) => {
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 2;
    responsiveData.desktopPositionX = -8;
    responsiveData.desktopPositionY = 7;
    responsiveData.desktopPositionZ = 20;

    responsiveData.mobileSize = 1.5;
    responsiveData.mobilePositionX = 6;
    responsiveData.mobilePositionY = 7;
    responsiveData.mobilePositionZ = 20;

    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    let loadedTexture = useTexture("/textures/purple_08_matCap.png")

    return (
        <>
            <group
                position={[positionX, positionY, positionZ]}
                rotation={[0, Math.PI, 0]}
            >
                <FontConfig
                    text="Employers"
                    font={font}
                    size={size}
                    texture={loadedTexture}
                />
            </group>
        </>
    )
}



