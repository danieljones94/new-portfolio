import _nologyLogo from "../assets/images/_nologyLogo.png";
import QESLogo from "../assets/images/QESLogo.png";
import OPUSLogo from "../assets/images/OPUSLogo.png";

export const info = {
  details: {
    name: "Daniel Jones",
    interests: ["Web Developer", "Agile Fan", "Design Lover", "Average Golfer"],
  },
  experience: [
    {
      role: "Junior Full Stack Engineer",
      tech: "AngularJS, .NET/.NETCore, C#, MS-SQL",
      duration: "January 2020 - March 2021",
      description: [
        "Developed & enhanced multiple solutions",
        "Worked on the two flagship products, which included the progression of one product into .NETCore, introducing SQL migrations to improve database effeciency and more thorough unit testing with nUnit.",
        "Provided application maintenance while working as part of the 'Service Desk' team, at times directly communicating with clients.",
        "Performed CRUD operations on multiple databases to load/ remove data according to the business requirements.",
      ],
      imgSrc: [QESLogo],
    },
    {
      role: "Junior Front End Developer",
      tech: "HTML, CSS, SASS, React, JavaScript, Firebase",
      duration: "September 2019 - January 2020",
      description: [
        "Built initial app for small start up using React and Firebase.",
        "Learnt the underpinning and fundamental principles of web developement from a hugely experienced team of software developers.",
        "Gave several presentations of work done, led stand up and SCRUM meetings and executed the role of product owner, as well as a developer during the project release.",
      ],
      imgSrc: [_nologyLogo, OPUSLogo],
    },
  ],
};
