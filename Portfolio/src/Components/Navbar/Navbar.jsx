import React from "react";
import logo from "./logo.jpg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <header className="fixed w-full z-50 top-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-colors duration-500">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo on the Left */}
        <Link to="/">
          <img
            src={logo}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-violet-500 shadow-lg shadow-violet-500/20 transition-transform duration-300 ease-in-out hover:scale-110"
            alt="logo"
          />
        </Link>

        {/* Navigation Links - Centered */}
        <div className="flex-grow flex justify-center space-x-12 text-lg font-medium">
          <NavLink
            className={({ isActive }) =>
              `relative transition-colors duration-300 ${isActive ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" : "text-slate-400 hover:text-white"
              }`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative transition-colors duration-300 ${isActive ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" : "text-slate-400 hover:text-white"
              }`
            }
            to="/work"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative transition-colors duration-300 ${isActive ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" : "text-slate-400 hover:text-white"
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
