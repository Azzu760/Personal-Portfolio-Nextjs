import { FaDownload } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";

const qualifications = [
  {
    type: "University",
    icon: IoSchool,
    college: "Kalinga Institute of Industrial Technology University",
    Branch: "School of Computer Science and Engineering",
    year: "2025",
    board: "UG Program, India",
    cgpa: "8.20",
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
  // Add more qualifications as needed
];

const Resume = () => {
  return (
    <div
      id="resume"
      className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-black text-gray-100 flex flex-col items-center py-12 px-4"
    >
      <h2 className="text-5xl text-white font-extrabold mb-8 slide-in-left">
        Resume
      </h2>
      <h3 className="text-3xl font-semibold mb-6 slide-in-left">
        Academic Qualifications
      </h3>
      <div className="relative">
        <div className="relative flex flex-col items-center">
          <div className="absolute w-1 bg-gray-600 h-full top-0 left-0 ml-4 transform -translate-x-1/2"></div>
          <div className="relative">
            {qualifications.map((qual, index) => (
              <div
                key={index}
                className="relative flex items-center mb-16 slide-in-left"
              >
                <div className="w-8 h-8 bg-blue-950 text-white flex items-center justify-center rounded-full border-4 border-gray-900 shadow-lg">
                  <qual.icon className="w-5 h-5" />
                </div>
                <div className="ml-8 p-4 rounded-lg border-none flex flex-col space-y-2">
                  <h4 className="text-xl font-bold">{qual.college}</h4>
                  <p className="text-gray-400">
                    <strong>Branch:</strong> {qual.Branch}
                  </p>
                  <p className="text-gray-400">
                    <strong>Year:</strong> {qual.year}
                  </p>
                  <p className="text-gray-400">
                    <strong>Board:</strong> {qual.board}
                  </p>
                  <p className="text-gray-400">
                    <strong>CGPA:</strong> {qual.cgpa}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="/myresume.pdf"
        download
        className="flex items-center justify-center bg-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-md shadow-gray-800/50 hover:shadow-lg hover:shadow-gray-700/50 transition duration-300 mt-8"
      >
        <FaDownload className="mr-2" /> Resume
      </a>
    </div>
  );
};

export default Resume;
