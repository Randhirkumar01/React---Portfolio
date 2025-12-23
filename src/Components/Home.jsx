import Image from "../Assets/IMG.jpg";
import Button from "./Templates/Button";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between 
        px-6 md:px-16 lg:px-[15vmax] pt-24 pb-16 gap-10">

        {/* TEXT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug">
            Hello, I'm <br />
            <span className="title text-[#FF0055] cursor-pointer">
              Randhir Kumar
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed text-justify font-serif">
            A skilled front-end developer with a solid foundation in web
            technologies such as HTML, CSS, JavaScript, and frameworks like
            Bootstrap, Tailwind & React. I build responsive and interactive
            websites with a strong focus on performance, accessibility, and
            clean UI.
            <br /><br />
            Explore my projects to see how I turn ideas into engaging digital
            experiences.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <Button title="Explore More" url="/projects" />
          </div>
        </div>

        {/* PROFILE IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            className="profile w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 
              rounded-full object-cover shadow-lg"
            src={Image}
            alt="Profile"
          />
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 md:px-16">
        <h2 className="fade-in text-2xl sm:text-3xl lg:text-4xl font-bold pb-5">
          My Skills
        </h2>
        <Skills />
      </section>

      {/* PROJECTS */}
      <section className="px-6 md:px-16 mt-10">
        <h2 className="fade-in text-2xl sm:text-3xl lg:text-4xl font-bold pb-5">
          Projects
        </h2>
        <Projects />
      </section>

      {/* CONTACT */}
      <section className="px-6 md:px-16 my-12">
        <h2 className="fade-in text-2xl sm:text-3xl lg:text-4xl font-bold pb-5">
          Connect Me
        </h2>
        <Contact />
      </section>
    </>
  );
}
