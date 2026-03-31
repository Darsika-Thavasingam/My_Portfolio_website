import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
    return (
        <section id="resume" className="py-24 px-5 bg-primary text-white overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 inline-block tracking-wide">
                        My Resume
                    </h2>
                    <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full flex flex-col md:flex-row bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl p-8 gap-10 items-center"
                >
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold mb-6 text-white leading-tight">
                            Experience & <span className="text-sky-400">Education</span>
                        </h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                            I am a Software Engineering Student and Full Stack Developer with a passion for building scalable web applications. My coursework and projects involve React, Tailwind CSS, Node.js, and more.
                            Feel free to view my detailed background, skills, and qualifications.
                        </p>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-max bg-sky-500 hover:bg-sky-400 text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.5)] hover:shadow-[0_0_25px_rgba(56,189,248,0.7)] hover:-translate-y-1"
                        >
                            Download Resume
                        </a>
                    </div>

                    <div className="md:w-1/2 w-full flex justify-center">
                        <div className="w-full relative group rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-gray-700">
                            <iframe
                                src="/resume.pdf"
                                className="w-full h-[500px]"
                                title="Resume Preview"
                            ></iframe>
                            {/* Overlay to prevent exact iframe clicks acting weirdly on scroll on mobile, optional */}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
