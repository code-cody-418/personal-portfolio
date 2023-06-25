import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { FontConfig } from "./FontConfig";
import ReactLogo from "../skills-icons/React_logo";
import { useTexture } from "@react-three/drei";

export const SkillsListText = () => {
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 1.5;
    responsiveData.desktopPositionX = 0;
    responsiveData.desktopPositionY = 0;
    responsiveData.desktopPositionZ = -15

    responsiveData.mobileSize = 1.5;
    responsiveData.mobilePositionX = 0;
    responsiveData.mobilePositionY = 0;
    responsiveData.mobilePositionZ = -8

    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    let loadedTexture = useTexture("/textures/blue_09_matCap.png")

    const ListText = () => {
        return (
            <>
                <group
                    //this group moves the whole list
                    position={[positionX, positionY, positionZ]}>
                    <group
                        position={[20, 4, 0]} //separate each new item in list by y-2
                        rotation={[0, -1.570796, 0]}
                    >
                        <FontConfig
                            text="React"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            texture={loadedTexture}
                        />
                    </group>
                    <group
                        position={[20, 2, 0]}
                        rotation={[0, -1.570796, 0]}
                    >
                        <FontConfig
                            text="Express"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            texture={loadedTexture}
                        />
                    </group>
                    <group

                        position={[20, 0, 0]}
                        rotation={[0, -1.570796, 0]}
                    >
                        <FontConfig
                            text="Redux"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            texture={loadedTexture}
                        />
                    </group>
                    <group
                        position={[20, -2, 0]}
                        rotation={[0, -1.570796, 0]}
                    >
                        <FontConfig
                            text="Docker"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            texture={loadedTexture}
                        />
                    </group>
                    <group

                        position={[20, -4, 0]}
                        rotation={[0, -1.570796, 0]}
                    >
                        <FontConfig
                            text="Bootstrap"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            texture={loadedTexture}

                        />
                    </group>
                    <group

                        position={[20, -6, 0]}
                        rotation={[0, -1.570796, 0]}
                    >
                        <FontConfig
                            text="GitHub"
                            fontType="/Sunmore-Slant-Free-Regular.json"
                            size={size}
                            texture={loadedTexture}
                        />
                    </group>
                </group>
                {/* <SkillsIcons
                    // position={[0, 0, 0]}
                    iconState={iconState}
                /> */}
                <ReactLogo />
            </>
        )
    }
    return (
        <>
            <ListText />
        </>
    )
}
