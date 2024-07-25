import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center px-6 py-12 relative overflow-hidden"
    >
      {/* Static Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Photo */}
        <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
          <div className="relative group">
            <img
              src="/myphoto.jpg"
              alt="AK"
              className="w-48 h-48 md:w-72 md:h-72 rounded-full border-4 border-gray-600 transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Details */}
        <div className="md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-5xl font-extrabold mb-4 animate-fadeInDown">
            About Me
          </h2>
          <p className="text-lg max-w-3xl mb-6 animate-fadeInUp">
            I am a passionate developer with experience in various technologies.
            I love solving problems and creating solutions that have a
            meaningful impact.
          </p>
          <div className="flex flex-col items-left md:items-start mb-6 space-y-2">
            <h3 className="text-3xl font-semibold mb-2">Contact Information</h3>
            <p className="flex items-center">
              <FaEnvelope className="text-xl text-blue-400 mr-3" />{" "}
              ajaykumarkasaudhan760@gmail.com
            </p>
            <p className="flex items-center">
              <FaPhone className="text-xl text-green-400 mr-3" /> +91 9569759971
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="text-xl text-red-400 mr-3" /> KP-10B,
              Bhubaneswar, Odisha
            </p>
          </div>
          <a
            href="/myresume.pdf"
            download
            className="flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 mt-2"
          >
            <FaDownload className="mr-2" /> Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
