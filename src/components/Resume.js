import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

export default function Resume() {
    return (
        <section
            id="resume"
            className="py-24 px-5 bg-primary text-white overflow-hidden"
        >
            <div className="max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-sky-400">
                        My Resume
                    </h2>
                    <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-900 rounded-2xl p-8 text-center shadow-xl border border-gray-800"
                >
                    <FaFilePdf className="text-6xl text-red-500 mx-auto mb-6" />

                    <h3 className="text-2xl font-bold mb-4">
                        Download My CV
                    </h3>

                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Software Engineering undergraduate with experience in full-stack web development, AI-based applications, and collaborative software projects. View my resume to learn more about my skills, projects, certifications, and academic achievements.
                    </p>

                    <a
                        href="/Darsika_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300"
                    >
                        <FaFilePdf />
                        View Resume
                    </a>
                </motion.div>

            </div>
        </section>
    );
}