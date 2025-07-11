import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-4">About Me</h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi! I'm <span className="text-cyan-400 font-semibold">Piyush Gupta</span>, a passionate Full-Stack Developer and a 3rd-year student. I love building
          modern web applications that solve real-world problems. My expertise includes MERN Stack,
          and I am constantly learning new technologies to stay updated in the ever-evolving tech space.
        </p>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          Beyond coding, I enjoy contributing to open-source projects, exploring new frameworks,
          and collaborating with like-minded developers. I'm always excited to work on innovative projects
          that challenge me and help me grow.
        </p>
        <div className="mt-6">
          <Link to="/work" className="px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-lg text-white text-lg font-semibold transition-all">View My Work</Link>
        </div>
      </div>
    </div>
  );
};

export default About;