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
  },



  "life-saver": {
    title: "Life Saver",
    description: `Life Saver is a real-time emergency response application designed to:

- Alert emergency contacts with live location
- Share medical information for immediate response
- Enable SOS activation via quick tap or voice command

It’s built for quick and reliable help in critical situations.

Tech Stack: Flutter, Firebase, Google Maps API, Spring Boot`,
    github: "https://github.com/PiyushGupta-45/Life-Saver",
  },



  "women-safety": {
    title: "Women Safety",
    description: `Women Safety is a mobile application focused on women's personal security:

- Voice-activated SOS system
- Real-time location tracking
- Emergency contact notification with location & timestamp

The app is optimized for quick access and ease of use.

Tech Stack: React Native, Google Maps API, Spring Boot`,
    github: "https://github.com/PiyushGupta-45/WomenSafety",
  },



  "password-builder": {
    title: "Password Builder",
    description: `Password Builder is a secure password generator that lets users:

- Choose length and complexity (uppercase, special chars)
- View strength indication in real-time
- Copy generated password with one click

The app runs fully on the client-side and requires no backend.

Tech Stack: React.js, Tailwind CSS`,
    github: "https://github.com/PiyushGupta-45/Password_Builder",
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
  },


  "expense-tracker": {
    title: "Expense Tracker",
    description: `A modern Expense Tracker application to help you manage your personal finances. Key features include:

- Categorize expenses (e.g., Groceries, Utilities, Entertainment, etc...)
- Daily and monthly spending analysis
- Visualization of spending habits with charts and graphs

Perfect for monitoring your budget and gaining financial insights.

Tech Stack: HTML, Chart.js, LocalStorage, Tailwind CSS`,
    github: "https://github.com/PiyushGupta-45/expense-tracker"
  },

  "Ecommerce": {
    title: "Ecommerce Website",
    description: `A fully functional E-commerce platform designed for a seamless shopping experience.

Key Features:
- User Authentication: Secure login/signup with JWT.
- Product Management: Browse, search, and filter products with ease.
- Shopping Cart: Add/remove items and adjust quantities dynamically.
- Payment Gateway: Integrated generic payment processing flow.
- Admin Panel: Manage products, orders, and users.

This project showcases a complete commercial application flow from product discovery to checkout.

Tech Stack: React.js, Node.js, Express.js, MongoDB, Redux, Stripe API`,
    github: "https://github.com/PiyushGupta-45/Ecommerce"
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
      <h1 className="text-4xl md:text-5xl pb-2 font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 text-center">{project.title}</h1>

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
