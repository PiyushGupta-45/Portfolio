import React from "react";
import logo from "./logo.jpg";
import { Link, NavLink } from "react-router-dom";

const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL || "your@email.com").trim();

const Navbar = () => {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <Link to="/" className="site-brand">
          <img
            src={logo}
            className="brand-avatar"
            alt="logo"
          />
          <div className="brand-meta">
            <p className="brand-name">
              Piyush Gupta
            </p>
            <p className="brand-location">
              Lucknow, IN
            </p>
          </div>
        </Link>

        <div className="site-links">
          <NavLink
            className={({ isActive }) =>
              `site-link ${isActive ? "site-link-active" : ""}`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `transition-colors duration-300 ${isActive ? "text-white" : "hover:text-white"}`
            }
            to="/work"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `transition-colors duration-300 ${isActive ? "text-white" : "hover:text-white"}`
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </div>

        <div className="site-right">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="site-email"
          >
            {CONTACT_EMAIL}
          </a>
          <button
            type="button"
            aria-label="Availability"
            className="site-status"
          >
            ON
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
