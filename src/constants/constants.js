import { SiRedux } from 'react-icons/si';
import {BsBootstrap} from 'react-icons/bs';
import {  FaHtml5, FaReact } from 'react-icons/fa';


export const projects = [
  {
    title: 'Front End',
    description: "Modern Javascript Libraries like ReactJS , ES5/ES6 , Core-UI.",
      image: '/images/1.png',
      tags: [ 'Bootstrap4.0', 'ReactJS', 'React/Redux', 'HTML5'],
    logo: <div> <BsBootstrap size={33}/> &nbsp;&nbsp;&nbsp; <FaReact size={33}/> &nbsp;&nbsp;&nbsp; <SiRedux size={33} /> &nbsp;&nbsp;&nbsp; <FaHtml5 size={33}/> </div>,
    id: 0,
  },
  {
    title: 'Back End',
    description:"Serverless framework , AWS Lambda , Nodejs and Dynamodb/Mongodb",
    image: '/images/2.png',
    tags: ['Serverless', 'AWS Lambda', 'Springboot', 'Nodejs'],
    id: 1,
  },
  {
    title: 'Deployments',
    description: "Linux/OSX with git for code version control and docker / jenkins as deployment tools",
      image: '/images/3.png',
      tags: ['Linux/MacOS','Jenkins','Docker', 'Git'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Testing Tools',
    description: "Unit , functional and integeratoinal testing using Jest , Junit , and newman CLI",
    image: '/images/4.png',
    tags: ['Jest', 'Junit', 'newmanCLI', 'POSTMAN'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2014, text: 'Started my journey as engineering student at GTU. Started Freelance / Co-op. ', },
  { year: 2018, text: 'Finished my Bachelors in Computer Engineering. Arrived at NJIT for my Masters in Computer Science.', },
  { year: 2019, text: 'Got internship while pursuing Masters. Stacked more full stack development skills. ', },
  { year: 2020, text: 'Started working full time post completing Masters.', },
];