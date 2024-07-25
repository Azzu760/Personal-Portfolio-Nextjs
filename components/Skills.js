import React, { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiPhp,
  SiCplusplus,
  SiFlask,
  SiNumpy,
  SiPandas,
  SiBootstrap,
} from "react-icons/si";

const skillData = [
  { name: "HTML", icon: <FaHtml5 className="text-6xl text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-6xl text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-6xl text-yellow-500" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-6xl text-blue-600" />,
  },
  { name: "React", icon: <FaReact className="text-6xl text-cyan-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-6xl text-gray-800" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-6xl text-green-500" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-6xl text-blue-400" />,
  },
  { name: "MongoDB", icon: <FaDatabase className="text-6xl text-green-700" /> },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-6xl text-purple-600" />,
  },
  { name: "SQL", icon: <SiMysql className="text-6xl text-blue-700" /> },
  { name: "PHP", icon: <SiPhp className="text-6xl text-blue-600" /> },
  { name: "C/C++", icon: <SiCplusplus className="text-6xl text-blue-400" /> },
  { name: "Java", icon: <FaJava className="text-6xl text-red-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-6xl text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-6xl text-gray-800" /> },
  { name: "Python", icon: <FaPython className="text-6xl text-blue-500" /> },
  { name: "NumPy", icon: <SiNumpy className="text-6xl text-green-700" /> },
  { name: "Pandas", icon: <SiPandas className="text-6xl text-green-700" /> },
  { name: "Flask", icon: <SiFlask className="text-6xl text-gray-700" /> },
];

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp", "opacity-100");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div
      id="skills"
      className="w-full min-h-screen bg-gradient-to-r from-gray-800 to-black flex flex-col justify-center items-center py-12 px-4"
    >
      <h1 className="text-5xl text-white font-extrabold mb-10">Skills</h1>
      <div className="container max-w-screen-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 cursor-pointer">
          {skillData.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (skillRefs.current[index] = el)}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 opacity-0 transition-opacity duration-500 transform hover:scale-105"
            >
              {skill.icon}
              <span className="mt-4 text-lg font-semibold text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
