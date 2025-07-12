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
};

const ProjectDetails = () => {
  const { title } = useParams();
  const project = projects[title];

  if (!project) {
    return (
      <div className="text-center text-white py-12">
        <h2 className="text-2xl">Project not found!</h2>
        <Link to="/work" className="text-blue-400 hover:underline mt-4 block">Go back to Work</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-12 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

      {/* Image gallery */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-6">
        {project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${project.title} screenshot ${i + 1}`}
            className="rounded-md shadow-md"
          />
        ))}
      </div>
      
      {project.video && (
        <div className="w-full max-w-3xl mb-6">
          <iframe
            className="w-full h-64 md:h-96 rounded-lg shadow-lg"
            src={project.video}
            title={project.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )} */}
     

      <p className="text-gray-300 text-lg max-w-2xl whitespace-pre-line text-center">{project.description}</p>

      <a href={project.github} target="_blank" className="mt-6 text-blue-400 hover:underline">
        View Source Code on GitHub
      </a>
      <Link to="/work" className="mt-4 text-gray-400 hover:underline block">
        ← Back to Work
      </Link>
    </div>
  );
};

export default ProjectDetails;
