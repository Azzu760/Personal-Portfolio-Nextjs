"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitted(true);
        setTimeout(() => window.location.reload(), 3000);
      } else {
        console.error("Error submitting feedback:", await response.text());
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // Fade-in animation with fixed ref cleanup
  const containerRef = useRef(null);
  useEffect(() => {
    const currentRef = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp", "opacity-100");
          }
        });
      },
      { threshold: 0.1 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-950 to-black text-white flex flex-col items-center py-12 px-4"
    >
      <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
        Contact Me
      </h1>
      <h2 className="text-2xl font-semibold mb-4">
        Let&apos;s Start a Project Together
      </h2>
      <p className="text-md mb-12 text-gray-400 text-center max-w-2xl">
        We are here to assist you with any queries you may have. Feel free to
        reach out via the contact form or through my social links below.
      </p>

      <div
        ref={containerRef}
        className="flex flex-col md:flex-row gap-12 md:gap-8 w-full max-w-6xl animate-opacity opacity-0"
      >
        {/* Form Panel */}
        <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-[0_12px_40px_rgba(128,0,255,0.4)] transition-all">
          <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
          {!isSubmitted ? (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4"
            >
              <input
                type="hidden"
                name="access_key"
                value="65d4870c-8df4-4478-abab-cb477d743f3d"
              />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 transform transition-all py-3 px-6 rounded-xl font-bold text-white shadow-lg"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center text-green-400 text-lg mt-6">
              <FaCheckCircle className="text-3xl mr-2" /> Thank You!
            </div>
          )}
        </div>

        {/* Info Panel */}
        <div className="flex-1 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-[0_12px_40px_rgba(128,0,255,0.4)] transition-all flex flex-col justify-between">
          <div className="flex flex-col space-y-6 mb-6">
            <div className="flex items-center space-x-3 text-gray-300">
              <FaPhoneAlt className="text-green-400 w-5 h-5" />
              <span>+977 9824408312</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <FaEnvelope className="text-yellow-400 w-5 h-5" />
              <span>a.k.kasaudhan7600@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <FaMapMarkerAlt className="text-blue-400 w-5 h-5" />
              <span>Koteshwar, Kathmandu, Nepal</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 justify-start mt-4">
            <a
              href="https://facebook.com/its.me.azzu.760"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition-colors"
            >
              <FaFacebookF className="w-7 h-7" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <FaTwitter className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com/in/ajay-kumar-kasaudhan-baniya-968826236"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 transition-colors"
            >
              <FaLinkedinIn className="w-7 h-7" />
            </a>
            <a
              href="https://instagram.com/0nly.azzu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-600 transition-colors"
            >
              <FaInstagram className="w-7 h-7" />
            </a>
            <a
              href="https://github.com/Azzu760"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaGithub className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
}

export default Contact;
