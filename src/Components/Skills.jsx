import Skill from "./Templates/Skill";
import { FaJava } from "react-icons/fa6";
import { DiJavascript1, DiReact, DiGithub, DiBootstrap } from "react-icons/di";
import { CiMobile2 } from "react-icons/ci";
import { SiTailwindcss } from "react-icons/si";
import { IoCameraOutline } from "react-icons/io5";
import Marquee from "react-fast-marquee";

export default function Skills() {
  const skills = [
    {
      icon: <FaJava />,
      title: "Java + DSA",
      para:
        "Java is a high-level, class-based, object-oriented programming language. Data Structures and Algorithms (DSA) help solve complex problems efficiently.",
    },
    {
      icon: <DiJavascript1 />,
      title: "JavaScript",
      para:
        "JavaScript is a high-level, dynamic programming language used to create interactive and dynamic web applications.",
    },
    {
      icon: <DiReact />,
      title: "React JS",
      para:
        "React is a JavaScript library for building fast, scalable, and interactive user interfaces.",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
      para:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.",
    },
    {
      icon: <DiBootstrap />,
      title: "Bootstrap",
      para:
        "Bootstrap is a responsive CSS framework for developing mobile-first websites.",
    },
    {
      icon: <CiMobile2 />,
      title: "Responsive Design",
      para:
        "Responsive design ensures web applications adapt smoothly to different screen sizes.",
    },
    {
      icon: <DiGithub />,
      title: "GitHub",
      para:
        "GitHub is a platform for version control and collaborative software development.",
    },
    {
      icon: <IoCameraOutline />,
      title: "Photography",
      para:
        "Photography involves capturing moments creatively using composition and lighting techniques.",
    },
  ];

  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center">
      <div className="w-[85%]">
        <Marquee
          speed={70}
          pauseOnHover
          gradient={false}
        >
          <Skill data={skills} />
        </Marquee>
      </div>
    </section>
  );
}
