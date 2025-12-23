import Project from "./Project";

import MoviesBG from "../Assets/MoviesBG.png";
import MoviesBG2 from "../Assets/MoviesBG2.png";
import Shop_BG from "../Assets/E-comm_BG.png";
import Shop_BG2 from "../Assets/E-comm_BG2.png";
import ObysBG from "../Assets/ObysBG.png";
import ObysBG2 from "../Assets/ObysBG2.png";
import PharmaBG from "../Assets/PharmaBG.png";
import PharmaBG2 from "../Assets/PharmaBG2.png";
import PortfolioBG from "../Assets/Portfolio.png";
import PortfolioBG2 from "../Assets/Portfolio2.png";

export default function Projects() {
  const projects = [
    {
      title: "Movie Database",
      description:
        "A movie database application using the TMDB API. Search and explore movies, TV shows, watch trailers, and view detailed information. Note: If you face API access issues, please use a VPN.",
      Repo: "https://github.com/Randhirkumar01/Movies-Website",
      link: "https://movies-website-smoky.vercel.app/",
      image: MoviesBG,
      image2: MoviesBG2,
    },
    {
      title: "E-commerce Store",
      description:
        "A front-end e-commerce application built with React and Redux. It supports product listings, add/delete functionality, and filtering. Data is handled using local storage. This is a demo project.",
      Repo: "https://github.com/Randhirkumar01/E-Commerce-Store",
      link: "",
      image: Shop_BG,
      image2: Shop_BG2,
    },
    {
      title: "OBYS - Landing Page",
      description:
        "A fully animated landing page built using HTML, CSS, and JavaScript. It includes smooth scrolling, hover effects, and a responsive layout.",
      Repo: "https://github.com/Randhirkumar01/Obys",
      link: "https://randhirkumar01.github.io/Obys/",
      image: ObysBG2,
      image2: ObysBG,
    },
    {
      title: "Pill Point",
      description:
        "A pharmacy management system for inventory and sales tracking. Built using PHP, MySQL, and XAMPP. This was a group project, and my role focused on front-end development.",
      Repo: "https://github.com/Randhirkumar01/pharma-master",
      link: "https://randhirkumar01.github.io/pharma-master/",
      image: PharmaBG,
      image2: PharmaBG2,
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with HTML, CSS, and JavaScript. It showcases skills, projects, and contact details with responsive design and interactive effects.",
      Repo: "https://github.com/Randhirkumar01/Portfolio",
      link: "https://randhirkumar01.github.io/Portfolio/",
      image: PortfolioBG,
      image2: PortfolioBG2,
    },
  ];

  return (
    <div className="mb-16">
      <Project projects={projects} />
    </div>
  );
}
