"use client";
import React, { useState } from "react";
import Image from "next/image"; // ✅ Use Next.js Image
import { FaGlobe, FaMobileAlt, FaEye } from "react-icons/fa";

// Sample project data with tech stack
const projects = [
  {
    id: 1,
    title: "ClassroomHive - Virtual Classroom Web App",
    description:
      "ClassroomHive transforms online learning, letting teachers create engaging classes, post assignments and announcements, while students join, submit work, access resources, and collaborate seamlessly.",
    imageUrl: "/images/classroomHive.png",
    category: "Web Development",
    githubLink: "https://github.com/Azzu760/VirtualClassRoom-Fullstack",
    techStack: [
      "React Vite",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "TailwindCSS",
    ],
  },
  {
    id: 2,
    title: "Finance Management Mobile Application",
    description:
      "The ultimate finance companion! Track your expenses, manage your income, and gain insightful analytics to make smarter financial decisions.",
    imageUrl: "/images/financeApp.webp",
    category: "Mobile Development",
    githubLink:
      "https://github.com/Azzu760/Finance-Management-Mobile-Application",
    techStack: ["React Native", "Expo", "Firebase", "Context"],
  },
  {
    id: 3,
    title: "Swyamvar.com - Matrimonial Web App",
    description:
      "Swyamvar.com brings hearts together! Create your detailed profile, discover compatible matches, and start meaningful conversations to find your perfect life partner.",
    imageUrl: "/images/matrimonial.webp",
    category: "Web Development",
    githubLink:
      "https://github.com/Azzu760/Swyamvar.com-A-Matrimonial-Web-Application",
    techStack: [
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "Web Socket",
      "TailwindCSS",
    ],
  },
  {
    id: 4,
    title: "Location Based Movie Recommendation System",
    description:
      "A machine learning-powered movie recommendation system that suggests films tailored to your tastes. Unique feature: it uses your IP address to recommend region-specific movies.",
    imageUrl: "/images/movieRecommender.webp",
    category: "Web Development",
    githubLink:
      "https://github.com/Azzu760/Movie-Recommendation-System-Using-Machine-Learning",
    techStack: [
      "Python",
      "Flask",
      "Machine Learning",
      "IP Geolocation API",
      "Google Youtube API",
    ],
  },
  {
    id: 5,
    title: "Real Time Chat Application Using Socket",
    description:
      "Create an account, log in, and chat in real-time with your connections. Seamless instant messaging experience with a user-friendly interface.",
    imageUrl: "/images/chatApplication.webp",
    category: "Web Development",
    githubLink:
      "https://github.com/Azzu760/Real-Time-Chat-Application-using-Socket.io",
    techStack: [
      "React Vite",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Express",
      "MongoDB",
    ],
  },
  {
    id: 6,
    title: "Algorithm Visualizer Using DSA",
    description:
      "An interactive tool for visualizing sorting and searching algorithms. Helps users understand algorithmic concepts and performance with dynamic visualizations.",
    imageUrl: "/images/algorithmVisualizer.png",
    category: "Web Development",
    githubLink: "https://github.com/Azzu760/Algorithm-Visualizer-DSA",
    techStack: ["Next.js", "CSS", "DSA", "JavaScript"],
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterOptions = [
    { name: "All", icon: <FaGlobe /> },
    { name: "Web Development", icon: <FaGlobe /> },
    { name: "Mobile Development", icon: <FaMobileAlt /> },
  ];

  return (
    <div
      id="projects"
      className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-950 to-black py-16 px-6 text-white"
    >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
          My Projects
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore my recent projects that demonstrate my skills and expertise.
          Each project showcases different aspects of my work and creativity.
        </p>
      </div>

      {/* Filter/Category Selector */}
      <div className="flex justify-center mb-12 gap-4 flex-wrap">
        {filterOptions.map((option) => (
          <button
            key={option.name}
            onClick={() => setSelectedCategory(option.name)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
              selectedCategory === option.name
                ? "bg-purple-600 border-purple-500 text-white shadow-lg"
                : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white"
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
              className="relative group rounded-3xl overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.7)] hover:shadow-[0_12px_40px_rgba(128,0,255,0.8)] transition-shadow duration-500"
            >
              <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaEye />
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {project.description}
                </p>
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-600 bg-opacity-30 text-purple-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
