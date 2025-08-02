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
        "A movie database application using TMDB API. Search and explore movies, TV shows, and more. You can also watch trailers and get detailed information about each movie.",
      Repo: "https://github.com/Randhirkumar01/Movies-Website",
      link: "https://movies-website-smoky.vercel.app/",
      image: MoviesBG,
      image2: MoviesBG2
    },
    {
      title: "E-commerce Store",
      description:
        "A front-end e-commerce application using React and Redux. It features product listings, a shopping cart, and user authentication. You can browse products, add them to your cart, and proceed to checkout.",
      Repo: "https://github.com/Randhirkumar01/E-Commerce-Store",
      image: Shop_BG,
      image2: Shop_BG2
    },
    {
      title: "OBYS - Landing Page",
      description:
        "A landing page for a fictional product, showcasing modern design. This is a fully animated landing page built with HTML, CSS, and JavaScript. It features smooth scrolling, hover effects, and responsive design.",
      link: "https://randhirkumar01.github.io/Obys/",
      Repo: "https://github.com/Randhirkumar01/Obys",
      image2: ObysBG,
      image: ObysBG2
    },
    {
      title: "Pill - Point",
      description:
        " A pharmacy management system for tracking inventory and sales. It allows users to manage their pharmacy's stock, sales, and customer information.",
      link: "https://randhirkumar01.github.io/pharma-master/",
      Repo: "https://github.com/Randhirkumar01/pharma-master",
      image: PharmaBG,
      image2: PharmaBG2
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio site built using HTML, CSS, and JavaScript with before and after effects. It showcases my skills, projects, and contact information. The site is fully responsive.",
      link: "https://randhirkumar01.github.io/Portfolio/",
      Repo: "https://github.com/Randhirkumar01/Portfolio",
      image: PortfolioBG,
      image2: PortfolioBG2
    }
  ];

  return (
    <div className="mb-16">
      <Project projects={projects} />
    </div>
  );
}
