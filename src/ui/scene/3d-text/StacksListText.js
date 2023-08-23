import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { PortfolioText } from "./PortfolioText";

export const StacksListText = () => {
    let yStart = 6 //Value that is the first y coordinate for the map

    const responsiveData = new Responsive();
    responsiveData.desktopSize = 1.5;
    responsiveData.desktopPositionX = 0;
    responsiveData.desktopPositionY = 0;
    responsiveData.desktopPositionZ = 0

    responsiveData.mobileSize = 1;
    responsiveData.mobilePositionX = 0;
    responsiveData.mobilePositionY = 0;
    responsiveData.mobilePositionZ = -2

    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    // Array of items that are displayed in list fashion under the Section title
    // To add new item simple create a new object with the required keys and values
    const allItems = [
        {
            title: "React",
            subTitle: "Preparing Data for New Systems",
            description: "Navajo Nation millions of Documents with meta-data transferred. Gesture thousand of customer data transferred. CNM assistant instructor data prepared for student CapStones",
            img: "react-icon.png"
        },
        {
            title: "JavaScript/CSS/HTML",
            subTitle: "Synchronizing Data",
            description: "Gesture synchronized data between two Salesforce and Google Firebase",
            img: null
        },
        {
            title: "YAML",
            subTitle: "Synchronizing Data",
            description: "Gesture synchronized data between two Salesforce and Google Firebase",
            img: null
        },
        {
            title: "FileMaker",
            subTitle: "Synchronizing Data",
            description: "Gesture synchronized data between two Salesforce and Google Firebase",
            img: null
        },
        {
            title: "Express",
            subTitle: "Synchronizing Data",
            description: "Gesture synchronized data between two Salesforce and Google Firebase",
            img: null
        },
        {
            title: "Node",
            subTitle: "Synchronizing Data",
            description: "Gesture synchronized data between two Salesforce and Google Firebase",
            img: null
        }
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
                            xPosition={-20}
                            yPosition={yStart}
                            zPosition={10}
                            yRotation={1.570796}
                            size={size}
                            modalInfo={item}
                            allListItems={allItems}
                            itemIndex={index}
                            arrowRotation={[0.785, Math.PI, 1.57]}
                            sectionType="stack"
                        />
                    )
                })}
            </group>
        </>
    )
}
