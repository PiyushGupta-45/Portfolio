import React from "react";
import pass from "./password.jpg"
import logo from "./personalTrainer.jpg";
import todo from "./todo.jpg";
const projects = [
  {
    title: "Fitness Tracker",
    description: "A brief description of project one.",
    image: logo,
    link: "https://github.com/PiyushGupta-45/Fitness_Tracker"
  },
  {
    title: "Advance To Do List",
    description: "A brief description of project two.",
    image: todo,
    link: "#",
  },
  {
    title: "Password Builder",
    description: "A brief description of project three.",
    image: pass,
    link: "#",
  }
];

const Work = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">View My Work</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={project.image} alt={project.title} className="w-full h-70 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <a href={project.link} target="_blank" className="text-blue-400 hover:underline block mt-4">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;