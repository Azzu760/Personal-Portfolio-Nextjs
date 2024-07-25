import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // For smooth scrolling

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black bg-opacity-70 text-white z-50">
      <div className="flex-grow text-center md:text-left md:flex-grow-0">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-700 via-violet-800 to-purple-600 text-white font-bold text-2xl cursor-pointer"
        >
          AK
        </div>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex space-x-6">
        <li className="relative group px-3">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Home
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
        </li>
        <li className="relative group px-3">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
        </li>
        <li className="relative group px-3">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Projects
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
        </li>
        <li className="relative group px-3">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Skills
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
        </li>
        <li className="relative group px-3">
          <Link
            to="resume"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Resume
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
        </li>
        <li className="relative group px-3">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
          <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-1/2 h-screen bg-black bg-opacity-95 flex flex-col justify-center items-left pl-5 cursor-pointer"
        }
      >
        <li className="py-6 text-2xl relative group">
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="relative"
          >
            Home
            <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li className="py-6 text-2xl relative group">
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="relative"
          >
            About
            <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li className="py-6 text-2xl relative group">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="relative"
          >
            Projects
            <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li className="py-6 text-2xl relative group">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="relative"
          >
            Skills
            <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li className="py-6 text-2xl relative group">
          <Link
            to="resume"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="relative"
          >
            Resume
            <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </Link>
        </li>
        <li className="py-6 text-2xl relative group">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleClick}
            className="relative"
          >
            Contact
            <span className="block absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
