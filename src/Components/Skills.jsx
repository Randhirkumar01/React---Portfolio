import Skill from "./Templates/Skill";
import { FaJava } from "react-icons/fa6";
import { DiJavascript1 } from "react-icons/di";
import { CiMobile2 } from "react-icons/ci";
import { DiReact } from "react-icons/di";
import { DiGithub } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { IoCameraOutline } from "react-icons/io5";
import Marquee from "react-fast-marquee";

export default function Skills() {
  var skill = [
    {
      icon: <FaJava />,
      title: "Java + DSA",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at repellendus esse voluptas expedita consectetur?"
    },
    {
      icon: <DiJavascript1 />,
      title: "JavaScript",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at repellendus esse voluptas expedita consectetur?"
    },
    {
      icon: <DiReact />,
      title: "React JS",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at repellendus esse voluptas expedita consectetur?"
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at repellendus esse voluptas expedita consectetur?"
    },
    {
      icon: <DiBootstrap />,
      title: "Bootstrap",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at repellendus esse voluptas expedita consectetur?"
    },
    {
      icon: <CiMobile2 />,
      title: "Resonsive Design",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at repellendus esse voluptas expedita consectetur?"
    },
    {
      icon: <DiGithub />,
      title: "GitHub",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at repellendus esse voluptas expedita consectetur?"
    },
    {
      icon: <IoCameraOutline />,
      title: "Photography",
      para: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at repellendus esse voluptas expedita consectetur?"
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
