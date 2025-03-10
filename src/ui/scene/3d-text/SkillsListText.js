import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { PortfolioText } from "./PortfolioText";
import { content } from "./content";

export const SkillsListText = () => {
    let yStart = 6 //Value that is the first y coordinate for the map

    //A constructor that sets the sizes and position of text for different viewports
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 1;
    responsiveData.desktopPositionX = 15;
    responsiveData.desktopPositionY = 0;
    responsiveData.desktopPositionZ = 20

    responsiveData.mobileSize = 1;
    responsiveData.mobilePositionX = 6;
    responsiveData.mobilePositionY = 0;
    responsiveData.mobilePositionZ = 20

    //Passes the Values to a hook that resets the size and position as the viewport changes
    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    // Array of items that are displayed in list fashion under the Section title
    // To add new item simple create a new object with the required keys and values
    const allItems = content.skills

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
                            xPosition={5}
                            yPosition={yStart}
                            zPosition={0}
                            yRotation={Math.PI}
                            size={size}
                            modalInfo={item}
                            allListItems={allItems}
                            itemIndex={index}
                            arrowRotation={[-1.57, -2.355, Math.PI]}
                            sectionType="skills"
                        />
                    )
                })}
            </group>
        </>
    )
}
