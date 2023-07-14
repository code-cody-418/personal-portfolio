import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import ReactLogo from "../skills-icons/React_logo";
import { PortfolioText } from "./PortfolioText";

export const SkillsListText = () => {
    let yStart = 6 //Value that is the first y coordinate for the map

    //A constructor that sets the sizes and position of text for different viewports
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 1.5;
    responsiveData.desktopPositionX = 15;
    responsiveData.desktopPositionY = 0;
    responsiveData.desktopPositionZ = 20

    responsiveData.mobileSize = 1.2;
    responsiveData.mobilePositionX = 6;
    responsiveData.mobilePositionY = 0;
    responsiveData.mobilePositionZ = 20

    //Passes the Values to a hook that resets the size and position as the viewport changes
    const { size, positionX, positionY, positionZ } = useResponsive(responsiveData);

    // Array of items that are displayed in list fashion under the Section title
    // To add new item simple create a new object with the required keys and values
    const allItems = [
        {
            title: "ETL & Data Integration",
            subTitle: "Preparing Data for New Systems",
            description: "As an experienced data professional, I have honed my expertise in Extract, Transform, and Load (ETL) processes, playing a pivotal role in enabling seamless data integration. In previous jobs, I've transferred multi-million row datasets. I've extracted data from databases and files, ensuring its accuracy and completeness. With a deep understanding of data manipulation techniques, I transformed the extracted data using JavaScript to meet specific requirements. Finally, employing efficient loading mechanisms, I’ve loaded the transformed data into the target systems. With my strong understanding of ETL methodologies, I am dedicated to delivering optimized data pipelines that drive operational efficiency and foster informed decision-making.",
            img: "./skills/etl-example.png"
        },
        {
            title: "REST API's",
            subTitle: "Synchronizing Data",
            description: "As a skilled developer, I have extensive expertise designing and implementing RestFul API’s used for data synchronization. Data between two databases needed to synchronize, so when data changed in one place it would change in the other. This was implemented utilizing various principles like HTTP Methods, Database triggers and CRUD operations.",
            img: "./skills/rest-example.jpg"
        },
        {
            title: "Backend Development",
            subTitle: "Synchronizing Data",
            description: "Gesture synchronized data between two Salesforce and Google Firebase",
            img: "./redux-icon.png"
        },
        {
            title: "Git & GitHub",
            subTitle: "Synchronizing Data",
            description: "Gesture synchronized data between two Salesforce and Google Firebase",
            img: "./redux-icon.png"
        },
        {
            title: "Containerization",
            subTitle: "Synchronizing Data",
            description: "Gesture synchronized data between two Salesforce and Google Firebase",
            img: "./redux-icon.png"
        },
        {
            title: "Frontend Development",
            subTitle: "Synchronizing Data",
            description: "My experience with frontend development has given me a strong grasp of how to provide a better user experience, while providing my employers with data-driven solutions. Leveraging my expertise in design I’ve used wireframing and Adobe software to create layouts that were used to plan the release of a website with over 20 pages. Furthermore, I’ve changed static data entry tasks into dynamic data processes that saved my coworkers hours of work every single day.",
            img: "./skills/frontend-example.jpg"
        },
        {
            title: "Cloud Computing",
            subTitle: "Synchronizing Data",
            description: "Gesture synchronized data between two Salesforce and Google Firebase",
            img: "./redux-icon.png"
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
                            xPosition={0}
                            yPosition={yStart}
                            zPosition={0}
                            yRotation={Math.PI}
                            size={size}
                            modalInfo={item}
                            arrowRotation={[-1.57, -2.355, Math.PI]}
                            sectionType="skills"
                        />
                    )
                })}
            </group>
            <ReactLogo />
        </>
    )
}
