import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import ReactLogo from "../skills-icons/React_logo";
import { PortfolioText } from "./PortfolioText";
import Arrow from "./arrow/Arrow";

export const SkillsListText = () => {
    let yStart = 6 //Value that is the first y coordinate for the map

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

    // Array of items that are displayed in list fashion under the Section title
    // To add new item simple create a new object with the required keys and values
    const allItems = [
        {
            title: "ETL",
            subTitle: "Preparing Data for New Systems",
            description: "Navajo Nation millions of Documents with meta-data transferred. Gesture thousand of customer data transferred. CNM assistant instructor data prepared for student CapStones"
        },
        {
            title: "Data Integration",
            subTitle: "Synchronizing Data",
            description: "Gesture synchronized data between two Salesforce and Google Firebase"
        }
    ]

    return (
        <>
            <group //this group moves the whole list
                position={[positionX, positionY, positionZ]}
            >
                {allItems.map((item, index) => { //each item gets rendered into a component
                    yStart = yStart - 2 // Moves y coordinate down two each item to create list
                    return (
                        <>
                            <PortfolioText
                                key={index}
                                text={item.title}
                                xPosition={20}
                                yPosition={yStart} //separate each new item in list by y-2
                                zPosition={0}
                                yRotation={-1.570796}
                                size={size}
                                modalInfo={item}
                            />

                            <Arrow
                                xPosition={20}
                                yPosition={yStart} //separate each new item in list by y-2
                                zPosition={0}
                                arrowRotation={[-0.785, 0, 1.57]}
                            />
                        </>
                    )
                })}
            </group>
            {/* <SkillsIcons
                    // position={[0, 0, 0]}
                    iconState={iconState}
                /> */}
            <ReactLogo />
        </>
    )
}
