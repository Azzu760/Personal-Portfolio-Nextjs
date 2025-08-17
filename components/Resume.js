import { FaDownload } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { useEffect, useRef } from "react";

const qualifications = [
  {
    type: "University",
    icon: IoSchool,
    college: "Kalinga Institute of Industrial Technology University",
    Branch: "School of Computer Science and Engineering",
    year: "2025",
    board: "UG Program, India",
    cgpa: "8.41",
  },
  {
    type: "College",
    icon: IoSchool,
    college: "Everest English Boarding Secondary School",
    Branch: "Science",
    year: "2020",
    board: "National Examination Board, Nepal",
    cgpa: "3.52",
  },
  {
    type: "School",
    icon: IoSchool,
    college: "Hathausa Little Star English Boarding School",
    Branch: "Secondary Level",
    year: "2018",
    board: "National Examination Board, Nepal",
    cgpa: "3.45",
  },
];

const Resume = () => {
  const qualRefs = useRef([]);

  useEffect(() => {
    const refs = qualRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slideUp", "opacity-100");
          }
        });
      },
      { threshold: 0.1 }
    );

    refs.forEach((ref) => ref && observer.observe(ref));

    return () => {
      refs.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <div
      id="resume"
      className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-950 to-black text-gray-100 flex flex-col items-center py-12 px-4"
    >
      <h2 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-extrabold mb-8">
        Resume
      </h2>
      <h3 className="text-3xl font-semibold mb-10">Academic Qualifications</h3>

      <div className="relative flex flex-col max-w-4xl w-full">
        <div className="absolute left-6 top-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 h-full"></div>

        {qualifications.map((qual, index) => (
          <div
            key={index}
            ref={(el) => (qualRefs.current[index] = el)}
            className="relative flex items-start mb-12 opacity-0 transform transition-all duration-700 hover:scale-105"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-950 text-white flex items-center justify-center rounded-full border-4 border-white/20 shadow-lg z-10">
              <qual.icon className="w-6 h-6" />
            </div>

            <div className="ml-8 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex-1 shadow-[0_8px_32px_rgba(0,0,0,0.7)] hover:shadow-[0_12px_40px_rgba(128,0,255,0.6)] transition-all">
              <h4 className="text-xl font-bold text-white/90">
                {qual.college}
              </h4>
              <p className="text-gray-300">
                <strong>Branch:</strong> {qual.Branch}
              </p>
              <p className="text-gray-300">
                <strong>Year:</strong> {qual.year}
              </p>
              <p className="text-gray-300">
                <strong>Board:</strong> {qual.board}
              </p>
              <p className="text-gray-300">
                <strong>CGPA:</strong> {qual.cgpa}
              </p>
            </div>
          </div>
        ))}
      </div>

      <a
        href="/Ajay's Resume.pdf"
        download
        className="mt-8 flex items-center justify-center bg-gray-900 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-gray-800/50 hover:shadow-[0_12px_40px_rgba(128,0,255,0.6)] transition-all duration-300"
      >
        <FaDownload className="mr-2" /> Download Resume
      </a>

      <style jsx>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Resume;
