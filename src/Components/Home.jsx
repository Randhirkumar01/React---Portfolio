import Image from "../Assets/IMG.jpg";
import Button from "./Templates/Button";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <section className="flex justify-between mx-[15vmax] pt-[8vmax] pb-[6vmax]">
        <div className="w-[45vmax]">
          <h1 className="text-4xl font-semibold text-white">
            Hello, I'm <br />{" "}
            <span className="title text-[#FF0055] cursor-pointer">Randhir Kumar</span>
          </h1>
          <p
            className="w-[35vmax] text-md text-zinc-500 tracking-tight text-justify pt-2 leading-5 
          font-serif"
          >
            A skilled front-end developer with a solid foundation in web
            technologies such as HTML, CSS, JavaScript, and some framework like
            Bootstrap, Tailwind & React, I have successfully built responsive
            and interactive websites. My academic background, combined with
            hands-on project experience, enables me to create high-quality user
            experiences and efficient front-end solutions. I strive to bring
            innovative designs to life while ensuring optimal performance and
            accessibility.
            <br /> &nbsp; &nbsp; Here, you’ll find a collection of my projects
            that reflect my commitment to quality and attention to detail. I
            invite you to explore my work and see how I can help turn your ideas
            into engaging digital experiences
          </p>
          <Button title="Explore More" url="/projects" />
        </div>
        <div className="w-[30vmax] rounded-full flex items-center justify-center">
          <img
            className="profile"
            src={Image}
            alt="Profile"
          />
        </div>
      </section>
      <section>
        <h2 className="fade-in text-4xl font-bold px-4 pb-5">My Skills</h2>
        <Skills />
      </section>
      <section>
        <h2 className="fade-in text-4xl font-bold px-4 pb-5">Projects</h2>
        <Projects />
      </section>
      <section className="my-8">
        <h2 className="fade-in text-4xl font-bold px-4 pb-5">Connect Me</h2>
        <Contact />
      </section>
    </>
  );
}
