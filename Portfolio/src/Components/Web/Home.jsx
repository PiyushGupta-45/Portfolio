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

      <section className="home-layout">
        <div className="home-left-card">
          <p className="home-kicker">Portfolio</p>
          <h1 className="home-title">
            Hi, I&apos;m Piyush
            <br />
            <span className="home-title-muted">building</span>{" "}
            <span className="home-title-accent">Web Products</span>
          </h1>
        </div>

        <aside className="home-right-stack">
          <div className="home-photo-card">
            <img
              src={logo}
              alt="profile"
              className="home-photo"
            />
            <p className="home-photo-tag">Full Stack Developer</p>
          </div>

          <p className="home-subtitle">
            A full-stack developer from India, passionate about building scalable
            web applications and crafting intuitive user experiences.
          </p>

          <div className="home-actions">
            <Link
              to="/contact"
              className="home-btn home-btn-primary"
            >
              Contact Me
            </Link>
            <Link
              to="/work"
              className="home-btn home-btn-secondary"
            >
              View Work
            </Link>
          </div>

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
        </aside>
      </section>
    </main>
  );
};

export default Home;
