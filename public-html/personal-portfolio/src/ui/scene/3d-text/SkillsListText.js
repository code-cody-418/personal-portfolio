import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import ReactLogo from "../skills-icons/React_logo";
import { PortfolioText } from "./PortfolioText";
import { ModalInfo } from "../../../constructor/ModalInfo";

export const SkillsListText = () => {
    //A constructor that sets the sizes and position of text for different viewports
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 1.5;
    responsiveData.desktopPositionX = 0;
    responsiveData.desktopPositionY = 0;
    responsiveData.desktopPositionZ = -15

    responsiveData.mobileSize = 1.5;
    responsiveData.mobilePositionX = 0;
    responsiveData.mobilePositionY = 0;
    responsiveData.mobilePositionZ = -8

    //Passes the Values to a hook that resets the size and position as the viewport changes
    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    //Object Constructor that sets values for the modal for each Text Object
    const etlInfo = new ModalInfo()
    etlInfo.title = "Extract, Transform, and Load"
    etlInfo.subTitle = "Preparing Data for New Systems"
    etlInfo.description = "Navajo Nation millions of Documents with meta-data transferred. Gesture thousand of customer data transferred. CNM assistant instructor data prepared for student CapStones"

    const dataInt = new ModalInfo()
    dataInt.title = "Data Integration"
    dataInt.subTitle = "Synchronizing Data"
    dataInt.description = "Gesture synchronized data between two Salesforce and Google Firebase"

    return (
        <>
            <group //this group moves the whole list
                position={[positionX, positionY, positionZ]}
            >
                < PortfolioText
                    text={"ETL"}
                    xPosition={20}
                    yPosition={4} //separate each new item in list by y-2
                    zPosition={0}
                    yRotation={-1.570796}
                    size={size}
                    modalInfo={etlInfo}
                />

                < PortfolioText
                    text={"Data Integration"}
                    xPosition={20}
                    yPosition={2} //separate each new item in list by y-2
                    zPosition={0}
                    yRotation={-1.570796}
                    size={size}
                    modalInfo={dataInt}
                />
                {/* <group
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
                </group> */}
            </group>
            {/* <SkillsIcons
                    // position={[0, 0, 0]}
                    iconState={iconState}
                /> */}
            <ReactLogo />
        </>
    )
}
