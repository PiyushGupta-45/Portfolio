import React from "react";
import { Link } from "react-router-dom";
import logo from "../Navbar/logo.jpg";

const Home = () => {
  return (
    <main className="home-page">
      <div className="home-glow" aria-hidden="true">
        <div className="home-glow-left" />
        <div className="home-glow-right" />
        <div className="home-glow-bottom" />
      </div>

      <section className="home-hero">
        <p className="home-badge">
          Open to Internships 2026
        </p>

        <div className="home-title-wrap">
          <h1 className="home-title">
            Hi, I&apos;m Piyush.
            <br />
            I build{" "}
            <span className="home-title-accent">
              Web Products
            </span>
          </h1>
          <img
            src={logo}
            alt="profile"
            className="home-polaroid"
          />
        </div>

        <p className="home-subtitle">
          I design and develop performant full-stack apps with clean UX, stable
          architecture, and details that feel intentional.
        </p>

        <div className="home-actions">
          <Link
            to="/contact"
            className="home-btn home-btn-primary"
          >
            Start a Project
          </Link>
          <Link
            to="/work"
            className="home-btn home-btn-secondary"
          >
            See Case Studies
          </Link>
        </div>
      </section>

      <div className="home-footer">
        <div className="home-social">
          <a
            href="https://www.linkedin.com/in/piyush-gupta4321/"
            target="_blank"
            rel="noreferrer"
            className="home-social-link"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/PiyushGupta-45"
            target="_blank"
            rel="noreferrer"
            className="home-social-link"
          >
            GitHub
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="home-social-link"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="home-social-link"
          >
            Instagram
          </a>
        </div>

        <span className="home-discover">Scroll -&gt;</span>
      </div>
    </main>
  );
};

export default Home;
