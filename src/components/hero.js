import HeroImg from '../assets/Darsika.jpg';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="bg-secondary text-white pt-40 pb-32 overflow-hidden">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h1 className="text-6xl font-hero-font">
            Hi, <br /> I'm <span className="text-sky-400">Darsika Thavasingam</span>
          </h1>

          <p className="text-2xl mt-4">
            Software Engineering Student | Full Stack Developer
          </p>

          <div className="flex mt-8 space-x-6">
            <a href="https://www.linkedin.com/in/darsika-thavasingam/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
              <AiOutlineLinkedin size={40} />
            </a>

            <a href="https://github.com/Darsika-Thavasingam" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
              <AiOutlineGithub size={40} />
            </a>

            <a href="mailto:darsikathavasingam@gmail.com" className="hover:text-sky-400 transition-colors">
              <AiOutlineMail size={40} />
            </a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center mt-12 md:mt-0"
        >
          <img
            src={HeroImg}
            alt="Darsika Thavasingam"
            className="w-72 h-72 object-cover rounded-full border-4 border-sky-400 shadow-lg"
          />
        </motion.div>

      </div>

    </section>
  );
}