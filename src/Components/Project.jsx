import { VscLiveShare } from "react-icons/vsc";
import { FaCode } from "react-icons/fa6";

export default function Projects({ projects }) {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-4">
      <p className="text-[#64748b] pb-6 text-center">
        Here are some of my recent projects:
      </p>

      <ul className="mt-4 gap-6 flex flex-wrap justify-center w-full">
        {projects.map((project, index) => (
          <li
            key={index}
            style={{
              backgroundImage: `linear-gradient(to right, #777777ff, #b9b3a3d6, #ffffff00), url(${project.image})`,
            }}
            className="w-full lg:w-[85%] bg-cover bg-center bg-no-repeat
              p-6 rounded-lg flex flex-col lg:flex-row gap-6 overflow-hidden shadow-lg"
          >
            {/* LEFT CONTENT */}
            <div className="flex flex-col gap-4 flex-1">
              <h2 className="title text-xl sm:text-2xl">
                {project.title}
              </h2>

              <p className="text-[#0A0A0A] text-sm sm:text-base text-justify">
                {project.description}
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href={project.Repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#9F00FF] text-white px-4 py-2 rounded-lg
                    hover:text-[#0A0A0A] hover:bg-[#0FFF0F]
                    transition duration-300 shadow-lg shadow-[#9F00FF]
                    hover:shadow-[#0FFF0F]"
                >
                  Source Code <FaCode className="inline-block ml-2" />
                </a>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#9F00FF] text-white px-4 py-2 rounded-lg
                      hover:text-[#0A0A0A] hover:bg-[#00F0FF]
                      transition duration-300 shadow-lg shadow-[#9F00FF]
                      hover:shadow-[#00F0FF]"
                  >
                    Live Demo <VscLiveShare className="inline-block ml-2" />
                  </a>
                ) : (
                  <span className="px-4 py-2 rounded-lg bg-gray-400 text-gray-700 cursor-not-allowed">
                    Live Demo
                  </span>
                )}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full lg:w-1/3 h-48 sm:h-64 lg:h-auto">
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
  );
}
