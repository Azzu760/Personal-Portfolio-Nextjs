import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import useTypewriter from "./useTypewriter";

const Hero = () => {
  const roles = ["Programmer", "Developer", "Designer"];
  const typewriterText = useTypewriter(roles, 50, 1000);

  return (
    <div
      id="home"
      className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white bg-black overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 md:px-12 lg:px-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-fadeIn">
          Ajay Kumar Kasaudhan.
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-medium mb-6 max-w-2xl text-gray-300 animate-fadeIn delay-200">
          Passionate about building innovative solutions and enhancing user
          experiences with clean, modern designs.
        </p>

        <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-2 animate-fadeIn delay-400">
          I am a{" "}
          <span className="text-gradient bg-clip-text text-transparent">
            {typewriterText}
          </span>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex space-x-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl animate-fadeIn delay-600">
          <a
            href="https://facebook.com/its.me.azzu.760"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transform hover:scale-125 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/0nly.azzu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transform hover:scale-125 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/Azzu760"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transform hover:scale-125 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ajay-kumar-kasaudhan-baniya-968826236"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transform hover:scale-125 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transform hover:scale-125 transition duration-300"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Contact Button */}
        <a
          href="tel:+9779824408312"
          className="mt-10 px-10 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-xl hover:scale-105 transition-transform duration-300 text-lg md:text-xl lg:text-2xl flex items-center justify-center"
        >
          <span className="mr-2">📞</span> Contact Me
        </a>
      </div>

      {/* Animations */}
      <style jsx>{`
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fadeIn.delay-400 {
          animation-delay: 0.4s;
        }
        .animate-fadeIn.delay-600 {
          animation-delay: 0.6s;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .text-gradient {
          background-image: linear-gradient(90deg, #4f46e5, #9333ea, #ec4899);
        }
      `}</style>
    </div>
  );
};

export default Hero;
