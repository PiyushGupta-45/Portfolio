import React from "react";
import { Link } from "react-router-dom";
import pass from "./password.jpg";
import logo from "./HealthHub.png";
import todo from "./todo.jpg";
import life from "./life-saver.png";
import womensafety from "./womensafety.jpg";

const projects = [
  {
    title: "Health Hub",
    description: "A full-stack AI-powered fitness tracker...",
    image: logo,
    slug: "health-hub"
  },
  {
    title: "Life Saver",
    description: "A real-time emergency assistance app...",
    image: life,
    slug: "life-saver"
  },
  {
    title: "Women Safety",
    description: "A safety-focused app for women...",
    image: womensafety,
    slug: "women-safety"
  },
  {
    title: "Password Builder",
    description: "A secure and customizable password...",
    image: pass,
    slug: "password-builder"
  },
  {
    title: "Advance To Do List",
    description: "A feature-rich task manager...",
    image: todo,
    slug: "advance-to-do-list"
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">View My Work</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        {projects.map((project, index) => (
          <Link to={`/work/${project.slug}`} key={index}>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-70 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <span className="text-blue-400 hover:underline block mt-4">View Details</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
