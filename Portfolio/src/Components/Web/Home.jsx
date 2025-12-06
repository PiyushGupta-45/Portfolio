import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 text-white px-4">
      <div className="bg-slate-900/50 p-12 rounded-3xl shadow-2xl shadow-violet-500/10 text-center max-w-3xl w-full border border-slate-800 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/30">
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 mb-6 pb-2 tracking-tight">
          Piyush Gupta
        </h1>
        <p className="text-slate-400 text-lg md:text-xl mb-10 font-light leading-relaxed">
          Full-Stack Developer | <span className="text-violet-400 font-medium">4th Year Student</span> | Crafting Digital Experiences
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-5 mb-10">
          <Link to='/work'
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg shadow-violet-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Type of Work
          </Link>
          <Link to='/contact'
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold py-3 px-8 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex justify-center gap-8 pt-6 border-t border-slate-800/50">
          <a href="https://www.linkedin.com/in/piyush-gupta4321/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-500 transition-all duration-300 text-3xl transform hover:scale-110">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/PiyushGupta-45" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-all duration-300 text-3xl transform hover:scale-110">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
