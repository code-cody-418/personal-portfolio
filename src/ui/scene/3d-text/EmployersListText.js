import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { PortfolioText } from "./PortfolioText";
import { content } from "./content";

export const EmployersListText = () => {
    let yStart = 6 //Value that is the first y coordinate for the map

    const responsiveData = new Responsive();
    responsiveData.desktopSize = 1;
    responsiveData.desktopPositionX = -9;
    responsiveData.desktopPositionY = 0;
    responsiveData.desktopPositionZ = 20

    responsiveData.mobileSize = 0.8;
    responsiveData.mobilePositionX = 7;
    responsiveData.mobilePositionY = -9;
    responsiveData.mobilePositionZ = 20

    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    // Array of items that are displayed in list fashion under the Section title
    // To add new item simple create a new object with the required keys and values
    const allItems = content.employers

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
                            xPosition={0}
                            yPosition={yStart} //separate each new item in list by y-2
                            zPosition={0}
                            yRotation={Math.PI}
                            size={size}
                            modalInfo={item}
                            allListItems={allItems}
                            itemIndex={index}
                            arrowRotation={[-1.57, -2.355, Math.PI]}
                            sectionType="employers"
                        />
                    )
                })}
            </group>
        </>
    )
}
