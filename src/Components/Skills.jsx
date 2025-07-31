import Skill from "./Templates/Skill";
import { FaJava } from "react-icons/fa6";
import { DiJavascript1, DiReact, DiGithub, DiBootstrap } from "react-icons/di";
import { CiMobile2 } from "react-icons/ci";
import { SiTailwindcss } from "react-icons/si";
import { IoCameraOutline } from "react-icons/io5";
import Marquee from "react-fast-marquee";

export default function Skills() {
  var skill = [
    {
      icon: <FaJava />,
      title: "Java + DSA",
      para: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. Data Structures and Algorithms (DSA) is a crucial part of computer science that helps in solving complex problems efficiently.",
    },
    {
      icon: <DiJavascript1 />,
      title: "JavaScript",
      para: "JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has become a standard for creating interactive web pages and is an essential part of web applications.",
    },
    {
      icon: <DiReact />,
      title: "React JS",
      para: "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data, without reloading the page.",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
      para: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without having to leave your HTML.",
    },
    {
      icon: <DiBootstrap />,
      title: "Bootstrap",
      para: "Bootstrap is a popular CSS framework that helps in designing responsive and mobile-first websites quickly and easily.",
    },
    {
      icon: <CiMobile2 />,
      title: "Responsive Design",
      para: "Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.",
    },
    {
      icon: <DiGithub />,
      title: "GitHub",
      para: " GitHub is a web-based platform used for version control and collaboration. It allows developers to work together on projects from anywhere in the world.",
    },
    {
      icon: <IoCameraOutline />,
      title: "Photography",
      para: "Photography is the art of capturing and processing images using a camera. It involves various techniques and styles to create visually appealing photographs.",
    }
  ];

  return (
    <div className="w-[80%] h-[67.1vh] mx-auto flex items-center justify-center">
      <Marquee speed={80} direction="left">
        <Skill data={skill} />
      </Marquee>
    </div>
  );
}
