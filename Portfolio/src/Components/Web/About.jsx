import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="page-shell page-about">
      <div className="page-card about-card page-animate">
        <p className="page-kicker">About</p>
        <h1 className="page-title">Crafting robust full-stack products</h1>
        <p className="page-text">
          Hi! I&apos;m <span className="text-accent">Piyush Gupta</span>, a passionate Full Stack
          Developer. I love building modern applications that solve real-world
          problems with practical architecture and clean user experiences.
        </p>
        <p className="page-text">
          I work across React, Flutter, Node.js, and backend systems while continuously
          learning new tools and patterns. I enjoy collaborating on challenging products
          and shipping features that create measurable impact.
        </p>
        <div className="page-actions">
          <Link to="/work" className="page-btn page-btn-primary">View My Work</Link>
          <Link to="/contact" className="page-btn page-btn-secondary">Work With Me</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
