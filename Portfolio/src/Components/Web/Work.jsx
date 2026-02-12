import React from "react";
import { Link } from "react-router-dom";
import logo from "./HealthHub.png";
import todo from "./todo.jpg";
import life from "./life-saver.png";
import expense from "./Expense_Tracker.png";
import womensafety from "./womensafety.jpg";
import ecom from "./Ecommerce.png";
import sharebites from "./ShareBites.png";
import budget from "./BudgetTracker.png";

const projects = [
  {
    title: "Health Hub",
    description: "A full-stack AI-powered fitness tracker...",
    image: logo,
    slug: "health-hub",
    category: "Flutter Apps"
  },
  {
    title: "Budget Tracker",
    description: "A perfect daily use expense tra...",
    image: budget,
    slug: "budget-tracker-flutter",
    category: "Flutter Apps"
  },
  {
    title: "Share Bites",
    description: "A feature-rich food sharing app...",
    image: sharebites,
    slug: "share-bites",
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
    title: "Health Hub",
    description: "A Complete Solution for Health...",
    image: logo,
    slug: "health-hub-react",
    category: "React Projects"
  },
  {
    title: "Expense Tracker",
    description: "A perfect daily use expense tra...",
    image: expense,
    slug: "expense-tracker",
    category: "React Projects"
  },
  {
    title: "Ecommerce Website",
    description: "A Complete Ecommerce Website...",
    image: ecom,
    slug: "Ecommerce",
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
    title: "Women Safety",
    description: "A safety-focused app for women...",
    image: womensafety,
    slug: "women-safety",
    category: "React Projects"
  },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const filteredProjects = projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="page-shell page-work">
      <div className="page-card work-card page-animate">
        <p className="page-kicker">Projects</p>
        <h1 className="page-title">View My Work</h1>

        {!selectedCategory ? (
          <div className="work-category-grid">
            <button
              type="button"
              onClick={() => setSelectedCategory("React Projects")}
              className="work-category-tile"
            >
              <h3>React Projects</h3>
              <p>Web applications built with React.js</p>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCategory("Flutter Apps")}
              className="work-category-tile"
            >
              <h3>Flutter Apps</h3>
              <p>Mobile applications built with Flutter</p>
            </button>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => setSelectedCategory(null)}
              className="work-back-btn"
            >
              Back to categories
            </button>

            <div className="work-project-grid">
              {filteredProjects.map((project) => (
                <Link to={`/work/${project.slug}`} key={project.slug} className="work-project-link">
                  <article className="work-project-card">
                    <div className="work-image-wrap">
                      <img src={project.image} alt={project.title} className="work-image" />
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span>View Details -&gt;</span>
                  </article>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Work;
