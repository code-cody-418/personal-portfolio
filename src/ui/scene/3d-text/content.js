export const content = {
  employers: [
    {
      title: "Navajo Nation",
      titleImg: "/logos/navajo-nation-seal-01.svg",
      subTitle: "Senior Programmer Analyst",
      description:
        "With the Navajo Nation I led a team of developers, conducted a data transfer, rebuilt the department website, and maintained VM infrastructure. My primary responsibility was spearheading a fullstack recruitment application. While building the application I wrote authentication code, maintained docker images, led scrum meetings, and performed code reviews. Furthermore, my initiative saved the department $60k by successfully transferring over 2 million records to a new database in a short time. The data was extracted into CSV, transformed using JavaScript, and then loaded using the database GUI. Additionally, I rebuilt our website using modern css and frameworks to create a mobile responsive site. The website project also included changing static html with dynamic data. This automation saved one employee four hours a day. Also, a search bar was added that could filter jobs allowing a better user experience. Lastly, throughout my employment I delivered various improvements to the servers and running services, including creating backups, upgrading software, and configuring web servers.",
      img: null,
      threeLogo: "NNSeal",
    },
    {
      title: "Gesture",
      titleImg: "/experience/Gesture-Logo-Wordmark.webp",
      subTitle: "Software Engineer",
      description:
        "At Gesture my primary duties included developing the codebase with various api endpoints, configuring docker for dev environment, refactoring the codebase, and pushing code to production. One primary object was building multiple ETL pipelines for data syncing between our databases to multiple CRM’s. By utilizing an express server I was able to build out api endpoints that would interact with CRM webhooks. These endpoints could then be deployed, utilizing Google Firebase functions, along with triggers that watched for record changes in the database. Overall, the synchronized databases allowed for other departments to manage data with ease. Lastly, I built api endpoints that would interact with the Stripe library rest api’s. This endpoint was part of the ecommerce product that would charge users.",
      img: null,
      roundImg: false,
    },
    {
      title: "CNM",
      titleImg: "/experience/CNM_Ingenuity_WhiteText.png",
      subTitle: "Assistant Instructor",
      description:
        "At this bootcamp I taught students how to build Web Applications using a modified MERN Stack. Other tools shown to students included git and Docker. With this stack and tools I helped students successfully create full blown web apps. Students were also taught how to build RESTful api’s, as well as how to develop data-downloader’s to store external API data.",
      img: null,
      roundImg: false,
    },
    {
      title: "Freelance",
      titleImg: "/experience/upwork-logo.svg",
      subTitle: "Web Developer",
      description:
        "My job was building web applications to meet my clients needs. Clients had various requirements including both frontend and backend requests. One client focused on 3d websites, which were created using threeJS. These sites consisted of walking characters and environments. One project also required multiple users to be in one room, so socket.io was utilized to create a server with UDP sockets that allowed multiple users to wander around a room together. On the other hand, I worked with a client to build a backend that utilized Google Firebase. With this client my focus was creating endpoints with CRUD operations for a NoSQL database.",
      img: null,
      roundImg: false,
    },
  ],
  skills: [
    {
      title: "ETL & Data Integration",
      subTitle: "Preparing Data for New Systems",
      description:
        "As an experienced data professional, I have honed my expertise in Extract, Transform, and Load (ETL) processes, playing a pivotal role in enabling seamless data integration. In previous jobs, I've transferred multi-million row datasets. I've extracted data from databases and files, ensuring its accuracy and completeness. With a deep understanding of data manipulation techniques, I transformed the extracted data using JavaScript to meet specific requirements. Finally, employing efficient loading mechanisms, I’ve loaded the transformed data into the target systems. With my strong understanding of ETL methodologies, I am dedicated to delivering optimized data pipelines that drive operational efficiency and foster informed decision-making.",
      img: "./skills/etl-example.png",
      roundImg: false,
      colSize: 6,
    },
    {
      title: "REST API's",
      subTitle: "Synchronizing Data",
      description:
        "As a skilled developer, I have extensive expertise designing and implementing RestFul API’s used for data synchronization. Data between two databases needed to synchronize, so when data changed in one place it would change in the other. This was implemented utilizing various principles like HTTP Methods, Database triggers and CRUD operations.",
      img: "./skills/rest-example.jpg",
      roundImg: false,
      colSize: 6,
    },
    {
      title: "Frontend Development",
      subTitle: "Websites",
      description:
        "My experience with frontend development has given me a strong grasp of how to provide a better user experience, while providing my employers with data-driven solutions. Leveraging my expertise in design I’ve used wireframing and Adobe software to create layouts that were used to plan the release of a website with over 20 pages. Furthermore, I’ve changed static data entry tasks into dynamic data processes that saved my coworkers hours of work every single day.",
      img: "./skills/frontend-example.jpg",
      roundImg: false,
      colSize: 6,
    },
    {
      title: "Backend Development",
      subTitle: "Api's and Data",
      description:
        "My experience in the backend has consisted of NodeJs with various databases, cms, and apis. I’ve worked extensively creating api’s built out in ExpressJs. These api’s would do various things, but mostly they would talk to databases or other external api’s. One of my biggest accomplishments as a backend dev has been carrying out ETL pipelines that later synchronized data between Google FireBase and Salesforce. Another huge accomplishment was successfully conducting a data transfer transferring over two and a half million documents and its meta data between DB’s. This project saved my employer 133% of my entire year's salary, which only took me two months to complete all while training one of my colleagues on ETL.",
      img: null,
      roundImg: false,
      apiCall: true,
      colSize: 6,
    },
    {
      title: "Git & GitHub",
      subTitle: "Version Control",
      description:
        "Git has been one of my favorite tools as a developer. It has allowed me to build various applications, with many different teams, working as an instructor, a freelancer, and a professional developer. I’ve worked with teams pushing and pulling code to GitHub as well as creating local remote repo’s. On past projects, I used Pull Request with a project manager to verify my changes. I’m also familiar with various git situations like dealing merge conflicts and rolling back commits.",
      img: null,
      threeLogo: "GithubLogo",
      roundImg: false,
    },
    {
      title: "Containerization",
      titleImg: "/logos/docker-logo.svg",
      subTitle: "Docker",
      description:
        "Using containers to build applications has been a cornerstone of my devops approach. Using Docker I was able to build entire applications in isolated environments. This allowed me to deploy my applications into cloud environments for testing purposes. In addition, as an assistant instructor, my students used containers to build their applications. By giving students configuration files they were able to spin up MERN stack applications with ease allowing for a practical learning environment.",
      img: null,
      roundImg: false,
    },
    {
      title: "Cloud Computing",
      titleImg: "/logos/digital-ocean-logo-01.svg",
      subTitle: "Digital Ocean",
      description:
        "As a full-stack dev I am quite versed in creating virtual environments for websites and applications. Most of my experience is within DigitalOcean. Here I built machines called Droplets that ran Ubuntu OS’s that I managed from an SSH terminal or through the dashboard. Many things were configured like resources, firewalls, networks, DNS and everything else to successfully run a server. In addition, I also have some experience working within Google Firebase. This was another cloud computing environment where I accessed databases and ran various functions from the code I wrote. ",
      img: null,
      roundImg: false,
    },
  ],
  stack: [
    {
      title: "React",
      subTitle: "Reactive UI",
      description:
        "The website you are viewing now was created using React. Each listed item is actually a component that loops through an array of data. The modal where this text is being read is also a component. In addition, a custom hook was created to allow for a mobile responsive application. Traditional methods of resizing text for mobile were not used because the text is inside a Canvas component that comes from the library React-Three-Fiber. Furthermore, I’ve built various other sites using React. They were single page applications that utilized redux for state management. This allowed the UI to change accordingly for a good user experience.",
      img: null,
      threeLogo: "ReactLogo",
    },
    {
      title: "JavaScript/CSS/HTML",
      titleImg: "/logos/JavaScript-logo.png",
      subTitle: "Primary Languages",
      description:
        "JavaScript is my primary coding language. I’ve utilized it to its full ability to complete many tasks. I've used it within the browser to dynamically display and sort dynamic job data with the DPM. In addition, with Gesture I used it in the backend to build RestFul API’s that synchronized data between SalesForce and FireBase. Furthermore, it was used by me to transform data during a data transfer of millions of documents that contained folder and document meta-data. In addition, I am quite fluent with both HTML and CSS. I’ve created multiple websites without the need for complex libraries and frameworks. Although I tend to always squeeze in BootStrap.",
      img: null,
      roundImg: false,
    },
    {
      title: "YAML",
      titleImg: "/logos/yaml-logo.svg",
      subTitle: "Config Config Config",
      description:
        "Most of my experience with YAML has come from working on Docker, but I have also found myself writing some YAML for config files. To spin up Docker containers I would write out a Dockerfile in YAML. I could then spin up multiple containers at a time by writing up a Docker-Compose file in YAML. ",
      img: null,
      roundImg: false,
    },
    {
      title: "FileMaker",
      titleImg: "/logos/fm-logo.webp",
      subTitle: "Data, UI, and Scripting",
      description:
        "While with the Navajo Nation we used FileMaker to build our HR system. Inside FileMaker I managed data, functions, and layouts. The data was relational, so tables with common fields between them were connected. New fields, tables, and databases were also created by me. In addition, functions were also created that acted as a backend that automate HR processes. These functions would take pdf inputs from customers, convert it into fields, then finally export the data in various forms. Furthermore, layouts were created that allowed user to enter data into FileMaker. Lastly, I managed the FileMaker Server through the admin console. This included enabling various backups, automated scripts, user configuration, file management and upgrades.",
      img: null,
      roundImg: false,
    },
    {
      title: "Express",
      titleImg: "/logos/express-js-logo.svg",
      subTitle: "Automation",
      description:
        "My primary backend experience has been using the Express.js library. Using both JavaScript and TypeScript I built out various api’s. With Gesture, Express was used to synchronize data between Firebase and SalesForce. I built out an extensive API within Express, with validation and security certificates, that allowed these two applications to pass data between them. In addition, as an assistant instructor, I taught students how to build out api’s for their projects. Teaching them how to create CRUD routes that would programmatically change data inside the database based on user input from the Frontend.",
      img: null,
      roundImg: false,
    },
    {
      title: "SalesForce",
      titleImg: "/logos/salesforce-logo.svg",
      subTitle: "CMS Integration",
      description:
        "Building out SalesForce was one of my primary objects while interning with Gesture. This task included creating UI screens, data fields, reports, and flows. The UI screens were fairly basic click and drag ordering of fields inside of the application. However, the creating of data fields was much more challenging as they had to match data types for the data inside of FireBase. Fields were also configured to have triggers that would fire api flows that would hit an express endpoint to update FireBase data. Furthermore, reports were also created that showed various information about the data like Sales information. Finally, this all worked around SalesForce ability to see changes within its database and fire to an endpoint based on the changed data. This ultimately allowed for data synchronization, which allowed users to easily change essential business data with ease.  ",
      img: null,
      roundImg: false,
    },
    {
      title: "SQL",
      titleImg: "/logos/postgres-logo.svg",
      subTitle: "Databases",
      description:
        "Using databases has been the backbone of my developer experience. Some things I've done include creating prepared statements, configuration, and relationships. One of the first things I learned when programmatically entering data with an api is to use prepared statements. I’ve written various SQL statements that followed CRUD principles. In order to execute these prepared statements a pool connection was often used to access the database. Furthermore, I’ve configured various relational databases including MySql, PostGres, and FileMaker. Configuration included setting up user permissions and running create table statements to build out their tables and fields. Lastly, I am quite adequate at working with relational data. By using primary and foreign keys I am able to use data between tables and build out statements utilizing join.",
      img: null,
      roundImg: false,
    },
  ],
  aboutMe: [
    {
      title: "About Me",
      subTitle: null,
      description:
        "Hello, I'm Cody Slama, a passionate software developer dedicated to crafting efficient and innovative solutions. With years of experience in the field, I have developed a strong foundation in software development, honing my skills in JavaScript, data integration, and much more. Before I began my career, I achieved my Bachelors degree, which has given me invaluable skills and techniques to exceed in the workplace. \n \n I thrive on the challenges that come with creating robust software applications, and I'm constantly seeking new ways to expand my knowledge and stay at the forefront of emerging technologies. My expertise lies in full-stack web development. I pride myself on writing clean and maintainable code, ensuring scalability and performance while adhering to best practices. \n \n Thank you for visiting my portfolio. Please take a chance to explore my skills and experiences to gain a deeper understanding of my capabilities. You can also visit my GitHub and LinkedIn page to see my code and learn more about me. If you have any questions or are interested in working with me please don't hesitate to reach out. I look forward to connecting with you.",
      img: "./head-shot.jpg",
      roundImg: true,
    },
  ],
  experience: [
    {
      title: "Search, Sort, and Filter Algorithm",
      subTitle: null,
      description: "Built algorithm's to search, sort, and filter data",
      img: "/ipad/ipad-images/experience-hr-portal-job-search.png",
      roundImg: null,
      colSize: 6,
    },
    {
      title: "Authorization and Authentication Endpoints",
      subTitle: null,
      description: "Created frontend forms and backend API endpoints",
      img: "/ipad/ipad-images/experience-hr-portal-create-account.png",
      roundImg: null,
      colSize: 6,
    },
    {
      title: "Built Full Stack App",
      subTitle: null,
      description:
        "Built a full stack app that allowed users to submit reusable job applications to apply to the Navajo Nation Government. I led a team of developers from start to deployment. My primary tasks included developing API endpoints, React forms, and configuring infrastructure. The application gained 3000 user accounts within the first 4 months of launching.",
      img: null,
      roundImg: null,
    },
    {
      title: "Full Stack App Details",
      subTitle: null,
      description:
        "The web app consisted of a frontend build, an API, web-servers, and databases. The frontend used React as the primary framework. React components and hooks were utilized along with Redux for state management. Data was sent to a remote proxy which would then forward requests to an API endpoint. Data going to the API would be validated, sanitized, and processed before being stored in databases. ",
      img: null,
      roundImg: null,
    },
    {
      title: "Backend Development Experience",
      subTitle: null,
      description:
        "My backend development experience includes building API authentication endpoints and authorization middleware. Authentication endpoints consisted of requests containing the users credentials and if successful returning a response carrying a signed JWT token. Authorization middleware ensure that only users who contained a valid signed token could access their data.",
      img: null,
      roundImg: null,
    },
    {
      title: "Legacy Integration",
      subTitle: null,
      description:
        "Transferred over 2 million documents and its meta data from a legacy system into a new Enterprise Content Management system by utilizing ETL methodology and scripting.",
      img: null,
      roundImg: null,
    },
    {
      title: "CRM Data Synchronizations",
      subTitle: null,
      description:
        "Integrated data between a Firebase database and multiple CRM’s by conducting an ETL data transfer followed by the building of an API that would synchronize the data between the two systems.",
      img: null,
      roundImg: null,
    },
    {
      title: "Devops",
      subTitle: null,
      description:
        "Delivered improvements to servers and services, by creating backups and upgrading servers overall reducing security incidents, downtime, and data loss. This included OS and application level upgrades. In addition, I configured environments for local, testing, and production to ensure a better development experience.",
      img: null,
      roundImg: null,
    },
  ],
  hero: [
    {
      title: "Experience FullStack and ETL",
      subTitle: null,
      description:
        "Experience Designing, Developing, and Deploying Fullstack Web Applications",
      img: null,
      roundImg: null,
    },
  ],
};
