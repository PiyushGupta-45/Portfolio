import React from "react";
import { useParams, Link } from "react-router-dom";
import logo from "./HealthHub.png";
import life from "./life-saver.png";
import womensafety from "./womensafety.jpg";
import pass from "./password.jpg";
import todo from "./todo.jpg";

const projects = {
  "health-hub": {
    title: "Health Hub",
    // images: [logo, "logo?text=HealthHub+Screenshot+2"], // Add more if needed
    // video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    description: `Health Hub is a full-stack AI-powered fitness application that provides:

- Real-time posture detection using TensorFlow
- Personalized goal setting based on fitness metrics
- BMR calculator and workout suggestions

This app helps users track their health effectively while leveraging AI.

**Tech Stack:** Flutter, TensorFlow, MongoDB Atlas, Spring Boot, Tailwind CSS`,
    github: "https://github.com/PiyushGupta-45/Fitness_Tracker",
  },



  "life-saver": {
    title: "Life Saver",
    // images: [life, "https://via.placeholder.com/600x400?text=Life+Saver+Screenshot+2"],
    // video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    description: `Life Saver is a real-time emergency response application designed to:

- Alert emergency contacts with live location
- Share medical information for immediate response
- Enable SOS activation via quick tap or voice command

It’s built for quick and reliable help in critical situations.

**Tech Stack:** Flutter, Firebase, Google Maps API, Spring Boot`,
    github: "https://github.com/PiyushGupta-45/Life-Saver",
  },



  "women-safety": {
    title: "Women Safety",
    // images: [womensafety, "https://via.placeholder.com/600x400?text=Women+Safety+Screenshot+2"],
    // video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    description: `Women Safety is a mobile application focused on women's personal security:

- Voice-activated SOS system
- Real-time location tracking
- Emergency contact notification with location & timestamp

The app is optimized for quick access and ease of use.

**Tech Stack:** React Native, Google Maps API, Spring Boot`,
    github: "https://github.com/PiyushGupta-45/WomenSafety",
  },



  "password-builder": {
    title: "Password Builder",
    // images: [pass, "https://via.placeholder.com/600x400?text=Password+Builder+Screenshot+2"],
    // video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    description: `Password Builder is a secure password generator that lets users:

- Choose length and complexity (uppercase, special chars)
- View strength indication in real-time
- Copy generated password with one click

The app runs fully on the client-side and requires no backend.

**Tech Stack:** React.js, Tailwind CSS`,
    github: "https://github.com/PiyushGupta-45/Password_Builder",
  },



  "advance-to-do-list": {
    title: "Advance To Do List",
    // images: [todo, "https://via.placeholder.com/600x400?text=To+Do+List+Screenshot+2"],
    // video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    description: `An advanced To-Do List application that supports:

- Task filtering by status (Completed/Pending)
- Priority tags and deadlines
- Local storage persistence for offline access

Great for boosting productivity and organizing daily tasks.

**Tech Stack:** React.js, LocalStorage, Tailwind CSS`,
    github: "https://github.com/PiyushGupta-45/Advance_To_Do_List",
  },


  "expense-tracker": {
    title: "Expense Tracker",
    // images: [expense, "https://via.placeholder.com/600x400?text=Expense+Tracker+Screenshot+2"],
    // video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    description: `A modern Expense Tracker application to help you manage your personal finances. Key features include:

- Categorize expenses (e.g., Groceries, Utilities, Entertainment, etc...)
- Daily and monthly spending analysis
- Visualization of spending habits with charts and graphs

Perfect for monitoring your budget and gaining financial insights.

**Tech Stack:** HTML, Chart.js, LocalStorage, Tailwind CSS`,
    github: "https://github.com/PiyushGupta-45/expense-tracker"
  },



};

const ProjectDetails = () => {
  const { title } = useParams();
  const project = projects[title];

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white">
        <h2 className="text-3xl font-bold text-slate-300">Project not found!</h2>
        <Link to="/work" className="text-violet-400 hover:text-violet-300 hover:underline mt-4 text-lg">Go back to Work</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white py-20 px-6 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 text-center">{project.title}</h1>

      {/* Image gallery placeholder if needed later */}

      <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 md:p-12 rounded-2xl max-w-4xl w-full shadow-2xl">
        <div className="prose prose-invert max-w-none">
          <p className="text-slate-300 text-lg md:text-xl whitespace-pre-line leading-relaxed">{project.description}</p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-6 border-t border-slate-800 pt-8">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all border border-slate-700 hover:border-violet-500 hover:text-violet-400 flex items-center gap-2 font-medium"
          >
            <i className="fab fa-github"></i> View Source Code on GitHub
          </a>

          <Link to="/work" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
            ← Back to Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
