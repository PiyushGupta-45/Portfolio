import React from "react";
import pass from "./password.jpg"
import logo from "./HealthHub.png";
import todo from "./todo.jpg";
import life from "./life-saver.png";
import womensafety from "./womensafety.jpg"
const projects = [
  {
    title: "Health Hub",
    description: "A full-stack AI-powered fitness tracker with features like posture analysis, personalized goals, and workout tracking.",
    image: logo,
    link: "https://github.com/PiyushGupta-45/Fitness_Tracker"
  },
  {
    title: "Life Saver",
    description: "A real-time emergency assistance app with location tracking, health info sharing, and SOS alert features.",
    image: life,
    link: "https://github.com/PiyushGupta-45/Life-Saver",
  },
  {
    title: "Women Safety",
    description: "A safety-focused app for women with emergency contact alerts, live location sharing, and voice activation support.",
    image: womensafety,
    link: "https://github.com/PiyushGupta-45/WomenSafety",
  },
  {
    title: "Password Builder",
    description: "A secure and customizable password generator app built with React that supports password strength configuration.",
    image: pass,
    link: "https://github.com/PiyushGupta-45/Password_Builder",
  },
  {
    title: "Advance To Do List",
    description: "A feature-rich task manager with priority tagging, status filtering, and persistent local storage using React.",
    image: todo,
    link: "https://github.com/PiyushGupta-45/Advance_To_Do_List",
  },
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
            <a href={project.link} target="_blank" className="text-blue-400 hover:underline block mt-4">View Source Code</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;