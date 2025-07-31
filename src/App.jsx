import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Routing from "./utils/Routing";
import Footer from "./Components/Footer";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const profile = document.querySelector(".profile");
    const fadeInElements = document.querySelectorAll(".fade-in");

    // bounce top-down effect for profile image
    gsap.fromTo(
      profile,
      { opacity: 0, scale: 0, delay: "1s", y: -500 },
      {
        opacity: 0.8,
        scale: 1,
        duration: 4,
        ease: "elastic.out(0.5, 0.2)",
        y: 0
      }
    );

    // Fade-in effect for other elements
    fadeInElements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -250 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#003342] text-[#FF2DAA] ">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
