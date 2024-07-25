"use client";
import React, { useState } from "react";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Clear form fields and set success state
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitted(true);

        // Refresh the page after 1 second
        setTimeout(() => {
          window.location.reload(); // Reload the page
        }, 3000); // Adjust delay as needed
      } else {
        console.error("Error submitting feedback:", await response.text());
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div id="contact" className="bg-gray-900 text-white py-12 px-4 md:px-10">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-4">Contact Me</h1>
        <h2 className="text-2xl font-semibold mb-4">
          Let's Start a Project Together
        </h2>
        <p className="text-md mb-8 text-gray-400">
          We are here to assist you with any queries you may have. Please feel
          free to reach out to us using the information below or by sending us a
          message.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8 p-5">
          {/* Feedback Form */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                  type="hidden"
                  name="access_key"
                  value="65d4870c-8df4-4478-abab-cb477d743f3d" // Replace with your actual access key
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="flex items-center justify-center text-green-400 text-lg">
                <FaCheckCircle className="text-3xl mr-2" />
                <span>Thank You!</span>
              </div>
            )}
          </div>

          {/* Personal Details and Social Media Links */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <FaPhoneAlt className="text-lg text-green-400" />
                <span className="text-md">+91 9569759971</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FaEnvelope className="text-lg text-yellow-400" />
                <span className="text-md">ajaykumarkasaudhan760@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <FaMapMarkerAlt className="text-lg text-blue-400" />
                <span className="text-md">751024 KIIT Road, Patia, Odisha</span>
              </div>
            </div>

            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://facebook.com/its.me.azzu.760"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-blue-600"
              >
                <FaFacebookF className="w-8 h-8 text-blue-600" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-white hover:text-blue-400"
              >
                <FaTwitter className="w-8 h-8 text-blue-400" />
              </a>
              <a
                href="https://linkedin.com/in/ajay-kumar-kasaudhan-baniya-968826236"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-blue-700"
              >
                <FaLinkedinIn className="w-8 h-8 text-blue-700" />
              </a>
              <a
                href="https://instagram.com/0nly.azzu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-pink-600"
              >
                <FaInstagram className="w-8 h-8 text-pink-600" />
              </a>
              <a
                href="https://github.com/Azzu760"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-white hover:text-gray-300"
              >
                <FaGithub className="w-8 h-8 text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
