import CakeLand from "../assets/CakeLand.png";
import NatureSoul from "../assets/NatureSoul.png";
import StudentManagementSystem from "../assets/StudentManagementSystem.png";
import ToDo from "../assets/ToDo.png";
import MongodbCrudExample from "../assets/Mongoodb-crud.png";
import PaddySmart from "../assets/PaddySmart.png";
import SCANMe from "../assets/SCANMe.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Smart Paddy",
      desc: "A full-stack web platform connecting farmers and buyers with real-time chat, weather forecasts, and market updates.",
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "Socket.IO", "JWT"],
      github: "https://github.com/SE4106-Web-Project-Team/Paddy-buying-and-selling-Platform",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7397679434021064704/?skipRedirect=true",
      image: PaddySmart
    },
    {
      title: "SCANMe",
      desc: "SCANMe is an AI-powered web application designed for full-body posture analysis using computer vision. The system captures user images and analyzes body alignment in real-time using MediaPipe and OpenCV.",
      tech: ["HTML5", "CSS3", "Bootstrap 5", "Laravel 12", "PHP", "Python", "MediaPipe", "OpenCV"],
      github: "https://github.com/AI-full-body-Image-analysis/AI-full-body-image-analysis.git",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7440080282348859392/?skipRedirect=true",
      image: SCANMe
    },
    {
      title: "Cake Land",
      desc: "A responsive cake ordering website showcasing products with a clean UI.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/Darsika-Thavasingam/CakeLand.git",
      linkedin: "https://www.linkedin.com/posts/darsika-thavasingam_webdevelopment-cakelanddelights-frontenddevelopment-activity-7308186005084266496-sKcV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEuSecB08WIpvH75EMhLBe0IbmEGMSKzpE",
      image: CakeLand
    },
    {
      title: "NatureSoul",
      desc: "Responsive photo gallery website with smooth navigation and UI effects.",
      tech: ["HTML", "CSS", "Bootstrap 5"],
      github: "https://github.com/Darsika-Thavasingam/NatureSoul.git",
      linkedin: "https://www.linkedin.com/posts/darsika-thavasingam_webdevelopment-naturesoul-frontenddevelopment-activity-7367464245183029248-KOZi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEuSecB08WIpvH75EMhLBe0IbmEGMSKzpE",
      image: NatureSoul
    },
    {
      title: "Student Management System",
      desc: "Terminal-based app to manage student records using OOP and file handling.",
      tech: ["Python"],
      github: "https://github.com/Darsika-Thavasingam/StudentManagementSystem.git",
      linkedin: "https://www.linkedin.com/posts/darsika-thavasingam_python-studentmanagementsystem-github-activity-7375577026923229184-X7Ce?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEuSecB08WIpvH75EMhLBe0IbmEGMSKzpE",
      image: StudentManagementSystem
    },
    {
      title: "To-Do List App",
      desc: "Task management app with add, complete, and delete features.",
      tech: ["Node.js", "Express.js", "EJS", "Bootstrap"],
      github: "https://github.com/Darsika-Thavasingam/My_To-do_List.git",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7408156220215205888/?skipRedirect=true",
      image: ToDo
    },
    {
      title: "CRUD App",
      desc: "CRUD app comparing MongoDB native driver and Mongoose.",
      tech: ["Node.js", "MongoDB", "Mongoose"],
      github: "https://github.com/Darsika-Thavasingam/Mongodb-CRUD-Example.git",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7428830859417362432/?skipRedirect=true",
      image: MongodbCrudExample
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 px-5 bg-secondary text-white overflow-hidden" id="projects">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 inline-block tracking-wide">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >

        {projects.map((project, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="group bg-gray-800 rounded-2xl shadow-xl hover:shadow-[0_10px_30px_-15px_rgba(56,189,248,0.4)] hover:-translate-y-2 transition-all duration-300 border border-gray-700 overflow-hidden flex flex-col"
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-sky-500/10 text-sky-400 border border-sky-400/20 px-3 py-1 text-xs font-semibold rounded-full tracking-wider flex-shrink-0"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto pt-4 border-t border-gray-700">

                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <FaGithub className="text-2xl" />
                </a>

                {project.linkedin && (
                  <a href={project.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <FaLinkedin className="text-2xl" />
                  </a>
                )}

              </div>
            </div>
          </motion.div>
        ))}

      </motion.div>
    </section>
  );
}