 import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="bg-gray-950 p-12 rounded-3xl shadow-xl text-center max-w-2xl w-full border border-gray-800 bg-opacity-80 transition-all duration-500 transform hover:scale-105">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3 pb-3">
          Piyush Gupta
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Full-Stack Developer | 4th Year Student | Creating cutting-edge digital experiences
        </p>
        <div className="flex justify-center gap-5">
          <Link to='/work'  
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all duration-300 transform hover:scale-110"
          >
            View My Work
          </Link>
          <Link to='/contact'  
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-xl shadow-md transition-all duration-300 transform hover:scale-110"
          >
            Contact Me
          </Link>
        </div>
        <div className="flex justify-center gap-9 mt-8">
          <a href="https://www.linkedin.com/in/piyush-gupta321/" target="_blank" className="text-gray-500 hover:text-blue-500 transition-all duration-300 text-3xl transform hover:scale-110">
            🔗LinkedIn
          </a>
          <a href="https://github.com/PiyushGupta-45" target="_blank" className="text-gray-500 hover:text-blue-500 transition-all duration-300 text-3xl transform hover:scale-110 ">
            🔗Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
