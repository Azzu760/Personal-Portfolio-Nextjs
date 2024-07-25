import React, { useState } from "react";
import { FaGlobe, FaMobileAlt, FaPalette, FaEye } from "react-icons/fa";

// Sample project data with GitHub links and dummy thumbnails
const projects = [
  {
    id: 1,
    title: "Dynamic Portfolio Website",
    description:
      "A responsive portfolio website with dynamic content management for showcasing personal projects and achievements.",
    imageUrl: "/thumbnail.jpg",
    category: "Web Development",
    githubLink: "https://github.com/yourusername/dynamic-portfolio-website",
  },
  {
    id: 2,
    title: "Mobile Fitness App",
    description:
      "An interactive fitness app designed for tracking workouts and health metrics, featuring a sleek UI and real-time data analytics.",
    imageUrl: "/thumbnail.jpg",
    category: "Mobile Development",
    githubLink: "https://github.com/yourusername/mobile-fitness-app",
  },
  {
    id: 3,
    title: "AI-Powered Chatbot",
    description:
      "A cutting-edge AI chatbot for customer support, capable of natural language processing and delivering accurate responses in real-time.",
    imageUrl: "/thumbnail.jpg",
    category: "UI/UX Design",
    githubLink: "https://github.com/yourusername/ai-powered-chatbot",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description:
      "A scalable e-commerce platform with integrated payment gateways and a user-friendly shopping experience, including product recommendations.",
    imageUrl: "/thumbnail.jpg",
    category: "Web Development",
    githubLink: "https://github.com/yourusername/e-commerce-platform",
  },
  {
    id: 5,
    title: "Travel Planner App",
    description:
      "A travel planner app that helps users organize trips, manage itineraries, and discover attractions based on preferences and location.",
    imageUrl: "/thumbnail.jpg",
    category: "Mobile Development",
    githubLink: "https://github.com/yourusername/travel-planner-app",
  },
  {
    id: 6,
    title: "Interactive Data Dashboard",
    description:
      "An interactive data dashboard providing insightful analytics and visualizations for business intelligence and decision-making.",
    imageUrl: "/thumbnail.jpg",
    category: "UI/UX Design",
    githubLink: "https://github.com/yourusername/interactive-data-dashboard",
  },
  {
    id: 7,
    title: "Blogging Platform",
    description:
      "A robust blogging platform with support for multimedia content, user comments, and social media integration for enhanced engagement.",
    imageUrl: "/thumbnail.jpg",
    category: "Web Development",
    githubLink: "https://github.com/yourusername/blogging-platform",
  },
  {
    id: 8,
    title: "Recipe Finder App",
    description:
      "A mobile app for discovering and sharing recipes, complete with search functionality, ingredient lists, and cooking instructions.",
    imageUrl: "/thumbnail.jpg",
    category: "Mobile Development",
    githubLink: "https://github.com/yourusername/recipe-finder-app",
  },
  {
    id: 9,
    title: "Virtual Reality Experience",
    description:
      "An immersive virtual reality application designed for interactive experiences and simulations in a variety of environments.",
    imageUrl: "/thumbnail.jpg",
    category: "UI/UX Design",
    githubLink: "https://github.com/yourusername/virtual-reality-experience",
  },
  // Add more projects here
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter options without "Consulting"
  const filterOptions = [
    { name: "All", icon: <FaGlobe /> },
    { name: "Web Development", icon: <FaGlobe /> },
    { name: "Mobile Development", icon: <FaMobileAlt /> },
    { name: "UI/UX Design", icon: <FaPalette /> },
  ];

  return (
    <div
      id="projects"
      className="w-full min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12 px-6 text-white"
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold mb-4">My Projects</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Explore my recent projects that demonstrate my skills and expertise.
          Each project showcases different aspects of my work and creativity.
        </p>
      </div>

      {/* Filter/Category Selector */}
      <div className="flex justify-center mb-12 gap-4 flex-wrap">
        {filterOptions.map((option) => (
          <button
            key={option.name}
            onClick={() => handleCategoryChange(option.name)}
            className={`flex items-center gap-2 px-6 py-2 rounded-lg shadow-lg text-white transition-colors duration-300 ${
              selectedCategory === option.name
                ? "bg-purple-700 hover:bg-purple-800"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
          >
            {option.icon}
            <span>{option.name}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects
          .filter(
            (project) =>
              selectedCategory === "All" ||
              project.category === selectedCategory
          )
          .map((project) => (
            <div
              key={project.id}
              className="relative group rounded-lg overflow-hidden bg-gray-800 shadow-lg"
            >
              <div className="relative w-full h-48">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-violet-500 text-white font-bold rounded-lg shadow-lg hover:bg-violet-600 transition-colors duration-300 flex items-center gap-2"
                  >
                    <FaEye />
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
