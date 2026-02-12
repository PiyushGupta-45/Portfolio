import React from "react";
import logo from "./logo.jpg";
import { Link, NavLink } from "react-router-dom";

const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL || "your@email.com").trim();

const Navbar = () => {
  const rotatingMeta = ["Gurugram, IND", "Full Stack Developer"];
  const [metaIndex, setMetaIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setMetaIndex((prev) => (prev + 1) % rotatingMeta.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [rotatingMeta.length]);

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
            <p className="brand-location" aria-live="polite">
              {rotatingMeta.map((item, index) => (
                <span
                  key={item}
                  className={`brand-location-text ${metaIndex === index ? "brand-location-text-active" : ""}`}
                >
                  {item}
                </span>
              ))}
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
              `site-link ${isActive ? "site-link-active" : ""}`
            }
            to="/work"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `site-link ${isActive ? "site-link-active" : ""}`
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
          <span className="site-availability" aria-label="Availability">
            <span className="site-availability-dot" />
            Available
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
