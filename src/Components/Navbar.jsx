import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const topics = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#003344] text-[#FF2DAA] border-b border-[#999] px-6 py-4">
      <div className="flex justify-between items-center">
        {/* LOGO */}
        <NavLink to="/" className="text-2xl font-bold">
          Portfolio
        </NavLink>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 uppercase text-sm font-semibold">
          {topics.map((topic, index) => (
            <NavLink
              key={index}
              to={topic.path}
              className={({ isActive }) =>
                `pb-1 transition-all duration-300 ${
                  isActive
                    ? "text-[#00F0FF] border-b-2 border-[#00F0FF]"
                    : "hover:text-[#00F0FF] border-b-2 border-transparent hover:border-[#00F0FF]"
                }`
              }
            >
              {topic.name}
            </NavLink>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 uppercase text-sm font-semibold">
          {topics.map((topic, index) => (
            <NavLink
              key={index}
              to={topic.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2 px-2 rounded transition-all duration-300 ${
                  isActive
                    ? "bg-[#00F0FF] text-[#003344]"
                    : "hover:bg-[#00F0FF] hover:text-[#003344]"
                }`
              }
            >
              {topic.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
