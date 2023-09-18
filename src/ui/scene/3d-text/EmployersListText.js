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

    responsiveData.mobileSize = 1;
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
            description: "With the Navajo Nation I conducted a data transfer, rebuilt the website, built a Help Desk application, and maintained VM infrastructure. First off, I saved the department 133% of my yearly salary by successfully transferring over 2 million documents to a new database in just a couple months. The data was extracted into CSV, transformed using JavaScript, and then loaded using the database GUI. With the website I used modern styling techniques to create a mobile responsive site by using the Bootstrap library. In addition, hard coded job data was converted to display data dynamically. This automation saved one employee four hours a day. Also, a search bar was added that could filter jobs allowing a better user experience. Lastly, the Help Desk application integrated the Zoom REST API to programmatically send ticket updates to the entire team.",
            img: null,
            threeLogo: "NNSeal"
        },
        {
            title: "Gesture",
            subTitle: "Intern Backend Engineer",
            description: "At Gesture, I built ETL pipelines for data syncing between our databases and the Salesforce       CRM. To do this I had to authenticate requests to Salesforce using JWT tokens and certificates. Then I created an express server, utilizing Google Firebase functions, with a trigger that would sync our new data to Salesforce. Lastly, webhooks were utilized, using Flow and Outbound Messages, to update our database directly from Salesforce.",
            img: "/experience/Gesture-Logo-Wordmark.webp",
            roundImg: false
        },
        {
            title: "CNM",
            subTitle: "Assistant Instructor",
            description: "At this bootcamp I taught students how to build Web Applications using a modified MERN Stack. Other tools shown to students included git and Docker. With this stack and tools I helped students successfully create full blown web apps. Students were also taught how to build RESTful api’s, as well as how to develop data-downloader’s to store external API data.",
            img: "/experience/CNM_Ingenuity_WhiteText.png",
            roundImg: false
        },
        {
            title: "Freelance",
            subTitle: "Web Developer",
            description: "My job was building websites to meet the clients needs. Clients required 3d websites, which were created using threeJS. These sites consisted of walking characters and environments. One project also required multiple users to be in one room, so socket.io was utilized to create a server with UDP sockets that allowed multiple users to wander around a room together.",
            img: "/experience/upwork-logo.svg",
            roundImg: false
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
                            allListItems={allItems}
                            itemIndex={index}
                            arrowRotation={[-0.785, 0, 1.57]}
                            sectionType="employers"
                        />
                    )
                })}
            </group>
        </>
    )
}
