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
            subTitle: "Senior Programmer Analyst",
            description: "With the Navajo Nation I led a team of developers, conducted a data transfer, rebuilt the department website, and maintained VM infrastructure. My primary responsibility was spearheading a fullstack recruitment application. While building the application I wrote authentication code, maintained docker images, led scrum meetings, and performed code reviews. Furthermore, my initiative saved the department $60k by successfully transferring over 2 million records to a new database in a short time. The data was extracted into CSV, transformed using JavaScript, and then loaded using the database GUI. Additionally, I rebuilt our website using modern css and frameworks to create a mobile responsive site. The website project also included changing static html with dynamic data. This automation saved one employee four hours a day. Also, a search bar was added that could filter jobs allowing a better user experience. Lastly, throughout my employment I delivered various improvements to the servers and running services, including creating backups, upgrading software, and configuring web servers.",
            img: null,
            threeLogo: "NNSeal"
        },
        {
            title: "Gesture",
            subTitle: "Software Engineer",
            description: "At Gesture my primary duties included developing the codebase with various api endpoints, configuring docker for dev environment, refactoring the codebase, and pushing code to production. One primary object was building multiple ETL pipelines for data syncing between our databases to multiple CRM’s. By utilizing an express server I was able to build out api endpoints that would interact with CRM webhooks. These endpoints could then be deployed, utilizing Google Firebase functions, along with triggers that watched for record changes in the database. Overall, the synchronized databases allowed for other departments to manage data with ease. Lastly, I built api endpoints that would interact with the Stripe library rest api’s. This endpoint was part of the ecommerce product that would charge users.",
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
            description: "My job was building web applications to meet my clients needs. Clients had various requirements including both frontend and backend requests. One client focused on 3d websites, which were created using threeJS. These sites consisted of walking characters and environments. One project also required multiple users to be in one room, so socket.io was utilized to create a server with UDP sockets that allowed multiple users to wander around a room together. On the other hand, I worked with a client to build a backend that utilized Google Firebase. With this client my focus was creating endpoints with CRUD operations for a NoSQL database.",
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
