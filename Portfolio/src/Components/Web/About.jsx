import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">About Me</h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
          Hi! I'm <span className="text-cyan-400 font-semibold">Piyush Gupta</span>, a passionate Full-Stack Developer and a 3rd-year student. I love building
          modern web applications that solve real-world problems. My expertise includes MERN Stack,
          and I am constantly learning new technologies to stay updated in the ever-evolving tech space.
        </p>
        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
          Beyond coding, I enjoy contributing to open-source projects, exploring new frameworks,
          and collaborating with like-minded developers. I'm always excited to work on innovative projects
          that challenge me and help me grow.
        </p>
        <div className="mt-10">
          <Link to="/work" className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-xl text-white text-lg font-semibold transition-all shadow-lg shadow-violet-500/25 transform hover:-translate-y-1">View My Work</Link>
        </div>
      </div>
    </div>
  );
};

export default About;