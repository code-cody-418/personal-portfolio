import React from "react";
import { useResponsive } from "../../../customHooks/useResponsive";
import { Responsive } from "../../../constructor/Responsive";
import { PortfolioText } from "./PortfolioText";

export const SkillsListText = () => {
    let yStart = 6 //Value that is the first y coordinate for the map

    //A constructor that sets the sizes and position of text for different viewports
    const responsiveData = new Responsive();
    responsiveData.desktopSize = 1.5;
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
    const allItems = [
        {
            title: "ETL & Data Integration",
            subTitle: "Preparing Data for New Systems",
            description: "As an experienced data professional, I have honed my expertise in Extract, Transform, and Load (ETL) processes, playing a pivotal role in enabling seamless data integration. In previous jobs, I've transferred multi-million row datasets. I've extracted data from databases and files, ensuring its accuracy and completeness. With a deep understanding of data manipulation techniques, I transformed the extracted data using JavaScript to meet specific requirements. Finally, employing efficient loading mechanisms, I’ve loaded the transformed data into the target systems. With my strong understanding of ETL methodologies, I am dedicated to delivering optimized data pipelines that drive operational efficiency and foster informed decision-making.",
            img: "./skills/etl-example.png",
            roundImg: false
        },
        {
            title: "REST API's",
            subTitle: "Synchronizing Data",
            description: "As a skilled developer, I have extensive expertise designing and implementing RestFul API’s used for data synchronization. Data between two databases needed to synchronize, so when data changed in one place it would change in the other. This was implemented utilizing various principles like HTTP Methods, Database triggers and CRUD operations.",
            img: "./skills/rest-example.jpg",
            roundImg: false
        },
        {
            title: "Frontend Development",
            subTitle: "Websites",
            description: "My experience with frontend development has given me a strong grasp of how to provide a better user experience, while providing my employers with data-driven solutions. Leveraging my expertise in design I’ve used wireframing and Adobe software to create layouts that were used to plan the release of a website with over 20 pages. Furthermore, I’ve changed static data entry tasks into dynamic data processes that saved my coworkers hours of work every single day.",
            img: "./skills/frontend-example.jpg",
            roundImg: false
        },
        {
            title: "Backend Development",
            subTitle: "Api's and Data",
            description: "My experience in the backend has consisted of NodeJs with various databases, cms, and apis. I’ve worked extensively creating api’s built out in ExpressJs. These api’s would do various things, but mostly they would talk to databases or other external api’s. One of my biggest accomplishments as a backend dev has been carrying out ETL pipelines that later synchronized data between Google FireBase and Salesforce. Another huge accomplishment was successfully conducting a data transfer transferring over two and a half million documents and its meta data between DB’s. This project saved my employer 133% of my entire year's salary, which only took me two months to complete all while training one of my colleagues on ETL.",
            img: null,
            roundImg: false,
            apiCall: true
        },
        {
            title: "Git & GitHub",
            subTitle: "Version Control",
            description: "Git has been one of my favorite tools as a developer. It has allowed me to build various applications, with many different teams, working as an instructor, a freelancer, and a professional developer. I’ve worked with teams pushing and pulling code to GitHub as well as creating local remote repo’s. On past projects, I used Pull Request with a project manager to verify my changes. I’m also familiar with various git situations like dealing merge conflicts and rolling back commits.",
            img: null,
            threeLogo: "GithubLogo",
            roundImg: false
        },
        {
            title: "Containerization",
            subTitle: "Docker",
            description: "Using containers to build applications has been a cornerstone of my devops approach. Using Docker I was able to build entire applications in isolated environments. This allowed me to deploy my applications into cloud environments for testing purposes. In addition, as an assistant instructor, my students used containers to build their applications. By giving students configuration files they were able to spin up MERN stack applications with ease allowing for a practical learning environment.",
            img: null,
            roundImg: false
        },
        {
            title: "Cloud Computing",
            subTitle: "Digital Ocean",
            description: "As a full-stack dev I am quite versed in creating virtual environments for websites and applications. Most of my experience is within DigitalOcean. Here I built machines called Droplets that ran Ubuntu OS’s that I managed from an SSH terminal or through the dashboard. Many things were configured like resources, firewalls, networks, DNS and everything else to successfully run a server. In addition, I also have some experience working within Google Firebase. This was another cloud computing environment where I accessed databases and ran various functions from the code I wrote. ",
            img: null,
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
                            xPosition={0}
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
