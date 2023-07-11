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
            subTitle: "Programmer Analyst",
            description: "With the Navajo Nation I rebuilt a website, conducted a data transfer, built a Help Desk application, and maintained VM infrastructure. WIth the website, I used modern styling techniques to create a mobile responsive site using the Bootstrap library. Also, old hard coded data was converted to display dynamically and a search algorithm was added that could filter job data. On the other hand, I successfully transferred over 2 million documents from an old database to a new one. This was done using the extraction, transformation, and loading methodology. The data was extracted into CSV format, transformed using JavaScript, and then loaded using the database CMS gui.",
            img: "./redux-icon.png"
        },
        {
            title: "Gesture",
            subTitle: "Intern Backend Engineer",
            description: "At Gesture, I built ETL pipelines for data syncing between our databases and the Salesforce       CRM. To do this I had to authenticate requests to Salesforce using JWT tokens and certificates. Then I created an express server, utilizing Google Firebase functions, with a trigger that would sync our new data to Salesforce. Lastly, webhooks were utilized, using Flow and Outbound Messages, to update our database directly from Salesforce.",
            img: null
        },
        {
            title: "CNM",
            subTitle: "Assistant Instructor",
            description: "At this bootcamp I taught students how to build Web Applications using a modified MERN Stack. Other tools shown to students included git and Docker. With this stack and tools I helped students successfully create full blown web apps. Students were also taught how to build RESTful api’s, as well as how to develop data-downloader’s to store external API data.",
            img: null
        },
        {
            title: "Freelance",
            subTitle: "Web Developer",
            description: "My job was building websites to meet the clients needs. Clients required 3d websites, which were created using threeJS. These sites consisted of walking characters and environments. One project also required multiple users to be in one room, so socket.io was utilized to create a server with UDP sockets that allowed multiple users to wander around a room together.",
            img: null
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
