import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="bg-primary text-white px-8 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 tracking-wide mb-12 w-max border-b-4 border-gray-700 pb-2">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg text-gray-300 leading-relaxed space-y-6"
          >
            <p>
              I am a Software Engineering student who enjoys learning new
              technologies and exploring different areas of full stack development.
              I am deeply curious about how scalable systems work and how they can be used
              to create impactful, real-world solutions.
            </p>

            <p>
              When I'm not building projects or improving my problem-solving skills,
              you can find me continuously learning new frameworks to grow as a developer and designer.
            </p>
          </motion.div>

          {/* Cards Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >

            <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-xl hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(56,189,248,0.4)] transition-all duration-300 border border-gray-700 border-opacity-50">
              <h3 className="text-xl font-bold text-sky-400 mb-2">Education</h3>
              <p className="text-gray-300 font-medium">Software Engineering Student</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-xl hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(56,189,248,0.4)] transition-all duration-300 border border-gray-700 border-opacity-50">
              <h3 className="text-xl font-bold text-sky-400 mb-2">Interests</h3>
              <p className="text-gray-300 font-medium">Web Development & UI Design</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-xl hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(56,189,248,0.4)] transition-all duration-300 border border-gray-700 border-opacity-50">
              <h3 className="text-xl font-bold text-sky-400 mb-2">Location</h3>
              <p className="text-gray-300 font-medium">Sri Lanka</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gray-800 p-6 rounded-xl hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(56,189,248,0.4)] transition-all duration-300 border border-gray-700 border-opacity-50">
              <h3 className="text-xl font-bold text-sky-400 mb-2">Learning</h3>
              <p className="text-gray-300 font-medium">Modern Web Technologies</p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}