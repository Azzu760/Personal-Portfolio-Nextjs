import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import useTypewriter from "./useTypewriter"; // Adjust the import path as needed

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-slideIn font-poppins text-gradient">
          Ajay Kumar Kasaudhan.
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-semibold mb-4 max-w-2xl font-poppins text-gray-300">
          Passionate about creating innovative solutions and improving user
          experiences.
        </p>
        <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mt-4 font-poppins ">
          I am a <span className="text-gradient">{typewriterText}</span>
        </div>
        <div className="mt-12 flex space-x-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          <a
            href="https://facebook.com/its.me.azzu.760"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaFacebook className="text-blue-700 hover:text-white transition duration-300" />
          </a>
          <a
            href="https://instagram.com/0nly.azzu"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaInstagram className="text-pink-600 hover:text-white transition duration-300" />
          </a>

          <a
            href="https://github.com/Azzu760"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaGithub className="text-gray-400 hover:text-white transition duration-300" />
          </a>
          <a
            href="https://linkedin.com/in/ajay-kumar-kasaudhan-baniya-968826236"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaLinkedin className="text-blue-600 hover:text-white transition duration-300" />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <FaTwitter className="text-blue-400 hover:text-white transition duration-300" />
          </a>
        </div>
        <a
          href="tel:+919569759971"
          className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-600 transition-colors duration-300 text-base md:text-lg lg:text-xl flex items-center justify-center"
        >
          <span className="mr-2">📞</span> Contact Me
        </a>
      </div>
    </div>
  );
};

export default Hero;
