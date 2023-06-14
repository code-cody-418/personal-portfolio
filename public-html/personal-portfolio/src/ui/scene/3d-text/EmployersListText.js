import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";
import { useTexture } from "@react-three/drei";

export const EmployersListText = () => {
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 1.5;
    responsiveData.desktopPositionX = 15;
    responsiveData.desktopPositionY = 0;
    responsiveData.desktopPositionZ = 20

    responsiveData.mobileSize = 1.2;
    responsiveData.mobilePositionX = 6;
    responsiveData.mobilePositionY = 0;
    responsiveData.mobilePositionZ = 20

    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    let loadedTexture = useTexture("/textures/purple_08_matCap.png")

    const ListText = () => {
        return (
            <>
                <group
                    //this group moves the whole list
                    position={[positionX, positionY, positionZ]}>
                    <group
                        position={[0, 4, 0]} //separate each new item in list by y-2
                        rotation={[0, Math.PI, 0]}>
                        <FontConfig
                            text="Navajo Nation"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            texture={loadedTexture}
                        />
                    </group>

                    <group
                        position={[0, 2, 0]}
                        rotation={[0, Math.PI, 0]}>
                        <FontConfig
                            text="Gesture"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            texture={loadedTexture}
                        />
                    </group>
                    <group
                        position={[0, 0, 0]}
                        rotation={[0, Math.PI, 0]}>
                        <FontConfig
                            text="CNM"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            texture={loadedTexture}
                        />
                    </group>

                    <group
                        position={[0, -2, 0]}
                        rotation={[0, Math.PI, 0]}>
                        <FontConfig
                            text="Freelance"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            texture={loadedTexture}
                        />
                    </group>
                </group>
            </>
        )
    }
    return (
        <>
            <ListText />
        </>
    )


}
