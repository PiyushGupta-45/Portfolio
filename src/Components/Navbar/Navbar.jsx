import React from "react";
import logo from "./logo.jpg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <header className="shadow-lg sticky z-50 top-0 bg-gradient-to-r from-gray-900 to-black transition-colors duration-500">
      <nav className="flex items-center justify-between px-8 py-2">
        
        {/* Logo on the Left */}
        <Link to="/">
          <img
            src={logo}
            className="w-14 transition-transform duration-300 ease-in-out hover:scale-110"
            alt="logo"
          />
        </Link>

        {/* Navigation Links - Centered */}
        <div className="flex-grow flex justify-center space-x-10 text-white font-semibold text-xl">
          <NavLink
            className={({ isActive }) =>
              `relative hover:text-cyan-400 transition-colors duration-300 ${
                isActive ? "text-cyan-400" : "text-gray-300"
              }`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative hover:text-cyan-400 transition-colors duration-300 ${
                isActive ? "text-cyan-400" : "text-gray-300"
              }`
            }
            to="/work"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative hover:text-cyan-400 transition-colors duration-300 ${
                isActive ? "text-cyan-400" : "text-gray-300"
              }`
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>

        
      </nav>
    </header>
  );
};

export default Navbar;
