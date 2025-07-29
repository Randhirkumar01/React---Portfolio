import { NavLink } from "react-router-dom";

export default function Navbar() {
  const topics = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "skills", path: "/skills" },
    { name: "projects", path: "/projects" },
    { name: "contact", path: "/contact" }
  ];

  return (
    <nav
      className="flex justify-between items-center p-4 bg-[#003344] text-[#FF2DAA] border-b-1
    border-[#999]"
    >
      <div>
        <NavLink to="/" className="text-2xl font-bold pb-2">
          Portfolio
        </NavLink>
      </div>
      <div className="flex space-x-2 uppercase text-md font-semibold tracking-none">
        {topics.map((topic, index) => (
          <NavLink
            key={index}
            to={topic.path}
            className={({ isActive }) =>
              isActive
                ? "hold text-[#00F0FF] w-[8vmax] text-center pb-1 border-b-2 border-[#00F0FF] transition-all duration-300"
                : "text-[#FF2DAA] w-[8vmax] text-center pb-1 hover:border-b-2 rounded-xl border-[#00F0FF] transition-all duration-100"
            }
          >
            <span className="">{topic.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
