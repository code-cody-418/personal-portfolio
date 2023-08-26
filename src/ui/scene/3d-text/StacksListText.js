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
            subTitle: "Reactive UI",
            description: "The website you are viewing now was created using React. Each listed item is actually a component that loops through an array of data. The modal where this text is being read is also a component. In addition, a custom hook was created to allow for a mobile responsive application. Traditional methods of resizing text for mobile were not used because the text is inside a Canvas component that comes from the library React-Three-Fiber. Furthermore, I’ve built various other sites using React. They were single page applications that utilized redux for state management. This allowed the UI to change accordingly for a good user experience.",
            img: "react-icon.png"
        },
        {
            title: "JavaScript/CSS/HTML",
            subTitle: "Primary Languages",
            description: "JavaScript is my primary coding language. I’ve utilized it to its full ability to complete many tasks. I've used it within the browser to dynamically display and sort dynamic job data with the DPM. In addition, with Gesture I used it in the backend to build RestFul API’s that synchronized data between SalesForce and FireBase. Furthermore, it was used by me to transform data during a data transfer of millions of documents that contained folder and document meta-data. In addition, I am quite fluent with both HTML and CSS. I’ve created multiple websites without the need for complex libraries and frameworks. Although I tend to always squeeze in BootStrap.",
            img: null
        },
        {
            title: "YAML",
            subTitle: "Config Config Config",
            description: "Most of my experience with YAML has come from working on Docker, but I have also found myself writing some YAML for config files. To spin up Docker containers I would write out a Dockerfile in YAML. I could then spin up multiple containers at a time by writing up a Docker-Compose file in YAML. ",
            img: null
        },
        {
            title: "FileMaker",
            subTitle: "Data, UI, and Scripting",
            description: "While with the Navajo Nation we used FileMaker to build our HR system. Inside FileMaker I managed data, functions, and layouts. The data was relational, so tables with common fields between them were connected. New fields, tables, and databases were also created by me. In addition, functions were also created that acted as a backend that automate HR processes. These functions would take pdf inputs from customers, convert it into fields, then finally export the data in various forms. Furthermore, layouts were created that allowed user to enter data into FileMaker. Lastly, I managed the FileMaker Server through the admin console. This included enabling various backups, automated scripts, user configuration, file management and upgrades.",
            img: null
        },
        {
            title: "Express",
            subTitle: "Automation",
            description: "My primary backend experience has been using the Express.js library. Using both JavaScript and TypeScript I built out various api’s. With Gesture, Express was used to synchronize data between Firebase and SalesForce. I built out an extensive API within Express, with validation and security certificates, that allowed these two applications to pass data between them. In addition, as an assistant instructor, I taught students how to build out api’s for their projects. Teaching them how to create CRUD routes that would programmatically change data inside the database based on user input from the Frontend.",
            img: null
        },
        {
            title: "SalesForce",
            subTitle: "CMS Integration",
            description: "Building out SalesForce was one of my primary objects while interning with Gesture. This task included creating UI screens, data fields, reports, and flows. The UI screens were fairly basic click and drag ordering of fields inside of the application. However, the creating of data fields was much more challenging as they had to match data types for the data inside of FireBase. Fields were also configured to have triggers that would fire api flows that would hit an express endpoint to update FireBase data. Furthermore, reports were also created that showed various information about the data like Sales information. Finally, this all worked around SalesForce ability to see changes within its database and fire to an endpoint based on the changed data. This ultimately allowed for data synchronization, which allowed users to easily change essential business data with ease.  ",
            img: null
        },
        {
            title: "SQL",
            subTitle: "Data",
            description: "Using databases has been the backbone of my developer experience. Some things I've done include creating prepared statements, configuration, and relationships. One of the first things I learned when programmatically entering data with an api is to use prepared statements. I’ve written various SQL statements that followed CRUD principles. In order to execute these prepared statements a pool connection was often used to access the database. Furthermore, I’ve configured various relational databases including MySql, PostGres, and FileMaker. Configuration included setting up user permissions and running create table statements to build out their tables and fields. Lastly, I am quite adequate at working with relational data. By using primary and foreign keys I am able to use data between tables and build out statements utilizing join.",
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
