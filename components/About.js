import React from "react";
import Image from "next/image";
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
      className="relative w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-950 to-black text-white flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 overflow-hidden"
    >
      {/* Parent Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-6xl rounded-3xl overflow-hidden backdrop-blur-3xl bg-gradient-to-br from-blue-900/10 via-purple-900/20 to-black/20 border border-white/20 shadow-[0_12px_60px_rgba(0,0,0,0.7)] hover:shadow-[0_16px_80px_rgba(128,0,255,0.5)] transition-all duration-500">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 sm:p-10">
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 animate-floating rounded-3xl overflow-hidden border border-white/20 shadow-lg hover:scale-105 transition-transform duration-500">
            <Image
              src="/myphoto.jpg"
              alt="AK"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center space-y-6 animate-slideUp text-center md:text-left">
          <h2 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
            About Me
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200/90 leading-relaxed">
            I am a passionate developer with experience in various technologies.
            I love solving problems and creating solutions that have a
            meaningful impact.
          </p>

          <div className="space-y-3 text-sm sm:text-base">
            <h3 className="text-xl sm:text-2xl font-semibold text-white/90">
              Contact Information
            </h3>
            <p className="flex items-center justify-center md:justify-start hover:text-blue-400 transition-colors duration-300">
              <FaEnvelope className="mr-2 sm:mr-3" />{" "}
              a.k.kasaudhan7600@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start hover:text-green-400 transition-colors duration-300">
              <FaPhone className="mr-2 sm:mr-3" /> +977 9824408312
            </p>
            <p className="flex items-center justify-center md:justify-start hover:text-red-400 transition-colors duration-300">
              <FaMapMarkerAlt className="mr-2 sm:mr-3" /> Koteshwar, Kathmandu,
              Nepal
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <a
              href="/Ajay's Resume.pdf"
              download
              className="flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <FaDownload className="mr-2" /> Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-floating {
          animation: floating 4s ease-in-out infinite;
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 1s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default About;
