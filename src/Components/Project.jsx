import { VscLiveShare } from "react-icons/vsc";
import { FaCode } from "react-icons/fa6";

export default function project({ projects }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-4">
        <p className="text-[#64748b] pb-6">
          Here are some of my recent projects:
        </p>
        <ul className="mt-4 gap-4 flex items-center justify-center flex-wrap">
          {projects.map((project, index) => (
            <li
              key={index}
              style={{
                backgroundImage: ` linear-gradient(to right, #777777ff, #b9b3a3d6, #ffffff00), url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
              className="p-4 rounded-lg w-[80%] flex justify-between overflow-hidden"
            >
              <div className="left flex flex-col gap-4 w-[50vmax] h-full">
                <h2 className="title">{project.title}</h2>
                <p className="w-[80%] text-justify text-[#0A0A0A] mb-8">
                  {project.description}
                </p>
                <span className="flex gap-8 ml-16 pb-6">
                  <a
                    href={project.Repo}
                    target="_blank"
                    className="bg-[#9F00FF] w-fit text-white px-4 py-2 mt-4 hover:text-[#0A0A0A]
                  hover:bg-[#0FFF0F] rounded-lg transition duration-300 ease-in-out shadow-lg
                  shadow-[#9F00FF] hover:shadow-[#0FFF0F]"
                  >
                    Source Code <FaCode className="inline-block ml-2" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    className="bg-[#9F00FF] w-fit text-white px-4 py-2 mt-4 hover:text-[#0A0A0A]
                  hover:bg-[#00F0FF] rounded-lg transition duration-300 ease-in-out shadow-lg
                  shadow-[#9F00FF] hover:shadow-[#00F0FF]"
                  >
                    Live Demo <VscLiveShare className="inline-block ml-2" />
                  </a>
                </span>
              </div>
              <div className="right w-[30vmax] h-[25vmax] self-center">
                <img
                  className="w-full h-full object-cover rounded"
                  src={project.image2}
                  alt={project.title}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
