import React from "react";
import { Link } from "react-router-dom";
import pass from "./password.jpg";
import logo from "./HealthHub.png";
import todo from "./todo.jpg";
import life from "./life-saver.png";
import expense from "./Expense_Tracker.png";
import womensafety from "./womensafety.jpg";

const projects = [
  {
    title: "Health Hub",
    description: "A full-stack AI-powered fitness tracker...",
    image: logo,
    slug: "health-hub",
    category: "Flutter Apps"
  },
  {
    title: "Life Saver",
    description: "A real-time emergency assistance app...",
    image: life,
    slug: "life-saver",
    category: "Flutter Apps"
  },
  {
    title: "Women Safety",
    description: "A safety-focused app for women...",
    image: womensafety,
    slug: "women-safety",
    category: "Flutter Apps"
  },
  {
    title: "Password Builder",
    description: "A secure and customizable password...",
    image: pass,
    slug: "password-builder",
    category: "React Projects"
  },
  {
    title: "Advance To Do List",
    description: "A feature-rich task manager...",
    image: todo,
    slug: "advance-to-do-list",
    category: "React Projects"
  },
  {
    title: "Advance Expense Tracker",
    description: "A perfect daily use expense tra...",
    image: expense,
    slug: "expense-tracker",
    category: "React Projects"
  },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const filteredProjects = projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white py-12 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">View My Work</h2>

      {!selectedCategory ? (
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div
            onClick={() => setSelectedCategory("React Projects")}
            className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-2xl shadow-xl cursor-pointer transform hover:scale-105 transition-all text-center border border-slate-800 hover:border-cyan-400/50 group"
          >
            <h3 className="text-4xl font-bold text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">React Projects</h3>
            <p className="text-slate-400 text-lg group-hover:text-slate-300">Web applications built with React.js</p>
          </div>

          <div
            onClick={() => setSelectedCategory("Flutter Apps")}
            className="bg-slate-900/50 backdrop-blur-sm p-12 rounded-2xl shadow-xl cursor-pointer transform hover:scale-105 transition-all text-center border border-slate-800 hover:border-violet-400/50 group"
          >
            <h3 className="text-4xl font-bold text-violet-400 mb-4 group-hover:text-violet-300 transition-colors">Flutter Apps</h3>
            <p className="text-slate-400 text-lg group-hover:text-slate-300">Mobile applications built with Flutter</p>
          </div>
        </div>
      ) : (
        <>
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-8 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all flex items-center gap-2 mx-auto md:mx-0 border border-slate-700 hover:border-slate-500"
          >
            ← Back to Categories
          </button>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
            {filteredProjects.map((project, index) => (
              <Link to={`/work/${project.slug}`} key={index}>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg transition-all transform hover:scale-105 hover:shadow-violet-500/10 hover:border-slate-700 h-full flex flex-col">
                  <div className="aspect-video w-full overflow-hidden rounded-xl mb-6 bg-slate-800">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-100">{project.title}</h3>
                  <p className="text-slate-400 line-clamp-3 mb-6 flex-grow">{project.description}</p>
                  <span className="text-cyan-400 font-medium group-hover:underline flex items-center gap-2">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Work;
