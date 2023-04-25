// import images
import Hero_person from "./assets/images/Hero/Profile.jpg";

import express from "./assets/images/Skills/express.png";
import hibernate from "./assets/images/Skills/hibernate.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import java from "./assets/images/Skills/java.png";
import springboot from "./assets/images/Skills/springboot.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import kafka from "./assets/images/Skills/kafka.png";
import kubernetes from "./assets/images/Skills/kubernetes.png";
import jenkins from "./assets/images/Skills/jenkins.png";
import docker from "./assets/images/Skills/docker.png";
import aws from "./assets/images/Skills/aws.png";
import oracle from "./assets/images/Skills/oracle.png";
import mysql from "./assets/images/Skills/mysql.png";
import angular from "./assets/images/Skills/angular.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/travelnest.png";
import project2 from "./assets/images/projects/mapview.png";
import project3 from "./assets/images/projects/finance.jpeg";
import person_project from "./assets/images/projects/person.jpg";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Developer",
    firstName: "Ranapratap",
    LastName: "Eedara",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experinse in software development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Node js",
        para: "Javascript runtime environment",
        logo: nodejs,
      },
      {
        name: "React js",
        para: "Frontend Library",
        logo: reactjs,
      },
      {
        name: "Express js",
        para: "Backend Framework",
        logo: express,
      },
      {
        name: "Angular",
        para: "Frontend Framework",
        logo: angular,
      },
      {
        name: "Java",
        para: "Object Oriented Programming",
        logo: java,
      },
      {
        name: "Spring Boot",
        para: "Java backend framework",
        logo: springboot,
      },
      {
        name: "Hiberante",
        para: "Database layer framework",
        logo: hibernate,
      },
      {
        name: "MongoDB",
        para: "Non-Relational Database",
        logo: mongodb,
      },
      {
        name: "MySQL",
        para: "Relational Database",
        logo: mysql,
      },
      {
        name: "Oracle",
        para: "Relational Database",
        logo: oracle,
      },
      {
        name: "AWS",
        para: "Cloud Technology",
        logo: aws,
      },
      {
        name: "Docker",
        para: "Container Platform",
        logo: docker,
      },
      {
        name: "Jenkins",
        para: "Automation Server",
        logo: jenkins,
      },
      {
        name: "Kubernetes",
        para: "Orchestration Platform",
        logo: kubernetes,
      },
      {
        name: "Apache Kafka",
        para: "Stream processing platform",
        logo: kafka,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Desing and Dvelop the user interfaces and websites as per requirement and enhance the visuals using styling frameworks.",
        logo: services_logo1,
      },
      {
        title: "Visual Chart Design",
        para: "Design and develop the custom visual charts using SVG and data driven document D3.js.",
        logo: services_logo2,
      },
      {
        title: "Micro Sercives",
        para: "Develop micor services and restful API using Java Spring Boot or Node.js",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Travel Nest",
        image: project1,
      },
      {
        title: "MapView",
        image: project2,
      },
      {
        title: "Analytics",
        image: project3,
      },
    ],
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ranapratapedara@gmail.com",
        icon: GrMail,
        link: "mailto:ranapratapedara@gmail.com",
      },
      {
        text: "+1 416 857 5417",
        icon: MdCall,
        link: "https://wa.me/14168575417",
      },
      {
        text: "e.rana09.09",
        icon: BsInstagram,
        link: "https://www.instagram.com/e.rana09.09/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
