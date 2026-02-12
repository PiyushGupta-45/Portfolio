import React from "react";
import { useParams, Link } from "react-router-dom";

const projects = {
  "health-hub": {
    title: "Health Hub",
    description: `Health Hub is a full-stack AI-powered fitness application that provides:

- Real-time posture detection using TensorFlow
- Personalized goal setting based on fitness metrics
- BMR calculator and workout suggestions

This app helps users track their health effectively while leveraging AI.

Tech Stack: Flutter, TensorFlow, MongoDB Atlas, Spring Boot, Tailwind CSS`,
    github: "https://github.com/PiyushGupta-45/New_Health_hub",
    demo: "https://github.com/PiyushGupta-45/New_Health_hub/releases/download/1.0.3/app-debug.apk",
    type: "app",
  },

  "share-bites": {
    title: "Share Bites",
    description: `Share Bites is a mobile application developed in Flutter to combat food waste and hunger.

Key Features:
- Food Donation: Users/Restaurants can list excess food.
- Geo-Location: Find nearby food donations on a map.
- Real-Time Alerts: Notifications for new available food items nearby.
- Volunteer Coordination: Connects volunteers with donors and NGOs.

This app aims to bridge the gap between food abundance and food scarcity through technology.

Tech Stack: Flutter, Firebase, Google Maps API`,
    github: "https://github.com/PiyushGupta-45/ShareBite",
    demo: "https://github.com/PiyushGupta-45/ShareBite/releases/download/1.0.0/app-release.apk",
    type: "app",
  },

  "budget-tracker-flutter": {
    title: "Budget Tracker",
    description: `A comprehensive customized expense tracking mobile application built with Flutter.

Key Features:
- Expense Logging: Easily add and categorize daily expenses.
- Monthly Analysis: Visual charts to track spending vs budget.
- Custom Categories: Personalize expense categories.
- Offline Mode: Works seamlessly without internet connection (Hive DB).

Note: This is the mobile version of the expense tracker, offering on-the-go financial management.

Tech Stack: Flutter, Hive (Local DB), Provider (State Management)`,
    github: "https://github.com/PiyushGupta-45/Budget_Tracker_App",
    demo: "https://github.com/PiyushGupta-45/Budget_Tracker_App/releases/download/1.0.0/app-release.apk",
    type: "app",
  },

  "health-hub-react": {
    title: "Health Hub - React Version",
    description: `A comprehensive web-based Health Hub solution built with the MERN stack.

Key Features:
- Dashboard: Visual overview of health stats and daily progress.
- Workout Tracking: Log and manage daily exercise routines.
- Diet Planning: AI-driven meal suggestions based on caloric needs.
- Appointment Scheduling: Book appointments with nutritionists or trainers.
- Community Forum: Discuss health tips and share progress with others.

This project demonstrates a scalable full-stack architecture with a responsive React frontend and a robust Node/Express backend.

Tech Stack: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Redux Toolkit`,
    github: "https://github.com/PiyushGupta-45/New_Health_hub_web",
    demo: "https://new-health-hub-web.vercel.app/",
    type: "web",
  },

  "life-saver": {
    title: "Life Saver",
    description: `Life Saver is a real-time emergency response application designed to:

- Alert emergency contacts with live location
- Share medical information for immediate response
- Enable SOS activation via quick tap or voice command

It is built for quick and reliable help in critical situations.

Tech Stack: Flutter, Firebase, Google Maps API, Spring Boot`,
    github: "https://github.com/PiyushGupta-45/Life-Saver",
    demo: "#",
    type: "app",
  },

  "women-safety": {
    title: "Women Safety",
    description: `Women Safety is a mobile application focused on women's personal security:

- Voice-activated SOS system
- Real-time location tracking
- Emergency contact notification with location and timestamp

The app is optimized for quick access and ease of use.

Tech Stack: React Native, Google Maps API, Spring Boot`,
    github: "https://github.com/PiyushGupta-45/WomenSafety",
    demo: "https://women-safety-phi.vercel.app/",
    type: "web",
  },

  "advance-to-do-list": {
    title: "Advance To Do List",
    description: `An advanced To-Do List application that supports:

- Task filtering by status (Completed/Pending)
- Priority tags and deadlines
- Local storage persistence for offline access

Great for boosting productivity and organizing daily tasks.

Tech Stack: React.js, LocalStorage, Tailwind CSS`,
    github: "https://github.com/PiyushGupta-45/Advance_To_Do_List",
    demo: "https://advance-to-do-list-phi.vercel.app/",
    type: "web",
  },

  "expense-tracker": {
    title: "Expense Tracker",
    description: `A modern Expense Tracker application to help you manage your personal finances. Key features include:

- Categorize expenses (e.g., Groceries, Utilities, Entertainment)
- Daily and monthly spending analysis
- Visualization of spending habits with charts and graphs

Perfect for monitoring your budget and gaining financial insights.

Tech Stack: HTML, Chart.js, LocalStorage, Tailwind CSS`,
    github: "https://github.com/PiyushGupta-45/expense-tracker",
    demo: "https://expense-tracker-rho-sand-60.vercel.app/",
    type: "web",
  },

  Ecommerce: {
    title: "Ecommerce Website",
    description: `A fully functional E-commerce platform designed for a seamless shopping experience.

Key Features:
- User Authentication: Secure login and signup with JWT
- Product Management: Browse, search, and filter products
- Shopping Cart: Add/remove items and adjust quantities dynamically
- Payment Gateway: Integrated payment processing flow
- Admin Panel: Manage products, orders, and users

This project showcases a complete commercial application flow from product discovery to checkout.

Tech Stack: React.js, Node.js, Express.js, MongoDB, Redux, Stripe API`,
    github: "https://github.com/PiyushGupta-45/Ecommerce",
    demo: "https://ecommerce-umber-pi.vercel.app/",
    type: "web",
  },
};

const ProjectDetails = () => {
  const { title } = useParams();
  const project = projects[title];

  if (!project) {
    return (
      <section className="page-shell page-project-details">
        <div className="page-card project-details-card page-animate">
          <h1 className="page-title">Project not found</h1>
          <Link to="/work" className="page-btn page-btn-secondary">Go back to work</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell page-project-details">
      <article className="page-card project-details-card page-animate">
        <p className="page-kicker">Project Details</p>
        <h1 className="page-title">{project.title}</h1>

        <p className="project-description">{project.description}</p>

        <div className="project-actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="page-btn page-btn-secondary">
            View Source Code
          </a>

          {project.demo && project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="page-btn page-btn-primary">
              {project.type === "app" ? "Download App" : "Visit Live Site"}
            </a>
          )}

          <Link to="/work" className="page-btn page-btn-ghost">Back to Work</Link>
        </div>
      </article>
    </section>
  );
};

export default ProjectDetails;
