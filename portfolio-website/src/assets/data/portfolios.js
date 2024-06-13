import nodejs from "../images/stack-icons/nodejs.svg";
import mongodb from "../images/stack-icons/mongodb.svg";
import express from "../images/stack-icons/express.svg";
import figma from "../images/stack-icons/figma.svg";
import html5 from "../images/stack-icons/html5.png";
import css3 from "../images/stack-icons/css3.png";
import js from "../images/stack-icons/js.svg";

const portfolio = [
  {
    id: 1,
    title: "Group Evolution - teacher planner API for MongoDB",
    description:
      // eslint-disable-next-line quotes
      'I designed a NoSQL database structure for a teacher planner web app called "Group Evolution". The project focuses on recording class activities, distinguishing between different teachers, and facilitating data transfer between teachers.',
    link: "https://github.com/capella-marcosfilipe/group-evolution-mongodb",
    stack: [
      {
        alt: "Node.js logo",
        image: mongodb,
      },
      {
        alt: "Express.js logo",
        image: express,
      },
      {
        alt: "MongoDB logo",
        image: nodejs,
      },
    ],
    category: "backend",
  },
  {
    id: 2,
    title: "HealNet: Landing page for a medical group",
    description:
      "A group project made for web programming course at the Catholic University of Pernambuco. It was designed on Figma by me forking a design by Soban. The project consists of a landing page for a medical group called HealNet. The page contains information about the group, its services, and contact information.",
    link: "https://github.com/capella-marcosfilipe/healnet",
    deploy: "https://healnet-ipw.vercel.app/",
    stack: [
      {
        alt: "Figma logo",
        image: figma,
      },
      {
        alt: "HTML5 logo",
        image: html5,
      },
      {
        alt: "CSS3 logo",
        image: css3,
      },
      {
        alt: "JavaScript logo",
        image: js,
      },
    ],
    category: "frontend",
  },
  {
    id: 3,
    title: "OptimusTech: Landing page for job announcements",
    description:
      "A landing page for job positions offered by a fictional company called OptimusTech. The project was made for a 7-day code challenge by Alura. The page contains information about the company, its stats, and the job positions available.",
    link: "https://github.com/capella-marcosfilipe/jobs-landingpage-optimustech",
    deploy:
      "https://capella-marcosfilipe.github.io/jobs-landingpage-optimustech/",
    stack: [
      {
        alt: "HTML5 logo",
        image: html5,
      },
      {
        alt: "CSS3 logo",
        image: css3,
      },
    ],
    category: "frontend",
  },
];

export default portfolio;
