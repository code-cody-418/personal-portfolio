import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { PortfolioText } from "./PortfolioText";

export const EmployersListText = () => {
    let yStart = 6 //Value that is the first y coordinate for the map

    const responsiveData = new Responsive();
    responsiveData.desktopSize = 1.5;
    responsiveData.desktopPositionX = 0;
    responsiveData.desktopPositionY = 0;
    responsiveData.desktopPositionZ = -15

    responsiveData.mobileSize = 1.2;
    responsiveData.mobilePositionX = 0;
    responsiveData.mobilePositionY = 0;
    responsiveData.mobilePositionZ = -8

    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    // Array of items that are displayed in list fashion under the Section title
    // To add new item simple create a new object with the required keys and values
    const allItems = [
        {
            title: "Navajo Nation",
            subTitle: "Preparing Data for New Systems",
            description: "Navajo Nation millions of Documents with meta-data transferred. Gesture thousand of customer data transferred. CNM assistant instructor data prepared for student CapStones"
        },
        {
            title: "Gesture",
            subTitle: "Synchronizing Data",
            description: "Gesture synchronized data between two Salesforce and Google Firebase"
        },
        {
            title: "CNM",
            subTitle: "Preparing Data for New Systems",
            description: "Navajo Nation millions of Documents with meta-data transferred. Gesture thousand of customer data transferred. CNM assistant instructor data prepared for student CapStones"
        },
        {
            title: "Freelance",
            subTitle: "Synchronizing Data",
            description: "Gesture synchronized data between two Salesforce and Google Firebase"
        },
    ]

    return (
        <>
            <group //this group moves the whole list
                position={[positionX, positionY, positionZ]}
            >
                {allItems.map((item, index) => { //each item gets rendered into a component
                    yStart = yStart - 2 // Moves y coordinate down two each item to create list

                    const textKey = "text" + item.title + index
                    return (
                        <PortfolioText
                            key={textKey}
                            text={item.title}
                            xPosition={20}
                            yPosition={yStart} //separate each new item in list by y-2
                            zPosition={0}
                            yRotation={-1.570796}
                            size={size}
                            modalInfo={item}
                            arrowRotation={[-0.785, 0, 1.57]}
                        />
                    )
                })}
            </group>
        </>
    )
}
